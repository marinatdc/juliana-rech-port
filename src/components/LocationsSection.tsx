import { useState } from 'react'
import './LocationsSection.css'

interface Location {
  type: string
  title: string
  district: string
  address: string
  addressDetails?: string
  parking?: string
  parkingDetails?: string
  mapUrl?: string
}

const locations: Location[] = [
  {
    type: 'Consultório principal',
    title: 'Ed. Business',
    district: 'Bairro Tristeza, Zona Sul',
    address: 'Av. Wenceslau Escobar, 2800',
    addressDetails: 'Sala 603 · Tristeza\nPorto Alegre - RS · CEP 91920-134',
    parking: 'Estacionamento conveniente',
    parkingDetails: 'Vagas rotativas no complexo empresarial para pacientes.',
    mapUrl: 'https://www.google.com/maps?q=-30.1122799,-51.2549916&z=16&output=embed',
  },
  {
    type: 'Consultório secundário',
    title: 'Ed. Comendador Luigi Gerace',
    district: 'Menino Deus, Porto Alegre',
    address: 'R. José de Alencar, 386',
    addressDetails: 'Sala 801 · Menino Deus\nPorto Alegre - RS · CEP 90880-480',
    mapUrl: 'https://www.google.com/maps?q=R.+Jos%C3%A9+de+Alencar,+386,+Menino+Deus,+Porto+Alegre+-+RS,+90880-480&output=embed',
  },
]

function LocationsSection({ compact = false }: { compact?: boolean }) {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [mapStates, setMapStates] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({})

  const copyAddress = async (location: Location) => {
    const fullAddress = [location.address, location.addressDetails]
      .filter(Boolean)
      .join(', ')
      .replace(/ · /g, ', ')
      .replace(/\n/g, ', ')

    try {
      await navigator.clipboard.writeText(fullAddress)
      setCopiedAddress(location.type)
      window.setTimeout(() => setCopiedAddress(null), 2000)
    } catch {
      setCopiedAddress(null)
    }
  }

  return (
    <section
      className={`locations-section${compact ? ' locations-section--compact' : ''}`}
      id="localizacao"
      aria-labelledby={compact ? undefined : 'locations-title'}
      aria-label={compact ? 'Endereços de atendimento' : undefined}
    >
      <div className="locations-section__inner">
        {!compact && (
          <header className="locations-section__heading" data-reveal="up">
            <p className="eyebrow">Localização</p>
            <h2 id="locations-title">Endereços de Atendimento</h2>
          </header>
        )}

        <div className="locations-grid">
          {locations.map((location) => (
            <article className="location-card" data-reveal="up" key={location.type}>
              <div className="location-card__map">
                {location.mapUrl ? (
                  <>
                    {mapStates[location.type] !== 'loaded' && (
                      <div className="location-card__map-skeleton" aria-hidden="true" />
                    )}
                    {mapStates[location.type] === 'error' && (
                      <div className="location-card__map-error" role="status">
                        <span>Não foi possível carregar o mapa.</span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.district}, Porto Alegre - RS`)}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Abrir endereço no Google Maps
                        </a>
                      </div>
                    )}
                    <iframe
                      className={mapStates[location.type] === 'loaded' ? 'is-loaded' : ''}
                      src={location.mapUrl}
                      title={`Mapa de ${location.title}, ${location.address}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      onLoad={() => setMapStates((maps) => ({ ...maps, [location.type]: 'loaded' }))}
                      onError={() => setMapStates((maps) => ({ ...maps, [location.type]: 'error' }))}
                    />
                  </>
                ) : (
                  <span role="img" aria-label={`Mapa de ${location.type}, aguardando endereço`}>
                    Mapa a configurar
                  </span>
                )}
              </div>

              <div className="location-card__details">
                <span className="location-card__type">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
                    <circle cx="12" cy="9" r="2.6" />
                  </svg>
                  {location.type}
                </span>
                <h3>{location.title}</h3>
                <p className="location-card__district">{location.district}</p>

                <div className="location-card__item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6.5 8 4l8 2.5L21 4v13.5L16 20l-8-2.5L3 20V6.5Z" />
                    <path d="M8 4v13.5M16 6.5V20" />
                  </svg>
                  <button
                    className="location-card__address"
                    type="button"
                    onClick={() => void copyAddress(location)}
                    aria-label={`Copiar endereço: ${location.address}, ${location.addressDetails ?? location.district}`}
                  >
                    <span className="location-card__address-content">
                      <span className="location-card__address-main">{location.address}</span>
                      <span className="location-card__address-details">{location.addressDetails ?? location.district}</span>
                      {copiedAddress === location.type && (
                        <span className="location-card__copy-status" role="status">Endereço copiado</span>
                      )}
                    </span>
                    <svg className="location-card__address-copy" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="8" y="8" width="12" height="12" rx="2" />
                      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                </div>

                {location.parking && (
                  <div className="location-card__item">
                    <svg className="location-card__parking-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m4 11 1.8-5.1A1.4 1.4 0 0 1 7.1 5h9.8a1.4 1.4 0 0 1 1.3.9L20 11l1.5 2v5h-3v-2H5.5v2h-3v-5L4 11Zm3-4-1.2 3.5h12.4L17 7H7Zm-1.5 6v1.5h13V13h-13Z" />
                      <circle cx="6.5" cy="12.3" r="1" />
                      <circle cx="17.5" cy="12.3" r="1" />
                    </svg>
                    <p>
                      <span className="location-card__item-title">{location.parking}</span>
                      {location.parkingDetails && <span className="location-card__item-details">{location.parkingDetails}</span>}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection
