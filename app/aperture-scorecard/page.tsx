'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import Link from 'next/link'

export default function ApertureScorecardPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              width: '2px',
              height: '1.25rem',
              background: '#B8924A',
              flexShrink: 0
            }}></div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F0EDE6'
            }}>The Aperture Scorecard</span>
          </div>

          <div style={{ maxWidth: '800px' }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F0EDE6',
              marginBottom: '1.5rem'
            }}>
              Measure Your <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Revenue Intelligence</em>
            </h1>

            <p style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#F0EDE6',
              marginBottom: '2.5rem'
            }}>
              Understand where your business stands and what's holding you back from predictable growth.
            </p>

            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.875rem 2.25rem',
              background: '#B8924A',
              color: '#F0EDE6',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
              Get Your Scorecard
            </Link>
          </div>
        </div>
      </section>

      {/* SCORECARD CONTENT - PLACEHOLDER */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{
            background: '#E8E4DB',
            padding: '3rem',
            borderRadius: '4px',
            border: '1px solid #D4CFC6',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#6B6760',
              margin: 0
            }}>
              Scorecard content will be added here.
            </p>
          </div>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </>
  )
}
