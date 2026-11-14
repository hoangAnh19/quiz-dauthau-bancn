$ErrorActionPreference = 'Stop'

$Project = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$Runner = Join-Path $Project 'ops\windows\run-web.ps1'
$PowerShell = (Get-Command powershell.exe -ErrorAction Stop).Source

New-Item -ItemType Directory -Force 'C:\WebServer' | Out-Null

$action = New-ScheduledTaskAction `
  -Execute $PowerShell `
  -Argument "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File `"$Runner`""

$trigger = New-ScheduledTaskTrigger -AtStartup

$settings = New-ScheduledTaskSettingsSet `
  -RestartCount 10 `
  -RestartInterval (New-TimeSpan -Minutes 1) `
  -ExecutionTimeLimit ([TimeSpan]::Zero) `
  -StartWhenAvailable `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries

Register-ScheduledTask `
  -TaskName 'QuizDauthau-Web' `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -User 'SYSTEM' `
  -RunLevel Highest `
  -Force `
  -ErrorAction Stop

Write-Host 'Registered task QuizDauthau-Web.'
Write-Host 'Start it now with: Start-ScheduledTask -TaskName QuizDauthau-Web'
