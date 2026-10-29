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

const records = [
  { small: fd1_480, large: fd1_960, width: 960, height: 439, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd2_480, large: fd2_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região glútea, em vista lateral.', caption: 'Região glútea · vista lateral' },
  { small: fd3_480, large: fd3_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd4_480, large: fd4_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Região abdominal · vista lateral' },
  { small: fd5_480, large: fd5_960, width: 960, height: 960, alt: 'Registro comparativo de acompanhamento da região abdominal e cintura, em vista lateral.', caption: 'Cintura e abdômen · vista lateral' },
  { small: fd6_480, large: fd6_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em diferentes posições.', caption: 'Abdômen · diferentes posições' },
  { small: fd7_480, large: fd7_960, width: 960, height: 1707, alt: 'Registros de acompanhamento corporal da região abdominal, em vista lateral.', caption: 'Abdômen · vista lateral' },
]

function DermatofunctionalGallery() {
  return (
    <section className="dermato-gallery" aria-labelledby="dermato-gallery-title">
      <div className="dermato-gallery__inner">
        <header className="dermato-gallery__heading" data-reveal="up">
          <p className="dermato-gallery__eyebrow">Registros de acompanhamento</p>
          <h2 id="dermato-gallery-title">Cada processo é único</h2>
          <p>Imagens de acompanhamentos realizados na fisioterapia dermatofuncional. A indicação e a evolução dependem da avaliação e das necessidades de cada pessoa.</p>
        </header>
        <div className="dermato-gallery__grid">
          {records.map((record, index) => (
            <figure className="dermato-gallery__item" key={record.small} data-reveal="up">
              <img
                src={record.small}
                srcSet={record.small + ' 480w, ' + record.large + ' 960w'}
                sizes="(max-width: 480px) calc(100vw - 2.5rem), (max-width: 900px) calc((100vw - 4rem) / 2), 22rem"
                width={record.width}
                height={record.height}
                alt={record.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{record.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="dermato-gallery__note">As imagens registram experiências individuais e não representam promessa de resultado.</p>
      </div>
    </section>
  )
}

export default DermatofunctionalGallery
