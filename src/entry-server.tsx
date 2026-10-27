import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { SiteRoutes } from './routes'
import { procedures } from './data/procedures'

export const paths = ['/', ...procedures.map((item) => `/tratamentos/${item.slug}`)]
export { siteUrl } from './seo/site'
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><SiteRoutes /></StaticRouter>)
}
