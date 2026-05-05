import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: '#2A2524',
      padding: 'clamp(56px, 8vw, 80px) clamp(24px, 6vw, 80px) 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
          paddingBottom: '48px',
          borderBottom: '1px solid rgba(200,184,162,0.12)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontWeight: 500,
                color: '#FFFCF9',
              }}>Aura</span>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#C9A96E',
                marginLeft: '6px',
              }}>Atelier</span>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'rgba(200,184,162,0.65)',
              fontWeight: 300,
              maxWidth: '220px',
              marginBottom: '24px',
            }}>
              Effortless Beauty. Elevated.<br />
              Hair · Lashes · Glow
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#C9A96E',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
            >
              <span>@aura.atelier</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(200,184,162,0.5)',
              marginBottom: '20px',
            }}>
              Navigation
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['Home', '/'],
                ['Services & Preise', '/services'],
                ['Galerie', '/#galerie'],
                ['Termin buchen', '/#kontakt'],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(255,252,249,0.65)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    fontWeight: 300,
                  }}
                  onMouseEnter={e => e.target.style.color = '#C9A96E'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,252,249,0.65)'}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(200,184,162,0.5)',
              marginBottom: '20px',
            }}>
              Kontakt
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Musterstraße 12',
                '80331 München',
                '+49 89 123 456 78',
                'hello@aura-atelier.de',
              ].map(line => (
                <span key={line} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255,252,249,0.55)',
                  fontWeight: 300,
                }}>
                  {line}
                </span>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(200,184,162,0.5)',
              marginBottom: '20px',
            }}>
              Öffnungszeiten
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                ['Mo – Fr', '09:00 – 19:00'],
                ['Samstag', '09:00 – 17:00'],
                ['Sonntag', 'Geschlossen'],
              ].map(([day, hours]) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,252,249,0.55)', fontWeight: 300 }}>
                    {day}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(200,184,162,0.7)', fontWeight: 300 }}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(200,184,162,0.35)',
          }}>
            © 2025 Aura Atelier. Alle Rechte vorbehalten.
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(200,184,162,0.35)',
          }}>
            Impressum · Datenschutz
          </span>
        </div>
      </div>
    </footer>
  )
}
