import { useLayoutEffect } from 'react'

const revealSelector = '[data-reveal]'

function useScrollReveal() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (!targets.length) return

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
  }, [])
}

export default useScrollReveal
