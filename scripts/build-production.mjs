import { spawnSync } from 'node:child_process'

const siteUrl = (process.env.PRODUCTION_SITE_URL || 'https://julianarech.com.br').replace(/\/$/, '')
const parsedSiteUrl = new URL(siteUrl)

if (parsedSiteUrl.protocol !== 'https:' || parsedSiteUrl.pathname !== '/' || parsedSiteUrl.search || parsedSiteUrl.hash) {
  throw new Error('PRODUCTION_SITE_URL deve conter apenas a origem HTTPS do domínio oficial.')
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const result = spawnSync(npmCommand, ['run', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VITE_SITE_URL: siteUrl,
    VITE_BASE_PATH: '/',
  },
})

if (result.error) throw result.error
process.exit(result.status ?? 1)
