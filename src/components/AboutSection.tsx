import fotoJuliana from '../assets/photo-juliana-about-section.webp'
import './AboutSection.css'

function AboutCopy() {
  return (
    <div className="about-section__content" data-reveal="left">
      <p className="eyebrow">Sobre a especialista</p>
      <h2 id="about-title">
        Quem é a <span>Dra. Juliana Rech</span>
      </h2>

      <p className="about-section__intro">
        Ao longo da minha trajetória, aprendi que <strong>nenhum corpo conta uma história igual ao outro.</strong> Por isso, meu atendimento começa pela escuta, pela avaliação e pela compreensão de cada pessoa, antes de qualquer técnica.
      </p>

      <blockquote className="about-section__quote-card">
        <p>
          “Muitas vezes, a paciente chega ao consultório não apenas com uma alteração física, mas também com uma dor emocional: a frustração de um procedimento estético cujo resultado não saiu como esperava, uma fibrose, uma cicatriz, uma alteração após uma cirurgia ou simplesmente a sensação de não se reconhecer no próprio corpo.”
        </p>
        <cite>É nesse momento que a fisioterapia pode fazer muito mais.</cite>
      </blockquote>

      <p className="about-section__bio">
        Atuo no cuidado do corpo feminino, na gestação e no pós-parto, na recuperação após procedimentos estéticos e cirurgias, e no acompanhamento de pessoas com lipedema e linfedema, inclusive após tratamentos oncológicos. Também tenho experiência no tratamento da dor, utilizando técnicas como o Dry Needling, sempre de acordo com as necessidades e características de cada paciente.
      </p>

      <blockquote className="about-section__closing-quote">
        “Porque, pra mim, fisioterapia não é apenas tratar um corpo. É cuidar da pessoa que existe dentro dele.”
      </blockquote>
    </div>
  )
}

function AboutPortrait() {
  return (
    <div className="about-section__portrait-wrap" data-reveal="right">
      <img
        className="about-section__portrait"
        loading="lazy"
        decoding="async"
        src={fotoJuliana}
        alt="Dra. Juliana Rech, fisioterapeuta"
        draggable={false}
      />
    </div>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="about-section__inner">
        <AboutCopy />
        <AboutPortrait />
      </div>
    </section>
  )
}

export default AboutSection
