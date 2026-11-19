import { Link } from 'react-router-dom'
import logo from '../assets/logo-comp-s-fundo.webp'
import SiteFooter from '../components/SiteFooter'
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <>
      <header className="privacy-page__header">
        <Link to="/" aria-label="Juliana Rech, página inicial">
          <img src={logo} alt="Juliana Rech — Fisioterapia" />
        </Link>
        <Link className="privacy-page__back" to="/">Voltar ao site</Link>
      </header>

      <main className="privacy-page">
        <article className="privacy-page__inner">
          <p className="eyebrow">Informações do site</p>
          <h1>Política de privacidade</h1>
          <p className="privacy-page__intro">
            Esta página explica quais informações podem ser processadas ao visitar o site de Juliana Rech e ao usar os recursos e links disponíveis.
          </p>

          <section aria-labelledby="privacy-purpose">
            <h2 id="privacy-purpose">Informações coletadas neste site</h2>
            <p>
              O site apresenta serviços, endereços e canais de atendimento. Ele não oferece cadastro, conta de usuário, formulário de contato ou pagamento. O código do site não instala ferramentas próprias de análise de audiência ou publicidade.
            </p>
            <p>
              Como acontece em serviços de hospedagem, dados técnicos da solicitação — por exemplo, endereço IP, navegador e horário de acesso — podem constar nos registros necessários para entregar e proteger as páginas. Esses registros são tratados conforme as práticas e os prazos do provedor de hospedagem.
            </p>
          </section>

          <section aria-labelledby="privacy-external-services">
            <h2 id="privacy-external-services">Mapas, fontes e links externos</h2>
            <p>
              O site carrega fontes do Google Fonts e pode exibir mapas incorporados do Google Maps na seção de endereços. Esses serviços podem receber dados técnicos do navegador quando seus recursos são carregados, de acordo com as políticas dos respectivos provedores.
            </p>
            <p>
              Os botões de WhatsApp, Instagram e Facebook levam a serviços externos. Ao abrir esses links, o tratamento de dados passa a seguir as políticas e configurações de privacidade de cada plataforma.
            </p>
            <p>
              O site não grava cookies próprios para análise ou publicidade. Recursos externos incorporados podem usar cookies ou tecnologias semelhantes conforme as configurações do provedor.
            </p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2 id="privacy-contact">Dúvidas ou solicitações</h2>
            <p>
              Para falar sobre privacidade ou solicitar informações relacionadas ao uso deste site, entre em contato pelo <a href="https://wa.me/5551985107415" target="_blank" rel="noreferrer">WhatsApp da clínica</a>.
            </p>
          </section>

          <p className="privacy-page__updated">Conteúdo revisado em 16 de novembro de 2026.</p>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
