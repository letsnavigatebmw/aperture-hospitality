'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AISolutionsPage() {
  const capabilities = [
    {
      number: '01',
      title: 'Revenue Forecasting',
      description: 'Predictive AI models that forecast demand, optimize pricing, and identify expansion opportunities with unprecedented accuracy.'
    },
    {
      number: '02',
      title: 'Customer Intelligence',
      description: 'Advanced analytics that segment customers, predict churn, and identify high-value opportunities before competitors do.'
    },
    {
      number: '03',
      title: 'Dynamic Optimization',
      description: 'Real-time AI-driven recommendations for inventory allocation, channel strategy, and rate optimization across all properties.'
    },
    {
      number: '04',
      title: 'Competitive Intelligence',
      description: 'AI-powered market analysis that tracks competitor pricing, positioning, and strategy in real time.'
    },
    {
      number: '05',
      title: 'Demand Planning',
      description: 'Machine learning models that predict demand patterns, optimize staffing, and align operations with revenue opportunities.'
    },
    {
      number: '06',
      title: 'Strategic Insights',
      description: 'Custom AI dashboards that translate complex data into actionable insights for C-suite decision-making.'
    }
  ]

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Section label */}
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
              color: '#6B6760'
            }}>AI Intelligence Layer</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#F0EDE6',
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            AI-Powered Revenue <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Optimization</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6760',
            maxWidth: '700px',
            margin: 0
          }}>
            Integrate advanced artificial intelligence into your revenue factory. We apply machine learning, predictive analytics, and strategic insights to unlock growth, optimize operations, and stay ahead of market changes.
          </p>

        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Section intro */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Six Core Capabilities</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#F0EDE6',
              margin: 0,
              marginTop: '1rem'
            }}>
              What AI <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Unlocks</span>
            </h2>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: '#2e2b26',
            marginBottom: '3rem'
          }}></div>

          {/* Capabilities grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {capabilities.map((capability, index) => (
              <div key={index} style={{
                padding: '2.5rem 0',
                borderBottom: '1px solid #2e2b26',
                paddingBottom: index % 3 === 2 ? '2.5rem' : '2.5rem'
              }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#B8924A',
                  marginBottom: '1.25rem'
                }}>
                  {capability.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#F0EDE6',
                  margin: 0,
                  marginBottom: '0.875rem',
                  lineHeight: 1.2
                }}>
                  {capability.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#6B6760',
                  margin: 0
                }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        textAlign: 'center',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: '#F0EDE6',
            margin: 0,
            marginBottom: '2rem'
          }}>
            Ready to unlock AI-powered growth?
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6760',
            margin: 0,
            marginBottom: '2.5rem'
          }}>
            Let's explore how AI can accelerate your revenue strategy and give you a competitive edge in today's market.
          </p>

          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#F0EDE6',
            background: '#B8924A',
            padding: '1rem 2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#A67A3A'
          }} onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#B8924A'
          }}>
            Schedule a Consultation
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
