import { useLocation } from 'react-router-dom'
import socialImage from '../assets/logo-comp-s-fundo.png'
import favicon from '../assets/favicon.png'
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

const privacyDescription = 'Saiba quais informações podem ser processadas ao visitar o site de Juliana Rech, quais serviços externos são usados e como entrar em contato sobre privacidade.'

const clinicLocations = [
  {
    id: 'unidade-tristeza',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Wenceslau Escobar, 2800, Sala 603',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      postalCode: '91920-134',
      addressCountry: 'BR',
    },
  },
  {
    id: 'unidade-menino-deus',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. José de Alencar, 386, Sala 801',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      postalCode: '90880-480',
      addressCountry: 'BR',
    },
  },
]

export default function Seo() {
  const { pathname } = useLocation()
  const basePrefix = siteBasePath === '/' ? '' : siteBasePath.replace(/\/$/, '')
  const routePath = basePrefix && (pathname === basePrefix || pathname.startsWith(`${basePrefix}/`))
    ? pathname.slice(basePrefix.length)
    : pathname
  const path = routePath.replace(/\/$/, '') || '/'
  const procedure = procedures.find((item) => path === `/tratamentos/${item.slug}`)
  const home = path === '/'
  const privacy = path === '/privacidade'
  const found = home || privacy || !!procedure
  const title = home ? 'Juliana Rech | Fisioterapia em Porto Alegre' : procedure
    ? `${procedure.title} em Porto Alegre | Juliana Rech`
    : privacy ? 'Política de Privacidade | Juliana Rech' : 'Página não encontrada | Juliana Rech'
  const description = procedure ? descriptions[procedure.slug] : privacy ? privacyDescription : 'Fisioterapeuta Juliana Rech em Porto Alegre: dermatofuncional, pré e pós-operatório, linfedema, lipedema e tratamento da dor. Consultórios na Tristeza e Menino Deus.'
  const url = siteUrl ? `${siteRootUrl}${path === '/' ? '' : `${path.slice(1)}/`}` : undefined
  const imageUrl = siteUrl ? `${siteUrl}${socialImage}` : undefined
  const organizationId = `${siteRootUrl}#organizacao`
  const provider = {
    '@type': 'Organization',
    name: 'Juliana Rech — Fisioterapia',
    ...(siteUrl ? { '@id': organizationId, url: siteRootUrl } : {}),
    telephone: '+5551985107415',
    ...(imageUrl ? { image: imageUrl, logo: imageUrl } : {}),
    sameAs: ['https://www.instagram.com/fisiojulianarech/', 'https://www.facebook.com/JulianaRechFisioterapiaDermatofuncional/'],
  }
  const graph: object[] = [provider]
  if (siteUrl) {
    graph.push(
      {
        '@type': 'WebSite',
        '@id': `${siteRootUrl}#website`,
        url: siteRootUrl,
        name: 'Juliana Rech | Fisioterapia',
        inLanguage: 'pt-BR',
        publisher: { '@id': organizationId },
      },
      ...clinicLocations.map((location) => ({
        '@type': 'MedicalBusiness',
        '@id': `${siteRootUrl}#${location.id}`,
        name: 'Juliana Rech — Fisioterapia',
        url: siteRootUrl,
        telephone: '+5551985107415',
        address: location.address,
        areaServed: { '@type': 'City', name: 'Porto Alegre' },
        parentOrganization: { '@id': organizationId },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
        ],
        ...(imageUrl ? { image: imageUrl } : {}),
      })),
    )
  }
  if (url) graph.push({ '@type': 'WebPage', '@id': `${url}#pagina`, url, name: title, description, inLanguage: 'pt-BR', isPartOf: siteUrl ? { '@id': `${siteRootUrl}#website` } : undefined, ...(imageUrl ? { primaryImageOfPage: imageUrl } : {}) })
  if (procedure && url) graph.push(
    { '@type': 'Service', name: procedure.title, description, areaServed: 'Porto Alegre', ...(siteUrl ? { provider: { '@id': organizationId } } : {}), url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: siteRootUrl },
      { '@type': 'ListItem', position: 2, name: procedure.title, item: url },
    ] },
  )
  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={found ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
    <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
    {url && found && <link rel="canonical" href={url} />}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Juliana Rech | Fisioterapia" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {url && found && <meta property="og:url" content={url} />}
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
