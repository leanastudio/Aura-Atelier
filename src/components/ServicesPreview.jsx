import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const services = [
  {
    num: '01',
    title: 'Hair',
    desc: 'Von präzisen Schnitten bis zum perfekten Balayage – dein Haar, dein Statement.',
    items: ['Schnitt & Styling', 'Balayage & Farbe', 'Behandlungen'],
  },
  {
    num: '02',
    title: 'Beauty',
    desc: 'Wimpernverlängerung, Browshaping und Make-up – für deinen Glow-Effekt.',
    items: ['Wimpernverlängerung', 'Brow Styling', 'Make-up'],
  },
  {
    num: '03',
    title: 'Laser',
    desc: 'Dauerhafte Haarentfernung mit modernster Lasertechnologie. Sanft. Effektiv.',
    items: ['Kleine Zonen', 'Mittlere Zonen', 'Große Zonen'],
  },
]

export default function ServicesPreview() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
      background: '#F5F0EA',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '72px',
        }}>
          <div>
            <FadeIn>
              <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
                Leistungen
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: '#2A2524',
                lineHeight: 1.15,
              }}>
                Alles, was du dir<br />
                <em style={{ fontWeight: 400, fontStyle: 'italic', color: '#9B8B7E' }}>
                  wünschst.
                </em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <Link to="/services" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#2A2524',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(42,37,36,0.3)',
              paddingBottom: '2px',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}>
              Alle Behandlungen & Preise →
            </Link>
          </FadeIn>
        </div>

        {/* Editorial rows */}
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1}>
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr 1fr',
                gap: 'clamp(24px, 4vw, 64px)',
                padding: 'clamp(36px, 4vw, 52px) 0',
                borderTop: '1px solid rgba(200,184,162,0.3)',
                alignItems: 'start',
                transition: 'opacity 0.3s ease',
              }}
              className="services-editorial-row"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '13px',
                fontWeight: 400,
                color: '#C9A96E',
                letterSpacing: '0.1em',
                paddingTop: '4px',
              }}>
                {s.num}
              </div>

              {/* Title + desc */}
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 500,
                  color: '#2A2524',
                  marginBottom: '14px',
                  lineHeight: 1.2,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  lineHeight: 1.75,
                  color: '#9B8B7E',
                  fontWeight: 300,
                  maxWidth: '320px',
                }}>
                  {s.desc}
                </p>
              </div>

              {/* Items – right col */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '4px',
              }}>
                {s.items.map(item => (
                  <li key={item} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#9B8B7E',
                    fontWeight: 300,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    letterSpacing: '0.03em',
                  }}>
                    <span style={{
                      width: '20px',
                      height: '1px',
                      background: '#C9A96E',
                      flexShrink: 0,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        ))}

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid rgba(200,184,162,0.3)' }} />
      </div>
    </section>
  )
}
