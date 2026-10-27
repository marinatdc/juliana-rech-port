import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { SiteRoutes } from './routes'
import { procedures } from './data/procedures'
import { siteBasePath } from './seo/site'

export const paths = ['/', ...procedures.map((item) => `/tratamentos/${item.slug}`)]
export { siteBasePath, siteUrl, siteRootUrl } from './seo/site'
export function render(path: string) {
  const location = path === '/' ? siteBasePath : `${siteBasePath}${path.slice(1)}`
  return renderToString(<StaticRouter basename={siteBasePath} location={location}><SiteRoutes /></StaticRouter>)
}
