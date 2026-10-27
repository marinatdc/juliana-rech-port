import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { paths, render, siteUrl } from '../dist-ssr/entry-server.js'

if (siteUrl) {
  const parsed = new URL(siteUrl)
  if (parsed.protocol !== 'https:' || parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new Error('VITE_SITE_URL deve conter apenas a origem HTTPS do domínio oficial.')
  }
}
const template = await readFile('dist/index.html', 'utf8')
for (const path of [...paths, '/404']) {
  let head = ''
  const body = render(path).replace(/<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>/g, (tag) => {
    head += tag
    return ''
  })
  const html = template.replace('</head>', `${head}</head>`).replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
  const file = resolve('dist', path === '/' ? 'index.html' : path === '/404' ? '404.html' : `${path.slice(1)}/index.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
}
if (siteUrl) {
  const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(siteUrl + path)}</loc></url>`).join('')}</urlset>\n`)
}
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ''}`)
if (!siteUrl) console.warn('SEO: configure VITE_SITE_URL para gerar sitemap e URLs canônicas do domínio oficial.')
await rm('dist-ssr', { recursive: true, force: true })
console.log(`HTML completo gerado para ${paths.length} páginas e uma página 404.`)
