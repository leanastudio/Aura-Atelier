import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const EASE = [0.22, 1, 0.36, 1]

const placeholders = [
  { id: 1,  cat: 'Hair',   label: 'Balayage',         gradient: 'linear-gradient(160deg, #C9A96E 0%, #9B8B7E 60%, #2A2524 100%)', tall: true },
  { id: 2,  cat: 'Beauty', label: 'Lash Extensions',  gradient: 'linear-gradient(160deg, #2A2524 0%, #4A3F3E 70%, #9B8B7E 100%)' },
  { id: 3,  cat: 'Hair',   label: 'Soft Brunette',    gradient: 'linear-gradient(135deg, #4A3F3E 0%, #9B8B7E 100%)',               tall: true },
  { id: 4,  cat: 'Hair',   label: 'Copper Shine',     gradient: 'linear-gradient(135deg, #C9A96E 0%, #E8DDD3 100%)' },
  { id: 5,  cat: 'Beauty', label: 'Brow Styling',     gradient: 'linear-gradient(160deg, #E8DDD3 0%, #C8B8A2 60%, #9B8B7E 100%)', tall: true },
  { id: 6,  cat: 'Hair',   label: 'Blonde Glow',      gradient: 'linear-gradient(135deg, #F5F0EA 0%, #C9A96E 100%)' },
  { id: 7,  cat: 'Laser',  label: 'Laser Treatment',  gradient: 'linear-gradient(160deg, #9B8B7E 0%, #2A2524 100%)',               tall: true },
  { id: 8,  cat: 'Hair',   label: 'Color Melt',       gradient: 'linear-gradient(135deg, #C8B8A2 0%, #4A3F3E 100%)' },
  { id: 9,  cat: 'Beauty', label: 'Make-up',          gradient: 'linear-gradient(160deg, #E8DDD3 0%, #9B8B7E 100%)' },
  { id: 10, cat: 'Hair',   label: 'Highlights',       gradient: 'linear-gradient(135deg, #C9A96E 20%, #9B8B7E 100%)',             tall: true },
  { id: 11, cat: 'Laser',  label: 'Skin Care',        gradient: 'linear-gradient(135deg, #F5F0EA 0%, #C8B8A2 100%)' },
  { id: 12, cat: 'Hair',   label: 'Soft Waves',       gradient: 'linear-gradient(160deg, #9B8B7E 0%, #C8B8A2 50%, #F5F0EA 100%)' },
]

const filters = ['Alle', 'Hair', 'Beauty', 'Laser']

function PlaceholderItem({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
      style={{ gridRow: item.tall ? 'span 2' : 'span 1' }}
    >
      <motion.div
        data-cursor-hover
        style={{
          position: 'relative',
          height: item.tall ? '480px' : '220px',
          overflow: 'hidden',
          cursor: 'none',
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ position: 'absolute', inset: 0, background: item.gradient }}
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(42,37,36,0.45)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A96E',
          }}>
            {item.cat}
          </span>
          <span style={{
            fontFamily: 'Playfair Display, serif', fontSize: '18px',
            fontWeight: 500, color: '#FFFCF9', fontStyle: 'italic',
          }}>
            {item.label}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function GalleriePage() {
  const [active, setActive] = useState('Alle')

  const visible = active === 'Alle'
    ? placeholders
    : placeholders.filter(p => p.cat === active)

  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh', background: '#FFFCF9' }}>

      {/* Header */}
      <section style={{ padding: '60px clamp(24px, 6vw, 80px) 64px', background: '#F5F0EA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
              Galerie
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 500, color: '#2A2524', lineHeight: 1.1,
            }}>
              Unsere Arbeit<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#9B8B7E' }}>
                spricht für sich.
              </em>
            </h1>
          </FadeIn>

          {/* Portfolio-Hinweis */}
          <FadeIn delay={0.2}>
            <div style={{
              marginTop: '36px',
              padding: '16px 24px',
              border: '1px solid rgba(200,184,162,0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              background: 'rgba(255,252,249,0.7)',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#C9A96E', whiteSpace: 'nowrap',
              }}>
                Portfolioprojekt
              </span>
              <span style={{
                width: '1px', height: '16px',
                background: 'rgba(200,184,162,0.5)', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: '#9B8B7E', fontWeight: 300, lineHeight: 1.5,
              }}>
                Die Fotos sind Platzhalter – hier könnten deine echten Salon-Aufnahmen stehen.
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter */}
      <div style={{
        position: 'sticky', top: '72px', zIndex: 50,
        background: 'rgba(255,252,249,0.94)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200,184,162,0.2)',
        padding: '0 clamp(24px, 6vw, 80px)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', gap: '32px',
        }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                color: active === f ? '#2A2524' : '#9B8B7E',
                padding: '18px 0',
                borderBottom: active === f ? '2px solid #C9A96E' : '2px solid transparent',
                letterSpacing: '0.06em',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 6vw, 80px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '220px',
              gap: '8px',
            }}
            className="gallery-grid"
          >
            <AnimatePresence>
              {visible.map((item, i) => (
                <PlaceholderItem key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
