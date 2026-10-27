import portrait from '../assets/photo-juliana-about-section.webp'

interface ProcedureClosingSectionProps {
  eyebrow?: string
  title: string
  body: string
  quote: string
}

function ProcedureClosingSection({
  eyebrow = 'Abordagem humanizada e científica',
  title,
  body,
  quote,
}: ProcedureClosingSectionProps) {
  return (
    <section className="procedure-detail__closing">
      <div className="procedure-detail__closing-inner">
        <div className="procedure-detail__closing-art">
          <img src={portrait} alt="Retrato profissional da Dra. Juliana Rech" loading="lazy" decoding="async" />
        </div>
        <div className="procedure-detail__closing-copy" data-reveal="up">
          <p className="procedure-detail__eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {body.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>
            <span className="procedure-detail__quote-mark" aria-hidden="true">“</span>
            <p>“{quote}”</p>
            <footer className="procedure-detail__signature">
              <strong>— Dra. Juliana Rech</strong>
              <span>Fisioterapeuta Dermatofuncional | CREFITO 5/46886-F</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default ProcedureClosingSection
