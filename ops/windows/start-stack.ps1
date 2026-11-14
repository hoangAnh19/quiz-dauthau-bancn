$ErrorActionPreference = 'Stop'

$Project = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$LogDir = 'C:\WebServer'
$Compose = Join-Path $Project 'docker-compose.yml'
$PowerShell = (Get-Command powershell.exe -ErrorAction Stop).Source
$PnpmCommand = Get-Command pnpm.cmd -ErrorAction SilentlyContinue
$Pnpm = if ($PnpmCommand) { $PnpmCommand.Source } else { 'C:\Users\PC\AppData\Local\pnpm\pnpm.cmd' }
$CloudflaredCommand = Get-Command cloudflared.exe -ErrorAction SilentlyContinue
$Cloudflared = if ($CloudflaredCommand) { $CloudflaredCommand.Source } else { $null }
$CloudflaredService = Get-Service -Name 'Cloudflared' -ErrorAction SilentlyContinue

New-Item -ItemType Directory -Force $LogDir | Out-Null
$Log = Join-Path $LogDir 'startup.log'
function Log([string]$Message) {
  Add-Content -LiteralPath $Log -Value "$(Get-Date -Format s) $Message"
}

function Invoke-Logged([string]$FilePath, [string[]]$Arguments, [string]$Name) {
  Log "Running $Name"
  # Native tools commonly use stderr for progress output. Under Windows
  # PowerShell 5, redirecting that stream while ErrorActionPreference is Stop
  # incorrectly promotes the progress text to a terminating error.
  $previousErrorActionPreference = $ErrorActionPreference
  try {
    $ErrorActionPreference = 'Continue'
    & $FilePath @Arguments *>> $Log
    $exitCode = $LASTEXITCODE
  } finally {
    $ErrorActionPreference = $previousErrorActionPreference
  }
  if ($exitCode -ne 0) { throw "$Name failed with exit code $exitCode" }
}

function Test-DockerReady {
  # PowerShell 5 turns native stderr into a terminating NativeCommandError when
  # ErrorActionPreference is Stop. Let cmd.exe absorb Docker's expected startup
  # error so the retry loop can actually continue until the engine is ready.
  & $env:ComSpec /d /c 'docker info >nul 2>&1'
  return $LASTEXITCODE -eq 0
}

function Test-TcpPort([int]$Port) {
  $client = New-Object System.Net.Sockets.TcpClient
  try {
    $client.Connect('127.0.0.1', $Port)
    return $true
  } catch {
    return $false
  } finally {
    $client.Dispose()
  }
}

