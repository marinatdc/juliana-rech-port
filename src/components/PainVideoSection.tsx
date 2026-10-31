import { useRef, useState } from 'react'
import { FiActivity, FiPause, FiPlay } from 'react-icons/fi'
import './PainVideoSection.css'
import video1 from '../assets/trat-dores/optimized/pain-treatment-1.mp4'
import video2 from '../assets/trat-dores/optimized/pain-treatment-2.mp4'
import video3 from '../assets/trat-dores/optimized/pain-treatment-3.mp4'
import poster1 from '../assets/trat-dores/optimized/pain-treatment-1.webp'
import poster2 from '../assets/trat-dores/optimized/pain-treatment-2.webp'
import poster3 from '../assets/trat-dores/optimized/pain-treatment-3.webp'

interface TreatmentVideo {
  src: string
  poster: string
  title: string
  duration: string
  description: string
}

const treatmentVideos: TreatmentVideo[] = [
  { src: video1, poster: poster1, title: 'Técnica manual', duration: '0:12', description: 'Demonstração de técnica manual durante uma sessão de fisioterapia.' },
  { src: video2, poster: poster2, title: 'Recurso terapêutico', duration: '0:22', description: 'Aplicação de recurso fisioterapêutico com equipamento.' },
  { src: video3, poster: poster3, title: 'Agulhamento terapêutico', duration: '0:22', description: 'Demonstração de agulhamento terapêutico em sessão.' },
]

interface PainVideoPlayerProps {
  item: TreatmentVideo
  featured?: boolean
  explanatory?: boolean
}

function PainVideoPlayer({ item, featured = false, explanatory = false }: PainVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false))
      return
    }

    video.pause()
  }

  return (
    <div className={`pain-videos__player-wrap${featured ? ' pain-videos__player-wrap--featured' : ''}${explanatory ? ' pain-videos__player-wrap--explanatory' : ''}${isPlaying ? ' is-playing' : ''}`}>
      <video
        ref={videoRef}
        muted
        controls={false}
        playsInline
        preload="none"
        poster={item.poster}
        width="480"
        height="854"
        aria-label={item.description}
        disablePictureInPicture
        disableRemotePlayback
        onClick={togglePlayback}
        onContextMenu={(event) => event.preventDefault()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={item.src} type="video/mp4" />
        Seu navegador não oferece reprodução de vídeo.
      </video>
      <span className={`pain-videos__label${explanatory ? ' pain-videos__label--explanatory' : ''}`}>
        {!explanatory && <FiActivity aria-hidden="true" />}
        {explanatory ? 'Vídeo explicativo' : 'Demonstração prática'}
      </span>
      <span className={`pain-videos__duration${explanatory ? ' pain-videos__duration--lower' : ''}`} aria-label={'Duração: ' + item.duration}>{item.duration}</span>
      <button
        className="pain-videos__play"
        type="button"
        aria-label={`${isPlaying ? 'Pausar' : 'Reproduzir'} ${item.title.toLocaleLowerCase('pt-BR')}`}
        onClick={togglePlayback}
      >
        {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
      </button>
    </div>
  )
}

interface PainVideoCardProps {
  index: number
  item: TreatmentVideo
}

function PainVideoCard({ index, item }: PainVideoCardProps) {
  return (
    <article className="pain-videos__card" data-reveal="up">
      <PainVideoPlayer item={item} />
      <div className="pain-videos__caption">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h3>{item.title}</h3>
      </div>
    </article>
  )
}

export function PainNeedlingVideo() {
  const item = treatmentVideos[2]
  if (!item) return null

  return <PainVideoPlayer item={item} featured />
}

export function PainManualVideo() {
  const item = treatmentVideos[0]
  if (!item) return null

  return <PainVideoPlayer item={item} explanatory />
}

export function PainTherapeuticVideo() {
  const item = treatmentVideos[1]
  if (!item) return null

  return <PainVideoPlayer item={item} explanatory />
}

function PainVideoSection() {
  return (
    <section className="pain-videos" aria-labelledby="pain-videos-title">
      <div className="pain-videos__inner">
        <header className="pain-videos__heading" data-reveal="up">
          <p className="pain-videos__eyebrow">Cuidado em prática</p>
          <h2 id="pain-videos-title">Recursos utilizados no atendimento</h2>
          <p>Conheça alguns recursos que podem fazer parte do tratamento, conforme a avaliação de cada pessoa.</p>
        </header>
        <div className="pain-videos__grid">
          {treatmentVideos.slice(0, 2).map((item, index) => (
            <PainVideoCard key={item.src} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainVideoSection
