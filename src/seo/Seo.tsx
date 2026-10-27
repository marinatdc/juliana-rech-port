import { useLocation } from 'react-router-dom'
import socialImage from '../assets/logo-comp-s-fundo.png'
import { procedures } from '../data/procedures'

import { siteBasePath, siteRootUrl, siteUrl } from './site'

const descriptions: Record<string, string> = {
  'pre-e-pos-operatorio': 'Fisioterapia pré e pós-operatória de cirurgias plásticas em Porto Alegre. Juliana Rech: cuidado individualizado para edema, cicatrizes e recuperação funcional.',
  'intercorrencias-esteticas': 'Fisioterapia para intercorrências estéticas e cirúrgicas em Porto Alegre: avaliação de fibroses, edema persistente e alterações cicatriciais com Juliana Rech.',
  'gestantes-e-puerperas': 'Fisioterapia para gestantes e puérperas em Porto Alegre. Cuidados para dores, inchaço e recuperação pós-parto, com avaliação individual por Juliana Rech.',
  'tratamento-da-dor': 'Fisioterapia para tratamento da dor em Porto Alegre. Avaliação individual, técnicas manuais, Dry Needling e exercícios terapêuticos com Juliana Rech.',
  'fisioterapia-dermatofuncional': 'Fisioterapia dermatofuncional em Porto Alegre com Juliana Rech. Avaliação individual para cuidados com a pele, cicatrizes e alterações dos tecidos.',
  'linfedema-e-lipedema': 'Fisioterapia para linfedema e lipedema em Porto Alegre. Drenagem linfática e cuidado individualizado para edema, mobilidade e conforto com Juliana Rech.',
}

export default function Seo() {
  const { pathname } = useLocation()
  const basePrefix = siteBasePath === '/' ? '' : siteBasePath.replace(/\/$/, '')
  const routePath = basePrefix && (pathname === basePrefix || pathname.startsWith(`${basePrefix}/`))
    ? pathname.slice(basePrefix.length)
    : pathname
  const path = routePath.replace(/\/$/, '') || '/'
  const procedure = procedures.find((item) => path === `/tratamentos/${item.slug}`)
  const home = path === '/'
  const found = home || !!procedure
  const title = home ? 'Juliana Rech | Fisioterapia em Porto Alegre' : procedure
    ? `${procedure.title} em Porto Alegre | Juliana Rech` : 'Página não encontrada | Juliana Rech'
  const description = procedure ? descriptions[procedure.slug] : 'Fisioterapeuta Juliana Rech em Porto Alegre: dermatofuncional, pré e pós-operatório, linfedema, lipedema e tratamento da dor. Consultórios na Tristeza e Menino Deus.'
  const url = siteUrl ? `${siteRootUrl}${path === '/' ? '' : path.slice(1)}` : undefined
  const imageUrl = siteUrl ? `${siteUrl}${socialImage}` : undefined
  const provider = {
    '@type': 'MedicalBusiness',
    name: 'Juliana Rech — Fisioterapia',
    ...(siteUrl ? { '@id': `${siteRootUrl}#consultorio`, url: siteRootUrl } : {}),
    telephone: '+555185107415',
    ...(imageUrl ? { image: imageUrl, logo: imageUrl } : {}),
    areaServed: { '@type': 'City', name: 'Porto Alegre' },
    address: [
      { '@type': 'PostalAddress', streetAddress: 'Av. Wenceslau Escobar, 2800, Sala 603, Tristeza', addressLocality: 'Porto Alegre', addressRegion: 'RS', addressCountry: 'BR' },
      { '@type': 'PostalAddress', streetAddress: 'R. José de Alencar, 386, Sala 801, Menino Deus', addressLocality: 'Porto Alegre', addressRegion: 'RS', addressCountry: 'BR' },
    ],
    sameAs: ['https://www.instagram.com/fisiojulianarech/', 'https://www.facebook.com/JulianaRechFisioterapiaDermatofuncional/'],
  }
  const graph: object[] = [provider]
  if (url) graph.push({ '@type': 'WebPage', '@id': `${url}#pagina`, url, name: title, description, inLanguage: 'pt-BR', ...(imageUrl ? { primaryImageOfPage: imageUrl } : {}) })
  if (procedure && url) graph.push(
    { '@type': 'Service', name: procedure.title, description, areaServed: 'Porto Alegre', provider: { '@id': `${siteRootUrl}#consultorio` }, url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteRootUrl },
      { '@type': 'ListItem', position: 2, name: procedure.title, item: url },
    ] },
  )
  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={found ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
    {url && found && <link rel="canonical" href={url} />}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Juliana Rech | Fisioterapia" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {url && <meta property="og:url" content={url} />}
    {imageUrl && <>
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Identidade visual de Juliana Rech, fisioterapeuta" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1774" />
      <meta property="og:image:height" content="887" />
    </>}
    <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    {found && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') }} />}
  </>
}
