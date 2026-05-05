import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL
const items = [
  { id: 1, label: 'Balayage Glow',   cat: 'Hair',   img: `${base}images/balayage.png`,        tall: true },
  { id: 2, label: 'Soft Brunette',   cat: 'Hair',   img: `${base}images/soft-brunette.png` },
  { id: 3, label: 'Lash Extensions', cat: 'Beauty', img: `${base}images/lash-extensions.png`, tall: true },
  { id: 4, label: 'Copper Shine',    cat: 'Hair',   img: `${base}images/copper-shine.png` },
  { id: 5, label: 'Brow Styling',    cat: 'Beauty', img: `${base}images/brow-styling.png` },
  { id: 6, label: 'Soft Waves',      cat: 'Hair',   gradient: 'linear-gradient(135deg, #9B8B7E 0%, #C8B8A2 50%, #F5F0EA 100%)', tall: true },
]

function GalleryItem({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={index * 0.08} style={{ gridRow: item.tall ? 'span 2' : 'span 1' }}>
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
        {/* Background – foto oder gradient */}
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: item.gradient ?? '#E8DDD3',
            backgroundImage: item.img ? `url(${item.img})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(42,37,36,0.45)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C9A96E',
          }}>
            {item.cat}
          </span>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '20px',
            fontWeight: 500,
            color: '#FFFCF9',
            fontStyle: 'italic',
          }}>
            {item.label}
          </span>
        </motion.div>
      </motion.div>
    </FadeIn>
  )
}

export default function Gallery() {
  return (
    <section
      id="galerie"
      style={{
        padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
        background: '#FFFCF9',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
            Galerie
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 500,
            color: '#2A2524',
            lineHeight: 1.15,
            marginBottom: '56px',
            maxWidth: '480px',
          }}>
            Unsere Arbeit<br />
            <em style={{ fontWeight: 400, fontStyle: 'italic', color: '#9B8B7E' }}>
              spricht für sich.
            </em>
          </h2>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '220px',
          gap: '8px',
        }}
        className="gallery-grid"
        >
          {items.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
