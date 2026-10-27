import { Link } from 'react-router-dom'
import type { Procedure } from '../data/procedures'
import './ProcedureCard.css'

interface ProcedureCardProps {
  procedure: Procedure
}

function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Link className="procedure-card" data-reveal="up" to={`/tratamentos/${procedure.slug}`}>
      <img
        className={`procedure-card__image${procedure.slug === 'pre-e-pos-operatorio' ? ' procedure-card__image--pre-post' : ''}`}
        src={procedure.image}
        alt={procedure.title}
        loading="lazy"
        decoding="async"
      />
      <div className="procedure-card__content">
        <h3>{procedure.title}</h3>
        <p>{procedure.description}</p>
        <span className="procedure-card__link">
          Ver protocolo completo <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}

export default ProcedureCard
