import { useEffect, useRef, useState } from 'react'
import './DermatofunctionalGallery.css'
import fd1_480 from '../assets/fisio-dermato/optimized/fd_1-480.webp'
import fd1_960 from '../assets/fisio-dermato/optimized/fd_1-960.webp'
import fd2_480 from '../assets/fisio-dermato/optimized/fd_2-480.webp'
import fd2_960 from '../assets/fisio-dermato/optimized/fd_2-960.webp'
import fd3_480 from '../assets/fisio-dermato/optimized/fd_3-480.webp'
import fd3_960 from '../assets/fisio-dermato/optimized/fd_3-960.webp'
import fd4_480 from '../assets/fisio-dermato/optimized/fd_4-480.webp'
import fd4_960 from '../assets/fisio-dermato/optimized/fd_4-960.webp'
import fd5_480 from '../assets/fisio-dermato/optimized/fd_5-480.webp'
import fd5_960 from '../assets/fisio-dermato/optimized/fd_5-960.webp'
import fd6_480 from '../assets/fisio-dermato/optimized/fd_6-480.webp'
import fd6_960 from '../assets/fisio-dermato/optimized/fd_6-960.webp'
import fd7_480 from '../assets/fisio-dermato/optimized/fd_7-480.webp'
import fd7_960 from '../assets/fisio-dermato/optimized/fd_7-960.webp'
import floralBranch from '../assets/ramo-botanico-rosa-delicado.webp'
import dermatoComparison3 from '../assets/fisio-dermato/media/dermato-funcional-3.jpg'
import dermatoComparison4 from '../assets/fisio-dermato/media/dermato-funcional-4.jpg'
import dermatoComparison5 from '../assets/fisio-dermato/media/dermato-funcional-5.jpg'

type GalleryImageRecord = {
  kind: 'image'
  small: string
  large: string
  width: number
  height: number
  alt: string
  caption: string
  placement?: 'assessment'
  comparisonOrientation?: 'side-by-side' | 'stacked'
}

type GalleryVideoRecord = {
  kind: 'video'
  src: string
  alt: string
  caption: string
}

type GalleryRecord = GalleryImageRecord | GalleryVideoRecord

