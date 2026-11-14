$ErrorActionPreference = 'Stop'

$Project = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$EntryPoint = Join-Path $Project 'apps\api\dist\apps\api\src\main.js'
$Log = 'C:\WebServer\api.log'

$NodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
$Node = if ($NodeCommand) { $NodeCommand.Source } else { 'C:\Program Files\nodejs\node.exe' }

if (-not (Test-Path -LiteralPath $Node)) {
  throw "node.exe was not found. Install Node.js system-wide or update the Node path in this file."
}
if (-not (Test-Path -LiteralPath $EntryPoint)) {
  throw "API build was not found at $EntryPoint. Run pnpm --filter @quiz/api build first."
}

New-Item -ItemType Directory -Force (Split-Path -Parent $Log) | Out-Null
Set-Location -LiteralPath $Project
$env:NODE_ENV = 'production'
$env:API_PORT = '3001'

$ErrorActionPreference = 'Continue'
& $Node $EntryPoint *>> $Log
$exitCode = $LASTEXITCODE
exit $exitCode
