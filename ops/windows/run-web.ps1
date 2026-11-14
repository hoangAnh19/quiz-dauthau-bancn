$ErrorActionPreference = 'Stop'

$Project = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$WebApp = Join-Path $Project 'apps\web'
$Standalone = Join-Path $Project 'apps\web\.next\standalone\apps\web'
$Log = 'C:\WebServer\web.log'
$Port = 3000

$NodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
$Node = if ($NodeCommand) { $NodeCommand.Source } else { 'C:\Program Files\nodejs\node.exe' }

if (-not (Test-Path -LiteralPath $Node)) {
  throw "node.exe was not found. Install Node.js system-wide or update the Node path in this file."
}

$ExistingListener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue |
  Select-Object -First 1
if ($ExistingListener) {
  $Owner = Get-Process -Id $ExistingListener.OwningProcess -ErrorAction SilentlyContinue
  $OwnerName = if ($Owner) { $Owner.ProcessName } else { 'unknown process' }
  Write-Host "Web production is already running at http://localhost:$Port (PID $($ExistingListener.OwningProcess), $OwnerName)."
  Write-Host "Stop the QuizDauthau-Stack scheduled task before starting a separate production instance."
  exit 0
}

if (-not (Test-Path -LiteralPath (Join-Path $Standalone 'server.js'))) {
  throw "Standalone build was not found at $Standalone. Run pnpm --filter @quiz/web build first."
}

# Next.js standalone output intentionally excludes public assets and the static
# build chunks. Copy both beside server.js so production serves the same files
# as `next dev` and `next start`.
$AssetDirectories = @(
  @{
    Source = Join-Path $WebApp 'public'
    Destination = Join-Path $Standalone 'public'
  },
  @{
    Source = Join-Path $WebApp '.next\static'
    Destination = Join-Path $Standalone '.next\static'
  }
)

foreach ($assets in $AssetDirectories) {
  if (-not (Test-Path -LiteralPath $assets.Source)) {
    throw "Required web assets were not found at $($assets.Source). Run pnpm --filter @quiz/web build first."
  }

  New-Item -ItemType Directory -Force -Path $assets.Destination | Out-Null
  Copy-Item -Path (Join-Path $assets.Source '*') -Destination $assets.Destination -Recurse -Force
}

New-Item -ItemType Directory -Force (Split-Path -Parent $Log) | Out-Null
Set-Location -LiteralPath $Standalone

$env:NODE_ENV = 'production'
$env:HOSTNAME = '127.0.0.1'
$env:PORT = $Port

$ErrorActionPreference = 'Continue'
& $Node '.\server.js' *>> $Log
$exitCode = $LASTEXITCODE
exit $exitCode
