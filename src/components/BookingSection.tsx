import { useState, type MouseEvent } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import LocationsSection from './LocationsSection'
import './BookingSection.css'

function BookingSection() {
  const [copyNotice, setCopyNotice] = useState('')
  const phoneNumber = '+55 51 8510-7415'
  const displayPhoneNumber = '(51) 8510-7415'
  const phoneDigits = '555185107415'

  async function copyPhoneNumber() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneNumber)
      } else {
        const input = document.createElement('textarea')
        input.value = phoneNumber
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.append(input)
        input.select()
        document.execCommand('copy')
        input.remove()
      }
      setCopyNotice(`Copiado para a área de transferência: ${phoneNumber}`)
      window.setTimeout(() => setCopyNotice(''), 3500)
    } catch {
      setCopyNotice(`Número para contato: ${phoneNumber}`)
      window.setTimeout(() => setCopyNotice(''), 5000)
    }
  }

  function handlePhoneClick(event: MouseEvent<HTMLAnchorElement>) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || (navigator.maxTouchPoints > 1 && window.matchMedia('(max-width: 1024px)').matches)

    if (!isMobile) {
      event.preventDefault()
      void copyPhoneNumber()
    }
  }

  return (
    <section className="booking-section" id="contato" aria-labelledby="booking-title">
      <div className="booking-section__panel">
        <div className="booking-section__content" data-reveal="left">
          <p className="eyebrow">Agendamento clínico</p>
          <h2 id="booking-title">
            Dê o primeiro passo para o <span>alívio e a recuperação</span> que seu corpo pede.
          </h2>
          <p className="booking-section__description">
            Um atendimento individualizado, com horário exclusivo e atenção integral da Dra. Juliana Rech. Um espaço de acolhimento, escuta e cuidado, onde tuas necessidades são avaliadas com atenção para definir o tratamento mais adequado para ti.
          </p>

          <div className="booking-section__actions" aria-label="Canais de agendamento">
            <a
              className="booking-action booking-action--whatsapp"
              href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent('Olá, gostaria de agendar um atendimento.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="booking-action__icon" aria-hidden="true">
                <BsWhatsapp />
              </span>
              <span className="booking-action__label">
                <span>Agende pelo WhatsApp</span>
                <strong>{displayPhoneNumber}</strong>
              </span>
              <span className="booking-action__arrow" aria-hidden="true">→</span>
            </a>

            <a
              className="booking-action booking-action--phone"
              href={`tel:${phoneDigits}`}
              onClick={handlePhoneClick}
              aria-label={`Ligar para ${phoneNumber} ou copiar o número no computador`}
            >
              <span className="booking-action__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3.5h3l1.5 4-2 1.5a15 15 0 0 0 5.5 5.5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10 21 3 14 3 5.5c0-1.1.9-2 2-2h2Z" />
                </svg>
              </span>
              <span className="booking-action__label">
                <span>Agende por telefone</span>
                <strong>{displayPhoneNumber}</strong>
              </span>
              <span className="booking-action__arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <p className="booking-section__copy-notice" role="status" aria-live="polite" data-visible={Boolean(copyNotice)}>
            {copyNotice}
          </p>

          <div className="booking-section__hours">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div className="booking-section__hours-content">
              <strong>Horários de atendimento</strong>
              <span className="booking-section__hours-row"><span>Segunda a sexta</span><time>08:00 às 20:00</time></span>
              <span className="booking-section__hours-row"><span>Sábado</span><time>08:00 às 12:00</time></span>
            </div>
          </div>
        </div>

        <div className="booking-section__locations" data-reveal="right">
          <LocationsSection compact />
        </div>
      </div>
    </section>
  )
}

export default BookingSection
