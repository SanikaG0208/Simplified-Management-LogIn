$ErrorActionPreference = 'Stop'
function PlainText([string]$html) {
  return ([regex]::Replace([System.Net.WebUtility]::HtmlDecode([regex]::Replace($html, '<[^>]+>', ' ')), '\s+', ' ')).Trim()
}
$origin = 'https://www.simplifiedmanagement.in'
$listing = (Invoke-WebRequest -Uri ($origin + '/blog') -UseBasicParsing).Content
$cards = [regex]::Matches($listing, '(?s)<a\b[^>]*href="(/blog/[^"/]+)"[^>]*>.*?<h2\b.*?</a>')
$posts = @()
foreach ($card in $cards) {
  $path = $card.Groups[1].Value
  $title = PlainText ([regex]::Match($card.Value, '(?s)<h2\b[^>]*>(.*?)</h2>').Groups[1].Value)
  $summary = PlainText ([regex]::Match($card.Value, '(?s)<p\b[^>]*>(.*?)</p>').Groups[1].Value)
  $category = PlainText ([regex]::Match($card.Value, '(?s)<span\b[^>]*>(.*?)</span>').Groups[1].Value)
  $html = (Invoke-WebRequest -Uri ($origin + $path) -UseBasicParsing).Content
  $article = [regex]::Match($html, '(?s)<article\b[^>]*>(.*?)</article>').Groups[1].Value
  if (-not $article) { throw "Article body missing: $path" }
  $afterTitle = $article.Substring($article.IndexOf('</h1>') + 5)
  $dateMatch = [regex]::Match($afterTitle, '(?s)<p\b[^>]*>(.*?)</p>')
  $dateParts = (PlainText $dateMatch.Groups[1].Value) -split ' · '
  $body = $afterTitle.Substring($dateMatch.Index + $dateMatch.Length)
  $keepReading = [regex]::Match($body, '(?s)<h2\b[^>]*>Keep reading</h2>')
  if ($keepReading.Success) { $body = $body.Substring(0, $keepReading.Index) }
  $sections = [System.Collections.Generic.List[object]]::new()
  $current = @{ title = ''; paragraphs = [System.Collections.Generic.List[string]]::new(); blocks = [System.Collections.Generic.List[object]]::new() }
  foreach ($block in [regex]::Matches($body, '(?s)<(h2|h3|p|ul|ol)\b[^>]*>(.*?)</\1>')) {
    $tag = $block.Groups[1].Value
    if ($tag -in @('h2', 'h3')) {
      if ($current.blocks.Count -gt 0) { $sections.Add($current) }
      $current = @{ title = (PlainText $block.Groups[2].Value); paragraphs = [System.Collections.Generic.List[string]]::new(); blocks = [System.Collections.Generic.List[object]]::new() }
    } elseif ($tag -eq 'p') {
      $text = PlainText $block.Groups[2].Value
      $current.paragraphs.Add($text)
      $current.blocks.Add(@{ type = 'paragraph'; text = $text })
    } else {
      $items = @([regex]::Matches($block.Groups[2].Value, '(?s)<li\b[^>]*>(.*?)</li>') | ForEach-Object { PlainText $_.Groups[1].Value })
      $current.blocks.Add(@{ type = 'list'; ordered = ($tag -eq 'ol'); items = $items })
    }
  }
  if ($current.blocks.Count -gt 0) { $sections.Add($current) }
  if ($sections.Count -eq 0) { throw "No article sections: $path" }
  $posts += @{ slug = $path.Substring(6); title = $title; summary = $summary; category = $category; date = $dateParts[0]; readTime = $dateParts[1]; sourceUrl = $origin + $path; sections = @($sections.ToArray()) }
}
if ($posts.Count -ne 8) { throw "Expected 8 published articles, found $($posts.Count)" }
$target = Join-Path $PSScriptRoot '../src/data/articles.js'
$bodyJson = ConvertTo-Json -InputObject @($posts) -Depth 12
Set-Content -LiteralPath $target -Value ("// Imported from the published Simplified Management blog; no generated article copy.`nexport const articles = " + $bodyJson + ';') -Encoding utf8
Write-Output "Imported $($posts.Count) published articles with full text, lists, dates and categories."
