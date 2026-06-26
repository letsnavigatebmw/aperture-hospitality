'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  const mobileStyles = `
    @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
    @media (max-width: 960px) {
      .hero-foot { grid-template-columns: 1fr; gap: 2rem; }
      .hero-ctas { justify-content: flex-start; }
      .challenge-inner { grid-template-columns: 1fr; gap: 3rem; }
      .industry-grid { grid-template-columns: 1fr 1fr; }
      .industry-card:nth-child(2) { border-right: none; }
      .industry-card { border-bottom: 1px solid #D4CFC6; }
      .services-header { grid-template-columns: 1fr; gap: 2rem; }
      .service-grid { grid-template-columns: 1fr; }
      .proof-header { grid-template-columns: 1fr; gap: 2rem; }
      .testimonials { grid-template-columns: 1fr; }
      .clients-row { flex-wrap: wrap; }
      .client { min-width: 33%; border-bottom: 1px solid #D4CFC6; }
      .final-inner { grid-template-columns: 1fr; gap: 3rem; }
      .footer-inner { grid-template-columns: 1fr; gap: 2rem; }
      .nav-links { display: none; }
    }
    @media (max-width: 560px) {
      .industry-grid { grid-template-columns: 1fr; }
      .industry-card { border-right: none; }
      .hero h1 { font-size: 3rem; }
    }
  `

  const industries = [
    { icon: 'building', title: 'Hospitality & Travel', desc: 'Unlock demand, improve distribution, and strengthen commercial performance across the full guest journey.' },
    { icon: 'building', title: 'Real Estate & PropTech', desc: 'Leverage property, owner, and market intelligence to create competitive advantage and accelerate transactions.' },
    { icon: 'clock', title: 'Consumer Brands', desc: 'Build stronger customer relationships through data-driven marketing, segmentation, and growth strategies.' },
    { icon: 'monitor', title: 'Technology & SaaS', desc: 'Accelerate adoption, improve retention, and build scalable go-to-market systems that compound over time.' }
  ]

  const services = [
    {
      num: '01',
      label: 'Customer Acquisition & Retention',
      title: 'Build the Foundation for Predictable Revenue.',
      desc: 'The audit comes first. Then the blueprint. Then execution. Every engagement in this practice area starts with understanding where customers are entering your world, where they are leaving, and what it would take to close the gap.',
      items: ['Revenue Audit', 'Sales Blueprint', 'Opportunity Mapping', 'Customer Segmentation', 'Revenue Analytics', 'AI Readiness Assessment']
    },
    {
      num: '02',
      label: 'Commercial Strategy',
      title: 'Align Growth, Marketing, and Sales Around Outcomes.',
      desc: 'Most organizations have a strategy document. Few have alignment between the teams responsible for executing it. Aperture builds the connective tissue between go-to-market motion, channels, partners, and revenue targets.',
      items: ['Go-to-Market Strategy', 'Growth Planning', 'Channel Strategy', 'Partnership Development', 'Product Positioning', 'Revenue Optimization']
    },
    {
      num: '03',
      label: 'AI & Automation',
      title: 'Create Systems That Scale Your Business.',
      desc: 'Automation is not about replacing people. It is about removing the manual work that creates bottlenecks, slows follow-up, and makes growth dependent on headcount. Aperture designs the systems that run while you focus on the work that matters.',
      items: ['Workflow Automation', 'Agentic System Design', 'CRM Optimization', 'Customer Intelligence Programs', 'Reporting Automation', 'Prospecting Engines']
    },
    {
      num: '04',
      label: 'Executive Advisory',
      title: 'Support for Leaders Navigating Change.',
      desc: 'Growth-stage organizations face decisions that are structural, not just tactical. Aperture works directly with founders, executives, and boards on the inflection points that determine whether a business scales or stalls.',
      items: ['Business Transformation', 'Organizational Design', 'Strategic Planning', 'M&A Readiness', 'Leadership Coaching', 'Board & Investor Preparation']
    }
  ]

  const challenges = [
    { icon: '📊', title: 'Slower growth.', desc: 'Teams are reacting instead of anticipating. The next move is always late.' },
    { icon: '⏱️', title: 'Lower productivity.', desc: 'Time spent reconciling data across systems is time not spent using it.' },
    { icon: '🎯', title: 'Missed opportunities.', desc: 'The signal was there. Nobody saw it until the window had closed.' },
    { icon: '💰', title: 'Rising acquisition costs.', desc: 'Targeting the wrong audience costs more every quarter.' },
    { icon: '💪', title: 'Teams working harder without working smarter.', desc: 'Effort is not the problem. Architecture is.' }
  ]

  return (
    <>
      <style>{mobileStyles}</style>
      <Nav />

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 4rem 2.5rem 6rem !important; min-height: auto !important; }
        }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* HERO */}
      <section className="hero-grid" style={{ background: '#1C1A17', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '5rem', gap: '3rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle outer arc watermark */}
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(184,146,74,0.07)', pointerEvents: 'none' }}></div>

        {/* LEFT: Copy */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* APERTURE wordmark at top with extended letter-spacing */}
          <div style={{ marginBottom: '4.5rem' }}>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '2.2rem', fontWeight: 300, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#F0EDE6', display: 'block', lineHeight: 1.2 }}>Aperture</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: '#B8924A', flexShrink: 0 }}></div>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.62rem', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B8924A' }}>Strategy. Intelligence. Automation.</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', lineHeight: 1.05, color: '#F0EDE6', letterSpacing: '-0.01em', marginBottom: '2rem' }}>
            Clarity Over <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Data.</em><br/>Growth Over Noise.
          </h1>

          <div style={{ width: '100%', height: '1px', background: 'rgba(240,237,230,0.08)', marginBottom: '1.75rem' }}></div>

          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(240,237,230,0.48)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
            Most companies are not suffering from a lack of data. They are suffering from a lack of clarity. Aperture connects the dots between people, property, products, and performance, turning disconnected information into decisions that drive growth.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', background: '#B8924A', border: '1px solid #B8924A', color: '#F0EDE6', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.6rem', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
              Start With a Conversation
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1.5 6.5h10M8 2.5l4 4-4 4"/>
              </svg>
            </Link>
            <Link href="/how-we-work" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', border: '1px solid rgba(240,237,230,0.2)', color: 'rgba(240,237,230,0.55)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.67rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.6rem', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE6'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,230,0.55)'; }}>
              How We Work
            </Link>
          </div>
        </div>

        {/* RIGHT: Logo - oversized, bleeding off edge */}
        <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
          <div style={{ position: 'absolute', width: '115%', right: '-14%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
            <svg viewBox="0 0 500 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aperture logo mark" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <title>Aperture logo</title>
              {/* Crosshair guide lines */}
              <line x1="250" y1="15" x2="250" y2="475" stroke="#F0EDE6" strokeWidth="0.5" opacity="0.07"/>
              <line x1="15" y1="250" x2="485" y2="250" stroke="#F0EDE6" strokeWidth="0.5" opacity="0.07"/>
              {/* Outer ghost ring */}
              <circle cx="250" cy="250" r="228" fill="none" stroke="#F0EDE6" strokeWidth="0.6" opacity="0.08"/>
              {/* Main ring */}
              <circle cx="250" cy="250" r="160" fill="none" stroke="#F0EDE6" strokeWidth="1.1" opacity="0.68"/>
              {/* Inner ghost ring */}
              <circle cx="250" cy="250" r="96" fill="none" stroke="#F0EDE6" strokeWidth="0.5" opacity="0.08"/>
              {/* Brass arc: 12 o'clock (250, 22) to 3 o'clock (478, 250) */}
              <path d="M 250 22 A 228 228 0 0 1 478 250" fill="none" stroke="#B8924A" strokeWidth="14" strokeLinecap="round" opacity="0.95"/>
              {/* Brass arc shadow */}
              <path d="M 250 27 A 223 223 0 0 1 473 250" fill="none" stroke="#7A5C28" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
              {/* Centre dot */}
              <circle cx="250" cy="250" r="5" fill="#B8924A" opacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Ticker at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid rgba(240,237,230,0.05)', padding: '1rem 0', overflow: 'hidden', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: '5rem', whiteSpace: 'nowrap', animation: 'ticker 36s linear infinite' }} className="ticker-track">
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.16)', fontWeight: 400, flexShrink: 0 }}>
              People<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Property<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Products<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Performance
            </span>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.16)', fontWeight: 400, flexShrink: 0 }}>
              Strategy<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>→</span>Intelligence<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>→</span>Automation
            </span>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.16)', fontWeight: 400, flexShrink: 0 }}>
              Prospect<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Lead<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Customer<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Promoter
            </span>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.16)', fontWeight: 400, flexShrink: 0 }}>
              People<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Property<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Products<span style={{ color: 'rgba(184,146,74,0.35)', margin: '0 1rem' }}>·</span>Performance
            </span>
          </div>
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>

      {/* CHALLENGE */}
      <section style={{ background: '#1C1A17', padding: '3rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '7rem', alignItems: 'start' }} className="challenge-inner">
          <div>
            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Challenge
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              The Problem isn't <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Data.</em><br/>It's Clarity.
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'rgba(240,237,230,0.5)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Most companies are not suffering from a lack of data. They are suffering from a lack of clarity.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.38)', lineHeight: 1.8, fontWeight: 300 }}>
              Customer data lives in one system. Marketing data lives in another. Operational insights sit in spreadsheets. Critical decisions are made on incomplete information, and the people making them do not always know what they are missing.
            </p>
          </div>

          <div style={{ paddingTop: '0.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
              When the systems do not connect, the business pays for it in ways that are hard to see until they compound. <strong style={{ color: 'rgba(240,237,230,0.7)', fontWeight: 400 }}>The symptoms are predictable.</strong>
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              {challenges.map((challenge, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid rgba(240,237,230,0.06)', ...(i === 0 && { borderTop: '1px solid rgba(240,237,230,0.06)' }) }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#B8924A', flexShrink: 0, marginTop: '0.6rem' }}></div>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.45)', fontWeight: 300, lineHeight: 1.5 }}>
                    <strong style={{ color: 'rgba(240,237,230,0.7)', fontWeight: 400 }}>{challenge.title}</strong> {challenge.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.38)', lineHeight: 1.8, fontWeight: 300, borderTop: '1px solid rgba(240,237,230,0.06)', paddingTop: '1.5rem' }}>
              At Aperture, we help organizations connect the dots between <strong style={{ color: '#B8924A', fontWeight: 400 }}>people, property, products, and performance</strong>, turning disconnected information into actionable intelligence that drives decisions, not just reports.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: '3rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              Industries We Serve
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Built for <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Your Industry.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B6760', maxWidth: '48ch', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
              Aperture brings domain expertise across the sectors where data, strategy, and commercial performance intersect most directly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: '#D4CFC6', border: '1px solid #D4CFC6' }} className="industry-grid">
            {industries.map((ind, i) => (
              <div key={i} style={{ background: '#F0EDE6', padding: '2.5rem 2rem', transition: 'background 0.2s', cursor: 'default', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none', position: 'relative', overflow: 'hidden' }} className="industry-card" onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,146,74,0.03)')} onMouseLeave={(e) => (e.currentTarget.style.background = '#F0EDE6')}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #D4CFC6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" stroke="#6B6760" fill="none" strokeWidth="1.25">
                    {ind.icon === 'building' && <><path d="M1 14V7l7-5 7 5v7"/><rect x="5" y="9" width="2" height="5"/><rect x="9" y="9" width="2" height="5"/></> }
                    {ind.icon === 'clock' && <><circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 2"/></> }
                    {ind.icon === 'monitor' && <><rect x="2" y="3" width="12" height="9" rx="1"/><path d="M6 14h4M8 12v2"/></> }
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.6rem', lineHeight: 1.2 }}>{ind.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#6B6760', lineHeight: 1.65, fontWeight: 300 }}>{ind.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid #D4CFC6', borderTop: 'none', padding: '1.75rem 2rem', background: 'rgba(184,146,74,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.3rem' }}>Also</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 400, color: '#1C1A17' }}>Professional Services</div>
                <div style={{ fontSize: '0.82rem', color: '#6B6760', fontWeight: 300, marginTop: '0.2rem' }}>Transform expertise into repeatable growth engines.</div>
              </div>
              <Link href="/capabilities" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: '#6B6760', fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.9rem 1.85rem', border: '1px solid #D4CFC6', transition: 'border-color 0.2s, color 0.2s', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1C1A17'; (e.currentTarget as HTMLElement).style.color = '#1C1A17'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#D4CFC6'; (e.currentTarget as HTMLElement).style.color = '#6B6760'; }}>
                See Full Capabilities
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10M8 3l4 4-4 4"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: '#1C1A17', padding: '3rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }} className="services-header">
            <div>
              <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
                What We Do
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1 }}>
                Four Practice Areas.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Connected System.</em>
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.4)', lineHeight: 1.8, fontWeight: 300 }}>
              Aperture does not sell services in isolation. Every engagement is designed around how strategy, intelligence, and execution connect. The goal is always a revenue engine that runs without you being the bottleneck.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(240,237,230,0.06)' }} className="service-grid">
            {services.map((service, i) => (
              <div key={i} style={{ background: '#1C1A17', padding: '3rem', transition: 'background 0.2s', cursor: 'default' }} className="service-card" onMouseEnter={(e) => (e.currentTarget.style.background = '#232118')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: 'rgba(184,146,74,0.1)', lineHeight: 1, marginBottom: '1.5rem' }}>{service.num}</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.6rem' }}>{service.label}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.15, marginBottom: '0.85rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,230,0.42)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.75rem' }}>{service.desc}</p>
                <div style={{ width: '2rem', height: '1px', background: 'rgba(184,146,74,0.25)', marginBottom: '1.25rem' }}></div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {service.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.78rem', color: 'rgba(240,237,230,0.35)', padding: '0.55rem 0', borderBottom: j < service.items.length - 1 ? '1px solid rgba(240,237,230,0.05)' : 'none', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ display: 'block', width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(184,146,74,0.4)', flexShrink: 0 }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIALS */}
      <section style={{ padding: '3rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '4rem' }} className="proof-header">
            <div>
              <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
                What Clients Say
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1 }}>
                Results, Not a <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Deck.</em>
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300 }}>
              Brandon reviews every engagement personally. No account managers, no hand-offs. You work directly with the person who built the methodology and carries 20+ years of cross-industry experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#D4CFC6', border: '1px solid #D4CFC6' }} className="testimonials">
            <div style={{ background: '#F0EDE6', padding: '3rem' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', color: '#D4CFC6', lineHeight: 0.8, marginBottom: '1.5rem', fontWeight: 300 }}>"</div>
              <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 300, fontStyle: 'italic', color: '#1C1A17', lineHeight: 1.6, marginBottom: '2rem' }}>
                What used to require constant monitoring, follow-up, and administrative effort now happens automatically and consistently. It created a better experience for both our agents and our clients by ensuring every inquiry received an immediate, professional response.
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #D4CFC6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: 500, color: '#6B6760', flexShrink: 0 }}>BW</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1C1A17', letterSpacing: '0.02em' }}>Brooke Winner</div>
                  <div style={{ fontSize: '0.72rem', color: '#6B6760', fontWeight: 300 }}>Founder & CEO, Voyage Real Estate</div>
                </div>
              </div>
            </div>
            <div style={{ background: '#F0EDE6', padding: '3rem' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', color: '#D4CFC6', lineHeight: 0.8, marginBottom: '1.5rem', fontWeight: 300 }}>"</div>
              <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 300, fontStyle: 'italic', color: '#1C1A17', lineHeight: 1.6, marginBottom: '2rem' }}>
                Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions.
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #D4CFC6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: 500, color: '#6B6760', flexShrink: 0 }}>MS</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#1C1A17', letterSpacing: '0.02em' }}>Michael Silver</div>
                  <div style={{ fontSize: '0.72rem', color: '#6B6760', fontWeight: 300 }}>CEO, Foto Comercio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: '5rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6', borderTop: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', fontWeight: 400, marginBottom: '2rem', textAlign: 'center' }}>Selected Engagements</div>
          <div style={{ display: 'flex', border: '1px solid #D4CFC6' }} className="clients-row">
            {['Voyage Real Estate', 'Foto Comercio', 'Wilbur Labs', 'Waratah', 'Edge Swarm', 'Beverly Spirits'].map((client, i) => (
              <div key={i} style={{ flex: 1, padding: '1.75rem 1.5rem', borderRight: i < 5 ? '1px solid #D4CFC6' : 'none', textAlign: 'center', transition: 'background 0.2s', cursor: 'default' }} className="client" onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,146,74,0.04)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.2rem' }}>{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section style={{ padding: '3rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
          {/* Left Column */}
          <div>
            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>Contact</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Let us Talk About Your <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Business.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
              Tell us a little about where you are and what you are working on. Brandon reviews every submission personally and follows up within one business day.
            </p>
            <button style={{ width: '100%', padding: '0.9rem 1.85rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid #1C1A17', transition: 'background 0.2s', cursor: 'pointer', marginBottom: '3rem' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#2a2720'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1C1A17'; }}>
              Book a Time With Aperture
            </button>
            <div style={{ borderTop: '1px solid #D4CFC6', paddingTop: '2rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '0.75rem' }}>Prefer Email Directly?</div>
              <a href="mailto:inquiries@aperturehospitality.com" style={{ fontSize: '0.875rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#1C1A17')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}>
                inquiries@aperturehospitality.com
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.5rem' }}>Your Information</div>

            {/* Name Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="text" placeholder="First Name" style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')} />
              <input type="text" placeholder="Last Name" style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')} />
            </div>

            {/* Email & Phone Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <input type="email" placeholder="you@yourbusiness.com" style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')} />
              <input type="tel" placeholder="+1 (310) 000-0000" style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')} />
            </div>

            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginTop: '1rem', marginBottom: '0.5rem' }}>Your Business</div>

            {/* Business Name */}
            <input type="text" placeholder="Your company name" style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')} />

            {/* Business Type & Industry Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Select business type</option>
                <option value="saas">SaaS</option>
                <option value="agency">Agency</option>
                <option value="ecommerce">E-commerce</option>
                <option value="service">Service</option>
              </select>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="hospitality">Hospitality</option>
                <option value="real-estate">Real Estate</option>
                <option value="consumer">Consumer</option>
              </select>
            </div>

            {/* Revenue & Employees Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Annual revenue</option>
                <option value="0-100k">$0 - $100K</option>
                <option value="100k-1m">$100K - $1M</option>
                <option value="1m-10m">$1M - $10M</option>
                <option value="10m+">$10M+</option>
              </select>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Number of employees</option>
                <option value="1-5">1 - 5</option>
                <option value="5-20">5 - 20</option>
                <option value="20-50">20 - 50</option>
                <option value="50+">50+</option>
              </select>
            </div>

            {/* Location & Interested In Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Business location</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
                <option value="other">Other</option>
              </select>
              <select style={{ padding: '0.75rem 1rem', border: '1px solid #B8924A', background: 'transparent', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#1C1A17', cursor: 'pointer', transition: 'border-color 0.2s' }} onFocus={(e) => (e.currentTarget.style.borderColor = '#1C1A17')} onBlur={(e) => (e.currentTarget.style.borderColor = '#B8924A')}>
                <option value="">Interested in</option>
                <option value="strategy">Strategy</option>
                <option value="automation">Automation</option>
                <option value="ai">AI Solutions</option>
                <option value="all">All Services</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" style={{ padding: '0.9rem 1.85rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid #1C1A17', transition: 'background 0.2s', cursor: 'pointer', marginTop: '1rem' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#2a2720'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#1C1A17'; }}>
              Submit Inquiry
            </button>

            {/* Footer Note */}
            <p style={{ fontSize: '0.7rem', color: '#6B6760', textAlign: 'center', fontWeight: 300, marginTop: '1rem' }}>
              No spam. No added to a list. Brandon reads every submission personally.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
