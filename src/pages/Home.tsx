import { useEffect, useState, type MouseEvent } from 'react'
import fotoJuliana from '../assets/foto-juliana-heading-recortada.webp'
import logo from '../assets/logo-comp-s-fundo.webp'
import mandala from '../assets/logo-mandala-recortada.webp'
import AboutSection from '../components/AboutSection'
import BookingSection from '../components/BookingSection'
import CareCard, { type CareCardProps } from '../components/CareCard'
import DomiciliarySection from '../components/DomiciliarySection'
import ProcedureCard from '../components/ProcedureCard'
import ReviewCard from '../components/ReviewCard'
import SiteFooter from '../components/SiteFooter'
import { procedures } from '../data/procedures'
import { reviews } from '../data/reviews'
import useScrollReveal from '../hooks/useScrollReveal'
import './Home.css'

const careAreas: CareCardProps[] = [
  {
    icon: 'scissors',
    title: 'Cirurgias Plásticas (Pré e Pós)',
    description: 'Para quem realizou ou realizará uma cirurgia plástica e busca um acompanhamento especializado, cuidadoso e individualizado em cada etapa da recuperação.',
    outcome: 'Recuperação Acelerada',
  },
  {
    icon: 'shield',
    title: 'Intercorrências Pós-Cirúrgicas e Estéticas',
    description: 'Para pessoas que, após procedimento estético ou cirúrgico, percebem que a recuperação não está acontecendo como esperavam e apresentam fibroses, edema persistente, dor, cicatrizes e aumento de volume.',
    outcome: 'Reparação Tecidual Precisa',
  },
  {
    icon: 'maternity',
    title: 'Gestantes e Pós-Parto',
    description: 'Para mulheres que desejam cuidar do corpo em cada fase da maternidade, encontrando mais conforto durante a gestação e favorecendo a recuperação do corpo e da funcionalidade no pós-parto.',
    outcome: 'Cuidado especializado à mulher na gestação e no pós-parto',
  },
  {
    icon: 'care',
    title: 'Pessoas que Convivem com a Dor',
    description: 'Para quem busca aliviar dores e desconfortos crônicos, recuperar movimentos e voltar a realizar suas atividades com mais liberdade e bem-estar.',
    outcome: 'Alívio e Mobilidade',
  },
  {
    icon: 'leaf',
    title: 'Fisioterapia Dermatofuncional',
    description: 'Para quem busca cuidar da pele e do corpo de forma individualizada, promovendo saúde, funcionalidade, bem-estar e autoestima em cada fase da vida.',
    outcome: 'Saúde e Estética Integrada',
  },
  {
    icon: 'drop',
    title: 'Linfedema e Lipedema',
    description: 'Para pessoas com linfedema ou lipedema que buscam um cuidado fisioterapêutico individualizado para favorecer o fluxo linfático, controlar o edema, aliviar desconfortos e proporcionar mais leveza.',
    outcome: 'Conforto Linfático e Leveza',
  },
]

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProceduresOpen, setIsProceduresOpen] = useState(false)
  const [isReviewsStarSpinning, setIsReviewsStarSpinning] = useState(false)
  useScrollReveal()

  function closeMenu() {
    setIsMenuOpen(false)
    setIsProceduresOpen(false)
  }

  function scrollToSection(section: HTMLElement) {
    const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
    const { top, height } = section.getBoundingClientRect()
    const availableHeight = window.innerHeight - headerHeight - 48
    const centeredTop = top + window.scrollY - (window.innerHeight - height) / 2
    const topAligned = top + window.scrollY - headerHeight - 24
    const scrollTop = section.id !== 'sobre' && height <= availableHeight ? centeredTop : topAligned
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  function handleSectionNavigation(event: MouseEvent<HTMLAnchorElement>) {
    closeMenu()
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return

    const section = document.getElementById(decodeURIComponent(href.slice(1)))
    if (!section) return

    event.preventDefault()
    window.history.pushState(null, '', href)
    scrollToSection(section)
  }

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (section) scrollToSection(section)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Juliana Rech, início" onClick={closeMenu}>
          <img src={logo} alt="" />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          id="site-navigation"
          aria-label="Navegação principal"
        >
          <a href="#sobre" onClick={handleSectionNavigation}>Quem sou</a>
          <a href="#para-quem" onClick={handleSectionNavigation}>Para quem</a>
          <a href="#como-funciona" onClick={handleSectionNavigation}>Como funciona</a>
          <div className={`site-nav__dropdown${isProceduresOpen ? ' is-open' : ''}`}>
            <div className="site-nav__procedure-controls">
              <a className="site-nav__procedure-link" href="#tratamentos" onClick={handleSectionNavigation}>Procedimentos</a>
              <button
                className="site-nav__trigger"
                type="button"
                aria-label={isProceduresOpen ? 'Fechar lista de procedimentos' : 'Abrir lista de procedimentos'}
                aria-expanded={isProceduresOpen}
                aria-controls="home-procedures-menu"
                onClick={() => setIsProceduresOpen((open) => !open)}
              >
                <svg viewBox="0 0 12 12" aria-hidden="true"><path d="m2.5 4.5 3.5 3 3.5-3" /></svg>
              </button>
            </div>
            <div className="site-nav__submenu" id="home-procedures-menu" hidden={!isProceduresOpen}>
              <a href="#tratamentos" onClick={handleSectionNavigation}>Todos os procedimentos</a>
              {procedures.map((procedure) => (
                <a href={`${import.meta.env.BASE_URL}tratamentos/${procedure.slug}`} key={procedure.slug} onClick={closeMenu}>
                  {procedure.title}
                </a>
              ))}
            </div>
          </div>
          <a href="#avaliacoes" onClick={handleSectionNavigation}>Avaliações</a>
          <a href="#atendimento-domiciliar" onClick={handleSectionNavigation}>Atendimento domiciliar</a>
          <a className="site-nav__cta" href="#contato" onClick={handleSectionNavigation}>
            Agendar avaliação <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-section__content" data-reveal="up">
            <p className="eyebrow">FISIOTERAPEUTA - CREFITO 5/46886-F</p>
            <h1>
              Cuidando de quem sente<br />
              dor e restaurando o<br />
              <span className="text-highlight">bem-estar </span><br />
              há mais de <span className="text-highlight">25 anos</span> .
            </h1>
            <p className="hero-section__lead">
              Fisioterapeuta há <strong>mais de 25 anos</strong>, com um <strong>olhar especializado para o corpo</strong>,<br />
              para a  <strong>mulher</strong> e para tudo aquilo que pode afetar a forma como uma pessoa se sente e<br />
              vive no próprio corpo.
            </p>
          </div>
          <div className="hero-art" data-reveal="right">
            <img
              className="hero-art__mandala"
              src={mandala}
              alt=""
              aria-hidden="true"
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              onContextMenu={(event) => event.preventDefault()}
            />
            <img
              className="hero-art__portrait"
              fetchPriority="high"
              src={fotoJuliana}
              alt="Juliana Rech, fisioterapeuta"
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </section>

        <AboutSection />

        <section className="care-section" id="para-quem">
          <div className="section-wrap">
            <div className="care-section__heading" data-reveal="up">
              <p className="eyebrow">Cada fase da vida</p>
              <h2>Cuidados pensados para <span>cada fase da vida</span></h2>
              <p>Abordagem clínica atenta e acolhedora, respeitando o momento biológico e funcional de cada paciente.</p>
            </div>
            <div className="care-grid">
              {careAreas.map((area) => (
                <CareCard key={area.title} {...area} />
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="como-funciona" aria-labelledby="process-title">
          <div className="section-wrap">
            <div className="process-section__heading" data-reveal="up">
              <p className="eyebrow">Jornada do paciente</p>
              <h2 id="process-title">Como funciona o <span>seu</span> atendimento</h2>
              <p>Sem fórmulas prontas ou tratamentos padronizados. Uma metodologia de três etapas com foco total no seu objetivo.</p>
            </div>
            <div className="process-steps">
              <article data-reveal="up">
                <span className="process-step__number">01</span>
                <h3>Avaliação Individual &amp; Detalhada</h3>
                <p>Análise aprofundada do histórico clínico, dor, tônus muscular e hábitos. Entendemos a raiz do incômodo com exame minucioso.</p>
              </article>
              <article className="process-step--featured" data-reveal="up">
                <span className="process-step__number">02</span>
                <h3>Protocolo Personalizado Exclusivo</h3>
                <p>Um plano terapêutico individualizado, que combina as técnicas e os recursos mais adequados para ti, como Dry Needling, Taping, tecnologias dermatofuncionais e drenagem linfática, com etapas bem definidas e acompanhamento profissional em cada fase do tratamento.</p>
              </article>
              <article data-reveal="up">
                <span className="process-step__number">03</span>
                <h3>Acompanhamento e Conforto</h3>
                <p>Monitoramento de cada sessão, mensuração de resultados e ajustes em tempo real para devolver sua qualidade de vida com tranquilidade e autonomia.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="procedures-section" id="tratamentos">
          <div className="section-wrap">
            <div className="procedures-section__heading">
              <div data-reveal="up">
                <p className="eyebrow">Quais tratamentos trabalho</p>
                <h2>Procedimentos</h2>
              </div>
              <a
                className="procedures-section__instagram"
                data-reveal="up"
                href="https://www.instagram.com/fisiojulianarech?cplk=c2Y5d2R0bnR0MHFy"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.8" r="0.8" />
                </svg>
                Acompanhar no Instagram
              </a>
            </div>
            <div className="procedures-grid">
              {procedures.map((procedure) => (
                <ProcedureCard key={procedure.slug} procedure={procedure} />
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section" id="avaliacoes" aria-labelledby="reviews-title">
          <div className="section-wrap">
            <div className="reviews-section__heading" data-reveal="up">
              <p className="eyebrow">Resultados &amp; confiança</p>
              <h2 id="reviews-title">O que dizem os pacientes atendidos</h2>
              <p>Histórias reais de recuperação física, alívio da dor crônica e satisfação estética.</p>
              <a
                className={`reviews-section__more${isReviewsStarSpinning ? ' is-spinning' : ''}`}
                href="https://www.google.com/maps/place/Dra.+Juliana+Rech+-+Fisioterapia+Dermatofuncional,+Acupuntura+Dry+Needling+%26+Est%C3%A9tica,+Taping/@-30.1122752,-51.2598625,17z/data=!4m18!1m9!3m8!1s0x9519684f6dba270f:0x7d58ed3dad2c8d84!2sDra.+Juliana+Rech+-+Fisioterapia+Dermatofuncional,+Acupuntura+Dry+Needling+%26+Est%C3%A9tica,+Taping!8m2!3d-30.1122799!4d-51.2549916!9m1!1b1!16s%2Fg%2F11h06vb6w!3m7!1s0x9519684f6dba270f:0x7d58ed3dad2c8d84!8m2!3d-30.1122799!4d-51.2549916!9m1!1b1!16s%2Fg%2F11h06vb6w?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setIsReviewsStarSpinning(true)
                  window.setTimeout(() => setIsReviewsStarSpinning(false), 700)
                }}
              >
                <span aria-hidden="true">★</span> Ver mais avaliações <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="reviews-grid">
              {reviews.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>
          </div>
        </section>

        <DomiciliarySection />
        <BookingSection />
      </main>

      <SiteFooter />
    </>
  )
}

export default Home
