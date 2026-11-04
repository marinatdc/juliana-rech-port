import { useLayoutEffect } from 'react'

const revealSelector = '[data-reveal]'

function useScrollReveal(routeKey?: string) {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (!targets.length) return

    const viewportHeight = window.innerHeight
    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect()
      if (bounds.top < viewportHeight && bounds.bottom > 0) {
        target.classList.add('is-revealed')
      }
    })

    document.documentElement.classList.add('scroll-reveal-ready')

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-revealed'))
      return () => document.documentElement.classList.remove('scroll-reveal-ready')
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('scroll-reveal-ready')
    }
  }, [routeKey])
}

export default useScrollReveal
