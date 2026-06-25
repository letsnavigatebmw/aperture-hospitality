'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Chapter1Page() {
  return (
    <>
      <Nav />
      
      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>
            Every Organization Is <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligent.</em>
          </h1>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#B8924A', lineHeight: 1.2, marginBottom: '3rem' }}>
            Very Few Are Designed to Think.
          </h2>
        </div>
      </section>

      {/* THE CENTURY OF EFFICIENCY */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            For more than a century, management has focused on making organizations more efficient.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            We optimized factories.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            We standardized processes.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            We measured productivity.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            We built reporting structures.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            We introduced management systems.
          </p>
        </div>
      </section>

      {/* THE INFORMATION AGE */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem, 8vw, 6rem) 0', borderTop: '1px solid rgba(184,146,74,0.2)', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Then came the information age.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Organizations invested billions of dollars in enterprise software, customer relationship management platforms, business intelligence tools, cloud computing, and analytics. Information became abundant. Knowledge became increasingly accessible.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Today, we stand at the beginning of another transformation.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Artificial intelligence promises to make every organization smarter.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
            Or does it?
          </p>
        </div>
      </section>

      {/* THE CENTRAL QUESTION */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #D4CFC6' }}>
            This assumption deserves closer examination.
          </p>
          
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            An organization is not intelligent simply because it employs intelligent people.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Nor is it intelligent because it possesses extraordinary amounts of data.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem' }}>
            An organization becomes intelligent only when it can consistently transform information into <em style={{ fontStyle: 'italic', color: '#B8924A' }}>coordinated action.</em>
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #D4CFC6' }}>
            That distinction changes everything.
          </p>
        </div>
      </section>

      {/* THE MEETING */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem, 8vw, 6rem) 0', borderTop: '1px solid rgba(184,146,74,0.2)', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem' }}>
            Consider a typical executive meeting.
          </p>
          
          <div style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Marketing presents customer insights.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Sales shares feedback from the field.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Finance reviews performance.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Operations identifies constraints.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Product discusses the roadmap.
            </p>
          </div>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Every function possesses valuable intelligence.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Yet organizations frequently leave these meetings with the same problems they entered with.
          </p>

          <div style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,146,74,0.2)' }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Priorities remain unclear.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Ownership is ambiguous.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Execution stalls.
            </p>
          </div>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Not because intelligence is absent.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
            Because intelligence remains <em style={{ fontStyle: 'italic', color: '#B8924A' }}>fragmented.</em>
          </p>
        </div>
      </section>

      {/* THE PATTERN */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem' }}>
            Organizations do not think as a single system.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #D4CFC6' }}>
            They think as collections of functions.
          </p>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem', marginTop: '2rem' }}>
            This is the central management challenge of the AI era.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            The question is no longer whether organizations can generate intelligence.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            The question is whether they can <em style={{ fontStyle: 'italic', color: '#B8924A' }}>coordinate it.</em>
          </p>
        </div>
      </section>

      {/* MY CAREER */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem, 8vw, 6rem) 0', borderTop: '1px solid rgba(184,146,74,0.2)', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Throughout my career, I have worked across luxury hospitality, global consumer brands, technology startups, and real estate.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            The industries were different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            The business models were different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem' }}>
            The customers were different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,146,74,0.2)' }}>
            Yet the organizational challenge was remarkably consistent.
          </p>

          <div style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Marketing optimized campaigns.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Sales optimized revenue.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              Finance optimized investment.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Operations optimized efficiency.
            </p>
          </div>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Each function became increasingly capable.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem' }}>
            Yet the organization itself rarely became proportionally more effective.
          </p>
        </div>
      </section>

      {/* THE REALIZATION */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            For years I believed these were isolated operational problems.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem' }}>
            Eventually I recognized a deeper pattern.
          </p>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #D4CFC6' }}>
            Organizations were behaving exactly as they had been designed.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Most companies are organized around <em style={{ fontStyle: 'italic', color: '#B8924A' }}>functions.</em>
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            Few are designed around <em style={{ fontStyle: 'italic', color: '#B8924A' }}>intelligence.</em>
          </p>
        </div>
      </section>

      {/* AI WILL NOT SOLVE THIS */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem, 8vw, 6rem) 0', borderTop: '1px solid rgba(184,146,74,0.2)', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Artificial intelligence will not solve this problem.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem' }}>
            In many cases, it will amplify it.
          </p>

          <div style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,146,74,0.2)' }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              AI will generate more insight.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              More forecasts.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              More recommendations.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1rem' }}>
              More content.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              More decisions.
            </p>
          </div>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            Unless organizations evolve the way they coordinate, AI will increase organizational complexity faster than it increases organizational capability.
          </p>
        </div>
      </section>

      {/* THE FUTURE */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            The defining organizations of the next decade will not be those with the most sophisticated AI models.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            They will be those that most effectively connect human judgment, machine intelligence, organizational knowledge, and disciplined execution into a single adaptive system.
          </p>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #D4CFC6' }}>
            This book introduces a framework for building those organizations.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            I call it <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Organizational Intelligence.</em>
          </p>
        </div>
      </section>

      {/* THE PREMISE */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderTop: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem' }}>
            It begins with a simple premise.
          </p>
          
          <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.5, color: '#F0EDE6', margin: '3rem 0', paddingLeft: '2rem', borderLeft: '3px solid #B8924A', fontStyle: 'italic' }}>
            Every organization is intelligent.<br/><br/>
            Very few are designed to think.<br/><br/>
            The future belongs to those that are.
          </blockquote>

          <Link href="/philosophy" style={{ display: 'inline-block', marginTop: '3rem', padding: '1rem 2rem', background: 'transparent', border: '1.5px solid #B8924A', color: '#B8924A', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(184,146,74,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
            ← Back to Philosophy
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
