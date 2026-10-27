import type { ReactNode } from 'react'
import './CareCard.css'

export type CareCardIcon = 'scissors' | 'shield' | 'maternity' | 'care' | 'leaf' | 'drop'

export interface CareCardProps {
  icon: CareCardIcon
  title: string
  description: string
  outcome: string
}

const icons: Record<CareCardIcon, ReactNode> = {
  scissors: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m8 8 12 12M8 16l12-12M12 12l2 2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M12 8v6m-3-3h6" />
    </svg>
  ),
  maternity: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="5" r="2" />
      <path d="M9 9h4l1 3c.7 2 2 3 4 3h1v3h-2c-3 0-5-1.5-6-4l-1-2-1 8H6l1.5-9C7.7 9.8 8.2 9 9 9Z" />
      <path d="M13 12c.5 1.5 1.5 2 3 2" />
    </svg>
  ),
  care: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-7-4.2-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.8-7 9-7 9Z" />
      <path d="M3 19h5l2-2 2 2h8" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4C11 4 5 7 5 13a5 5 0 0 0 5 5c6 0 9-6 10-14Z" />
      <path d="M4 21c3-5 6-8 12-12" />
    </svg>
  ),
  drop: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12Z" />
      <path d="M9 16a3 3 0 0 0 3 3" />
    </svg>
  ),
}

function CareCard({ icon, title, description, outcome }: CareCardProps) {
  return (
    <article className="care-card" data-reveal="up">
      <span className="care-card__icon">{icons[icon]}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="care-card__outcome">{outcome}</span>
    </article>
  )
}

export default CareCard
