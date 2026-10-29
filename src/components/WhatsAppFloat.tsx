import { BsWhatsapp } from 'react-icons/bs'
import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const message = encodeURIComponent('Olá, gostaria de mais informações sobre o atendimento.')

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/5551985107415?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp com Juliana Rech"
      title="Fale pelo WhatsApp"
    >
      <BsWhatsapp aria-hidden="true" />
    </a>
  )
}

export default WhatsAppFloat
