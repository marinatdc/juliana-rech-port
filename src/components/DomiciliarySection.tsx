import { BsWhatsapp } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import homeCarePhoto from '../assets/photo-home-care.webp'
import './DomiciliarySection.css'

const steps = [
  {
    number: '1',
    title: 'Contato prévio',
    text: 'Alinhamento das necessidades clínicas, fase de recuperação e disponibilidade de agenda.',
  },
  {
    number: '2',
    title: 'Especialista dedicada',
    text: 'Materiais esterilizados e adaptação do ambiente para oferecer segurança e conforto.',
  },
  {
    number: '3',
    title: 'Consulta individualizada',
    text: 'Tempo e orientações dedicados à paciente e, quando necessário, a familiares ou acompanhantes.',
  },
]

function DomiciliarySection() {
  return (
    <section className="domiciliary-section" id="atendimento-domiciliar" aria-labelledby="domiciliary-title">
      <div className="domiciliary-section__layout">
        <div className="domiciliary-section__copy" data-reveal="left">
          <p className="domiciliary-section__badge"><span aria-hidden="true">●</span> Cuidado com conforto &amp; discrição</p>
          <h2 id="domiciliary-title">
            Atendimento Domiciliar <span>cuidado especializado no conforto do seu lar.</span>
          </h2>
          <p className="domiciliary-section__description">
            Um atendimento fisioterapêutico individualizado, pensado para quem precisa de cuidados sem sair de casa. Ideal para pacientes em pós-operatórios que apresentam limitações para se deslocar, gestantes, mulheres no pós-parto e pessoas com restrição temporária de mobilidade, dores agudas ou que necessitam de maior conforto durante a recuperação.
          </p>
          <p className="domiciliary-section__promise">Cuidado, conforto e acolhimento</p>
          <a
            className="domiciliary-section__cta"
            href={`https://wa.me/5551985107415?text=${encodeURIComponent('Olá, gostaria de solicitar uma avaliação domiciliar.')}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="domiciliary-section__cta-icon" aria-hidden="true">
              <BsWhatsapp />
            </span>
            <span>Solicitar Avaliação<br />Domiciliar</span>
            <span className="domiciliary-section__cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="domiciliary-section__photo" data-reveal="up" role="img" aria-label="Atendimento fisioterapêutico domiciliar">
          <img className="domiciliary-section__photo-image" src={homeCarePhoto} alt="" loading="lazy" decoding="async" />
          <span className="domiciliary-section__photo-tag">
            <span className="domiciliary-section__photo-tag-dot" aria-hidden="true" />
            Cuidado humanizado no lar
          </span>
          <span className="domiciliary-section__photo-caption">
            <span>Dra. Juliana Rech em atendimento domiciliar</span>
            <strong>Cuidado, conforto e acolhimento</strong>
          </span>
        </div>

        <aside className="domiciliary-process" data-reveal="right" aria-labelledby="domiciliary-process-title">
          <div className="domiciliary-process__heading">
            <h3 id="domiciliary-process-title">Como funciona</h3>
            <span>Porto Alegre</span>
          </div>
          <ol>
            {steps.map((step) => (
              <li key={step.number}>
                <span className="domiciliary-process__number">{step.number}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="domiciliary-process__regions">
            <IoLocationOutline aria-hidden="true" />
            <p><strong>Regiões atendidas:</strong><span>Confirmar quais áreas são atendidas.</span></p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default DomiciliarySection
