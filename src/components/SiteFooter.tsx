import logo from '../assets/logo-comp-s-fundo.webp'
import { BsBuilding, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import './SiteFooter.css'

const navigation = [
  ['Quem sou', `${import.meta.env.BASE_URL}#sobre`],
  ['Para quem', `${import.meta.env.BASE_URL}#para-quem`],
  ['Como funciona', `${import.meta.env.BASE_URL}#como-funciona`],
  ['Procedimentos', `${import.meta.env.BASE_URL}#tratamentos`],
  ['Avaliações', `${import.meta.env.BASE_URL}#avaliacoes`],
  ['Atendimento domiciliar', `${import.meta.env.BASE_URL}#atendimento-domiciliar`],
  ['Contatos', `${import.meta.env.BASE_URL}#contato`],
]

function SiteFooter() {
  return (
    <footer className="global-footer">
      <div className="global-footer__content">
        <section className="global-footer__about" data-reveal="up" aria-label="Sobre a Dra. Juliana Rech">
          <a className="global-footer__brand" href={`${import.meta.env.BASE_URL}#inicio`} aria-label="Dra. Juliana Rech, início">
            <img src={logo} alt="Dra. Juliana Rech" />
            <span><strong>Dra. Juliana Rech</strong><small>CREFITO 5/46886-F</small></span>
          </a>
          <p>Fisioterapia Dermatofuncional com mais de 25 anos de dedicação à saúde, recuperação cirúrgica, reabilitação tecidual e cuidado individualizado de alta precisão.</p>
          <nav className="global-footer__social" aria-label="Redes sociais">
            <a className="global-footer__social-instagram" href="https://www.instagram.com/fisiojulianarech?cplk=c2Y5d2R0bnR0MHFy" target="_blank" rel="noreferrer" aria-label="Instagram">
              <BsInstagram aria-hidden="true" />
            </a>
            <a className="global-footer__social-facebook" href="https://www.facebook.com/JulianaRechFisioterapiaDermatofuncional/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <BsFacebook aria-hidden="true" />
            </a>
            <a className="global-footer__social-whatsapp" href={`https://wa.me/5551985107415?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o atendimento.')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <BsWhatsapp aria-hidden="true" />
            </a>
          </nav>
        </section>

        <nav className="global-footer__nav" data-reveal="up" aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          {navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <section className="global-footer__offices" data-reveal="up" aria-label="Consultórios e horários">
          <h2>Onde atendo</h2>
          <h3><BsBuilding aria-hidden="true" />Ed. Business</h3>
          <p>Av. Wenceslau Escobar, 2800<br />Sala 603 - Tristeza<br />Porto Alegre - RS<br />CEP 91900-000</p>
          <h3><BsBuilding aria-hidden="true" />Ed. Comendador Luigi Gerace</h3>
          <p>R. José de Alencar, 386<br />Sala 801 - Menino Deus<br />Porto Alegre - RS<br />CEP 90880-480</p>
        </section>

        <section className="global-footer__contact" data-reveal="up">
          <h2>Atendimento</h2>
          <p className="global-footer__hours">
            <span><strong>Segunda a sexta</strong> · 08h às 20h</span>
            <span><strong>Sábado</strong> · 08h às 12h</span>
            <span className="global-footer__hours-note">Atendimentos com hora marcada</span>
          </p>
          <p className="global-footer__contact-description">Dúvidas sobre protocolos pré e pós-operatórios ou agendamento de avaliações clínicas individualizadas.</p>
          <a
            className="global-footer__contact-button"
            href={`https://wa.me/5551985107415?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o atendimento.')}`}
            target="_blank"
            rel="noreferrer"
          >Agendar <span aria-hidden="true">➤</span></a>
        </section>
      </div>

      <div className="global-footer__legal">
        <p>© {new Date().getFullYear()} Dra. Juliana Rech Fisioterapia. Todos os direitos reservados. CREFITO 5/46886-F.</p>
        <div><a href={`${import.meta.env.BASE_URL}#contato`}>Privacidade &amp; Termos</a><span aria-hidden="true">•</span><a href={`${import.meta.env.BASE_URL}#contato`}>Ética Médica</a></div>
      </div>
    </footer>
  )
}

export default SiteFooter
