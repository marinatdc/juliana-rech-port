import { useEffect, useState } from 'react'
import { CgGym, CgImport } from 'react-icons/cg'
import { FaBalanceScale, FaRegCheckCircle, FaRegDotCircle, FaRegSmile } from 'react-icons/fa'
import { FaShieldHeart } from 'react-icons/fa6'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { BiCertification } from 'react-icons/bi'
import { FiActivity, FiCheckCircle, FiDroplet, FiEye, FiGitBranch, FiInfo, FiKey, FiMenu, FiMoon, FiMove, FiShield, FiSliders, FiSun, FiTool } from 'react-icons/fi'
import { GiMeditation } from 'react-icons/gi'
import { LuWaves } from 'react-icons/lu'
import { LuLayers } from 'react-icons/lu'
import { LuMicroscope } from 'react-icons/lu'
import { PiBandaidsFill, PiDotsSixBold, PiDotsSixFill } from 'react-icons/pi'
import { FiLayers } from 'react-icons/fi'
import { PiDropBold } from 'react-icons/pi'
import { RiCursorHand } from 'react-icons/ri'
import { RiContrastDrop2Fill } from 'react-icons/ri'
import { TbContract } from 'react-icons/tb'
import { TbSparkles } from 'react-icons/tb'
import { TbBrandLinktree } from 'react-icons/tb'
import { FaPerson } from 'react-icons/fa6'
import { IoMedkit } from 'react-icons/io5'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { FiHeart, FiTarget } from 'react-icons/fi'
import { MdOutlineHearing, MdOutlineMedication, MdPregnantWoman } from 'react-icons/md'
import { PiWaveTriangleBold } from 'react-icons/pi'
import { PiNewspaperBold } from 'react-icons/pi'
import { PiDropLight } from 'react-icons/pi'
import { IoRadioOutline } from 'react-icons/io5'
import { VscSettingsCompact } from 'react-icons/vsc'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { Link, useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/logo-comp-s-fundo.webp'
import SectionBadge from '../components/SectionBadge'
import ProcedureClosingSection from '../components/ProcedureClosingSection'
import DermatofunctionalGallery from '../components/DermatofunctionalGallery'
import { PainManualVideo, PainNeedlingVideo, PainTherapeuticVideo } from '../components/PainVideoSection'
import SiteFooter from '../components/SiteFooter'
import { procedureDetails } from '../data/procedureDetails'
import { procedures } from '../data/procedures'
import useScrollReveal from '../hooks/useScrollReveal'
import './ProcedureDetail.css'

function renderIntroduction(paragraph: string) {
  return paragraph.split(/(__\*\*.*?\*\*__|\*\*.*?\*\*|__.*?__)/g).map((part, index) => {
    if (part.startsWith('__**') && part.endsWith('**__')) return <u key={index}><strong>{part.slice(4, -4)}</strong></u>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (part.startsWith('__') && part.endsWith('__')) return <u key={index}>{part.slice(2, -2)}</u>
    return part
  })
}

function ProcedureDetail() {
  useScrollReveal()
  const { slug } = useParams()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [proceduresOpen, setProceduresOpen] = useState(false)
  const isPrePost = slug === 'pre-e-pos-operatorio'
  const isIntercorrencias = slug === 'intercorrencias-esteticas'
  const isMaternity = slug === 'gestantes-e-puerperas'
  const isPain = slug === 'tratamento-da-dor'
  const isDermato = slug === 'fisioterapia-dermatofuncional'
  const isLymphedema = slug === 'linfedema-e-lipedema'
  const procedure = procedures.find((item) => item.slug === slug)
  const detail = slug ? procedureDetails[slug] : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const goBack = () => {
    const historyIndex = window.history.state?.idx
    if (typeof historyIndex === 'number' && historyIndex > 0) {
      navigate(-1)
      return
    }
    navigate('/#tratamentos')
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setProceduresOpen(false)
  }

  if (!procedure || !detail) {
    return <><main className="procedure-detail__not-found">
      <Link to="/#tratamentos">← Voltar aos tratamentos</Link>
      <h1>Procedimento não encontrado</h1>
    </main><SiteFooter /></>
  }

  return (
    <>
      <header className="procedure-header">
        <Link className="procedure-header__brand" to="/" aria-label="Juliana Rech, página inicial">
          <img src={logo} alt="Juliana Rech Fisioterapia Especializada" />
        </Link>
        <button
          className="procedure-header__toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="procedure-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`procedure-header__nav${menuOpen ? ' is-open' : ''}`} id="procedure-navigation" aria-label="Navegação principal">
          <a href={`${import.meta.env.BASE_URL}#sobre`} onClick={closeMenu}>Quem sou</a>
          <a href={`${import.meta.env.BASE_URL}#para-quem`} onClick={closeMenu}>Para quem</a>
          <a href={`${import.meta.env.BASE_URL}#como-funciona`} onClick={closeMenu}>Como funciona</a>
          <div className={`procedure-header__dropdown${proceduresOpen ? ' is-open' : ''}`}>
            <button
              className="procedure-header__trigger"
              type="button"
              aria-expanded={proceduresOpen}
              aria-controls="detail-procedures-menu"
              onClick={() => setProceduresOpen((open) => !open)}
            >
              Procedimentos
              <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2.5 4.5 3.5 3 3.5-3" /></svg>
            </button>
            <div className="procedure-header__submenu" id="detail-procedures-menu" hidden={!proceduresOpen}>
              <a href={`${import.meta.env.BASE_URL}#tratamentos`} onClick={closeMenu}>Todos os procedimentos</a>
              {procedures.map((item) => (
                <a href={`${import.meta.env.BASE_URL}tratamentos/${item.slug}`} key={item.slug} onClick={closeMenu}>{item.title}</a>
              ))}
            </div>
          </div>
          <a href={`${import.meta.env.BASE_URL}#avaliacoes`} onClick={closeMenu}>Avaliações</a>
          <a href={`${import.meta.env.BASE_URL}#atendimento-domiciliar`} onClick={closeMenu}>Atendimento domiciliar</a>
          <a className="procedure-header__cta" href={`${import.meta.env.BASE_URL}#contato`} onClick={closeMenu}>
            Agendar avaliação <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main className={`procedure-detail${isPrePost ? ' procedure-detail--pre-post' : ''}${isIntercorrencias ? ' procedure-detail--intercorrencias' : ''}${isMaternity ? ' procedure-detail--maternity' : ''}${isPain ? ' procedure-detail--pain' : ''}${isDermato ? ' procedure-detail--dermato' : ''}${isLymphedema ? ' procedure-detail--lymphedema' : ''}`}>
        <section className="procedure-detail__hero">
          <img className="procedure-detail__cover" src={procedure.image} alt="" aria-hidden="true" fetchPriority="high" />
          <div className="procedure-detail__hero-inner">
            <button className="procedure-detail__back" type="button" onClick={goBack}>← Voltar</button>
            <div data-reveal="up"><SectionBadge>Acolhimento clínico especializado</SectionBadge></div>
            <h1 data-reveal="up">
              {isPrePost ? <>Pré e pós-operatórios de cirurgias<br /><span className="procedure-detail__title-underline">plásticas</span></> : detail.heroTitle ?? procedure.title}
              {!isPrePost && <span>{renderIntroduction(detail.subtitle)}</span>}
            </h1>
            <div className="procedure-detail__introduction" data-reveal="up">
              {detail.introduction.map((paragraph) => <p key={paragraph}>{renderIntroduction(paragraph)}</p>)}
            </div>
          </div>
        </section>

        {detail.sections.map((section, sectionIndex) => {
          if (isIntercorrencias && sectionIndex === 2) return null
          return (
          <section
            className={`procedure-detail__section${sectionIndex % 2 === 0 ? ' is-soft' : ''}${isPrePost ? ` procedure-detail__section--pre-post-${sectionIndex + 1}` : ''}${isIntercorrencias ? ` procedure-detail__section--intercorrencias-${sectionIndex + 1}` : ''}${isMaternity ? ` procedure-detail__section--maternity-${sectionIndex + 1}` : ''}${isPain ? ` procedure-detail__section--pain-${sectionIndex + 1}` : ''}${isDermato ? ` procedure-detail__section--dermato-${sectionIndex + 1}` : ''}${isLymphedema ? ` procedure-detail__section--${sectionIndex + 1}` : ''}`}
            key={section.title}
          >
            <div className="procedure-detail__section-inner">
            <header className={`procedure-detail__section-heading${isPrePost && sectionIndex === 3 ? ' procedure-detail__rehab-heading' : ''}${isPain && sectionIndex === 1 ? ' procedure-detail__pain-heading' : ''}${isDermato && sectionIndex === 0 ? ' procedure-detail__dermato-heading' : ''}${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialties-heading' : ''}${isDermato && sectionIndex === 2 ? ' procedure-detail__dermato-radio-heading' : ''}${isDermato && sectionIndex === 3 ? ' procedure-detail__dermato-human-heading' : ''}${isLymphedema ? ` procedure-detail__lymphedema-heading--${sectionIndex + 1}` : ''}`} data-reveal="up">
                <p className={`procedure-detail__eyebrow${isPain && sectionIndex === 1 ? ' procedure-detail__pain-eyebrow' : ''}${isDermato && sectionIndex === 0 ? ' procedure-detail__dermato-eyebrow' : ''}${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialties-eyebrow' : ''}${isDermato && sectionIndex === 3 ? ' procedure-detail__dermato-human-eyebrow' : ''}${isLymphedema && sectionIndex === 0 ? ' procedure-detail__lymphedema-difference-eyebrow' : ''}${isLymphedema && sectionIndex === 2 ? ' procedure-detail__lymphedema-care-eyebrow' : ''}`}>{isPain && sectionIndex === 2 && <FiHeart aria-hidden="true" />}{isDermato && sectionIndex === 0 && <LuMicroscope aria-hidden="true" />}{isDermato && sectionIndex === 1 && <span aria-hidden="true">•</span>}{isDermato && sectionIndex === 3 && <FiHeart aria-hidden="true" />}{isLymphedema && sectionIndex === 2 && <FiEye aria-hidden="true" />}{section.eyebrow}</p>
                <h2 className={`${isPain && sectionIndex === 1 ? 'procedure-detail__pain-heading-title' : ''}${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialties-title' : ''}`}>{isDermato && sectionIndex === 1 ? <>Abordagens Especializadas para a<br /><u>Tua Pele</u> e o <u>Teu Corpo</u></> : section.title}</h2>
                {section.intro && <p className={`${isPain && sectionIndex === 1 ? 'procedure-detail__pain-heading-intro' : ''}${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialties-intro' : ''}`}>{renderIntroduction(section.intro)}</p>}
                {section.introSecondary && <p className="procedure-detail__section-secondary-intro">{renderIntroduction(section.introSecondary)}</p>}
                {section.introEmphasis && <p className="procedure-detail__section-emphasis">{renderIntroduction(section.introEmphasis)}</p>}
              </header>

              {isPain && sectionIndex === 0 && (() => {
                const [mainItem, ...benefits] = section.items
                if (!mainItem) return null
                return (
                  <div className="procedure-detail__pain-feature-layout" data-reveal="up">
                    <article className="procedure-detail__pain-feature">
                      <div className="procedure-detail__pain-feature-main">
                        {mainItem.label && <span className="procedure-detail__pain-feature-label"><FaRegDotCircle aria-hidden="true" />{mainItem.label}</span>}
                        <h3>{mainItem.title}</h3>
                        <p>{mainItem.body}</p>
                        {mainItem.tags && <ul className="procedure-detail__pain-pills">{mainItem.tags.map((tag) => <li key={tag}><FaRegCheckCircle aria-hidden="true" />{tag}</li>)}</ul>}
                      </div>
                      <div className="procedure-detail__pain-benefits">
                        {benefits.map((benefit, index) => <article className="procedure-detail__pain-benefit" key={benefit.title}>
                          <span aria-hidden="true">{index === 0 ? <FiTarget /> : index === 1 ? <MdOutlineMedication /> : <GiMeditation />}</span>
                          <div><h4>{benefit.title}</h4><p>{benefit.body}</p></div>
                        </article>)}
                      </div>
                    </article>
                    <div className="procedure-detail__pain-feature-video">
                      <PainNeedlingVideo />
                    </div>
                  </div>
                )
              })()}

              {section.layout === 'alternating' && (
                <div className="procedure-detail__alternating">
                  {section.items.map((item, index) => (
                    <article className={`procedure-detail__feature-row${index % 2 === 1 ? ' is-reversed' : ''}${isMaternity ? ' procedure-detail__feature-row--maternity' : ''}${isMaternity && ((sectionIndex === 0 && (index === 1 || index === 2)) || (sectionIndex === 1 && (index === 0 || index === 1 || index === 2))) ? ' has-visual-note' : ''}`} data-reveal="up" key={item.title}>
                      <div className={`procedure-detail__visual${isMaternity ? ' procedure-detail__visual--maternity' : ''}`} aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
                      {isMaternity && sectionIndex === 0 && (index === 1 || index === 2) && item.note && <aside className="procedure-detail__maternity-visual-note">{index === 1 ? <FiMoon aria-hidden="true" /> : <BiCertification aria-hidden="true" />}<span>{item.note}</span></aside>}
                      {isMaternity && sectionIndex === 1 && index === 0 && item.note && <aside className="procedure-detail__maternity-visual-note is-quote"><span>{item.note}</span></aside>}
                      {isMaternity && sectionIndex === 1 && index === 1 && item.tags && <aside className="procedure-detail__maternity-visual-note is-tags">{item.tags.map((tag, tagIndex) => <span key={tag}>{tagIndex === 0 ? <FiSun aria-hidden="true" /> : <FiActivity aria-hidden="true" />}{tag}</span>)}</aside>}
                      {isMaternity && sectionIndex === 1 && index === 2 && item.noteTitle && item.noteBody && <aside className="procedure-detail__maternity-visual-note is-focus"><strong>{item.noteTitle}</strong><span>{item.noteBody}</span></aside>}
                      <div className={`procedure-detail__feature-card${isMaternity ? ' procedure-detail__feature-card--maternity' : ''}${isMaternity && ((sectionIndex === 0 && (index === 1 || index === 2)) || (sectionIndex === 1 && (index === 0 || index === 1 || index === 2))) ? ' has-external-note' : ''}`}>
                        {isMaternity && <span className="procedure-detail__maternity-icon" aria-hidden="true">{sectionIndex === 0 ? index === 0 ? <GiMeditation /> : index === 1 ? <PiDropBold /> : <PiDotsSixBold /> : index === 0 ? <LuLayers /> : index === 1 ? <CgGym /> : index === 2 ? <PiDotsSixBold /> : index === 3 ? <PiBandaidsFill /> : <PiDotsSixBold />}</span>}
                        {item.label && <span className={`procedure-detail__tag${isMaternity ? ' procedure-detail__maternity-tag' : ''}`}>{item.label}</span>}
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        {item.extraBody?.split('\n\n').map((paragraph) => <p className="procedure-detail__maternity-extra" key={paragraph}>{paragraph}</p>)}
                        {item.note && !(isMaternity && ((sectionIndex === 0 && (index === 1 || index === 2)) || (sectionIndex === 1 && index === 0))) && <span className="procedure-detail__note">{item.note}</span>}
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {isLymphedema && sectionIndex === 1 && (
                <div className="procedure-detail__lymphedema-resource-groups">
                  {[0, 3].map((startIndex) => {
                    const groupItems = section.items.slice(startIndex, startIndex + 3)
                    const groupTitle = startIndex === 0 ? 'Linfedema e Cuidados Específicos' : 'Lipedema e Recursos Avançados'
                    return <section className="procedure-detail__lymphedema-resource-group" key={groupTitle}>
                      <h3><span aria-hidden="true">●</span>{groupTitle}</h3>
                      <div className="procedure-detail__lymphedema-resource-grid">
                        {groupItems.map((item, index) => {
                          const iconIndex = startIndex + index
                          const Icon = iconIndex === 0 ? LuWaves : iconIndex === 1 ? LuLayers : iconIndex === 2 ? FiShield : iconIndex === 3 ? GiMeditation : iconIndex === 4 ? FiActivity : FiLayers
                          return <article className="procedure-detail__lymphedema-resource-card" key={item.title}>
                            <span className="procedure-detail__lymphedema-resource-icon" aria-hidden="true"><Icon /></span>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                          </article>
                        })}
                      </div>
                    </section>
                  })}
                </div>
              )}

              {section.layout === 'cards' && !(isPain && sectionIndex === 0) && !(isLymphedema && sectionIndex === 1) && (
                <div className={`procedure-detail__cards columns-${section.columns ?? 3}${isPrePost && sectionIndex === 0 ? ' procedure-detail__cards--preparation' : ''}${isPrePost && sectionIndex === 3 ? ' procedure-detail__cards--rehab' : ''}`}>
                  {section.items.map((item, index) => (
                    <article className={`procedure-detail__card${isPain && sectionIndex > 0 ? ' procedure-detail__pain-card' : ''}${isDermato && sectionIndex === 0 ? ' procedure-detail__dermato-card' : ''}${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialty-card' : ''}${isDermato && sectionIndex === 3 ? ' procedure-detail__dermato-human-card' : ''}${isLymphedema && sectionIndex === 0 ? ' procedure-detail__lymphedema-difference-card' : ''}${isLymphedema && sectionIndex === 2 ? ' procedure-detail__lymphedema-care-card' : ''}${isPrePost && sectionIndex === 0 ? index === 0 ? ' procedure-detail__card--lead' : ' procedure-detail__card--supporting' : ''}${isPrePost && sectionIndex === 1 ? index === 0 ? ' procedure-detail__card--post-primary' : ' procedure-detail__card--post-arsenal' : ''}${isPrePost && sectionIndex === 2 ? ' procedure-detail__card--tissue' : ''}${isPrePost && sectionIndex === 3 ? ' procedure-detail__card--rehab' : ''}`} data-reveal="up" key={item.title}>
                      {isLymphedema && sectionIndex === 0 ? (
                        <div className="procedure-detail__lymphedema-difference-meta">
                          <span><i aria-hidden="true">●</i>{item.label}</span>
                          <small>{index === 0 ? 'Edema tecidual' : 'Condição crônica'}</small>
                        </div>
                      ) : isPrePost && sectionIndex === 3 ? (
                        <span className="procedure-detail__rehab-icon" aria-hidden="true">{index === 0 ? <GiMeditation /> : <LuMicroscope />}</span>
                      ) : isPrePost && sectionIndex === 2 ? (
                        <span className="procedure-detail__tissue-icon" aria-hidden="true">{index === 0 ? <LuWaves /> : index === 1 ? <PiDotsSixFill /> : <FiKey />}</span>
                      ) : isPrePost && sectionIndex === 1 ? (
                        <span className="procedure-detail__post-icon" aria-hidden="true">{index === 0 ? <LuWaves /> : <PiBandaidsFill />}</span>
                      ) : isPrePost && sectionIndex === 0 ? (
                        <span className="procedure-detail__preparation-icon" aria-hidden="true">
                          {index === 0 ? <TbContract /> : index === 1 ? <FiActivity /> : index === 2 ? <FiInfo /> : <FiDroplet />}
                        </span>
                      ) : isIntercorrencias && sectionIndex === 0 ? (
                        <span className="procedure-detail__intercorrencia-icon" aria-hidden="true">
                          {index === 0 ? <FiLayers /> : index === 1 ? <PiBandaidsFill /> : index === 2 ? <RiCursorHand /> : <PiDropBold />}
                        </span>
                      ) : isIntercorrencias && sectionIndex === 1 ? (
                        <span className="procedure-detail__therapy-icon" aria-hidden="true">
                          {index === 0 ? <FaWandMagicSparkles /> : index === 1 ? <RiContrastDrop2Fill /> : index === 2 ? <TbBrandLinktree /> : <FaPerson />}
                        </span>
                      ) : isIntercorrencias && sectionIndex === 3 ? (
                        <span className="procedure-detail__response-icon" aria-hidden="true">
                          {index === 0 ? <FaRegSmile /> : index === 1 ? <LuMicroscope /> : <FaBalanceScale />}
                        </span>
                      ) : isPain && sectionIndex === 1 ? (
                        <span className="procedure-detail__pain-icon" aria-hidden="true">{index === 0 ? <CgGym /> : index === 1 ? <FaPerson /> : index === 2 ? <HiOutlineEmojiSad /> : <MdPregnantWoman />}</span>
                      ) : isPain && sectionIndex === 2 ? (
                        <span className="procedure-detail__pain-icon" aria-hidden="true">{index === 0 ? <IoMedkit /> : index === 1 ? <MdOutlineHearing /> : <PiWaveTriangleBold />}</span>
                      ) : isDermato && sectionIndex === 0 ? (
                        <span className="procedure-detail__dermato-icon" aria-hidden="true">{index === 0 ? <CgImport /> : index === 1 ? <PiNewspaperBold /> : index === 2 ? <VscSettingsCompact /> : <FaArrowTrendUp />}</span>
                      ) : isDermato && sectionIndex === 1 ? (
                        <span className="procedure-detail__dermato-specialty-icon" aria-hidden="true">{index === 0 ? <PiDropLight /> : index === 1 ? <TbSparkles /> : index === 2 ? <FiSun /> : index === 3 ? <FaPerson /> : index === 4 ? <FiMenu /> : <PiBandaidsFill />}</span>
                      ) : isDermato && sectionIndex === 3 ? (
                        <span className="procedure-detail__dermato-human-icon" aria-hidden="true">{index === 0 ? <FiEye /> : index === 1 ? <FiActivity /> : <FiCheckCircle />}</span>
                      ) : <span className="procedure-detail__card-icon" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
                      {isPain && sectionIndex === 1 && item.label && <span className="procedure-detail__pain-card-label">{item.label}</span>}
                      {isDermato && sectionIndex === 0 && item.label && <span className="procedure-detail__dermato-pillar">{item.label}</span>}
                      {item.label && isPrePost && sectionIndex === 3 ? <span className="procedure-detail__rehab-label">{index === 0 ? <GiMeditation aria-hidden="true" /> : <LuMicroscope aria-hidden="true" />}{item.label}</span> : item.label && !(isPain) && !(isDermato && sectionIndex === 0) && !(isLymphedema && (sectionIndex === 0 || sectionIndex === 2)) && !(isPrePost && sectionIndex === 1 && index === 0) && !(isIntercorrencias && sectionIndex === 0) && <span className={`procedure-detail__tag${isPrePost && sectionIndex === 1 ? ' procedure-detail__post-tag' : ''}${isIntercorrencias && sectionIndex === 1 ? ' procedure-detail__therapy-label' : ''}`}>{item.label}</span>}
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      {isPain && sectionIndex === 1 && index === 0 && <PainManualVideo />}
                      {isPain && sectionIndex === 1 && index === 1 && <PainTherapeuticVideo />}
                      {item.extraBody && <p className={`procedure-detail__post-extra-body${isPrePost && sectionIndex === 3 ? ' procedure-detail__rehab-extra' : ''}`}>{item.extraBody}</p>}
                      {isLymphedema && sectionIndex === 0 && item.features && <ul className="procedure-detail__lymphedema-difference-features">{item.features.map((feature, featureIndex) => {
                        const Icon = index === 0 ? featureIndex === 0 ? FiGitBranch : featureIndex === 1 ? FiDroplet : FiActivity : featureIndex === 0 ? FiMove : featureIndex === 1 ? FiHeart : FiShield
                        return <li key={feature.title}><article><Icon aria-hidden="true" /><div><strong>{feature.title}</strong><p>{feature.body}</p></div></article></li>
                      })}</ul>}
                      {item.tags && <ul className={`procedure-detail__therapy-tags${isDermato && sectionIndex === 1 ? ' procedure-detail__dermato-specialty-tags' : ''}`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                      {item.points && <ul className={`procedure-detail__points${isPrePost && sectionIndex === 1 ? ' procedure-detail__post-points' : ''}`}>{item.points.map((point) => <li key={point}>{isPrePost && sectionIndex === 1 ? <FaRegCheckCircle aria-hidden="true" /> : null}{point}</li>)}</ul>}
                      {item.noteTitle && item.noteBody && isPrePost && sectionIndex === 1 && index === 0 ? (
                        <aside className="procedure-detail__post-callout">
                          <FaShieldHeart aria-hidden="true" />
                          <div><strong>{item.noteTitle}</strong><p>{item.noteBody}</p></div>
                        </aside>
                      ) : item.note && isPrePost && sectionIndex === 1 && index === 1 ? (
                        <aside className="procedure-detail__post-clinical-note"><TbSparkles aria-hidden="true" /><strong>{item.note}</strong></aside>
                      ) : item.note && isPrePost && sectionIndex === 3 ? (
                        <div className="procedure-detail__rehab-note"><span>{String(index + 1).padStart(2, '0')}</span>{item.note}</div>
                      ) : item.note && isLymphedema && sectionIndex === 2 ? (
                        <span className="procedure-detail__lymphedema-care-note"><FaRegCheckCircle aria-hidden="true" />{item.note}</span>
                      ) : item.note && isPrePost && sectionIndex === 2 ? (
                        <span className="procedure-detail__note procedure-detail__tissue-note">{index === 0 ? <FiSliders aria-hidden="true" /> : index === 1 ? <FiTool aria-hidden="true" /> : <FiSun aria-hidden="true" />}{item.note}</span>
                      ) : item.note && (isPrePost && sectionIndex === 0 && index === 0 ? (
                        <span className="procedure-detail__note procedure-detail__note--check"><FaRegCheckCircle aria-hidden="true" />{item.note}</span>
                      ) : <span className="procedure-detail__note">{item.note}</span>)}
                    </article>
                  ))}
                </div>
              )}

              {isIntercorrencias && sectionIndex === 1 && (() => {
                const feature = detail.sections[2]
                const item = feature?.items[0]
                if (!feature || !item) return null
                return (
                  <article className="procedure-detail__complication-feature" data-reveal="up">
                    <p className="procedure-detail__eyebrow"><span aria-hidden="true" />{feature.eyebrow}</p>
                    <h3>{feature.title}</h3>
                    <p>{feature.intro}</p>
                    <p>{item.body}</p>
                    <ul className="procedure-detail__therapy-tags">{item.note?.split(' · ').map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  </article>
                )
              })()}

              {section.layout === 'feature' && section.items.map((item) => isDermato && sectionIndex === 2 ? (
                <article className="procedure-detail__dermato-radio-card" data-reveal="up" key={item.title}>
                  <div className="procedure-detail__dermato-radio-content">
                    <span className="procedure-detail__dermato-radio-eyebrow"><IoRadioOutline aria-hidden="true" />{section.eyebrow}</span>
                    <h3>{section.title}</h3>
                    <p>{section.intro}</p>
                    {item.note && <ul className="procedure-detail__dermato-radio-tags">{item.note.split(' · ').map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                  </div>
                </article>
              ) : (
                <article className="procedure-detail__feature-banner" data-reveal="up" key={item.title}>
                  <div>
                    {item.label && <span className="procedure-detail__tag">{item.label}</span>}
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.note && <span className="procedure-detail__note">{item.note}</span>}
                  </div>
                  <span className="procedure-detail__feature-mark" aria-hidden="true">✳</span>
                </article>
              ))}
            </div>
          </section>
        )})}

        {isDermato && <DermatofunctionalGallery />}


        <ProcedureClosingSection
          eyebrow={detail.closingEyebrow}
          title={detail.closingTitle}
          body={detail.closingBody}
          quote={detail.quote}
        />
      </main>
      <SiteFooter />
    </>
  )
}

export default ProcedureDetail
