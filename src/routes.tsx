import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Seo from './seo/Seo'
import WhatsAppFloat from './components/WhatsAppFloat'
import BackToTopFloat from './components/BackToTopFloat'
import Home from './pages/Home'
import ProcedureDetail from './pages/ProcedureDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'

export function SiteRoutes() {
  return (
    <>
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/tratamentos/:slug" element={<ProcedureDetail />} />
        <Route path="*" element={<main className="procedure-detail__not-found"><h1>Página não encontrada</h1><Link to="/">Voltar ao início</Link></main>} />
      </Routes>
      <WhatsAppFloat />
      <BackToTopFloat />
    </>
  )
}

export default function AppRoutes() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter>
}
