import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const EASE = [0.22, 1, 0.36, 1]

const categories = [
  {
    id: 'hair',
    label: 'Hair',
    intro: 'Von präzisen Cuts bis zum traumhaften Balayage – wir bringen das Beste in deinem Haar zum Vorschein.',
    services: [
      { name: 'Damenschnitt', desc: 'Inkl. Waschen, Schneiden & Föhnen', price: 'ab 68 €' },
      { name: 'Herrenschnitt', desc: 'Inkl. Waschen & Styling', price: 'ab 38 €' },
      { name: 'Kinderschnitt', desc: 'Bis 12 Jahre', price: 'ab 28 €' },
      { name: 'Balayage', desc: 'Handgemalte Highlights, natürlicher Farbverlauf', price: 'ab 150 €' },
      { name: 'Vollfarbe', desc: 'Ansatz oder komplett, inkl. Ansatzkaschierer', price: 'ab 75 €' },
      { name: 'Strähnen', desc: 'Folien oder Cap-Technik', price: 'ab 90 €' },
      { name: 'Haarkur', desc: 'Intensive Pflege & Aufbaubehandlung', price: 'ab 25 €' },
      { name: 'Dauerwelle', desc: 'Klassisch oder Wellen', price: 'ab 80 €' },
      { name: 'Hochsteckfrisur', desc: 'Für besondere Anlässe, inkl. Beratung', price: 'auf Anfrage' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty',
    intro: 'Präzise Lashes, definierte Brows, perfektes Make-up – dein Glow-Effekt beginnt hier.',
    services: [
      { name: 'Classic Lashes', desc: '1:1-Technik für einen natürlichen Wimpernkranz', price: 'ab 89 €' },
      { name: 'Volume Lashes', desc: '2D–4D für mehr Fülle und Drama', price: 'ab 119 €' },
      { name: 'Mega Volume', desc: '5D–10D für maximalen Effekt', price: 'ab 149 €' },
      { name: 'Lash Refill', desc: 'Nachfüllen nach 2–4 Wochen', price: 'ab 55 €' },
      { name: 'Wimpernwelle', desc: 'Lifting & Tinting für natürliche Wimpern', price: 'ab 65 €' },
      { name: 'Brow Lamination', desc: 'Glatte, definierte Brauen über Wochen', price: 'ab 55 €' },
      { name: 'Brow Tinting', desc: 'Färben & Formen nach Wunsch', price: 'ab 30 €' },
      { name: 'Make-up (Event)', desc: 'Für besondere Anlässe, inkl. Wimpern', price: 'ab 80 €' },
      { name: 'Make-up (Braut)', desc: 'Inkl. Probe-Termin & Styling', price: 'ab 180 €' },
    ],
  },
  {
    id: 'laser',
    label: 'Laser',
    intro: 'Dauerhafte Haarentfernung mit modernster Diodenlaser-Technologie. Sanft auf der Haut, dauerhaft im Ergebnis.',
    services: [
      { name: 'Oberlippe', desc: 'Kleine Zone', price: 'ab 35 €' },
      { name: 'Kinn / Wangen', desc: 'Einzeln oder kombiniert', price: 'ab 45 €' },
      { name: 'Achseln', desc: 'Beide Seiten', price: 'ab 55 €' },
      { name: 'Bikini (Linie)', desc: 'Bereich entlang der Unterwäsche', price: 'ab 55 €' },
      { name: 'Bikini (Brazilian)', desc: 'Vollständige Behandlung', price: 'ab 80 €' },
      { name: 'Unterschenkel', desc: 'Beide Beine', price: 'ab 90 €' },
      { name: 'Ganzes Bein', desc: 'Von der Hüfte bis zum Knöchel', price: 'ab 150 €' },
      { name: 'Rücken (Frau / Mann)', desc: 'Voller Rücken', price: 'ab 120 €' },
      { name: 'Körper-Paket', desc: 'Individuell zusammenstellbar – frag uns!', price: 'auf Anfrage' },
    ],
  },
]

function ServiceRow({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: EASE }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '20px 0',
        borderBottom: '1px solid rgba(200,184,162,0.2)',
        gap: '24px',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '17px',
          color: '#2A2524',
          fontWeight: 500,
          marginBottom: '4px',
        }}>
          {service.name}
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#9B8B7E',
          fontWeight: 300,
        }}>
          {service.desc}
        </div>
      </div>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '16px',
        color: '#C9A96E',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        fontStyle: 'italic',
      }}>
        {service.price}
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{
        padding: '60px clamp(24px, 6vw, 80px) 80px',
        background: '#F5F0EA',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <Link to="/" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#9B8B7E',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '40px',
            }}>
              ← Zurück zur Startseite
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
              Alle Leistungen
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500,
              color: '#2A2524',
              lineHeight: 1.1,
              maxWidth: '600px',
            }}>
              Services &{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#9B8B7E' }}>
                Preise
              </em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.8,
              color: '#9B8B7E',
              fontWeight: 300,
              maxWidth: '500px',
              marginTop: '24px',
            }}>
              Alle Preise sind Startpreise. Der genaue Preis wird nach
              einer persönlichen Beratung festgelegt.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Anchor navigation */}
      <div style={{
        position: 'sticky',
        top: '72px',
        background: 'rgba(255,252,249,0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200,184,162,0.2)',
        zIndex: 50,
        padding: '0 clamp(24px, 6vw, 80px)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '32px',
          overflowX: 'auto',
        }}>
          {categories.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#2A2524',
                textDecoration: 'none',
                padding: '18px 0',
                letterSpacing: '0.06em',
                whiteSpace: 'nowrap',
                borderBottom: '2px solid transparent',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.borderBottomColor = '#C9A96E'}
              onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          style={{
            padding: 'clamp(64px, 8vw, 100px) clamp(24px, 6vw, 80px)',
            background: ci % 2 === 0 ? '#FFFCF9' : '#F5F0EA',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'start',
            }}
            className="services-grid"
            >
              {/* Category header */}
              <div style={{ position: 'sticky', top: '130px' }}>
                <FadeIn>
                  <div style={{
                    width: '28px',
                    height: '2px',
                    background: '#C9A96E',
                    marginBottom: '24px',
                  }} />
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    fontWeight: 500,
                    color: '#2A2524',
                    lineHeight: 1.15,
                    marginBottom: '20px',
                  }}>
                    {cat.label}
                  </h2>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: '#9B8B7E',
                    fontWeight: 300,
                    maxWidth: '260px',
                  }}>
                    {cat.intro}
                  </p>
                </FadeIn>
              </div>

              {/* Service list */}
              <div>
                {cat.services.map((s, i) => (
                  <ServiceRow key={s.name} service={s} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: 'clamp(64px, 8vw, 100px) clamp(24px, 6vw, 80px)',
        background: '#2A2524',
        textAlign: 'center',
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#FFFCF9',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}>
            Bereit für deinen{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#C8B8A2' }}>
              Termin?
            </em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link to="/#kontakt" style={{ textDecoration: 'none' }}>
            <button style={{
              background: '#C9A96E',
              color: '#FFFCF9',
              border: 'none',
              padding: '18px 48px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor: 'none',
              transition: 'all 0.3s ease',
              marginTop: '8px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#FFFCF9'
              e.currentTarget.style.color = '#2A2524'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#C9A96E'
              e.currentTarget.style.color = '#FFFCF9'
            }}
            >
              Jetzt buchen
            </button>
          </Link>
        </FadeIn>
      </section>
    </main>
  )
}
