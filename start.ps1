$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
try {
    $nodeCommand = Get-Command node -ErrorAction SilentlyContinue
    $bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
    $nodeCandidates = @()
    if ($nodeCommand) { $nodeCandidates += $nodeCommand.Source }
    if (Test-Path -LiteralPath $bundledNode) { $nodeCandidates += $bundledNode }
    $selectedNode = $null
    foreach ($candidate in $nodeCandidates) {
        $versionText = & $candidate --version
        $version = ($versionText -replace '^v', '').Split('.')[0]
        if ($LASTEXITCODE -eq 0 -and [int]$version -ge 24) { $selectedNode = $candidate; break }
    }
    if (-not $selectedNode) { throw 'Can Node.js 24 tro len. Cai Node.js 24, sau do chay lai file nay.' }
    $sitePort = if ($env:PORT) { $env:PORT } else { '3000' }
    $siteUrl = 'http://localhost:' + $sitePort
    try {
        $existing = Invoke-RestMethod -Uri ('http://127.0.0.1:' + $sitePort + '/api/products') -TimeoutSec 5
        if ($null -ne $existing.products -and $null -ne $existing.questionCount) {
            Write-Host ('Website da chay tai ' + $siteUrl) -ForegroundColor Green
            return
        }
    } catch { }
    Write-Host ('Mo trinh duyet: ' + $siteUrl) -ForegroundColor Green
    Write-Host 'Giu cua so nay mo. Nhan Ctrl+C de dung may chu.'
    & $selectedNode (Join-Path $PSScriptRoot 'server\server.js')
    if ($LASTEXITCODE -ne 0) { throw ('May chu dung voi ma loi ' + $LASTEXITCODE + '. Xem thong bao phia tren.') }
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
