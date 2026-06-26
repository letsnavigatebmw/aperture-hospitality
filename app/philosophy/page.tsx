'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect } from 'react'

export default function PhilosophyPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  const styles = `
    .reveal {
      opacity: 0; transform: translateY(18px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
  `;

  return (
    <>
      <Nav />
      
      <style>{styles}</style>

      {/* ══ DEFINITION ══ */}
      <section style={{ background: '#2e2b26', padding: '2.25rem 0', borderBottom: '1px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '2px', height: '2.5rem', background: '#B8924A', flexShrink: 0 }}></div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: 300, lineHeight: 1.5, color: '#F0EDE6' }}>
            <em style={{ fontStyle: 'italic', textDecoration: 'underline', color: '#F0EDE6' }}>Organizational Intelligence</em>
            <span style={{ color: '#F0EDE6' }}> is the ability of an organization to transform </span>
            <em style={{ fontStyle: 'italic', textDecoration: 'underline', color: '#F0EDE6' }}>distributed intelligence</em>
            <span style={{ color: '#F0EDE6' }}> into </span>
            <em style={{ fontStyle: 'italic', textDecoration: 'underline', color: '#F0EDE6' }}>coordinated action.</em>
          </p>
        </div>
      </section>

      {/* ══ OPENING QUOTE ══ */}
      <section style={{ background: '#2e2b26', padding: 'clamp(6rem, 13vw, 11rem) 0', borderBottom: '1px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }} className="reveal">
            <div style={{ width: '2px', height: '1rem', background: '#B8924A', flexShrink: 0 }}></div>
            <span style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F0EDE6' }}>The Founding Principle</span>
          </div>

          <blockquote style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            fontWeight: 300,
            lineHeight: 1.12,
            color: '#F0EDE6',
            margin: '0 0 3rem',
            fontStyle: 'italic'
          }} className="reveal reveal-delay-1">
            Organizations don't change because they learn something new.
            <span style={{ display: 'block', marginTop: '0.3em', color: '#B8924A' }}>They change because they begin seeing themselves differently.</span>
          </blockquote>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="reveal reveal-delay-2">
            <div style={{ width: '3.5rem', height: '1px', background: '#B8924A' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 300, color: '#F0EDE6', letterSpacing: '0.08em' }}>Brandon M. Weaver — Founder, Aperture</span>
          </div>
        </div>
      </section>

      {/* ══ ESSAY: ORIGIN ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '0.75rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              The Origin
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6' }}>
              Twenty years.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>recurring problem.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {[
              'Twenty years ago, I believed businesses succeeded because they had better products, better marketing, or better leaders.',
              'Over the course of my career, I had the opportunity to work inside luxury hospitality companies, global consumer brands, technology startups, and real estate platforms. Every industry looked different. Every balance sheet looked different. Every customer looked different.',
              'Yet I kept encountering the same problem.',
              'Brilliant people. Good intentions. Endless effort.',
              'And organizations that somehow struggled to translate intelligence into coordinated action.',
              'At first, I thought these were isolated management problems — edge cases specific to a particular leader, a particular market, a particular moment in time.',
              'Eventually, I realized I was looking at the same phenomenon wearing different clothes.'
            ].map((text, i) => (
              <p key={i} style={{ fontSize: i === 0 ? 'clamp(1.25rem, 2vw, 1.625rem)' : '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#F0EDE6', margin: 0, fontStyle: i === 0 ? 'italic' : 'normal' }} className={`reveal ${i === 0 ? '' : `reveal-delay-${Math.min(i - 1, 3)}`}`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PARADOX SECTION ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }} className="reveal">
            <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
            The Framework
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: '#F0EDE6', margin: 0 }} className="reveal">
                Organizational<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligence.</em><br/>
                <span style={{ fontSize: 'clamp(1rem, 1.5vw, 1.375rem)', fontStyle: 'normal', color: '#F0EDE6', fontWeight: 300, fontFamily: "'Inter', sans-serif", letterSpacing: 0, lineHeight: 1.5 }}>A new management philosophy<br/>for the AI era.</span>
              </h2>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }} className="reveal">
                <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
                The Coordination Paradox
              </div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }} className="reveal">
                We live in the most intelligent period in human history. Organizations have more data than ever before. More software. More dashboards. More AI. More experts. More meetings. More communication.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }} className="reveal">
                Yet leaders consistently describe the same frustrations:
              </p>
              <ul style={{ margin: '2rem 0', borderTop: '1px solid #2e2b26', listStyle: 'none', paddingLeft: 0 }} className="reveal">
                {["We're not aligned.", "Execution is inconsistent.", "Everyone is busy, but progress feels slow.", "Marketing and sales aren't on the same page.", "We keep having the same conversations."].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                    <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.125rem, 1.75vw, 1.375rem)', fontWeight: 300, lineHeight: 1.5, color: '#F0EDE6', fontStyle: 'italic', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26', margin: 0 }} className="reveal">
                This is the paradox of modern organizations. As intelligence has increased, coordination has not kept pace. The defining constraint of the AI era is no longer access to information. It is the ability to transform distributed intelligence into <em style={{ fontStyle: 'normal', color: '#B8924A' }}>coordinated action.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ESSAY: WHAT THIS MEANS ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '0.75rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              The Implication
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6' }}>
              The problem isn't<br/>what you <em style={{ fontStyle: 'italic', color: '#B8924A' }}>know.</em><br/>
              It's what you can<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>do together.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {[
              { text: "Most organizations aren't failing because they lack intelligence. They're failing because they can't coordinate it.", large: true },
              { text: "The leaders I've worked with across hospitality, consumer brands, technology, and real estate are, almost without exception, intelligent, capable, and committed. They understand their markets. They've read the strategy books. They have opinions, data, and frameworks for everything." },
              { text: "And yet their organizations move slowly. Decisions get relitigated. Functions operate at cross-purposes. The gap between what leadership intends and what the organization actually executes is wider than anyone is comfortable admitting." },
              { text: "This is not a talent problem. It is not a strategy problem. It is not even a communication problem — most organizations communicate constantly." },
              { text: "It is a commercial architecture problem.", strong: true },
              { text: "The organizations that consistently outperform their peers are not necessarily the ones with the best strategies or the most talented teams. They are the ones that have built the underlying architecture — the plans, processes, rhythms, and decision frameworks — that allow intelligence to become coordinated action." },
              { text: "That architecture is what Aperture exists to build.", muted: true }
            ].map((item, i) => (
              <p key={i} style={{ fontSize: item.large ? 'clamp(1.25rem, 2vw, 1.625rem)' : '1.0625rem', fontWeight: item.strong ? 700 : 300, lineHeight: 1.85, color: item.muted ? '#4a4845' : '#F0EDE6', margin: 0, fontStyle: item.large ? 'italic' : 'normal' }} className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i - 1, 3)}` : ''}`}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BELIEVE ══ */}
      <section style={{ background: '#2e2b26', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '1.5rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              What We Believe
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6' }}>
              Three <em style={{ fontStyle: 'italic', color: '#B8924A' }}>convictions</em><br/>that shape everything<br/>we do.
            </h2>
          </div>

          <div>
            {[
              { num: '01', title: 'Strategy without a plan is noise.', desc: 'Every organization has a strategy. Very few have the plans, calendars, briefs, and decision frameworks that translate that strategy into something every function can act on. We build the bridge between intention and execution — not by adding complexity, but by removing ambiguity.' },
              { num: '02', title: 'Coordination is a competitive advantage.', desc: 'In a world where every competitor has access to the same data, the same software, and the same talent pool, the ability to coordinate faster and more effectively is one of the few genuine differentiators left. We treat organizational alignment not as a management hygiene issue but as a strategic capability worth building deliberately.' },
              { num: '03', title: 'Systems outlast effort.', desc: 'Extraordinary individual effort can compensate for structural gaps for a while. Eventually it cannot. The organizations that scale sustainably are the ones that replace heroic execution with repeatable systems — plans, rhythms, and frameworks that produce consistent results regardless of who is in the room on any given day.' },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid #3a3733', paddingTop: '2rem', marginBottom: '2.5rem' }} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Conviction {item.num}</div>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#F0EDE6', marginBottom: '0.875rem', fontStyle: 'italic', margin: 0 }}>{item.title}</p>
                <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#F0EDE6', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FIVE LAWS ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3.5rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '2px', height: '1.25rem', background: '#B8924A', flexShrink: 0 }}></div>
              <span style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6' }}>The Framework</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: '#F0EDE6', margin: 0 }} className="reveal">
              The Five Laws of<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Organizational Intelligence.</em>
            </h2>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', margin: 0 }} className="reveal reveal-delay-1">
              These are not principles we invented. They are patterns we observed — repeatedly, across industries, over two decades — until they became impossible to ignore.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2e2b26' }}>
            {[
              { num: 'I', title: "Organizations don't execute strategies. They execute systems." },
              { num: 'II', title: 'Alignment compounds. Misalignment compounds faster.' },
              { num: 'III', title: 'AI amplifies organizations. It does not organize them.' },
              { num: 'IV', title: "Every organization is perfectly designed to produce its current results.", sub: 'An evolution of a classic systems thinking principle.' },
              { num: 'V', title: "The quality of an organization's decisions is limited by the quality of its connections." },
            ].map((law, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '2.5rem', padding: '2.75rem 0', borderBottom: i < 4 ? '1px solid #2e2b26' : 'none', alignItems: 'start' }} className="reveal">
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#3a3733', lineHeight: 1, paddingTop: '0.25rem' }}>
                  {law.num}
                </div>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Law {law.num.toLowerCase() === 'i' ? 'One' : law.num.toLowerCase() === 'ii' ? 'Two' : law.num.toLowerCase() === 'iii' ? 'Three' : law.num.toLowerCase() === 'iv' ? 'Four' : 'Five'}</div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.375rem, 2.25vw, 1.875rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6', margin: 0 }}>
                    {law.title.split('. ').map((part, j) => (
                      <span key={j}>
                        {part}{j === 0 && law.title.includes('. ') ? <em style={{ fontStyle: 'italic', color: '#B8924A' }}>.</em> : <em style={{ fontStyle: 'italic', color: '#B8924A' }}>.</em>}
                        {j === 0 && law.title.split('. ')[1] && <br/>}
                      </span>
                    ))}
                  </p>
                  {law.sub && <p style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6, margin: '0.75rem 0 0 0', fontStyle: 'italic' }}>{law.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CHAPTER CTA ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2.5rem' }} className="reveal">
            <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
            The Philosophy — In Writing
          </div>

          <Link href="/philosophy/chapter1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #2e2b26', textDecoration: 'none', transition: 'all 0.3s' }} className="reveal reveal-delay-1" onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(184,146,74,0.2)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            
            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', background: '#2e2b26', borderRight: '1px solid #3a3733', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 300, color: '#B8924A', lineHeight: 1, marginBottom: '2rem' }}>Chapter 1</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2vw, 1.875rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                  Every Organization Is Intelligent. Very Few Are Designed <span style={{ color: '#B8924A', fontStyle: 'italic' }}>to Think.</span>
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6' }}>
                  On the difference between organizational intelligence and organizational thinking — and why most companies are sitting on more capability than they're using.
                </p>
              </div>
              <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px', padding: '0.875rem 1.75rem', background: '#B8924A', cursor: 'pointer', transition: 'background 0.2s', marginTop: '2rem', alignSelf: 'flex-start' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#9a7a3e'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1 }}>Read Chapter One</div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1C1A17' }}>Organizational Intelligence →</div>
              </div>
            </div>

            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>Coming Next</div>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #2e2b26', paddingLeft: 0, marginBottom: 0 }}>
                  {['The Coordination Gap', 'Why Strategy Fails at Execution', 'The Architecture of Commercial Systems', 'Intelligence in the Age of AI'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 0', borderBottom: i < 3 ? '1px solid #2e2b26' : 'none', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.0625rem', fontWeight: 300, color: '#F0EDE6', fontStyle: 'italic', gap: '1rem' }}>
                      <span>{item}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0EDE6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1.5rem', lineHeight: 1.6 }}>New chapters published periodically. No cadence promised — only quality.</p>
                <div style={{ display: 'flex', gap: 0 }}>
                  <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '0.75rem 1rem', background: '#2e2b26', border: '1px solid #3a3733', borderRight: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', outline: 'none' }} />
                  <button style={{ padding: '0.75rem 1.5rem', background: '#B8924A', border: 'none', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0EDE6', cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#9a7a3e'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; }}>Follow Along</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* INSIGHTS FOOTER */}
      <section style={{ background: '#2e2b26', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 300, color: '#F0EDE6', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Insights on <em style={{ fontStyle: 'italic', color: '#B8924A' }}>hospitality, luxury,</em> and <em style={{ fontStyle: 'italic', color: '#B8924A' }}>growth.</em>
              </p>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.75 }}>
                Practical thinking on marketing, commercial strategy, and what's actually working for boutique hospitality and luxury brands. No fluff. No generic advice.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '0.75rem 1rem', background: '#1C1A17', border: '1px solid #3a3733', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', outline: 'none' }} />
              <button style={{ padding: '0.75rem 1.75rem', background: '#B8924A', border: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A17', cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#9a7a3e'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; }}>Subscribe</button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid #3a3733', fontSize: '0.75rem', color: '#F0EDE6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8924A" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
              </svg>
              <span style={{ fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>APERTURE</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="mailto:inquiries@aperturehospitality.com" style={{ color: '#F0EDE6', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}>INQUIRIES@APERTUREHOSPITALITY.COM</a>
              <a href="https://linkedin.com/company/aperture-hospitality" target="_blank" rel="noopener noreferrer" style={{ color: '#F0EDE6', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}>LINKEDIN</a>
              <a href="https://substack.com/@expandyouraperture" target="_blank" rel="noopener noreferrer" style={{ color: '#F0EDE6', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}>FOLLOW APERTURE ON SUBSTACK</a>
            </div>
            <span style={{ width: '100%', textAlign: 'right', fontSize: '0.65rem', color: '#6B6760' }}>© 2026 Aperture Hospitality. All rights reserved.</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
