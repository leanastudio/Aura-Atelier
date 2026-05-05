import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const EASE = [0.22, 1, 0.36, 1]

// 👇 Hier tauschen: 'hero_v1.mp4' oder 'hero_v2.mp4'
const base = import.meta.env.BASE_URL
const HERO_VIDEO = `${base}videos/hero_v1.mp4`
const HERO_PHOTO = `${base}videos/hero_poster.jpg`

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false)
  const videoRef = useRef(null)

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}
    className="hero-section"
    >
      {/* Left – Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(100px, 12vw, 160px) clamp(32px, 6vw, 80px) 80px',
        background: '#FFFCF9',
        position: 'relative',
        zIndex: 1,
      }}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          style={{ marginBottom: '28px', display: 'block' }}
        >
          Hair · Lashes · Glow
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          style={{
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
            fontWeight: 500,
            color: '#2A2524',
            marginBottom: '28px',
          }}
        >
          Effortless<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#9B8B7E' }}>
            Beauty.
          </em>
          <br />Elevated.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            lineHeight: 1.75,
            color: '#9B8B7E',
            maxWidth: '360px',
            fontWeight: 300,
            marginBottom: '48px',
          }}
        >
          Dein Wohlfühlort für natürliche Schönheit.
          Maßgeschneidert. Entspannt. Unvergesslich.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
          style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/#kontakt" style={{ textDecoration: 'none' }}>
            <button
              style={{
                background: '#2A2524',
                color: '#FFFCF9',
                border: 'none',
                padding: '16px 36px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#C9A96E'}
              onMouseLeave={e => e.currentTarget.style.background = '#2A2524'}
            >
              Termin buchen
            </button>
          </Link>
          <Link to="/services" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#2A2524',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(42,37,36,0.3)',
            paddingBottom: '1px',
            letterSpacing: '0.04em',
          }}>
            Services ansehen
          </Link>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 'clamp(32px, 6vw, 80px)',
            width: '1px',
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #C8B8A2)',
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Right – Video */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh' }}
      >
        {/* Video – spielt einmal, dann Foto */}
        <AnimatePresence>
          {!videoEnded && (
            <motion.video
              key="video"
              ref={videoRef}
              src={HERO_VIDEO}
              autoPlay
              muted
              playsInline
              onEnded={() => setVideoEnded(true)}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 18%',
              }}
            />
          )}
        </AnimatePresence>

        {/* Foto – erscheint sobald Video endet */}
        <motion.img
          key="photo"
          src={HERO_PHOTO}
          alt="Blonde Glow"
          initial={{ opacity: videoEnded ? 1 : 0 }}
          animate={{ opacity: videoEnded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 18%',
          }}
        />

        {/* Subtle gradient overlay so the floating tag stays readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(42,37,36,0.35) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        {/* Floating tag */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '-24px',
            background: '#FFFCF9',
            padding: '20px 28px',
            boxShadow: '0 8px 40px rgba(42,37,36,0.18)',
            zIndex: 2,
          }}
        >
          <div className="section-label" style={{ marginBottom: '6px' }}>Signature Look</div>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '18px',
            color: '#2A2524',
          }}>
            Blonde Glow
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
