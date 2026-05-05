import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

export default function About() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
      background: '#F5F0EA',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(48px, 8vw, 100px)',
        alignItems: 'center',
      }}
      className="about-grid"
      >
        {/* Text */}
        <div>
          <FadeIn>
            <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
              Über uns
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 500,
              color: '#2A2524',
              lineHeight: 1.2,
              marginBottom: '32px',
            }}>
              Mehr als nur<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#9B8B7E' }}>
                ein Salon.
              </em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#9B8B7E',
              fontWeight: 300,
              marginBottom: '20px',
            }}>
              Bei Aura Atelier geht es nicht nur um Haare – sondern darum,
              wie du dich fühlst, wenn du den Salon verlässt. Wir glauben,
              dass echte Schönheit aus Vertrauen und Entspannung entsteht.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.85,
              color: '#9B8B7E',
              fontWeight: 300,
              marginBottom: '48px',
            }}>
              Jeder Besuch beginnt mit einer individuellen Beratung.
              Kein Ergebnis von der Stange – nur maßgeschneiderte
              Ergebnisse, die zu dir passen.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div style={{
              borderTop: '1px solid rgba(200,184,162,0.4)',
              paddingTop: '32px',
            }}>
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#9B8B7E',
                lineHeight: 1.6,
              }}>
                Schönheit beginnt dort,<br />wo du dich wohlfühlst.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Image Column */}
        <FadeIn direction="left" delay={0.15}>
          <div style={{ position: 'relative' }}>
            {/* Main image */}
            <div style={{
              height: '500px',
              overflow: 'hidden',
            }}>
              <img
                src={`${base}images/salonbild.png`}
                alt="Aura Atelier Salon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>

            {/* Small accent image */}
            <div style={{
              position: 'absolute',
              bottom: '-32px',
              left: '-32px',
              width: '180px',
              height: '180px',
              border: '8px solid #F5F0EA',
              overflow: 'hidden',
            }}>
              <img
                src={`${base}images/hair-washing-2.png`}
                alt="Hair Washing"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