const records: GalleryRecord[] = [
  { kind: 'image', small: dermatoComparison3, large: dermatoComparison3, width: 2896, height: 2896, alt: 'Registro comparativo de acompanhamento dermatofuncional da pele, em vista lateral.', caption: 'Acompanhamento facial · vista lateral', placement: 'assessment', comparisonOrientation: 'side-by-side' },
  { kind: 'image', small: dermatoComparison4, large: dermatoComparison4, width: 2896, height: 2896, alt: 'Registro comparativo de acompanhamento dermatofuncional da região dos olhos.', caption: 'Acompanhamento facial · região dos olhos', placement: 'assessment', comparisonOrientation: 'side-by-side' },
  { kind: 'image', small: dermatoComparison5, large: dermatoComparison5, width: 2896, height: 2896, alt: 'Registro comparativo de acompanhamento dermatofuncional da região abdominal.', caption: 'Acompanhamento corporal · abdômen', placement: 'assessment', comparisonOrientation: 'stacked' },
  { kind: 'image', small: fd1_480, large: fd1_960, width: 960, height: 439, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { kind: 'image', small: fd2_480, large: fd2_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região glútea, em vista lateral.', caption: 'Região glútea · vista lateral' },
  { kind: 'image', small: fd3_480, large: fd3_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { kind: 'image', small: fd4_480, large: fd4_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { kind: 'image', small: fd5_480, large: fd5_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal e cintura, em vista lateral.', caption: 'Cintura e abdômen · vista lateral' },
  { kind: 'image', small: fd6_480, large: fd6_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em diferentes posições.', caption: 'Abdômen · diferentes posições' },
  { kind: 'image', small: fd7_480, large: fd7_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Abdômen · vista lateral' },
]

const GALLERY_DOT_COUNT = 5

function DermatofunctionalGallery({ placement = 'gallery' }: { placement?: 'assessment' | 'gallery' }) {
  const visibleRecords = records.filter((record) => placement === 'assessment'
    ? record.kind === 'image' && record.placement === 'assessment'
    : record.kind !== 'image' || record.placement !== 'assessment')
  const carouselRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selectedRecord, setSelectedRecord] = useState<GalleryImageRecord | null>(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const updateControls = () => {
      setCanScrollBack(carousel.scrollLeft > 2)
      setCanScrollForward(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 2)

      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
      const progress = maxScrollLeft > 0 ? carousel.scrollLeft / maxScrollLeft : 0
      setActiveDot(Math.round(progress * (GALLERY_DOT_COUNT - 1)))

      const cards = Array.from(carousel.querySelectorAll<HTMLElement>('.dermato-gallery__item'))
      if (cards.length) {
        const carouselLeft = carousel.getBoundingClientRect().left
        const nearestIndex = cards.reduce((nearest, card, index) => {
          const currentDistance = Math.abs(card.getBoundingClientRect().left - carouselLeft)
          const nearestDistance = Math.abs(cards[nearest].getBoundingClientRect().left - carouselLeft)
          return currentDistance < nearestDistance ? index : nearest
        }, 0)
        setActiveSlide(nearestIndex)
      }
    }

    updateControls()
    carousel.addEventListener('scroll', updateControls, { passive: true })
    const resizeObserver = new ResizeObserver(updateControls)
    resizeObserver.observe(carousel)

    return () => {
      carousel.removeEventListener('scroll', updateControls)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedRecord && !dialog.open) dialog.showModal()
    if (!selectedRecord && dialog.open) dialog.close()
  }, [selectedRecord])

  const scrollCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const firstCard = carousel.querySelector<HTMLElement>('.dermato-gallery__item')
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 16
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : carousel.clientWidth
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    carousel.scrollBy({ left: direction * distance, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current
    const card = carousel?.querySelectorAll<HTMLElement>('.dermato-gallery__item')[index]
    if (!carousel || !card) return
    const left = card.getBoundingClientRect().left - carousel.getBoundingClientRect().left + carousel.scrollLeft
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    carousel.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const scrollToPosition = (index: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    const left = maxScrollLeft * (index / (GALLERY_DOT_COUNT - 1))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    carousel.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  const closeDialog = () => setSelectedRecord(null)

  return (
    <section className={`dermato-gallery${placement === 'assessment' ? ' dermato-gallery--assessment' : ''}`} aria-label="Registros de acompanhamento dermatofuncional">
      {placement === 'gallery' && <img className="dermato-gallery__floral" src={floralBranch} alt="" aria-hidden="true" />}
      <div className="dermato-gallery__inner">
        {placement === 'gallery' && <header className="dermato-gallery__intro dermato-gallery__intro--gallery">
          <div className="dermato-gallery__intro-content">
            <span className="dermato-gallery__intro-eyebrow">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h3l1.5-2h7l1.5 2h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
              Resultados reais
            </span>
            <h2>Resultados e transformações</h2>
            <p>Acompanhe registros do cuidado dermatofuncional, respeitando a individualidade e a evolução de cada pessoa.</p>
          </div>
        </header>}
        {placement === 'assessment' && <header className="dermato-gallery__intro">
          <div>
            <span className="dermato-gallery__intro-eyebrow">Resultados reais</span>
            <h2>Cada evolução conta uma <em>história</em></h2>
          </div>
          <p>Acompanhe alguns registros do tratamento, respeitando as particularidades e a evolução de cada paciente.</p>
        </header>}
        <div className="dermato-gallery__carousel" role="group" aria-label={placement === 'assessment' ? 'Fotos da avaliação dermatofuncional' : 'Controles do carrossel'}>
          {placement === 'gallery' && <button
            className="dermato-gallery__arrow"
            type="button"
            aria-label="Ver fotos anteriores"
            onClick={() => scrollCarousel(-1)}
            disabled={!canScrollBack}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>}
          <div
            className="dermato-gallery__grid"
            ref={carouselRef}
            role={placement === 'assessment' ? 'group' : 'region'}
            aria-roledescription={placement === 'gallery' ? 'carrossel' : undefined}
            aria-label={placement === 'assessment' ? 'Fotos de avaliação dermatofuncional' : 'Fotos e vídeos de acompanhamento dermatofuncional'}
            tabIndex={placement === 'gallery' ? 0 : undefined}
          >
            {visibleRecords.map((record, index) => (
              <figure className={`dermato-gallery__item${record.kind === 'video' ? ' is-video' : ''}`} key={record.kind === 'image' ? record.small : record.src}>
                {record.kind === 'image' ? (
                  <button
                    className="dermato-gallery__open"
                    type="button"
                    onClick={() => setSelectedRecord(record)}
                    aria-label={'Ampliar foto ' + (index + 1) + ': ' + record.caption}
                  >
                    <span className={`dermato-gallery__photo-frame${record.comparisonOrientation ? ` is-comparison is-${record.comparisonOrientation}` : ''}`}>
                      <img
                        src={record.small}
                        srcSet={record.small === record.large ? undefined : record.small + ' 480w, ' + record.large + ' 960w'}
                        sizes="(max-width: 560px) min(78vw, 23rem), (max-width: 900px) 18rem, 22rem"
                        width={record.width}
                        height={record.height}
                        alt={record.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      {record.comparisonOrientation && <span className="dermato-gallery__comparison-labels" aria-hidden="true">
                        <span className="is-before">Antes</span>
                        <span className="is-after">Depois</span>
                      </span>}
                    </span>
                    <span className="dermato-gallery__zoom" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>
                      Ampliar
                    </span>
                  </button>
                ) : (
                  <span className="dermato-gallery__photo-frame dermato-gallery__video-frame">
                    <video controls playsInline preload="metadata" aria-label={record.alt}>
                      <source src={record.src} type="video/mp4" />
                      Seu navegador não oferece reprodução de vídeo.
                    </video>
                  </span>
                )}
                <figcaption>
                  {placement === 'gallery' ? 'Acompanhamento dermatofuncional' : record.caption}
                  {placement === 'gallery' && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" /></svg>}
                </figcaption>
              </figure>
            ))}
          </div>
          {placement === 'gallery' && <button
            className="dermato-gallery__arrow"
            type="button"
            aria-label="Ver próximas fotos"
            onClick={() => scrollCarousel(1)}
            disabled={!canScrollForward}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>}
        </div>
        {placement === 'gallery' && <div className="dermato-gallery__dots dermato-gallery__dots--desktop" role="group" aria-label="Escolher posição na galeria">
          {Array.from({ length: GALLERY_DOT_COUNT }, (_, index) => <button
            key={index}
            type="button"
            aria-label={`Ir para posição ${index + 1} de ${GALLERY_DOT_COUNT}`}
            aria-current={activeDot === index ? 'true' : undefined}
            onClick={() => scrollToPosition(index)}
          />)}
        </div>}
        {placement === 'gallery' && <div className="dermato-gallery__dots dermato-gallery__dots--mobile" role="group" aria-label="Escolher foto da galeria">
          {visibleRecords.map((record, index) => <button
            key={record.kind === 'image' ? record.small : record.src}
            type="button"
            aria-label={`Ir para foto ${index + 1} de ${visibleRecords.length}`}
            aria-current={activeSlide === index ? 'true' : undefined}
            onClick={() => scrollToSlide(index)}
          />)}
        </div>}
      </div>

      <dialog
        className="dermato-gallery__dialog"
        ref={dialogRef}
        aria-label="Foto de acompanhamento ampliada"
        onClick={(event) => { if (event.target === event.currentTarget) closeDialog() }}
        onClose={closeDialog}
      >
        {selectedRecord && (
          <div className="dermato-gallery__lightbox">
            <button className="dermato-gallery__close" type="button" aria-label="Fechar foto ampliada" onClick={closeDialog}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
            <img
              src={selectedRecord.large}
              width={selectedRecord.width}
              height={selectedRecord.height}
              alt={selectedRecord.alt}
              decoding="async"
            />
            <p>{placement === 'gallery' ? 'Acompanhamento dermatofuncional' : selectedRecord.caption}</p>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default DermatofunctionalGallery