function Test-HttpOk([string]$Url) {
  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec 5
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

function Stop-ProcessTree([System.Diagnostics.Process]$Process) {
  if ($Process -and -not $Process.HasExited) {
    & $env:ComSpec /d /c "taskkill /PID $($Process.Id) /T /F >nul 2>&1"
  }
}

function Stop-ExistingNodeListener([int]$Port) {
  $listeners = @(Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue)
  foreach ($processId in @($listeners | Select-Object -ExpandProperty OwningProcess -Unique)) {
    $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
    if (-not $process) { continue }
    if ($process.ProcessName -ne 'node') {
      throw "Port $Port is already owned by non-Node process $($process.ProcessName) (PID $processId)."
    }
    Log "Stopping stale Node listener on port $Port (PID $processId)."
    & $env:ComSpec /d /c "taskkill /PID $processId /T /F >nul 2>&1"
  }

  for ($attempt = 1; $attempt -le 20; $attempt++) {
    if (-not (Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue)) { return }
    Start-Sleep -Milliseconds 250
  }
  throw "Port $Port did not become available after stopping its stale Node listener."
}

$ApiProcess = $null
$WebProcess = $null

try {
  Set-Location -LiteralPath $Project
  Log 'Startup task started.'

  if (-not (Test-DockerReady)) {
    $dockerDesktop = @(
      (Join-Path $env:LOCALAPPDATA 'Programs\DockerDesktop\Docker Desktop.exe'),
      (Join-Path $env:LOCALAPPDATA 'Programs\Docker\Docker\Docker Desktop.exe')
    ) | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
    if ((Test-Path -LiteralPath $dockerDesktop) -and
        -not (Get-Process -Name 'Docker Desktop' -ErrorAction SilentlyContinue)) {
      Start-Process -FilePath $dockerDesktop -WindowStyle Hidden | Out-Null
      Log 'Started Docker Desktop.'
    }
  }

  $dockerReady = $false
  for ($attempt = 1; $attempt -le 60; $attempt++) {
    if (Test-DockerReady) { $dockerReady = $true; break }
    if ($attempt % 12 -eq 0) { Log "Still waiting for Docker Desktop ($attempt/60)." }
    Start-Sleep -Seconds 5
  }
  if (-not $dockerReady) { throw 'Docker Desktop did not become ready within 5 minutes.' }

  # Windows can restore the previous foreground app tree after sign-in. Stop
  # only this stack's Node listeners before rebuilding so .next is never
  # modified while the old server is still reading it.
  Stop-ExistingNodeListener 3000
  Stop-ExistingNodeListener 3001

  Invoke-Logged 'docker.exe' @('compose', '-f', $Compose, 'up', '-d', 'postgres') 'Postgres startup'
  Invoke-Logged $Pnpm @('db:generate') 'Prisma client generation'
  Invoke-Logged $Pnpm @('--filter', '@quiz/database', 'exec', 'prisma', 'migrate', 'deploy') 'Database migrations'
  Invoke-Logged $Pnpm @('--filter', '@quiz/api', 'build') 'API build'
  Invoke-Logged $Pnpm @('--filter', '@quiz/web', 'build') 'Web build'

  $WebRunner = Join-Path $Project 'ops\windows\run-web.ps1'
  $ApiRunner = Join-Path $Project 'ops\windows\run-api.ps1'
  $ApiProcess = Start-Process -FilePath $PowerShell -WindowStyle Hidden -PassThru -ArgumentList @('-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', "-File `"$ApiRunner`"")
  $WebProcess = Start-Process -FilePath $PowerShell -WindowStyle Hidden -PassThru -ArgumentList @('-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', "-File `"$WebRunner`"")
  Log 'API and web processes started (API 3001, web 3000).'

  if (-not $Cloudflared) {
    $fallbacks = @('C:\Program Files\cloudflared\cloudflared.exe', 'C:\Program Files (x86)\cloudflared\cloudflared.exe', 'C:\ProgramData\chocolatey\bin\cloudflared.exe')
    $Cloudflared = $fallbacks | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
  }

  if ($CloudflaredService) {
    if ($CloudflaredService.Status -ne 'Running') {
      Start-Service -Name 'Cloudflared'
      Log 'Started the existing Windows Cloudflared service.'
    } else {
      Log 'Existing Windows Cloudflared service is already running.'
    }
  } else {
    $Config = $env:CLOUDFLARED_CONFIG
    if (-not $Config) { $Config = Join-Path $env:USERPROFILE '.cloudflared\config.yml' }
    if (-not $Config -or -not (Test-Path -LiteralPath $Config)) {
      $ProjectConfig = Join-Path $Project 'ops\cloudflared\config.yml'
      if (Test-Path -LiteralPath $ProjectConfig) { $Config = $ProjectConfig }
    }

    if ($Cloudflared -and (Test-Path -LiteralPath $Config)) {
    $TunnelLog = Join-Path $LogDir 'cloudflared.log'
    $TunnelErrorLog = Join-Path $LogDir 'cloudflared-error.log'
    Start-Process -FilePath $Cloudflared -WindowStyle Hidden -RedirectStandardOutput $TunnelLog -RedirectStandardError $TunnelErrorLog -ArgumentList @('--config', $Config, 'tunnel', 'run') | Out-Null
    Log "Cloudflare Tunnel started using $Config."
    } elseif ($Cloudflared -and $env:CLOUDFLARED_TUNNEL_TOKEN) {
    $TunnelLog = Join-Path $LogDir 'cloudflared.log'
    $TunnelErrorLog = Join-Path $LogDir 'cloudflared-error.log'
    Start-Process -FilePath $Cloudflared -WindowStyle Hidden -RedirectStandardOutput $TunnelLog -RedirectStandardError $TunnelErrorLog -ArgumentList @('tunnel', 'run', '--token', $env:CLOUDFLARED_TUNNEL_TOKEN) | Out-Null
    Log 'Cloudflare Tunnel started from CLOUDFLARED_TUNNEL_TOKEN.'
    } else {
    Log 'Cloudflare Tunnel was not started. Install cloudflared and create %USERPROFILE%\.cloudflared\config.yml (see ops\cloudflared\config.yml.example).'
    }
  }

  $servicesReady = $false
  for ($attempt = 1; $attempt -le 60; $attempt++) {
    $ApiProcess.Refresh()
    $WebProcess.Refresh()
    if ($ApiProcess.HasExited) { throw "API process exited before becoming ready (exit code $($ApiProcess.ExitCode))." }
    if ($WebProcess.HasExited) { throw "Web process exited before becoming ready (exit code $($WebProcess.ExitCode))." }
    if ((Test-TcpPort 3001) -and (Test-TcpPort 3000) -and
        (Test-HttpOk 'http://127.0.0.1:3001/api/v1/health') -and
        (Test-HttpOk 'http://127.0.0.1:3000/')) {
      $servicesReady = $true
      break
    }
    Start-Sleep -Seconds 2
  }
  if (-not $servicesReady) { throw 'API and web did not become ready within 2 minutes.' }

  Log 'Startup completed; API and web are healthy. Supervisor is active.'
  $consecutiveHealthFailures = 0
  while ($true) {
    Start-Sleep -Seconds 10
    $ApiProcess.Refresh()
    $WebProcess.Refresh()
    if ($ApiProcess.HasExited) { throw "API process exited (exit code $($ApiProcess.ExitCode))." }
    if ($WebProcess.HasExited) { throw "Web process exited (exit code $($WebProcess.ExitCode))." }
    if ((Test-HttpOk 'http://127.0.0.1:3001/api/v1/health') -and
        (Test-HttpOk 'http://127.0.0.1:3000/')) {
      $consecutiveHealthFailures = 0
    } else {
      $consecutiveHealthFailures++
      Log "HTTP health check failed ($consecutiveHealthFailures/3)."
      if ($consecutiveHealthFailures -ge 3) {
        throw 'API or web failed three consecutive HTTP health checks.'
      }
    }
  }
} catch {
  Log "ERROR: $($_.Exception.Message)"
  Stop-ProcessTree $ApiProcess
  Stop-ProcessTree $WebProcess
  throw
}
