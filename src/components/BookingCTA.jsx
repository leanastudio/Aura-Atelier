import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const EASE = [0.22, 1, 0.36, 1]

const steps = [
  {
    id: 1,
    label: 'Service wählen',
    options: ['Haarschnitt', 'Balayage', 'Wimpernverlängerung', 'Brow Styling', 'Make-up', 'Laser'],
  },
  {
    id: 2,
    label: 'Datum wählen',
    options: ['Mo, 05. Mai', 'Di, 06. Mai', 'Mi, 07. Mai', 'Do, 08. Mai', 'Fr, 09. Mai'],
  },
  {
    id: 3,
    label: 'Uhrzeit wählen',
    options: ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'],
  },
]

export default function BookingCTA() {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const current = steps[step]

  const select = (option) => {
    const next = { ...selections, [current.id]: option }
    setSelections(next)
    if (step < steps.length - 1) {
      setTimeout(() => setStep(s => s + 1), 280)
    } else {
      setTimeout(() => setSubmitted(true), 300)
    }
  }

  const reset = () => {
    setStep(0)
    setSelections({})
    setSubmitted(false)
  }

  return (
    <section
      id="kontakt"
      style={{
        padding: 'clamp(80px, 10vw, 130px) clamp(24px, 6vw, 80px)',
        background: '#F5F0EA',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(48px, 8vw, 100px)',
        alignItems: 'center',
      }}
      className="booking-grid"
      >
        {/* Left: Text */}
        <div>
          <FadeIn>
            <span className="section-label" style={{ display: 'block', marginBottom: '20px' }}>
              Termin anfragen
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 500,
              color: '#2A2524',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}>
              Bereit für deinen<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#9B8B7E' }}>
                Glow-Up?
              </em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.8,
              color: '#9B8B7E',
              fontWeight: 300,
              marginBottom: '36px',
              maxWidth: '360px',
            }}>
              Wähle deinen Wunschservice, ein Datum und eine Uhrzeit.
              Wir melden uns schnellstmöglich bei dir.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['📍', 'Musterstraße 12, 80331 München'], ['📞', '+49 89 123 456 78'], ['📸', '@aura.atelier']].map(([icon, text]) => (
                <div key={text} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#9B8B7E',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                }}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Booking UI */}
        <FadeIn delay={0.2} direction="left">
          <div style={{
            background: '#FFFCF9',
            padding: '40px',
            boxShadow: '0 8px 48px rgba(42,37,36,0.08)',
          }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{ textAlign: 'center', padding: '20px 0' }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '20px' }}>✨</div>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '22px',
                    color: '#2A2524',
                    marginBottom: '12px',
                  }}>
                    Anfrage gesendet!
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#9B8B7E',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                  }}>
                    Danke! Wir melden uns innerhalb von 24h.<br />
                    <strong style={{ color: '#2A2524' }}>{selections[1]}</strong> am <strong style={{ color: '#2A2524' }}>{selections[2]}</strong>, {selections[3]} Uhr.
                  </p>
                  <button
                    onClick={reset}
                    style={{
                      background: 'none',
                      border: '1px solid rgba(42,37,36,0.2)',
                      padding: '12px 28px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#2A2524',
                      cursor: 'none',
                    }}
                  >
                    Neuer Termin
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  {/* Progress */}
                  <div style={{
                    display: 'flex',
                    gap: '6px',
                    marginBottom: '32px',
                  }}>
                    {steps.map((s, i) => (
                      <div key={s.id} style={{
                        height: '2px',
                        flex: 1,
                        background: i <= step ? '#2A2524' : '#E8DDD3',
                        transition: 'background 0.3s ease',
                      }} />
                    ))}
                  </div>

                  <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
                    Schritt {step + 1} von {steps.length}
                  </span>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '20px',
                    color: '#2A2524',
                    marginBottom: '24px',
                  }}>
                    {current.label}
                  </h3>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: step === 0 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: '8px',
                  }}>
                    {current.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => select(opt)}
                        style={{
                          padding: '12px 8px',
                          background: selections[current.id] === opt ? '#2A2524' : '#F5F0EA',
                          color: selections[current.id] === opt ? '#FFFCF9' : '#2A2524',
                          border: 'none',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          cursor: 'none',
                          transition: 'all 0.2s ease',
                          textAlign: 'center',
                        }}
                        onMouseEnter={e => {
                          if (selections[current.id] !== opt) {
                            e.currentTarget.style.background = '#E8DDD3'
                          }
                        }}
                        onMouseLeave={e => {
                          if (selections[current.id] !== opt) {
                            e.currentTarget.style.background = '#F5F0EA'
                          }
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {step > 0 && (
                    <button
                      onClick={() => setStep(s => s - 1)}
                      style={{
                        marginTop: '20px',
                        background: 'none',
                        border: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        color: '#9B8B7E',
                        cursor: 'none',
                        letterSpacing: '0.05em',
                        padding: 0,
                      }}
                    >
                      ← Zurück
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
