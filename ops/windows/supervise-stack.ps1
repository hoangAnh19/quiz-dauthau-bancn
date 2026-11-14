$ErrorActionPreference = 'Stop'

$Runner = Join-Path $PSScriptRoot 'start-stack.ps1'
$PowerShell = (Get-Command powershell.exe -ErrorAction Stop).Source
$LogDir = 'C:\WebServer'
$Log = Join-Path $LogDir 'startup.log'

New-Item -ItemType Directory -Force $LogDir | Out-Null

while ($true) {
  $process = Start-Process `
    -FilePath $PowerShell `
    -WindowStyle Hidden `
    -Wait `
    -PassThru `
    -ArgumentList @('-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', "-File `"$Runner`"")

  Add-Content -LiteralPath $Log -Value "$(Get-Date -Format s) Stack worker exited with code $($process.ExitCode); retrying in 60 seconds."
  Start-Sleep -Seconds 60
}
