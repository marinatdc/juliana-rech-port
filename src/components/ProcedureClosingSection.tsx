import { useEffect, useRef } from 'react'
import portrait from '../assets/photo-juliana-about-section.webp'

interface ProcedureClosingSectionProps {
  eyebrow?: string
  title: string
  body: string
  quote: string
  imageSrc?: string
  imageSrcSet?: string
  imageAlt?: string
  videoSrc?: string
}

function ProcedureClosingSection({
  eyebrow = 'Abordagem humanizada e científica',
  title,
  body,
  quote,
  imageSrc,
  imageSrcSet,
  imageAlt = 'Retrato profissional da Dra. Juliana Rech',
  videoSrc,
}: ProcedureClosingSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().catch(() => undefined)
      } else {
        video.pause()
      }
    }, { threshold: 0.15 })

    observer.observe(video)
    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [])

  return (
    <section className="procedure-detail__closing">
      <div className="procedure-detail__closing-inner">
        <div className={`procedure-detail__closing-art${videoSrc ? ' is-video' : ''}`}>
          {videoSrc ? (
            <video ref={videoRef} className="procedure-detail__closing-video" muted loop playsInline preload="none" aria-label="Vídeo de atendimento dermatofuncional">
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não oferece reprodução de vídeo.
            </video>
          ) : (
            <img
              src={imageSrc ?? portrait}
              srcSet={imageSrcSet}
              sizes={imageSrcSet ? '(max-width: 760px) 100vw, 392px' : undefined}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
        <div className="procedure-detail__closing-copy" data-reveal="up">
          <p className="procedure-detail__eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {body.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>
            <span className="procedure-detail__quote-mark" aria-hidden="true">“</span>
            <p>“{quote}”</p>
            <footer className="procedure-detail__signature">
              <strong>— Dra. Juliana Rech</strong>
              <span>Fisioterapeuta Dermatofuncional | CREFITO 5/46886-F</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default ProcedureClosingSection
