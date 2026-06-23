'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'
import { useState } from 'react'

export default function ApertureFrameworksPage() {
  // Force Vercel rebuild - all framework links now active
  const [email, setEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      setSubscribeMessage('Please enter a valid email address.')
      return
    }
    // TODO: wire to Klaviyo, Mailchimp, or /api/newsletter
    setSubscribeMessage('Thanks for subscribing. You\'ll hear from us soon.')
    setEmail('')
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Frameworks & Thinking</span>
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0 }}>
                The operating systems behind <em style={{ fontStyle: 'italic', color: '#B8924A' }}>real growth.</em>
              </h1>
            </div>
            <div style={{ paddingTop: '0.5rem' }}>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem', maxWidth: '44ch' }}>
                Aperture's frameworks are the practical tools, mental models, and strategic systems we apply across every client engagement. They're not proprietary secrets — they're how we think, made visible.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: 0, maxWidth: '44ch' }}>
                Use them to pressure-test your own approach. If you want help applying them to your business, that's what we're here for.
              </p>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', paddingTop: '1.5rem', borderTop: '2px solid #3a3733', marginTop: '1.5rem' }}>
                Frameworks are published as standalone articles. More are added as engagements surface new patterns worth codifying.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK INDEX */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, position: 'sticky', top: '5rem', margin: 0 }}>
              Practical<br/>Tools For<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Operators.</em>
            </h2>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760' }}>
              These frameworks are drawn from real engagements across hospitality, real estate, luxury travel, and wine & spirits. Each one addresses a specific problem operators and owners encounter when trying to grow, reposition, or create more efficient commercial operations. They're written for founders and executives, not consultants.
            </p>
          </div>

          {/* Framework cards */}
          {[
            { num: '01', category: 'Commercial Strategy', title: 'The Revenue Factory Framework', desc: 'A framework for treating your go-to-market motion like a production line — aligning sales, marketing, and customer success into a unified, repeatable process. Systems over heroics. The six pillars of a functioning revenue operation, and how to build them in sequence.', link: '/apertureframeworks/revenue-factory' },
            { num: '02', category: 'Go-to-Market', title: 'The Hospitality GTM Framework', desc: 'How boutique hotels, luxury travel brands, and independent operators should think about go-to-market strategy differently from generic B2B or B2C playbooks. Who your actual buyer is, where they are, and what it takes to earn their attention in a crowded market.', link: '/apertureframeworks/hospitality-gtm' },
            { num: '03', category: 'Marketing Strategy', title: 'The Luxury Brand Positioning Framework', desc: 'Positioning a luxury hospitality or consumer brand isn\'t the same as positioning a product. This framework covers how to define a position that commands a premium, survives competitive pressure, and resonates with a high-net-worth buyer without resorting to adjective inflation.', link: '/apertureframeworks/luxury-brand-positioning' },
            { num: '04', category: 'Operations', title: 'The Operating Partner Selection Framework', desc: 'For hotel owners and real estate investors choosing between management companies, operators, and operating partners. What to evaluate, how to structure the due diligence process, what questions most owners forget to ask, and the signals that predict whether a partnership will actually work.', link: '/apertureframeworks/operating-partner-selection' },
            { num: '05', category: 'Forecasting & Planning', title: 'The Hospitality Revenue Planning Framework', desc: 'Math-based revenue planning for hospitality operators who are still running their forecasts on gut-feel and prior-year comparisons. How to build a bottom-up revenue model, what inputs matter, and how to use it to drive real decisions rather than just satisfy a board deck.', link: '/apertureframeworks/hospitality-revenue-planning' },
            { num: '06', category: 'Digital Marketing', title: 'The Boutique Brand Digital Marketing Playbook', desc: 'A practical playbook for boutique hospitality and luxury brands building a digital marketing capability from scratch or fixing one that isn\'t working. Channel prioritization, tech stack decisions, and how to measure what actually drives revenue — not impressions.', link: '/apertureframeworks/digital-marketing-playbook' }
          ].map((fw, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '3rem', alignItems: 'flex-start', padding: '2.5rem 0', borderTop: '2px solid #B8924A', borderBottom: i === 5 ? '2px solid #B8924A' : 'none' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#D4CFC6', lineHeight: 1, paddingTop: '0.25rem', minWidth: '60px', textAlign: 'right' }}>
                {fw.num}
              </div>
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.5rem' }}>
                  {fw.category}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, margin: 0, marginBottom: '0.875rem' }}>
                  {fw.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.65, color: '#6B6760', maxWidth: '55ch', margin: 0 }}>
                  {fw.desc}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.25rem', paddingTop: '0.5rem', flexShrink: 0, textAlign: 'right' }}>
                <span style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '0.4rem 0.875rem', border: '1px solid #B8924A', color: '#B8924A', whiteSpace: 'nowrap' }}>
                  Published
                </span>
                <Link href={fw.link} style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1C1A17', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>How We Think</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', margin: 0 }}>
                A Few Principles<br/>That Run Through<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Everything.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }}>
                Every framework Aperture applies is grounded in the same underlying convictions about how commercial strategy actually works in hospitality and luxury contexts.
              </p>
              <ul style={{ listStyle: 'none', borderTop: '2px solid #3a3733', margin: 0, padding: 0, marginBottom: '2rem' }}>
                {[
                  'Systems outperform talent over time. Build the process, not the superstar.',
                  'Specificity beats comprehensiveness. A narrow, precise strategy beats a broad, hedged one.',
                  'The operator\'s eye matters. Theory without execution experience is just decoration.',
                  'Measurement changes behavior. If you\'re not tracking it, you\'re guessing.',
                  'Most hospitality brands market to the wrong person. Start with who actually buys.',
                  'Revenue is a lagging indicator. Fix the inputs, the outputs follow.'
                ].map((pillar, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '2px solid #3a3733', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem', display: 'block' }}></span>
                    {pillar}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                Apply this to your business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '2px solid #B8924A', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '22ch', margin: 0 }}>
              Get New Frameworks<br/>Sent To Your <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Inbox.</em>
            </h2>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '360px' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B6760' }}>Subscribe to Aperture Insights</div>
                <div style={{ display: 'flex' }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    style={{ flex: 1, padding: '0.875rem 1rem', background: '#E8E4DB', border: '2px solid #B8924A', borderRight: 'none', color: '#1C1A17', fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 300, outline: 'none', borderRadius: 0 }}
                  />
                  <button
                    onClick={handleSubscribe}
                    style={{ padding: '0.875rem 1.5rem', background: '#1C1A17', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}
                  >
                    Subscribe
                  </button>
                </div>
                <p style={{ fontSize: '0.6875rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.5, margin: 0 }}>
                  {subscribeMessage || 'New frameworks, practical thinking on hospitality growth, and what\'s actually working with real clients. No filler.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1C1A17', borderTop: '2px solid #3a3733', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F0EDE6' }}>Aperture Hospitality</span>
          <div style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <a href="mailto:inquiries@aperturehospitality.com" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4845', transition: 'color 0.2s', textDecoration: 'underline' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EDE6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4845')}>
              inquiries@aperturehospitality.com
            </a>
            <a href="https://linkedin.com/company/aperture-hospitality" target="_blank" rel="noopener" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a4845', transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EDE6')} onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4845')}>
              LinkedIn
            </a>
          </div>
          <span style={{ fontSize: '0.6875rem', color: '#4a4845' }}>© 2026 Aperture Hospitality. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}
