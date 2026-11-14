$ErrorActionPreference = 'Stop'

$Project = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$Runner = Join-Path $Project 'ops\windows\supervise-stack.ps1'
$PowerShell = (Get-Command powershell.exe -ErrorAction Stop).Source
$User = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name

$action = New-ScheduledTaskAction `
  -Execute $PowerShell `
  -Argument "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File `"$Runner`""

# Docker Desktop is normally available after user logon; this avoids running
# the per-user Docker engine as SYSTEM before it exists.
$trigger = New-ScheduledTaskTrigger -AtLogOn -User $User
$settings = New-ScheduledTaskSettingsSet `
  -RestartCount 10 `
  -RestartInterval (New-TimeSpan -Minutes 1) `
  -ExecutionTimeLimit ([TimeSpan]::Zero) `
  -StartWhenAvailable `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries
$principal = New-ScheduledTaskPrincipal -UserId $User -LogonType Interactive -RunLevel Highest

Register-ScheduledTask `
  -TaskName 'QuizDauthau-Stack' `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Principal $principal `
  -Force `
  -ErrorAction Stop

Write-Host "Registered QuizDauthau-Stack for $User."
Write-Host 'Start it now with: Start-ScheduledTask -TaskName QuizDauthau-Stack'
