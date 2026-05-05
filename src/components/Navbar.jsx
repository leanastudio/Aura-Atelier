import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services & Preise', to: '/services' },
    { label: 'Galerie', to: '/galerie' },
    { label: 'Kontakt', to: '/kontakt' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '16px 48px' : '28px 48px',
        background: scrolled ? 'rgba(255,252,249,0.92)' : 'rgba(255,252,249,0.72)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(200,184,162,0.2)' : 'none',
        transition: 'all 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '22px',
            fontWeight: 500,
            color: '#2A2524',
            letterSpacing: '0.02em',
          }}>
            Aura
          </span>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '22px',
            fontWeight: 400,
            color: '#C9A96E',
            fontStyle: 'italic',
            marginLeft: '6px',
          }}>
            Atelier
          </span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
           className="hidden md:flex">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: '#2A2524',
              textDecoration: 'none',
              opacity: 0.7,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.7}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/kontakt" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#2A2524',
            color: '#FFFCF9',
            border: 'none',
            padding: '11px 26px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'none',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#C9A96E'}
          onMouseLeave={e => e.currentTarget.style.background = '#2A2524'}
          >
            Termin buchen
          </button>
        </Link>
      </nav>

      {/* Mobile Burger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'none', padding: '4px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: '#2A2524',
              transition: 'all 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(6px)' : i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#FFFCF9',
              padding: '32px 48px',
              borderBottom: '1px solid rgba(200,184,162,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '22px',
                  color: '#2A2524',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
