'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <>
      <Nav />

      {/* SOLUTIONS HERO */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)',
        borderBottom: '1px solid #D4CFC6',
        background: '#1C1A17'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'end'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem'
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
                  color: '#4a4845'
                }}>AI Solutions</span>
              </div>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#F0EDE6',
                margin: 0,
                marginTop: '1.5rem'
              }}>
                Real problems.<br/>
                <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Solved fast.</em>
              </h1>
            </div>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.0625rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#F0EDE6',
                marginBottom: '2rem'
              }}>
                Not every challenge requires a six-month engagement. Aperture's AI Solutions are productized tools built specifically for boutique hotels, luxury spirits brands, and independent hospitality businesses that need to create operational efficiencies and capture more revenue — without a consulting retainer.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.0625rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#F0EDE6',
                marginBottom: 0
              }}>
                Transparent pricing. No scoping call required. Get started today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
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
            }}>Available Now</span>
          </div>

          {/* Product Card: Revenue Factory */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 0,
            border: '1px solid #D4CFC6',
            marginBottom: '2rem'
          }}>
            {/* Left: Info */}
            <div style={{
              padding: '3.5rem',
              borderRight: '1px solid #D4CFC6'
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B8924A',
                marginBottom: '1rem'
              }}>AI Employee</div>
              
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B8924A',
                marginBottom: '1rem'
              }}>AI Employee</div>

              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#1C1A17',
                margin: 0,
                marginBottom: '1rem'
              }}>
                Revenue Factory<br/>for Hospitality
              </h2>
              
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '0.9375rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1.25rem',
                fontStyle: 'italic'
              }}>
                "Never miss another conversation."
              </p>
              
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: '#6B6760',
                marginBottom: '1.5rem'
              }}>
                Independent hotels and luxury brands lose revenue every day to missed calls, slow follow-ups, and unmanaged inquiries. Revenue Factory's AI Employee handles inbound conversations around the clock — qualifying leads, booking appointments, and following up — so your team focuses on guests, not admin.
              </p>
              
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: '#6B6760',
                marginBottom: '2rem'
              }}>
                Aperture deploys and configures this solution specifically for the hospitality and luxury context: the right tone, the right integrations, and the right setup for your property or brand.
              </p>
              
              <ul style={{
                listStyle: 'none',
                borderTop: '1px solid #D4CFC6',
                margin: 0,
                padding: 0
              }}>
                {[
                  '24/7 AI-powered inbound conversation handling',
                  'Missed call text-back and lead capture',
                  'Automated follow-up sequences',
                  'Appointment and reservation routing',
                  'Configured for hospitality & luxury brand tone',
                  'Aperture onboarding & setup included'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #D4CFC6',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <span style={{
                      width: '4px',
                      height: '4px',
                      background: '#B8924A',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'block'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pricing */}
            <div style={{
              padding: '3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#E8E4DB'
            }}>
              <div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  marginBottom: '0.5rem'
                }}>Starting From</div>
                
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 300,
                  color: '#1C1A17',
                  lineHeight: 1,
                  marginBottom: '0rem'
                }}>
                  $2,995
                </div>
                
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: '#6B6760',
                  marginBottom: '2rem'
                }}>
                  per month — no long-term contract required
                </div>

                <Link href="/contact?product=revenue-factory" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.875rem 2rem',
                  background: '#1C1A17',
                  color: '#F0EDE6',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  width: '100%',
                  marginTop: '1rem'
                }} onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = '#2a2520'
                }} onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = '#1C1A17'
                }}>
                  Get Started
                </Link>
                
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: '#6B6760',
                  lineHeight: 1.6,
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #D4CFC6'
                }}>
                  Setup fee may apply depending on integration complexity. Aperture handles configuration. Powered by Revenue Factory technology.
                </p>
              </div>

              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #D4CFC6' }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  marginBottom: '1rem'
                }}>Best for</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    'Independent boutique hotels',
                    'Luxury spirits & consumer brands',
                    'Short-term rental operators',
                    'Local luxury service businesses'
                  ].map((item, i) => (
                    <li key={i} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: '#6B6760',
                      padding: '0.5rem 0',
                      borderBottom: i < 3 ? '1px solid #D4CFC6' : 'none',
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        width: '4px',
                        height: '4px',
                        background: '#B8924A',
                        borderRadius: '50%',
                        flexShrink: 0,
                        display: 'block'
                      }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Placeholder */}
          <div style={{
            border: '1px dashed #6B6760',
            padding: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '32ch' }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 300,
                color: '#1C1A17',
                marginBottom: '0.75rem'
              }}>More solutions coming.</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: '#6B6760',
                lineHeight: 1.6

              }}>
                Additional AI-powered tools for hospitality and luxury brands are in development. Check back or{' '}
                <Link href="/contact" style={{
                  color: '#B8924A',
                  borderBottom: '1px solid #B8924A'
                }}>get in touch</Link> to be notified when new solutions launch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
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
              color: '#4a4845'
            }}>How It Works</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            marginTop: '3rem',
            borderTop: '1px solid #2e2b26'
          }}>
            {[
              { number: '01', title: 'Choose a solution', desc: 'Browse the available tools, review the pricing, and select what fits your immediate need. No sales call required.' },
              { number: '02', title: 'We configure it for you', desc: 'Aperture handles the setup, integration, and tone configuration so the solution fits your brand — not a generic template.' },
              { number: '03', title: 'Go live fast', desc: 'Most solutions are live within days, not weeks. You start capturing value immediately while your team stays focused on operations.' },
              { number: '04', title: 'Scale or upgrade', desc: 'As your needs grow, layer in additional solutions or graduate to a full Aperture strategic engagement. No pressure, your pace.' }
            ].map((step, i) => (
              <div key={i} style={{
                padding: i === 3 ? '2.5rem 0 2.5rem 2rem' : '2.5rem 2rem 2.5rem 0',
                borderRight: i === 3 ? 'none' : '1px solid #2e2b26'
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
                  {step.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 400,
                  color: '#F0EDE6',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#6B6760'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem'
          }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              maxWidth: '24ch',
              margin: 0
            }}>
              Need something more<br/>
              <em style={{ fontStyle: 'italic', color: '#B8924A' }}>strategic?</em>
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flexShrink: 0
            }}>
              <Link href="/contact" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: '#1C1A17',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#2a2520'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
              }}>
                Talk to Brandon
              </Link>
              <Link href="/#services" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
                ;(e.target as HTMLElement).style.color = '#F0EDE6'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent'
                ;(e.target as HTMLElement).style.color = '#1C1A17'
              }}>
                View consulting services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
