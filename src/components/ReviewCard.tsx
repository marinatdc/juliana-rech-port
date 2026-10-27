import { useLayoutEffect, useRef, useState } from 'react'
import type { Review } from '../data/reviews'
import './ReviewCard.css'

interface ReviewCardProps {
  review: Review
}

function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [canExpand, setCanExpand] = useState(false)
  const quoteRef = useRef<HTMLQuoteElement>(null)

  useLayoutEffect(() => {
    if (expanded) return

    const quote = quoteRef.current
    if (!quote) return

    const updateOverflow = () => setCanExpand(quote.scrollHeight > quote.clientHeight + 1)
    updateOverflow()

    const observer = new ResizeObserver(updateOverflow)
    observer.observe(quote)
    return () => observer.disconnect()
  }, [expanded, review.text])

  return (
    <article className="review-card" data-expanded={expanded || undefined} data-reveal="up">
      <div className="review-card__meta">
        <span className="review-card__stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span>
      </div>
      <blockquote ref={quoteRef} className={!expanded ? 'is-collapsed' : ''}>{review.text}</blockquote>
      {canExpand && (
        <button
          className="review-card__expand"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
        >
          {expanded ? 'Leia menos' : 'Leia mais'}
          <span aria-hidden="true">→</span>
        </button>
      )}
      <p className="review-card__name">{review.name}</p>
    </article>
  )
}

export default ReviewCard
