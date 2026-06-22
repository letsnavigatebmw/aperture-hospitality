'use client'

import { useState } from 'react'

export default function WorkplaceKitPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null)

  const faqItems = [
    {
      q: "I'm not technical. Can I use this?",
      a: 'Yes. The kit uses structured prompts and guided questions — you answer in plain English, the AI produces the output. No coding, no platform setup, no technical background required.'
    },
    {
      q: 'I already have some brand materials in Google Docs.',
      a: 'Good — the builders will use them as inputs. The kit creates one structured, interconnected workspace that replaces the scattered docs.'
    },
    {
      q: 'How long does setup take?',
      a: 'The Brand Foundation Library takes most operators 3–5 hours total. The rest of the build sequence takes another 4–6 hours. Most operators complete the full kit across two to three sessions.'
    },
    {
      q: 'What if my property changes or we reposition?',
      a: 'Update the relevant Foundation Library documents and re-run the affected builders. A change to your Brand Voice document propagates through every subsequent asset.'
    },
    {
      q: 'Can my team use this without me?',
      a: 'That\'s the point. Once the Foundation Library is built, any team member can run a builder and produce on-brand output without your involvement.'
    },
    {
      q: 'What\'s the difference between the Foundation Library and the full kit?',
      a: 'The Foundation Library ($297) is the first component — six brand documents. The full kit ($1,497) includes the Foundation Library plus the Builder Prompts and the full Guest Conversion Asset Stack.'
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
        .check-light { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 0; border-bottom: 1px solid var(--rule); font-size: 0.9375rem; font-weight: 300; line-height: 1.5; color: var(--ink); }
        .check-light svg { flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 860px) {
          .two-col { display: block !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--ink)', padding: 'clamp(5rem,10vw,8rem) 0', borderBottom: '1px solid var(--dark2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="sl-dark">Hospitality Marketing Workspace Kit</div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem,5.5vw,5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Stop being the<br/>bottleneck in your<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>own marketing.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                The Hospitality Marketing Workspace Kit gives your property a complete marketing operating system — so your team can build, ship, and sell without waiting on you every time.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/contact?product=workspace-kit" className="btn-brass">Get the workspace kit — $1,497</a>
                <a href="#whats-inside" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  See what's inside
                </a>
              </div>
            </div>

            {/* Pricing Card */}
            <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.75rem' }}>One-Time Setup</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '1.5rem' }}>No monthly fee. Own it permanently.</div>

              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '3.5rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>$1,497</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--dark2)' }}>One-time. No retainer. No subscription.</div>

              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {['The Brand Foundation Library', 'The Builder Prompts — hospitality-specific', 'The Guest Conversion Asset Stack', 'No technical background required', 'Built for hospitality — not generic small business'].map((item, i) => (
                  <li key={i} className="check-light" style={{ color: '#F0EDE6' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#B8924A" strokeWidth="0.75"/><path d="M5 8l2 2 4-4" stroke="#B8924A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/contact?product=workspace-kit" className="btn-brass" style={{ width: '100%', display: 'flex', marginBottom: '1rem' }}>Get the workspace kit for $1,497</a>
              <a href="/contact?product=foundation-library" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--dark2)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Start with Foundation Library only — $297
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div className="sl">Why Most Hospitality Marketing Falls Apart</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)' }}>
                Your brand standards<br/>live in your head.<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>Nowhere else.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink)', marginBottom: '1.25rem' }}>
                You know what makes your property special. The problem is that nobody else on your team does.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink)', marginBottom: '1.25rem' }}>
                When someone needs to write an email campaign, they guess. When a team member updates the website, they wing it. Every day you don't fix it, revenue leaks out through inconsistent messaging.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'var(--ink)' }}>
                That's not a team problem. That's a system problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--ink)', borderBottom: '1px solid var(--dark2)' }}>
        <div className="container">
          <div className="sl-dark">What Actually Fixes It</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '3.5rem', maxWidth: '28ch' }}>
            Your marketing doesn't<br/>need more content.<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>It needs a foundation.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Most hospitality businesses try to fix scattered marketing by creating more of it. That's not the fix. That's more chaos with more volume.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              The fix is a structured workspace where every piece of your marketing has one source of truth. That's what the Hospitality Marketing Workspace Kit is.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="whats-inside" style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--parchment2)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div className="sl">What's Inside the Kit</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(2.25rem,3.5vw,3.25rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--ink)', marginBottom: '3.5rem' }}>
            One AI. One workspace.<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>One operating system for your marketing.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--rule)' }}>
            <div>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>Component 01</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '1.875rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '1rem' }}>The Brand Foundation Library</h3>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted)' }}>
                Six property-foundation documents that tell your AI tools — and your team — everything about your brand.
              </p>
            </div>
            <div style={{ paddingTop: '3rem' }}>
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Six Documents Included</div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid var(--rule)' }}>
                {['Property Profile', 'Brand Voice & Tone Guide', 'Visual & Brand Style Reference', 'Rates, Offers & Packages Reference', 'Guest Segmentation & Audience Profile', 'Competitive Landscape Map'].map((item, i) => (
                  <li key={i} className="check-light">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#B8924A" strokeWidth="0.75"/><path d="M4.5 7l2 2 3.5-3.5" stroke="#B8924A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
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
                Real answers to questions<br/>you're already<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>asking.</em>
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
                Stop rebuilding from scratch.<br/><em style={{ fontStyle: 'italic', color: 'var(--brass)' }}>Start running a system.</em>
              </h2>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                Every week you operate without a marketing foundation, the leak gets bigger. The Hospitality Marketing Workspace Kit fixes the foundation — one time.
              </p>
            </div>
            <div style={{ background: 'var(--dark2)', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>Hospitality Marketing Workspace Kit</div>
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>$1,497</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--dark2)' }}>One-time setup fee. No subscription. No monthly retainer.</div>
              <a href="/contact?product=workspace-kit" className="btn-brass" style={{ width: '100%', display: 'flex', marginBottom: '0.875rem' }}>Get the workspace kit for $1,497</a>
              <a href="/contact?product=foundation-library" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--dark2)', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Start with Foundation Library only — $297
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
