import { FiArrowUp } from 'react-icons/fi'
import './BackToTopFloat.css'

function BackToTopFloat() {
  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    window.scrollTo({ top: 0, behavior })
  }

  return (
    <button
      className="back-to-top-float"
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTopFloat
