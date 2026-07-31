[CmdletBinding()]
param(
  [string]$ProjectName = "osmany-mecanografia",
  [string]$ProductionBranch = "main",
  [string]$CommitMessage = "Update website"
)

$ErrorActionPreference = "Stop"
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$pagesOutput = [System.IO.Path]::GetFullPath((Join-Path $projectRoot "work\pages-dist"))
$workRoot = [System.IO.Path]::GetFullPath((Join-Path $projectRoot "work"))

function Invoke-Native {
  param(
    [Parameter(Mandatory = $true)][string]$Command,
    [Parameter(ValueFromRemainingArguments = $true)][string[]]$Arguments
  )

  & $Command @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "El comando '$Command $($Arguments -join ' ')' terminó con código $LASTEXITCODE."
  }
}

function Require-Command {
  param([Parameter(Mandatory = $true)][string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "No se encontró '$Name'. Instálelo y vuelva a ejecutar el script."
  }
}

if (-not $pagesOutput.StartsWith($workRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "La carpeta temporal resuelta quedó fuera de work/."
}

Set-Location -LiteralPath $projectRoot

Write-Host "[1/7] Comprobando herramientas y accesos..." -ForegroundColor Cyan
Require-Command "git"
Require-Command "gh"
Require-Command "npm"
Require-Command "npx"
Invoke-Native gh --version
Invoke-Native gh auth status
Invoke-Native npx wrangler --version
Invoke-Native npx wrangler whoami

if (-not (Test-Path -LiteralPath "package.json")) {
  throw "No se encontró package.json en $projectRoot."
}
if (-not (Test-Path -LiteralPath "pages-worker.js")) {
  throw "No se encontró pages-worker.js, necesario para servir CSS e imágenes."
}

Write-Host "[2/7] Compilando la última versión..." -ForegroundColor Cyan
Invoke-Native npm run build

Write-Host "[3/7] Preparando el paquete de Cloudflare Pages..." -ForegroundColor Cyan
if (Test-Path -LiteralPath $pagesOutput) {
  Remove-Item -LiteralPath $pagesOutput -Recurse -Force
}
New-Item -ItemType Directory -Path $pagesOutput | Out-Null
Copy-Item -Path "dist\client\*" -Destination $pagesOutput -Recurse -Force
Copy-Item -Path "dist\server\*" -Destination $pagesOutput -Recurse -Force
Copy-Item -LiteralPath "pages-worker.js" -Destination (Join-Path $pagesOutput "_worker.js") -Force

# vinext genera una redirección temporal de Wrangler orientada a Workers.
# Pages debe usar el wrangler.jsonc del proyecto.
$redirectConfig = [System.IO.Path]::GetFullPath((Join-Path $projectRoot ".wrangler\deploy\config.json"))
$wranglerRoot = [System.IO.Path]::GetFullPath((Join-Path $projectRoot ".wrangler"))
if ((Test-Path -LiteralPath $redirectConfig) -and $redirectConfig.StartsWith($wranglerRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  $redirectBackup = Join-Path $workRoot "vinext-wrangler-redirect.json"
  Move-Item -LiteralPath $redirectConfig -Destination $redirectBackup -Force
}

Write-Host "[4/7] Guardando y empujando los cambios a GitHub..." -ForegroundColor Cyan
$pendingChanges = git status --porcelain
if ($LASTEXITCODE -ne 0) { throw "No se pudo leer el estado de Git." }
if ($pendingChanges) {
  Invoke-Native git add --all
  Invoke-Native git commit -m $CommitMessage
} else {
  Write-Host "No hay cambios nuevos que confirmar." -ForegroundColor DarkGray
}

$currentBranch = (git branch --show-current).Trim()
if ($LASTEXITCODE -ne 0 -or -not $currentBranch) {
  throw "No se pudo determinar la rama actual."
}
Invoke-Native git push origin $currentBranch
$commitHash = (git rev-parse HEAD).Trim()
if ($LASTEXITCODE -ne 0 -or -not $commitHash) {
  throw "No se pudo determinar el commit publicado."
}

Write-Host "[5/7] Comprobando el proyecto de Cloudflare Pages..." -ForegroundColor Cyan
$projectList = (& npx wrangler pages project list 2>&1 | Out-String)
if ($LASTEXITCODE -ne 0) {
  throw "No se pudo consultar la lista de proyectos de Cloudflare Pages.`n$projectList"
}
$escapedProjectName = [regex]::Escape($ProjectName)
$projectExists = $projectList -match "(?m)[│|]\s*$escapedProjectName\s*[│|]"
if (-not $projectExists) {
  Write-Host "El proyecto no existe; se creará una sola vez." -ForegroundColor Yellow
  Invoke-Native npx wrangler pages project create $ProjectName --production-branch $ProductionBranch
} else {
  Write-Host "El proyecto ya existe; se actualizará." -ForegroundColor DarkGray
}

Write-Host "[6/7] Publicando en Cloudflare Pages..." -ForegroundColor Cyan
$deployOutput = (& npx wrangler pages deploy $pagesOutput --project-name $ProjectName --branch $ProductionBranch --commit-hash $commitHash --commit-dirty=false --skip-caching 2>&1 | Out-String)
if ($LASTEXITCODE -ne 0) {
  throw "La publicación en Cloudflare Pages falló.`n$deployOutput"
}
Write-Host $deployOutput

Write-Host "[7/7] Publicación completada." -ForegroundColor Green
$deploymentUrl = [regex]::Match($deployOutput, "https://[a-z0-9-]+\.$([regex]::Escape($ProjectName))\.pages\.dev").Value
Write-Host "Sitio: https://$ProjectName.pages.dev/" -ForegroundColor Green
if ($deploymentUrl) {
  Write-Host "Versión: $deploymentUrl" -ForegroundColor DarkGray
}
Write-Host "GitHub: https://github.com/lsantos2000/osmany-mecanografia" -ForegroundColor Green
