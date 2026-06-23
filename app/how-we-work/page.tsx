'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'

export default function HowWeWorkPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business, market position, competitive landscape, and revenue drivers. Deep dive into your data, operations, and team structure to identify opportunities and constraints.'
    },
    {
      number: '02',
      title: 'Strategy & Framework',
      description: 'We develop a revenue factory framework tailored to your business. This includes defining your go-to-market motion, sales process, forecasting model, and organizational structure aligned to growth targets.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work with your team to execute the plan. This includes building systems, training teams, establishing metrics, and embedding new processes into your operations. Hands-on support through each phase.'
    },
    {
      number: '04',
      title: 'Optimization & Scale',
      description: 'We monitor performance, iterate on what works, and continuously optimize the system. As you scale, we help you refine processes, add capacity, and maintain quality while driving growth.'
    }
  ]

  const capabilities = [
    {
      number: '01',
      title: 'Customer Understanding',
      description: 'Precisely identifying who you target, the pain points you solve, and the value proposition that wins the room.'
    },
    {
      number: '02',
      title: 'Sales Process Design',
      description: 'A predictable, repeatable system for winning deals — from first contact to signed contract, with no steps left to chance.'
    },
    {
      number: '03',
      title: 'Forecasting & Planning',
      description: 'Math-based revenue planning that replaces gut-feel targets with structured pipeline logic and account-level growth models.'
    },
    {
      number: '04',
      title: 'Unified Revenue Strategy',
      description: 'Shared goals and numbers across every revenue-generating function. Sales, marketing, and customer success pulling in the same direction.'
    },
    {
      number: '05',
      title: 'Operations & Systems',
      description: 'The technology layer — CRM, automation, analytics — that ties the process together and makes the whole system visible and measurable.'
    },
    {
      number: '06',
      title: 'Accountability & Cadence',
      description: 'An operational rhythm — cadences, reviews, scorecards — that keeps the factory running and surfaces problems before they become losses.'
    }
  ]

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        borderBottom: '1px solid #D4CFC6'
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
            }}>Our Approach</span>
          </div>

          {/* Headline + intro */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#1C1A17',
              margin: 0
            }}>
              How We <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Work</span>
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#6B6760',
              margin: 0,
              paddingTop: '0.5rem'
            }}>
              We apply a strategic framework that treats your go-to-market motion like a production line — aligning every function into a unified, repeatable process designed to generate revenue, retain customers, and drive expansion. Systems over heroics.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS STEPS */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Four-Phase Engagement</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#1C1A17',
              margin: 0,
              marginTop: '1rem'
            }}>
              Our <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Process</span>
            </h2>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: '#D4CFC6',
            marginBottom: '3rem'
          }}></div>

          {/* Steps grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}>
            {steps.map((step, index) => (
              <div key={index}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#B8924A',
                  marginBottom: '1rem'
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 400,
                  color: '#1C1A17',
                  margin: 0,
                  marginBottom: '0.75rem',
                  lineHeight: 1.2
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#6B6760',
                  margin: 0
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Six Core Competencies</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#F0EDE6',
              margin: 0,
              marginTop: '1rem'
            }}>
              What We <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Build</span>
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
            gap: '3rem'
          }}>
            {capabilities.map((capability, index) => (
              <div key={index}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#B8924A',
                  marginBottom: '1rem'
                }}>
                  {capability.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.375rem',
                  fontWeight: 400,
                  color: '#F0EDE6',
                  margin: 0,
                  marginBottom: '0.75rem',
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

      {/* FRAMEWORKS & THINKING */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
            <div style={{ width: '3px', height: '1.5rem', background: '#B8924A' }}></div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>
              Frameworks & Thinking
            </span>
          </div>

          {/* Headline */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2, color: '#F0EDE6', margin: 0, marginBottom: '2rem' }}>
            The Operating Systems Behind <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Real Growth.</em>
          </h2>

          {/* Body copy */}
          <div style={{ maxWidth: '700px' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
              Aperture's frameworks are the practical tools, mental models, and strategic systems we apply across every client engagement. They're not proprietary secrets — they're how we think, made visible.
            </p>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem' }}>
              Use them to pressure-test your own approach. If you want help applying them to your business, that's what we're here for.
            </p>

            {/* Footer note */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', marginBottom: '2rem' }}>
              Frameworks are published as standalone articles. More are added as engagements surface new patterns worth codifying.
            </p>

            {/* CTA Link */}
            <a href="/apertureframeworks" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8924A', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #B8924A', paddingBottom: '4px', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EDE6'; e.currentTarget.style.borderBottomColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#B8924A'; e.currentTarget.style.borderBottomColor = '#B8924A'; }}>
              Explore Aperture's Revenue Frameworks →
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        textAlign: 'center',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: '#1C1A17',
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            Ready To Build Your Revenue Factory?
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6760',
            margin: 0,
            marginBottom: '2rem'
          }}>
            Let's explore how to apply this framework to your business and unlock sustainable growth.
          </p>

          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#F0EDE6',
            background: '#1C1A17',
            padding: '0.875rem 2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#2a2520'
          }} onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#1C1A17'
          }}>
            Schedule a Consultation
          </Link>

        </div>
      </section>

      <IntakeForm />

      <NewsletterSection />

      <Footer />
    </>
  )
}
