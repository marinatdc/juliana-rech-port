export const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')
export const siteBasePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`
export const siteRootUrl = siteUrl ? `${siteUrl}${siteBasePath}` : ''
