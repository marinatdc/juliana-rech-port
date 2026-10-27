import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readFile, readdir } from 'node:fs/promises'

const routes = await readdir('dist/tratamentos', { withFileTypes: true })
const files = ['dist/index.html', ...routes.filter((entry) => entry.isDirectory()).map((entry) => `dist/tratamentos/${entry.name}/index.html`)]
const basePath = process.env.VITE_BASE_PATH || '/'
const basePrefix = basePath.endsWith('/') ? basePath : `${basePath}/`
const assetPrefix = `${basePrefix}assets/`
const titles = new Set()
const descriptions = new Set()
for (const file of files) {
  const html = await readFile(file, 'utf8')
  const head = html.split('</head>')[0]
  const title = [...head.matchAll(/<title>(.*?)<\/title>/g)]
  const description = [...head.matchAll(/<meta name="description" content="([^"]*)"/g)]
  assert.equal(title.length, 1, `${file}: deve ter um único título no head`)
  assert.equal(description.length, 1, `${file}: deve ter uma única descrição no head`)
  assert.match(head, /<meta property="og:title" content="[^"]+"/, `${file}: título Open Graph ausente`)
  assert.match(head, /<meta property="og:description" content="[^"]+"/, `${file}: descrição Open Graph ausente`)
  assert.match(head, /<meta name="twitter:card" content="(?:summary|summary_large_image)"/, `${file}: cartão Twitter ausente`)
  titles.add(title[0][1])
  descriptions.add(description[0][1])
  assert.match(html, /<h1\b/, `${file}: conteúdo principal deve existir sem JavaScript`)
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${file}: deve haver um único H1`)
  assert.ok(html.includes(`href="${basePrefix}tratamentos/`), `${file}: links rastreáveis para tratamentos`)
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
    assert.equal(JSON.parse(json)['@context'], 'https://schema.org')
  }
  assert.match(html, /application\/ld\+json/, `${file}: dados estruturados ausentes`)
  for (const [, asset] of html.matchAll(new RegExp(`(?:src|href)="(${assetPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"#?]+)"`, 'g'))) {
    assert.ok(existsSync(`dist${asset.slice(basePrefix.length - 1)}`), `${file}: arquivo ausente ${asset}`)
  }
  assert.doesNotMatch(html, /(?:src|href)="\/src\//, `${file}: não deve referenciar assets de desenvolvimento`)
}
assert.equal(titles.size, files.length, 'Títulos devem ser únicos por página')
assert.equal(descriptions.size, files.length, 'Descrições devem ser únicas por página')
assert.match(await readFile('dist/404.html', 'utf8'), /content="noindex, follow"/)
const robots = await readFile('dist/robots.txt', 'utf8')
assert.match(robots, /^User-agent: \*/m)
assert.match(robots, /^Allow: \/$/m)
if (existsSync('dist/sitemap.xml')) {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8')
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.equal(urls.length, files.length)
  assert.equal(new Set(urls).size, files.length)
  for (let index = 0; index < files.length; index++) {
    const html = await readFile(files[index], 'utf8')
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)
    assert.ok(canonical && urls.includes(canonical[1]), `${files[index]}: canonical deve estar no sitemap`)
    const socialImage = html.match(/<meta property="og:image" content="https:\/\/[^\"]+(\/assets\/[^\"]+)"/)
    assert.ok(socialImage, `${files[index]}: imagem social absoluta ausente`)
    assert.ok(existsSync(`dist${socialImage[1]}`), `${files[index]}: imagem social não encontrada no build`)
  }
  assert.match(robots, /^Sitemap: https:\/\/.+\/sitemap\.xml$/m)
}
console.log(`SEO validado: ${files.length} páginas com conteúdo, metadados únicos, JSON-LD e assets válidos; 404 sem indexação.`)
