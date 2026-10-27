import type { ReactNode } from 'react'
import { PiFlowerLotusBold } from 'react-icons/pi'
import './SectionBadge.css'

interface SectionBadgeProps {
  children: ReactNode
}

function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <p className="section-badge">
      <PiFlowerLotusBold className="section-badge__icon" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default SectionBadge
