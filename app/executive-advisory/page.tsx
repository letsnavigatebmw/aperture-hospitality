'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ExecutiveAdvisory() {
  return (
    <>
      <style>{`
        /* Executive Advisory Page Mobile Optimization */
        
        @media (max-width: 900px) {
          .ea-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ea-who-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ea-what-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ea-results-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ea-engagement-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ea-background-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        
        @media (max-width: 640px) {
          .ea-hero-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .ea-hero-content h1 { font-size: 1.75rem !important; }
          .ea-hero-content p { font-size: 0.9rem !important; }
          .ea-section-heading { font-size: 1.5rem !important; }
          .ea-who-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .ea-what-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .ea-results-table { font-size: 0.85rem !important; }
          .ea-results-table th, .ea-results-table td { padding: 1rem !important; }
          .ea-engagement-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .ea-engagement-card { padding: 1.5rem !important; }
          .ea-background-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .ea-background-content p { font-size: 0.9rem !important; }
        }
        
        @media (max-width: 480px) {
          .ea-hero-grid { padding: 0 0.75rem !important; }
          .ea-hero-content h1 { font-size: 1.5rem !important; }
          .ea-section-heading { font-size: 1.25rem !important; }
          .ea-results-table { font-size: 0.8rem !important; }
          .ea-results-table th, .ea-results-table td { padding: 0.75rem !important; }
          .ea-engagement-card h3 { font-size: 1rem !important; }
        }
      `}</style>
      <Nav />
      
      {/* HERO - DARK BG */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div className="ea-hero-grid" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="ea-hero-content">
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '1rem', color: '#F0EDE6' }}>
                Senior Commercial Leadership, Without the Full-Time Hire
              </h1>
              <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 300, lineHeight: 1.5, color: '#B8924A', marginBottom: '2rem' }}>
                Fractional Commercial Leadership for Hospitality, Travel & Consumer Brands
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                I work with CEOs, founders and boards as a fractional Chief Commercial or Marketing Officer, bringing the operating experience of a former COO, CCO and GM to growth, go-to-market and turnaround challenges. I don't hand over a deck and leave; I build the plan, lead the team through it and measure the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH - LIGHT BG */}
      <section style={{ background: '#F0EDE6', borderBottom: '1px solid #D4CFC6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              01 Who I Work With
            </div>
            <h2 className="ea-section-heading" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
              Client Segments
            </h2>
          </div>

          <div className="ea-who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {[
              {
                title: 'Hospitality & Travel Operators',
                desc: 'Hotels, luxury rentals, travel distribution and experiences, especially growth-stage and PE-backed.'
              },
              {
                title: 'Luxury, Lifestyle & Spirits Brands',
                desc: 'Positioning, distribution, retail and partnership growth.'
              },
              {
                title: 'Travel-Tech & Proptech Companies',
                desc: 'Scaling go-to-market, pricing and partnerships with hospitality and real estate buyers.'
              }
            ].map((client, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#1C1A17', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {client.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.65, color: '#1C1A17' }}>
                  {client.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO - DARK BG */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              02 What I Do
            </div>
            <h2 className="ea-section-heading" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
              Four Service Areas
            </h2>
          </div>

          <div className="ea-what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              {
                num: 'I',
                title: 'Commercial Strategy & GTM',
                desc: 'Positioning, segmentation, channel and distribution strategy, pricing architecture, launch plans.'
              },
              {
                num: 'II',
                title: 'Revenue & Performance Turnarounds',
                desc: 'Commercial diagnostics, market share and RevPAR gaps, unit economics, P&L and operating cadences.'
              },
              {
                num: 'III',
                title: 'Partnerships & Distribution',
                desc: 'Co-branded and brand-funded programs, retail and trade activation, strategic alliances.'
              },
              {
                num: 'IV',
                title: 'Models & Investor Readiness',
                desc: 'Business cases, valuations, scenario models, fundraising and board materials; AI-enabled analytics.'
              }
            ].map((service, i) => (
              <div key={i} style={{ borderLeft: '2px solid #B8924A', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 300, color: '#B8924A', marginBottom: '0.5rem' }}>
                  {service.num}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.65, color: '#F0EDE6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED RESULTS - LIGHT BG */}
      <section style={{ background: '#F0EDE6', borderBottom: '1px solid #D4CFC6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              03 Selected Results
            </div>
            <h2 className="ea-section-heading" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
              Track Record
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="ea-results-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #B8924A' }}>
                  <th style={{ textAlign: 'left', padding: '1.5rem', color: '#1C1A17', fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>Company</th>
                  <th style={{ textAlign: 'left', padding: '1.5rem', color: '#1C1A17', fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>Role</th>
                  <th style={{ textAlign: 'left', padding: '1.5rem', color: '#1C1A17', fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    company: 'Bonotel Exclusive Travel',
                    role: 'Chief Operating Officer (Carlyle-backed)',
                    result: 'Helped grow gross revenue from $229M to $268M; enrolled 546 hotels in a brand-funded partner program; led the acquisition that created BEYOND by Bonotel'
                  },
                  {
                    company: 'Lacure Villas',
                    role: 'Chief Commercial Officer',
                    result: 'Led a 65-person organization; grew GBV 13.2%; launched programs with American Express Platinum, Visa and NetJets'
                  },
                  {
                    company: 'Sonder',
                    role: 'Area General Manager, California',
                    result: 'Built the region from one person to seven properties (~700 rooms); led the portfolio through COVID-19 at a 240 RevPAR Index'
                  },
                  {
                    company: 'Stillhouse Spirits',
                    role: 'General Manager & Head of Marketing (Bacardi-backed)',
                    result: 'Reset the 2019 brand plan; 7.5% depletions in Q1 2019; launched Stillhouse Classic Vodka'
                  },
                  {
                    company: 'Diageo',
                    role: 'Regional Marketing Manager',
                    result: 'Oversaw about $35M a year in Captain Morgan national media and Johnnie Walker\'s integrated campaigns in South Africa'
                  },
                  {
                    company: 'BLKBOX',
                    role: 'Managing Director',
                    result: 'Won a Mondelez Brand Accelerator engagement; raised a $1.5M growth round'
                  }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < 5 ? '1px solid #D4CFC6' : 'none' }}>
                    <td style={{ padding: '1.5rem', color: '#1C1A17', fontWeight: 500 }}>{row.company}</td>
                    <td style={{ padding: '1.5rem', color: '#1C1A17', fontWeight: 300 }}>{row.role}</td>
                    <td style={{ padding: '1.5rem', color: '#1C1A17', fontWeight: 300 }}>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Advisory Clients Note */}
          <div style={{ marginTop: '3rem', padding: '2rem', borderTop: '1px solid #D4CFC6', borderBottom: '1px solid #D4CFC6' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.75, color: '#1C1A17' }}>
              <strong>Advisory clients</strong> include Swarm AI (compute marketplace, supported a $3M seed raise), Voyage Real Estate (Compass), Perro Verde, Beverly Spirits, Wilbur Labs and Boatsetter.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK TOGETHER - DARK BG */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              04 How We Work Together
            </div>
            <h2 className="ea-section-heading" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
              Three Engagement Models
            </h2>
          </div>

          <div className="ea-engagement-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                title: 'Commercial Diagnostic',
                time: '4-6 WEEKS',
                fee: 'FIXED FEE',
                desc: 'A clear read on where growth is stuck, the three priorities that matter and a 90-day action plan.'
              },
              {
                title: 'Fractional CCO / CMO',
                time: '1-3 DAYS A WEEK',
                fee: 'MONTHLY RETAINER',
                desc: 'Hands-on leadership of the commercial team, GTM execution, partner deals and board-level reporting.'
              },
              {
                title: 'Revenue Sprint',
                time: '8-12 WEEKS',
                fee: 'PROJECT FEE',
                desc: 'One focused outcome: a pricing reset, channel or product launch, partnership program or turnaround plan.'
              }
            ].map((model, i) => (
              <div key={i} className="ea-engagement-card" style={{ padding: '2.5rem', border: '1px solid #B8924A' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {model.title}
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.25rem' }}>
                    Duration
                  </p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6' }}>
                    {model.time}
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.25rem' }}>
                    Fee Structure
                  </p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6' }}>
                    {model.fee}
                  </p>
                </div>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.65, color: '#F0EDE6', borderTop: '1px solid #2e2b26', paddingTop: '1.5rem' }}>
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND - LIGHT BG */}
      <section style={{ background: '#F0EDE6', borderBottom: '1px solid #D4CFC6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              05 Background
            </div>
            <h2 className="ea-section-heading" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
              Education & Leadership
            </h2>
          </div>

          <div className="ea-background-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div className="ea-background-content">
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>
                Education
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#1C1A17', marginBottom: '0.25rem' }}>
                    Kellogg School of Management
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>
                    MBA, Corporate Finance
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#1C1A17', marginBottom: '0.25rem' }}>
                    Harvard Kennedy School
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>
                    MPA, Economics
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#1C1A17', marginBottom: '0.25rem' }}>
                    USC Annenberg
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>
                    BA
                  </p>
                </div>
              </div>
            </div>

            <div className="ea-background-content">
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>
                Board & Advisory
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#1C1A17', marginBottom: '0.25rem' }}>
                    Board Member & Strategic Advisor
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>
                    Dowling Street
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#1C1A17', marginBottom: '0.25rem' }}>
                    Publisher
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>
                    Expand Your Aperture (Substack)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER - DARK BG */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.3, marginBottom: '2rem', color: '#F0EDE6' }}>
            Let's talk about your growth plan.
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
            <a 
              href="mailto:brandon@aperturehospitality.com" 
              style={{ fontSize: '0.9375rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}
            >
              brandon@aperturehospitality.com
            </a>
            <a 
              href="tel:310-691-6419" 
              style={{ fontSize: '0.9375rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}
            >
              310.691.6419
            </a>
            <a 
              href="https://aperturehospitality.com" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.9375rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}
            >
              aperturehospitality.com
            </a>
          </div>

          <p style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#6B6760' }}>
            Fractional Commercial Leadership for Growth-Stage & PE-Backed Companies
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
