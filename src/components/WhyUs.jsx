import FadeIn from './FadeIn'

const reasons = [
  {
    title: 'Individuelle Beratung',
    text: 'Jeder Mensch ist einzigartig. Wir nehmen uns die Zeit, deine Wünsche wirklich zu verstehen.',
  },
  {
    title: 'Natürliche Ergebnisse',
    text: 'Kein Overstatement. Wir arbeiten mit deinen Stärken – für ein Ergebnis, das zu dir gehört.',
  },
  {
    title: 'High-End Produkte',
    text: 'Nur die besten Produkte berühren dein Haar und deine Haut. Qualität, die man spürt.',
  },
  {
    title: 'Entspannte Atmosphäre',
    text: 'Dein Termin ist deine Zeit. Kein Stress, kein Lärm – nur pure Entspannung.',
  },
]

export default function WhyUs() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
      background: '#FFFCF9',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <FadeIn>
          <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
            Warum Aura Atelier
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#2A2524',
            lineHeight: 1.15,
            marginBottom: 'clamp(64px, 8vw, 100px)',
          }}>
            Das ist unser<br />
            <em style={{ fontWeight: 400, fontStyle: 'italic', color: '#9B8B7E' }}>
              Versprechen.
            </em>
          </h2>
        </FadeIn>

        {/* Staggered items – alternating left / right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {reasons.map((r, i) => (
            <FadeIn
              key={r.title}
              delay={i * 0.12}
              direction={i % 2 === 0 ? 'right' : 'left'}
            >
              <div style={{
                maxWidth: '520px',
                marginLeft: i % 2 === 0 ? '0' : 'auto',
                paddingTop: i === 0 ? '0' : 'clamp(52px, 6vw, 80px)',
                paddingBottom: 'clamp(52px, 6vw, 80px)',
                borderBottom: i < reasons.length - 1
                  ? '1px solid rgba(200,184,162,0.2)'
                  : 'none',
              }}>
                {/* Gold accent line */}
                <div style={{
                  width: '28px',
                  height: '1px',
                  background: '#C9A96E',
                  marginBottom: '24px',
                }} />

                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                  fontWeight: 500,
                  color: '#2A2524',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}>
                  {r.title}
                </h3>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: '#9B8B7E',
                  fontWeight: 300,
                }}>
                  {r.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
