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

      {/* WHAT IS AN AI EMPLOYEE */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#FFFFFF',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Your AI Workforce</span>
            
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#1C1A17',
              marginTop: '1rem',
              marginBottom: '2rem'
            }}>
              What Is An AI Employee?
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Your AI Employee specializes in 3 specific business roles. Use one, or use them all to produce more cash in your business. The perfect solution for local service business owners who don&apos;t want to sacrifice potential sales opportunities because they&apos;re busy serving customers. Your AI Employee is an always on, 24/7 member of your team responsible for handling incoming calls, social messages, web chats, and reviews. All with natural conversation that feels human, not robotic.
            </p>
          </div>

          {/* Three Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Phone Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>📞</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Phone Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Answers every incoming call 24/7',
                  'Transfers calls to the right team member based on your rules',
                  'Captures caller details and creates instant follow-up reminders',
                  'Sends call transcripts for your records'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Text Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>💬</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Text Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Handles multiple text conversations at a time across website, social, and mobile',
                  'Books appointments directly into your calendar with instant confirmations',
                  'Sends automated SMS follow-ups so appointments do not turn into no-shows'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>⭐</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Reviews Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Requests Google & Facebook reviews from satisfied customers automatically',
                  'Responds to reviews across Google and Facebook to maintain your online presence'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              { icon: '⏰', title: 'Never Sleeps' },
              { icon: '❤️', title: 'Never Gets Sick' },
              { icon: '✈️', title: 'Never Needs Vacation' },
              { icon: '⚡', title: 'Replies Right Away' }
            ].map((feature, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: '#F5F5F5', borderRadius: '4px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#1C1A17',
                  margin: 0
                }}>
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: '#0066CC',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#0052A3'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#0066CC'
              }}>
                Buy Now
              </Link>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                marginTop: '0.5rem',
                textAlign: 'center'
              }}>
                Yes, I'm Ready To Grow
              </p>
            </div>

            <div>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
                ;(e.target as HTMLElement).style.color = '#FFFFFF'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent'
                ;(e.target as HTMLElement).style.color = '#1C1A17'
              }}>
                Try Now
              </Link>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                marginTop: '0.5rem',
                textAlign: 'center'
              }}>
                Click, Call, or Text 786-706-8231
              </p>
            </div>
          </div>

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
