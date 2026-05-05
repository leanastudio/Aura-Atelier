import FadeIn from './FadeIn'

const reviews = [
  {
    text: 'Ich hatte noch nie so schöne Haare. Das Balayage ist genau das, was ich mir vorgestellt habe – nur noch besser.',
    name: 'Lena M.',
    detail: 'Balayage',
  },
  {
    text: 'Die Atmosphäre ist so ruhig und professionell. Man fühlt sich sofort wohl und in guten Händen.',
    name: 'Sophie K.',
    detail: 'Lash Extension',
  },
  {
    text: 'Bestes Ergebnis, das ich je hatte. Die Beratung war einfach top – sie haben genau verstanden was ich wollte.',
    name: 'Julia R.',
    detail: 'Haarschnitt & Styling',
  },
]

export default function Testimonials() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
      background: '#2A2524',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <FadeIn>
          <span className="section-label" style={{
            display: 'block',
            marginBottom: '72px',
            color: 'rgba(200,184,162,0.5)',
          }}>
            Kundenstimmen
          </span>
        </FadeIn>

        {/* Free-floating quotes */}
        {reviews.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.12}>
            <div style={{
              padding: 'clamp(40px, 5vw, 60px) 0',
              borderTop: '1px solid rgba(200,184,162,0.1)',
            }}>
              {/* Quote */}
              <p style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'rgba(255,252,249,0.85)',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '700px',
                // Alternate alignment for visual rhythm
                marginLeft: i % 2 === 0 ? '0' : 'auto',
                textAlign: i % 2 === 0 ? 'left' : 'right',
              }}>
                „{r.text}"
              </p>

              {/* Attribution */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              }}>
                <span style={{
                  width: '24px',
                  height: '1px',
                  background: '#C9A96E',
                  flexShrink: 0,
                  order: i % 2 === 0 ? 0 : 1,
                }} />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#C8B8A2',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {r.name} · {r.detail}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid rgba(200,184,162,0.1)' }} />

      </div>
    </section>
  )
}
