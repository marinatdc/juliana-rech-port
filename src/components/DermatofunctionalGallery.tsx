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

type GalleryRecord = {
  small: string
  large: string
  width: number
  height: number
  alt: string
  caption: string
}

const records: GalleryRecord[] = [
  { small: fd1_480, large: fd1_960, width: 960, height: 439, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd2_480, large: fd2_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região glútea, em vista lateral.', caption: 'Região glútea · vista lateral' },
  { small: fd3_480, large: fd3_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd4_480, large: fd4_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd5_480, large: fd5_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal e cintura, em vista lateral.', caption: 'Cintura e abdômen · vista lateral' },
  { small: fd6_480, large: fd6_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em diferentes posições.', caption: 'Abdômen · diferentes posições' },
  { small: fd7_480, large: fd7_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Abdômen · vista lateral' },
]

function DermatofunctionalGallery() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [selectedRecord, setSelectedRecord] = useState<GalleryRecord | null>(null)
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(true)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const updateControls = () => {
      setCanScrollBack(carousel.scrollLeft > 2)
      setCanScrollForward(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 2)
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

  const closeDialog = () => setSelectedRecord(null)

  return (
    <section className="dermato-gallery" aria-label="Registros de acompanhamento dermatofuncional">
      <div className="dermato-gallery__inner">
        <div className="dermato-gallery__carousel" role="group" aria-label="Controles do carrossel">
          <button
            className="dermato-gallery__arrow"
            type="button"
            aria-label="Ver fotos anteriores"
            onClick={() => scrollCarousel(-1)}
            disabled={!canScrollBack}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div
            className="dermato-gallery__grid"
            ref={carouselRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Fotos de acompanhamento dermatofuncional"
            tabIndex={0}
          >
            {records.map((record, index) => (
              <figure className="dermato-gallery__item" key={record.small}>
                <button
                  className="dermato-gallery__open"
                  type="button"
                  onClick={() => setSelectedRecord(record)}
                  aria-label={'Ampliar foto ' + (index + 1) + ': ' + record.caption}
                >
                  <span className="dermato-gallery__photo-frame">
                    <img
                      src={record.small}
                      srcSet={record.small + ' 480w, ' + record.large + ' 960w'}
                      sizes="(max-width: 560px) min(78vw, 23rem), (max-width: 900px) 18rem, 22rem"
                      width={record.width}
                      height={record.height}
                      alt={record.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="dermato-gallery__zoom" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>
                    Ampliar
                  </span>
                </button>
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{record.caption}</figcaption>
              </figure>
            ))}
          </div>
          <button
            className="dermato-gallery__arrow"
            type="button"
            aria-label="Ver próximas fotos"
            onClick={() => scrollCarousel(1)}
            disabled={!canScrollForward}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
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
            <p>{selectedRecord.caption}</p>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default DermatofunctionalGallery
