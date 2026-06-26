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
      <section style={{ background: '#1C1A17', padding: '2.25rem 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '2px', height: '2.5rem', background: '#B8924A', flexShrink: 0 }}></div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: 300, lineHeight: 1.5, color: '#F0EDE6' }}>
            <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Organizational Intelligence</em>
            <span style={{ color: '#6B6760' }}> is the ability of an organization to transform </span>
            distributed intelligence
            <span style={{ color: '#6B6760' }}> into </span>
            coordinated action.
          </p>
        </div>
      </section>

      {/* ══ OPENING QUOTE ══ */}
      <section style={{ padding: 'clamp(6rem, 12vw, 10rem) 0 clamp(5rem, 10vw, 8rem)', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '2px 1fr', gap: '3rem', alignItems: 'start' }}>
          <div style={{ background: '#B8924A', height: '100%', minHeight: '120px' }} className="reveal"></div>
          <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.25, color: '#1C1A17', fontStyle: 'italic', margin: 0 }} className="reveal reveal-delay-1">
            Organizations don't change because they learn something new.<br/>
            They change because they begin <em style={{ fontStyle: 'normal', color: '#B8924A' }}>seeing themselves differently.</em>
          </blockquote>
        </div>
      </section>

      {/* ══ ESSAY: ORIGIN ══ */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '0.75rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              The Origin
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17' }}>
              Twenty years.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>recurring problem.</em>
            </h2>
          </div>

          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', fontStyle: 'italic', marginBottom: '1.5rem' }} className="reveal">
              Twenty years ago, I believed businesses succeeded because they had better products, better marketing, or better leaders.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-1">
              Over the course of my career, I had the opportunity to work inside luxury hospitality companies, global consumer brands, technology startups, and real estate platforms. Every industry looked different. Every balance sheet looked different. Every customer looked different.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-1">
              Yet I kept encountering the same problem.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-2">
              Brilliant people. Good intentions. Endless effort.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-2">
              And organizations that somehow struggled to translate intelligence into coordinated action.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-3">
              At first, I thought these were isolated management problems — edge cases specific to a particular leader, a particular market, a particular moment in time.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }} className="reveal reveal-delay-3">
              Eventually, I realized I was looking at the same phenomenon wearing different clothes.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PARADOX SECTION (DARK) ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }} className="reveal">
            <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
            The Framework
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.1, color: '#F0EDE6' }} className="reveal">
                Organizational<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligence.</em><br/>
                <span style={{ fontSize: 'clamp(1rem, 1.5vw, 1.375rem)', fontStyle: 'normal', color: '#6B6760', fontWeight: 300, fontFamily: "'Inter', sans-serif", letterSpacing: 0, lineHeight: 1.5 }}>A new management philosophy<br/>for the AI era.</span>
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
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                  <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                  <span>We're not aligned.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                  <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                  <span>Execution is inconsistent.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                  <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                  <span>Everyone is busy, but progress feels slow.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                  <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                  <span>Marketing and sales aren't on the same page.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '0.875rem 0', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                  <span style={{ color: '#B8924A', flexShrink: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem' }}>—</span>
                  <span>We keep having the same conversations.</span>
                </li>
              </ul>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.125rem, 1.75vw, 1.375rem)', fontWeight: 300, lineHeight: 1.5, color: '#F0EDE6', fontStyle: 'italic', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26', marginTop: '0.5rem' }} className="reveal">
                This is the paradox of modern organizations. As intelligence has increased, coordination has not kept pace. The defining constraint of the AI era is no longer access to information. It is the ability to transform distributed intelligence into <em style={{ fontStyle: 'normal', color: '#B8924A' }}>coordinated action.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ESSAY: WHAT THIS MEANS ══ */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '0.75rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              The Implication
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17' }}>
              The problem isn't<br/>what you <em style={{ fontStyle: 'italic', color: '#B8924A' }}>know.</em><br/>
              It's what you can<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>do together.</em>
            </h2>
          </div>

          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', fontStyle: 'italic', marginBottom: '2rem' }} className="reveal">
              Most organizations aren't failing because they lack intelligence. They're failing because they can't coordinate it.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-1">
              The leaders I've worked with across hospitality, consumer brands, technology, and real estate are, almost without exception, intelligent, capable, and committed. They understand their markets. They've read the strategy books. They have opinions, data, and frameworks for everything.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-1">
              And yet their organizations move slowly. Decisions get relitigated. Functions operate at cross-purposes. The gap between what leadership intends and what the organization actually executes is wider than anyone is comfortable admitting.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-2">
              This is not a talent problem. It is not a strategy problem. It is not even a communication problem — most organizations communicate constantly.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-2">
              It is a <strong>commercial architecture problem.</strong>
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }} className="reveal reveal-delay-3">
              The organizations that consistently outperform their peers are not necessarily the ones with the best strategies or the most talented teams. They are the ones that have built the underlying architecture — the plans, processes, rhythms, and decision frameworks — that allow intelligence to become coordinated action.
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#6B6760' }} className="reveal reveal-delay-3">
              That architecture is what Aperture exists to build.
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BELIEVE ══ */}
      <section style={{ background: '#E8E4DB', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              What We Believe
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17' }}>
              Three <em style={{ fontStyle: 'italic', color: '#B8924A' }}>convictions</em><br/>that shape everything<br/>we do.
            </h2>
          </div>

          <div>
            <div style={{ borderTop: '1px solid #D4CFC6', paddingTop: '2rem', marginBottom: '2.5rem' }} className="reveal">
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Conviction 01</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', marginBottom: '0.875rem', fontStyle: 'italic' }}>Strategy without a plan is noise.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>Every organization has a strategy. Very few have the plans, calendars, briefs, and decision frameworks that translate that strategy into something every function can act on. We build the bridge between intention and execution — not by adding complexity, but by removing ambiguity.</p>
            </div>

            <div style={{ borderTop: '1px solid #D4CFC6', paddingTop: '2rem', marginBottom: '2.5rem' }} className="reveal reveal-delay-1">
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Conviction 02</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', marginBottom: '0.875rem', fontStyle: 'italic' }}>Coordination is a competitive advantage.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>In a world where every competitor has access to the same data, the same software, and the same talent pool, the ability to coordinate faster and more effectively is one of the few genuine differentiators left. We treat organizational alignment not as a management hygiene issue but as a strategic capability worth building deliberately.</p>
            </div>

            <div style={{ borderTop: '1px solid #D4CFC6', paddingTop: '2rem' }} className="reveal reveal-delay-2">
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Conviction 03</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', marginBottom: '0.875rem', fontStyle: 'italic' }}>Systems outlast effort.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>Extraordinary individual effort can compensate for structural gaps for a while. Eventually it cannot. The organizations that scale sustainably are the ones that replace heroic execution with repeatable systems — plans, rhythms, and frameworks that produce consistent results regardless of who is in the room on any given day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHAPTER CTA ══ */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2.5rem' }} className="reveal">
            <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
            The Philosophy — In Writing
          </div>

          <Link href="/philosophy/chapter1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #D4CFC6', textDecoration: 'none', transition: 'all 0.3s' }} className="reveal reveal-delay-1" onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            
            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', background: '#E8E4DB', borderRight: '1px solid #D4CFC6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#D4CFC6', lineHeight: 1, marginBottom: '2rem' }}>01</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2vw, 1.875rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17', marginBottom: '1.5rem' }}>
                  Every Organization Is Intelligent. Very Few Are Designed <span style={{ color: '#B8924A', fontStyle: 'italic' }}>to Think.</span>
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760' }}>
                  On the difference between organizational intelligence and organizational thinking — and why most companies are sitting on more capability than they're using.
                </p>
              </div>
              <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px', padding: '0.875rem 1.75rem', background: '#1C1A17', cursor: 'pointer', transition: 'background 0.2s', marginTop: '2rem', alignSelf: 'flex-start' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#2e2b26'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1C1A17'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1 }}>Read Chapter One</div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A' }}>Organizational Intelligence →</div>
              </div>
            </div>

            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>Coming Next</div>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', paddingLeft: 0, marginBottom: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>The Coordination Gap</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>Why Strategy Fails at Execution</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>The Architecture of Commercial Systems</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>Intelligence in the Age of AI</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', marginBottom: '1.5rem', lineHeight: 1.6 }}>New chapters published periodically. No cadence promised — only quality.</p>
                <div style={{ display: 'flex', gap: 0 }}>
                  <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '0.75rem 1rem', background: '#F0EDE6', border: '1px solid #D4CFC6', borderRight: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, color: '#1C1A17', outline: 'none' }} />
                  <button style={{ padding: '0.75rem 1.5rem', background: '#B8924A', border: 'none', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0EDE6', cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#9a7a3e'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; }}>Follow Along</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ══ INSIGHTS FOOTER ══ */}
      <section style={{ background: '#2A2723', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          {/* Upper Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(240,237,230,0.1)', marginBottom: '2.5rem' }}>
            {/* Left Side - Tagline */}
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.3, marginBottom: '1rem' }}>
                Insights on hospitality, luxury, and <em style={{ fontStyle: 'italic', color: '#B8924A' }}>growth.</em>
              </p>
              <p style={{ fontSize: '0.82rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.75, fontWeight: 300 }}>
                Practical thinking on marketing, commercial strategy, and what's actually working for boutique hospitality and luxury brands. No filler. Straight to the point.
              </p>
            </div>

            {/* Right Side - Email Subscription */}
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.75rem' }}>
                  Subscribe to Aperture Insights
                </label>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{ flex: 1, background: '#1C1A17', border: '1px solid rgba(240,237,230,0.1)', color: '#F0EDE6', padding: '0.85rem 1rem', fontSize: '0.85rem', borderRadius: 0, transition: 'border-color 0.2s' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(184,146,74,0.3)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(240,237,230,0.1)')}
                />
                <button style={{ background: '#B8924A', border: '1px solid #B8924A', color: '#F0EDE6', padding: '0.85rem 1.5rem', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(240,237,230,0.35)', fontWeight: 300, lineHeight: 1.4 }}>
                No spam. Unsubscribe anytime. Brandon writes every issue personally.
              </p>
            </div>
          </div>

          {/* Lower Section - Footer Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Logo + Branding */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="15" stroke="#F0EDE6" strokeWidth="1"/>
                <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F0EDE6', fontWeight: 500 }}>Aperture Hospitality</span>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
              <a href="mailto:inquiries@aperturehospitality.com" style={{ color: '#B8924A', textDecoration: 'underline', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}>
                inquiries@aperturehospitality.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F0EDE6', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}>
                LinkedIn
              </a>
              <a href="https://substack.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F0EDE6', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#F0EDE6')}>
                Follow Aperture on Substack
              </a>
            </div>

            {/* Copyright */}
            <div style={{ fontSize: '0.65rem', color: 'rgba(240,237,230,0.4)', fontWeight: 400, marginLeft: 'auto', whiteSpace: 'nowrap' }}>
              © 2026 Aperture Hospitality. All rights reserved.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
