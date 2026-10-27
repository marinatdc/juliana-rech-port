import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Seo from './seo/Seo'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import ProcedureDetail from './pages/ProcedureDetail'

export function SiteRoutes() {
  return (
    <>
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamentos/:slug" element={<ProcedureDetail />} />
        <Route path="*" element={<main className="procedure-detail__not-found"><h1>Página não encontrada</h1><Link to="/">Voltar ao início</Link></main>} />
      </Routes>
      <WhatsAppFloat />
    </>
  )
}

export default function AppRoutes() {
  return <BrowserRouter><SiteRoutes /></BrowserRouter>
}
