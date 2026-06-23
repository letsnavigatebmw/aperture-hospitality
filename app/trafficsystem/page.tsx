'use client'

import { useState } from 'react'

export default function TrafficSystemPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null)

  const faqItems = [
    {
      q: 'Who is this for?',
      a: 'Independent boutique hotels, luxury short-term rental operators, restaurant and hospitality groups, and local luxury service businesses that want to generate more qualified direct inquiries without relying entirely on OTAs, listing platforms, or word of mouth.'
    },
    {
      q: 'What does it actually solve?',
      a: 'It solves the volume leak — the gap between your property existing and qualified guests actually seeing a specific offer, landing on a focused page, and submitting a direct inquiry. Most boutique operators have no system for this. They have a website and hope.'
    },
    {
      q: 'How fast can this go live?',
      a: 'Three working days from the intake call to a live system — assuming you provide the access, approvals, and brand assets needed on Day 1. The only thing that slows this down is delayed approvals on your end.'
    },
    {
      q: 'When should I expect results?',
      a: 'Measurable lead flow within 30 days of launch. The first 30 days are a calibration period — we\'re learning what the audience responds to, what the page converts at, and what the cost per inquiry looks like. Optimization happens in the 30–90 day window.'
    },
    {
      q: 'How much work is on me?',
      a: 'A 30–60 minute intake call on Day 1, an asset approval on Day 2, and a final approval on Day 3. After launch, a weekly 15-minute scorecard review. The rest is handled by Aperture.'
    },
    {
      q: 'How is this different from just running ads?',
      a: 'Running ads to a generic website homepage produces poor results because the page isn\'t built to convert. This system is a complete funnel — audience definition, a focused landing page, lead routing, and measurement — not just ad spend.'
    },
    {
      q: 'Does this replace my main website?',
      a: 'No. The traffic landing page sits alongside your existing website and handles paid traffic specifically. Your main site handles organic traffic, brand presentation, and direct navigation. The two serve different jobs.'
    },
    {
      q: 'Do I need paid advertising already?',
      a: 'No. We set up the first campaign as part of the system. You need a media budget (ask us about minimum recommended spend for your market during the intake call) but no prior ad experience is required.'
    }
  ]

  return (
    <>
      <style>{`
        :root {
          --ink: #1C1A17; --parchment: #F0EDE6; --parchment2: #E8E4DB;
          --brass: #B8924A; --brass-dim: #9a7a3e; --muted: #6B6760;
          --rule: #D4CFC6; --dark2: #2e2b26;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--parchment); color: var(--ink); font-family: 'Inter', system-ui, sans-serif; font-size: 16px; line-height: 1.6; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1140px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 4rem); }
        .sl { display: flex; align-items: center; gap: 0.75rem; font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 2rem; }
        .sl::before { content: ''; display: block; width: 2px; height: 1.25rem; background: var(--brass); flex-shrink: 0; }
        .sl-dark { display: flex; align-items: center; gap: 0.75rem; font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #F0EDE6; margin-bottom: 2rem; }
        .sl-dark::before { content: ''; display: block; width: 2px; height: 1.25rem; background: var(--brass); flex-shrink: 0; }
        .btn-brass { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 2.25rem; background: var(--brass); color: var(--parchment); font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.2s; text-decoration: none; }
        .btn-brass:hover { background: var(--brass-dim); }
        @media (max-width: 860px) {
          .two-col { display: block !important; }
          .three-col { display: block !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--ink)', padding: 'clamp(5rem,10vw,8rem) 0', borderBottom: '1px solid var(--dark2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="sl-dark">Hospitality Traffic System</div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem,5.5vw,5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                More qualified<br/>direct bookings<br/>from a defined<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>local audience.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Stop depending on OTAs for your revenue. Build a simple, repeatable direct booking system in 3 days and see measurable lead flow within 30 days.
              </p>

            </div>

            {/* Pricing Card */}
            <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>Done-For-You Traffic System</div>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '2rem' }}>
                We install the minimum viable traffic system for your hospitality brand so you can start measuring direct booking flow.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '3.5rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1 }}>$500</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 300, color: 'var(--muted)' }}>/mo management</span>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--dark2)' }}>
                + media spend & one-time setup fee
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {['Completed hospitality landing page', 'Inquiry form and lead routing configured', 'First campaign setup and creative brief', 'Weekly performance scorecard', '30–90 day test window included'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid var(--dark2)', fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                    <span style={{ width: '16px', height: '16px', minWidth: '16px', marginTop: '2px', color: 'var(--brass)', fontWeight: 'bold' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/contact?product=traffic-system" style={{ display: 'block', textAlign: 'center', padding: '2rem 1.5rem', background: '#1C1A17', color: '#F0EDE6', border: '2.5px solid #B8924A', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.3s', marginBottom: '1rem', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2e2b26'; e.currentTarget.style.borderColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; e.currentTarget.style.borderColor = '#B8924A'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.25rem' }}>Launch My Traffic System</div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>$500/MONTH</div>
              </a>
              <p style={{ fontSize: '0.6875rem', fontWeight: 300, color: 'var(--muted)', marginTop: '1rem', lineHeight: 1.5, textAlign: 'center' }}>
                Time to launch: 3 working days · Primary metric: direct bookings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div className="sl">The Current State</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
                Delivering exceptional experiences while<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>leads dry up.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink)', marginBottom: '1.25rem' }}>
                You spend your time running operations and managing guest experiences. New booking flow depends on OTA algorithms, referrals, or Google searches that may or may not find you.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink)', marginBottom: '2rem' }}>
                Some weeks the calendar fills. Other weeks there are no qualified direct inquiries at all.
              </p>
              <div style={{ background: 'var(--parchment2)', border: '1px solid var(--rule)', padding: '2rem' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>The Volume Leak</div>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--ink)' }}>
                  Not enough of the right guests are seeing a focused offer. The real cause is the absence of a focused traffic-to-page-to-follow-up system that you own and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--ink)', borderBottom: '1px solid var(--dark2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="sl-dark">The Desired State</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                A steady, measurable<br/>direct booking<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>machine.</em>
              </h2>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                One simple system: one audience, one offer, one page, one next step. See exactly what's happening and what to change.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>The Cost of Inaction</div>
              <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '2.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  10 missed direct bookings/mo × 30% conversion × $1,800 booking value
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '3.5rem', fontWeight: 300, color: 'var(--brass)', lineHeight: 1, marginBottom: '0.25rem' }}>
                  $5,400
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: 'var(--muted)' }}>lost per month</div>
              </div>
              <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '2rem' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '2.5rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>
                  $64,800
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: 'var(--muted)' }}>in missed revenue over 12 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div className="sl">Frequently Asked Questions</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2rem,3vw,2.75rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
                Questions Worth<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>Asking.</em>
              </h2>
            </div>

            <div>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid var(--rule)',
                    padding: '1.75rem 0',
                    borderBottom: i === faqItems.length - 1 ? '1px solid var(--rule)' : 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => setOpenFaqId(openFaqId === i ? null : i)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.25rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3 }}>
                      {item.q}
                    </span>
                    <span style={{ color: 'var(--brass)', fontSize: '1.25rem', flexShrink: 0, transition: 'transform 0.2s', transform: openFaqId === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </div>
                  {openFaqId === i && (
                    <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted)', marginTop: '1.25rem' }}>
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(5rem,10vw,8rem) 0', background: 'var(--ink)', borderBottom: '1px solid var(--dark2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Stop losing direct bookings to the volume leak.<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>Launch your traffic system.</em>
              </h2>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>$500/month management. Live in 3 days. Measurable results in 30.</p>
            </div>
            <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>Done-For-You Traffic System</div>
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>
                $500<span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/mo</span>
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--dark2)' }}>
                + media spend & one-time setup
              </div>
              <a href="/contact?product=traffic-system" style={{ display: 'block', textAlign: 'center', padding: '2rem 1.5rem', background: '#1C1A17', color: '#F0EDE6', border: '2.5px solid #B8924A', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.3s', marginBottom: '1rem', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2e2b26'; e.currentTarget.style.borderColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; e.currentTarget.style.borderColor = '#B8924A'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.25rem' }}>Launch My Traffic System</div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>$500/MONTH</div>
              </a>
              <a href="/contact" style={{ display: 'block', textAlign: 'center', padding: '1.5rem 1.5rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2e2b26'; e.currentTarget.style.borderColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#4a4845'; }}>
                Talk to Brandon first
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
