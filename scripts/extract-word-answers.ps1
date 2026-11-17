param([Parameter(Mandatory = $true)][string]$Path)

$stream = [IO.FileStream]::new($Path, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::ReadWrite)
$archive = [IO.Compression.ZipArchive]::new($stream, [IO.Compression.ZipArchiveMode]::Read)
try {
  $reader = [IO.StreamReader]::new($archive.GetEntry('word/document.xml').Open())
  $document = [xml]$reader.ReadToEnd()
  $namespaces = [Xml.XmlNamespaceManager]::new($document.NameTable)
  $namespaces.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
  $answers = @{}
  $issues = [Collections.Generic.List[string]]::new()
  $current = 0
  $candidates = [Collections.Generic.List[string]]::new()
  $optionCount = 0
  $questionCount = 0

  function Complete-Question {
    if ($script:current -eq 0) { return }
    if ($script:candidates.Count -ne 1) {
      $script:issues.Add("Câu $($script:current): $($script:candidates.Count) đáp án in đậm ($($script:candidates -join ','))")
    } else {
      if ($script:answers.ContainsKey($script:current)) { $script:issues.Add("Câu $($script:current) bị lặp") }
      $script:answers[$script:current] = $script:candidates[0]
    }
    if ($script:optionCount -ne 4) { $script:issues.Add("Câu $($script:current): $($script:optionCount) lựa chọn") }
    $script:candidates.Clear()
    $script:optionCount = 0
  }

  foreach ($paragraph in $document.SelectNodes('//w:body/w:p', $namespaces)) {
    $text = ($paragraph.SelectNodes('.//w:t', $namespaces) | ForEach-Object { $_.InnerText }) -join ''
    if ($text -match '^\s*\d+\s*\.\s*Câu\s+(\d+)\*?\s*:') {
      Complete-Question
      $current = [int]$Matches[1]
      $questionCount++
      continue
    }
    if ($current -eq 0 -or $text -notmatch '^\s*([ABCD])\s*\.') { continue }
    $letter = $Matches[1]
    $optionCount++
    if ($current -eq 267 -and $letter -eq 'B' -and $text -match '\s+C\s*\.') { $optionCount++ }
    $runs = $paragraph.SelectNodes('./w:r', $namespaces)
    $boldText = ($runs | Where-Object {
      $bold = $_.SelectSingleNode('./w:rPr/w:b', $namespaces)
      $bold -and $bold.GetAttribute('val', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main') -notin @('0', 'false', 'off')
    } | ForEach-Object { ($_.SelectNodes('.//w:t', $namespaces) | ForEach-Object { $_.InnerText }) -join '' }) -join ''
    if ($boldText.Trim()) {
      if ($current -eq 267 -and $boldText.Trim() -match '^C\s*\.') { $letter = 'C' }
      $candidates.Add($letter)
    }
  }
  Complete-Question
  $missing = @(1..430 | Where-Object { -not $answers.ContainsKey($_) })
  if ($questionCount -ne 430) { $issues.Add("Số câu đọc được: $questionCount") }
  if ($missing.Count) { $issues.Add("Thiếu đáp án câu: $($missing -join ',')") }
  if ($issues.Count) {
    $issues | ForEach-Object { Write-Error $_ }
    exit 1
  }
  (1..430 | ForEach-Object { $answers[$_] }) -join ','
} finally {
  $archive.Dispose()
  $stream.Dispose()
}
