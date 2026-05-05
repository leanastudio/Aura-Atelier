import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const words = [
  { text: 'Soft.', align: 'flex-start', color: '#FFFCF9', style: 'italic' },
  { text: 'Natural.', align: 'flex-end', color: 'transparent', stroke: true },
  { text: 'Effortless.', align: 'flex-start', color: '#C9A96E', style: 'italic' },
]

export default function VibeSection() {
  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 80px)',
      background: '#2A2524',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <FadeIn>
          <span className="section-label" style={{
            display: 'block',
            marginBottom: '60px',
            color: 'rgba(200,184,162,0.5)',
          }}>
            If this is your vibe
          </span>
        </FadeIn>

        {/* Large staggered words */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {words.map((w, i) => (
            <motion.div
              key={w.text}
              initial={{ opacity: 0, x: w.align === 'flex-start' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                justifyContent: w.align,
              }}
            >
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                fontWeight: 500,
                fontStyle: w.style || 'normal',
                lineHeight: 1.0,
                color: w.color,
                // Outlined text for "Natural."
                WebkitTextStroke: w.stroke ? '1px rgba(200,184,162,0.4)' : 'none',
                letterSpacing: '-0.02em',
                userSelect: 'none',
              }}>
                {w.text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
