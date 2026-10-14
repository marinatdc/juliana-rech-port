import { useState } from 'react'
import fotoJuliana from '../assets/foto-juliana-heading-recortada.png'
import logo from '../assets/logo-comp-s-fundo.png'
import mandala from '../assets/logo-mandala-recortada.png'
import './Home.css'

const treatments = [
  {
    number: '01',
    title: 'Pré e pós-operatório',
    text: 'Acompanhamento individualizado para cada fase da preparação e da recuperação cirúrgica.',
  },
  {
    number: '02',
    title: 'Linfedema e lipedema',
    text: 'Cuidado especializado para auxiliar no manejo dos sintomas, da mobilidade e do conforto.',
  },
  {
    number: '03',
    title: 'Gestação e pós-parto',
    text: 'Fisioterapia adaptada às transformações e necessidades de cada etapa da maternidade.',
  },
  {
    number: '04',
    title: 'Dor e movimento',
    text: 'Uma abordagem que considera a dor, a rotina e a funcionalidade de cada pessoa.',
  },
  {
    number: '05',
    title: 'Dermatofuncional',
    text: 'Cuidados para a pele e os tecidos com avaliação e indicação individualizadas.',
  },
  {
    number: '06',
    title: 'Intercorrências',
    text: 'Avaliação fisioterapêutica de alterações que podem surgir após procedimentos.',
  },
]

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

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
          <a href="#sobre" onClick={closeMenu}>Quem sou</a>
          <a href="#sobre" onClick={closeMenu}>Para quem</a>
          <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
          <a href="#contato" onClick={closeMenu}>Avaliações</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-section__content">
            <p className="eyebrow">FISIOTERAPEUTA - CREFITO 5/46886-F</p>
            <h1>
              Cuidando de quem sente<br />
              dor e restaurando o<br />
              <span className="text-highlight">bem-estar</span>
              há mais de <span className="text-highlight">25 anos</span> .
            </h1>
            <p className="hero-section__lead">
              Fisioterapeuta há <strong>mais de 25 anos</strong>, com um <strong>olhar especializado para o corpo</strong>,<br />
              para a  <strong>mulher</strong> e para tudo aquilo que pode afetar a forma como uma pessoa se sente e<br />
              vive no próprio corpo.
            </p>
          </div>
          <div className="hero-art">
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
              src={fotoJuliana}
              alt="Juliana Rech, fisioterapeuta"
              draggable={false}
              onDragStart={(event) => event.preventDefault()}
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </section>

        <section className="intro-section section-wrap" id="sobre">
          <p className="eyebrow">Um cuidado que começa pela escuta</p>
          <div className="intro-section__grid">
            <h2>O teu corpo tem uma história. O tratamento também deve considerar isso.</h2>
            <div className="intro-section__copy">
              <p>
                Cada pessoa vive suas necessidades de um jeito. Por isso, o
                acompanhamento começa com uma avaliação cuidadosa e um plano
                pensado para a tua rotina, teus objetivos e teu momento.
              </p>
              <a className="text-link" href="#como-funciona">Como funciona o atendimento <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="treatments-section" id="tratamentos">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Áreas de cuidado</p>
                <h2>Tratamentos com atenção ao que importa para ti.</h2>
              </div>
              <p>Uma abordagem individualizada, guiada por avaliação e pelas necessidades de cada pessoa.</p>
            </div>
            <div className="treatment-grid">
              {treatments.map((treatment) => (
                <article className="treatment-card" key={treatment.number}>
                  <span className="treatment-card__number">{treatment.number}</span>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.text}</p>
                  <span className="treatment-card__arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section section-wrap" id="como-funciona">
          <div className="process-section__heading">
            <p className="eyebrow">Como funciona</p>
            <h2>Um caminho construído junto contigo.</h2>
          </div>
          <div className="process-steps">
            <article><span>01</span><h3>Escuta e avaliação</h3><p>Conversamos sobre tua história, tua rotina e o que te trouxe até aqui.</p></article>
            <article><span>02</span><h3>Plano individual</h3><p>Definimos objetivos e recursos de cuidado de acordo com a avaliação.</p></article>
            <article><span>03</span><h3>Acompanhamento</h3><p>A evolução é acompanhada e o cuidado pode ser ajustado ao longo do processo.</p></article>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-section__inner">
            <p className="eyebrow">Vamos conversar?</p>
            <h2>O próximo passo começa com uma conversa.</h2>
            <p>Encontre o melhor canal para entrar em contato e saber mais sobre o atendimento.</p>
            <p className="contact-section__prompt">Entre em contato para conversar sobre o atendimento.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#inicio">
          <span className="brand__name">Juliana Rech</span>
          <span className="brand__descriptor">Fisioterapia especializada</span>
        </a>
        <span>© {new Date().getFullYear()} Juliana Rech</span>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>
    </>
  )
}

export default Home
