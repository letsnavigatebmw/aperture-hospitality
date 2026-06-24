'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import Link from 'next/link'

export default function HowWeWorkPage() {
  const mobileStyles = `
    @media (max-width: 960px) {
      .philosophy-inner { grid-template-columns: 1fr; gap: 3rem; }
      .methodology-header { grid-template-columns: 1fr; gap: 2rem; }
      .engagement-header { grid-template-columns: 1fr; gap: 2rem; }
      .engagement-steps { grid-template-columns: 1fr 1fr; }
      .data-inner { grid-template-columns: 1fr; gap: 3rem; }
      .who-grid { grid-template-columns: 1fr; }
      .final-cta-inner { grid-template-columns: 1fr; gap: 3rem; }
      .journey { grid-template-columns: repeat(3, 1fr); row-gap: 2rem; }
      .journey::before { display: none; }
      .engine-map { grid-template-columns: 1fr 1fr; }
      .engine-map-spacer { display: none; }
      .footer-inner { flex-direction: column; gap: 1rem; text-align: center; }
      .nav-links { display: none; }
    }
    @media (max-width: 600px) {
      .engagement-steps { grid-template-columns: 1fr; }
      .engagement-step { border-right: none; border-bottom: 1px solid #D4CFC6; padding: 2rem 0; }
      .engagement-step:last-child { border-bottom: none; }
      .engagement-step:not(:first-child) { padding-left: 0; }
      .data-right { grid-template-columns: 1fr; }
      .journey { grid-template-columns: 1fr 1fr; }
      .engine-map { grid-template-columns: 1fr; }
    }
  `

  const philosophyPrinciples = [
    {
      label: 'Principle 01',
      title: 'Diagnosis before prescription.',
      desc: 'Every engagement begins with a revenue leak audit. We map the customer journey as it actually exists, not as it was intended, before recommending anything. The recommendation follows the evidence.'
    },
    {
      label: 'Principle 02',
      title: 'Systems over tactics.',
      desc: 'A landing page is a tactic. A follow-up email is a tactic. An acquisition engine that captures, qualifies, and converts visitors automatically is a system. We build systems. Tactics are components of them.'
    },
    {
      label: 'Principle 03',
      title: 'Sell the full path, not individual stops.',
      desc: 'A la carte services create a la carte results. When every vendor owns one piece, nobody owns the outcome. Aperture engagements are structured around a complete engine, not isolated deliverables.'
    },
    {
      label: 'Principle 04',
      title: 'Traffic, conversion, results. In that order.',
      desc: 'Every engagement must account for all three. You cannot optimize conversion without traffic. You cannot measure results without conversion. Building one without the others is the most common and most expensive mistake in small business marketing.'
    }
  ]

  const journeyNodes = [
    { stage: 'Stranger', sub: 'No awareness', level: 'mid', icon: 'person' },
    { stage: 'Prospect', sub: 'Aware of you', level: 'mid', icon: 'star' },
    { stage: 'Lead', sub: 'In your database', level: 'mid', icon: 'envelope' },
    { stage: 'Customer', sub: 'Revenue on board', level: 'hi', icon: 'check' },
    { stage: 'Promoter', sub: 'Your best marketing', level: 'hi', icon: 'star' }
  ]

  const engineMap = [
    { name: 'Awareness Machine', desc: 'Stranger → Prospect. Gets you seen by the right people before they know they need you.' },
    { name: 'Acquisition Machine', desc: 'Prospect → Lead. Captures visitors and puts them in your database where you can market to them.' },
    { name: 'Activation Machine', desc: 'Lead → Customer. Nurtures, follows up, and closes. Automatically, not manually.' }
  ]

  const engagementSteps = [
    {
      num: '01',
      badge: 'Start Here',
      title: 'Revenue Leak Audit',
      desc: 'We map your customer journey as it actually exists. Where are people entering? Where are they dropping off? Which stage of the engine is missing or broken? No assumptions. The diagnosis drives everything.',
      detail: 'Free for qualified businesses. One hour. You will leave with a diagnosis, not a sales pitch.'
    },
    {
      num: '02',
      badge: 'Clarity',
      title: 'Recommendation and Roadmap',
      desc: 'The audit produces a clear, prioritized plan. Which engine to build first, what that looks like in practice, what it costs, and what to expect. You will know exactly what you are buying before you buy it.',
      detail: 'No generic advice. Every recommendation is specific to your business and what the audit found.'
    },
    {
      num: '03',
      badge: 'Build',
      title: 'Implementation',
      desc: 'Aperture configures the platforms, builds the workflows, connects the tools, and deploys the system. You are not handed a strategy deck with no execution path. The machine gets built.',
      detail: 'Hands-on execution. Configuration, automation, content, and integration all included.'
    },
    {
      num: '04',
      badge: 'Optimize',
      title: 'Measure and Improve',
      desc: 'Every engagement includes a reporting cadence so you can see what is working, what to double down on, and what to cut. Traffic, conversion, and results, measured and visible.',
      detail: 'You always know how the engine is performing. No vanity metrics. Revenue attribution only.'
    }
  ]

  const dataCards = [
    {
      title: 'Audit Intelligence',
      desc: 'Data gathered during the audit maps drop-off rates at every stage of your current customer journey. Guesswork is not part of the diagnosis.'
    },
    {
      title: 'Performance Tracking',
      desc: 'Traffic, conversion rates, pipeline velocity, and revenue attribution are tracked across every engine. You see what is working before the next invoice.'
    },
    {
      title: 'Market Signals',
      desc: 'Navigate surfaces demand signals, competitive moves, and audience behavior that inform where to put budget and when to shift strategy.'
    },
    {
      title: 'Reporting Cadence',
      desc: 'A structured reporting rhythm means every engagement produces a scoreboard. Decisions get made from evidence, not from activity reports or gut feel.'
    }
  ]

  const whoCards = [
    {
      label: 'Small Business Operators',
      title: 'You are doing the work. The business is not growing fast enough.',
      desc: 'Revenue is coming in but not predictably. Marketing is whatever you had time for this week. You know you need a system but have not had the time or the right partner to build one.',
      items: [
        'No consistent lead generation process',
        'Follow-up is manual and inconsistent',
        'Marketing spend with no clear attribution',
        'Good product, underdeveloped pipeline'
      ]
    },
    {
      label: 'Service Businesses',
      title: 'You grow by referral. You want to stop relying on it.',
      desc: 'Referrals are great until they are not enough. You want a predictable, scalable way to bring in new business without waiting for someone to send you a name.',
      items: [
        'No awareness engine beyond word of mouth',
        'Website exists but does not generate leads',
        'Inconsistent pipeline from month to month',
        'No system to amplify happy customers'
      ]
    },
    {
      label: 'Growing Teams',
      title: 'You have outgrown what got you here. Time to build the next thing.',
      desc: 'You have a team, a track record, and real customers. The informal systems that got you here are starting to break under the weight of growth. It is time to build the real infrastructure.',
      items: [
        'Growth is happening but not systematically',
        'Marketing and sales are not connected',
        'Customer retention is not a managed process',
        'Need to scale without proportional headcount'
      ]
    }
  ]

  const finalCtaOptions = [
    {
      badge: 'Free · 1 Hour',
      title: 'Revenue Leak Audit',
      desc: 'Map your customer journey, find where it breaks, and get a clear recommendation on what to build first.',
      link: '/contact?type=audit'
    },
    {
      badge: 'Conversation',
      title: 'Talk to A Member of the Aperture Team',
      desc: 'Not sure where to start? Get a direct read on your business and figure out the right next step together.',
      link: '/contact'
    },
    {
      badge: 'Learn More',
      title: 'Learn About the Revenue Leak Audit',
      desc: 'See the full Revenue Leak Audit framework and understand what the diagnostic process looks like.',
      link: '/aperture-scorecard'
    }
  ]

  return (
    <>
      <style>{mobileStyles}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(7rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-180px', right: '-180px', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(184,146,74,0.12)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(184,146,74,0.07)', pointerEvents: 'none' }}></div>

        {/* Aperture Logo */}
        <div style={{ position: 'absolute', top: '140px', right: '120px', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
          <svg viewBox="0 0 200 200" width="220" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle - very subtle */}
            <circle cx="100" cy="100" r="95" stroke="rgba(184,146,74,0.08)" strokeWidth="1"/>
            {/* Middle circle */}
            <circle cx="100" cy="100" r="75" stroke="rgba(184,146,74,0.15)" strokeWidth="1.2"/>
            {/* Inner circle */}
            <circle cx="100" cy="100" r="55" stroke="rgba(184,146,74,0.25)" strokeWidth="1.5"/>
            {/* Brass accent arc - upper right quarter circle */}
            <path d="M 100 45 A 55 55 0 0 1 155 100" stroke="#B8924A" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Brass accent arc - lower right quarter circle */}
            <path d="M 155 100 A 55 55 0 0 1 100 155" stroke="#B8924A" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Center dot */}
            <circle cx="100" cy="100" r="3" fill="#B8924A"/>
          </svg>
        </div>
        
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A' }}>
            <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
            Our Approach
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05, color: '#F0EDE6', maxWidth: '18ch', marginBottom: '1.75rem', letterSpacing: '-0.01em' }}>
            A Methodology.<br/>Not a <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Menu</em><br/>of Services.
          </h1>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(240,237,230,0.55)', maxWidth: '54ch', marginBottom: '3rem', fontWeight: 300 }}>
            Aperture does not sell tactics. We build acquisition engines: the connected system that moves someone from never having heard of your business to becoming a customer who sends you more customers. Every engagement follows the same discipline. Every recommendation starts with a diagnosis.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', paddingBottom: '5rem' }}>
            <Link href="#methodology" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#B8924A', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid #B8924A', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; }}>
              See the Methodology
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </Link>
            <Link href="/contact?type=audit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: 'rgba(240,237,230,0.6)', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid rgba(240,237,230,0.2)', transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE6'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,230,0.6)'; }}>
              Run the Revenue Leak Audit
            </Link>
          </div>
        </div>

        {/* TICKER */}
        <div style={{ borderTop: '1px solid rgba(240,237,230,0.08)', padding: '1.25rem 0', overflow: 'hidden', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap', animation: 'ticker 28s linear infinite' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.25)', fontWeight: 400, flexShrink: 0 }}>
              Awareness <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Acquisition <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Activation <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Amplification
            </span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.25)', fontWeight: 400, flexShrink: 0 }}>
              Prospect <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Visitor <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Lead <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Customer <span style={{ color: 'rgba(184,146,74,0.5)', margin: '0 1.5rem' }}>→</span> Promoter
            </span>
          </div>
          <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: '7rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '6rem', alignItems: 'start' }} className="philosophy-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Thinking
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Why Most<br/>Marketing<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Does not Work.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300 }}>
              The problem is not that small businesses do not try. It is that they buy tactics individually and expect them to work collectively. An ad here, a landing page there, an email tool they barely use. None of it connects. None of it compounds.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300, marginTop: '1rem' }}>
              A system is different from a collection of tools. A system has architecture. Every part knows what comes before it and what comes after. When one part breaks, you know exactly where to look.
            </p>
          </div>
          <div>
            {philosophyPrinciples.map((principle, i) => (
              <div key={i} style={{ padding: '1.75rem 0', borderBottom: i === philosophyPrinciples.length - 1 ? 'none' : '1px solid #D4CFC6', ...(i === 0 && { borderTop: '1px solid #D4CFC6' }) }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.5rem' }}>{principle.label}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.5rem', lineHeight: 1.2 }}>{principle.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.7, fontWeight: 300 }}>{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{ background: '#1C1A17', padding: '7rem clamp(1.5rem, 5vw, 4rem)' }} id="methodology">
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'end' }} className="methodology-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
                <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
                The Framework
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1 }}>
                From Prospect to <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Promoter.</em><br/>Every Time.
              </h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#F0EDE6', lineHeight: 1.8, fontWeight: 300 }}>
              The acquisition engine maps every stage of your customer journey and assigns an engine to each one. Four machines, one connected system. The audit tells you which to build first. The engagement builds it. The scoreboard tells you how it is running.
            </p>
          </div>

          {/* Journey */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', position: 'relative', marginBottom: '4rem' }} className="journey">
            {journeyNodes.map((node, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 0.5rem' }} className={`node-${node.level}`}>
                <div style={{ width: '6.5rem', height: '6.5rem', borderRadius: '50%', border: node.level === 'hi' ? '1px solid rgba(184,146,74,0.5)' : node.level === 'mid' ? '1px solid rgba(184,146,74,0.25)' : '1px solid rgba(240,237,230,0.1)', background: node.level === 'hi' ? 'rgba(184,146,74,0.08)' : node.level === 'mid' ? 'rgba(184,146,74,0.05)' : '#1C1A17', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', gap: '0.15rem', transition: 'border-color 0.2s' }} onMouseEnter={(e) => { if (node.level !== 'hi') (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,146,74,0.4)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = node.level === 'hi' ? 'rgba(184,146,74,0.5)' : node.level === 'mid' ? 'rgba(184,146,74,0.25)' : 'rgba(240,237,230,0.1)'; }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" stroke={node.level === 'hi' ? '#B8924A' : node.level === 'mid' ? '#B8924A' : 'rgba(240,237,230,0.15)'} fill="none" strokeWidth="1">
                    {node.icon === 'person' && <><circle cx="9" cy="6" r="3"/><path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6"/></>}
                    {node.icon === 'star' && <path d="M9 2L11.5 7H17l-4.5 3.5L14 16 9 12.5 4 16l1.5-5.5L1 7h5.5z"/>}
                    {node.icon === 'envelope' && <><rect x="3" y="5" width="12" height="9" rx="1"/><path d="M3 8l6 4 6-4"/></>}
                    {node.icon === 'check' && <path d="M3 10l4 4 8-8"/>}
                  </svg>
                  <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, lineHeight: 1, color: node.level === 'dim' ? 'rgba(240,237,230,0.2)' : '#B8924A' }}>{node.stage}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontWeight: 400, color: node.level === 'dim' ? 'rgba(240,237,230,0.35)' : '#F0EDE6', marginBottom: '0.3rem', lineHeight: 1.2 }}>{node.stage}</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 300 }}>{node.sub}</div>
              </div>
            ))}
          </div>

          {/* Engine Map */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '1px', background: 'rgba(240,237,230,0.06)' }} className="engine-map">
            <div style={{ background: '#1C1A17', padding: '1.5rem 1.5rem 1.5rem 0' }}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,237,230,0.2)', fontWeight: 400, lineHeight: 1.6 }}>
                Each engine owns a<br/>stage of the journey.
              </div>
            </div>
            {engineMap.map((engine, i) => (
              <div key={i} style={{ background: '#1C1A17', padding: '1.5rem', position: 'relative' }}>
                <div style={{ width: '2rem', height: '2px', background: '#B8924A', marginBottom: '0.75rem', opacity: 0.4 }}></div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.4rem' }}>{engine.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(240,237,230,0.35)', lineHeight: 1.55, fontWeight: 300 }}>{engine.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENGAGEMENT */}
      <section style={{ padding: '7rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem', alignItems: 'end' }} className="engagement-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
                <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
                The Engagement
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, maxWidth: '25ch' }}>
                How an Aperture<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Engagement Works.</em>
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300 }}>
              Every engagement starts in the same place: understanding your business before touching anything. The audit drives the recommendation. The recommendation drives the build. Nothing is sold before the problem is understood.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid #D4CFC6' }} className="engagement-steps">
            {engagementSteps.map((step, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem 0', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none', ...(!i && {}) }} className="engagement-step">
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#D4CFC6', lineHeight: 1, marginBottom: '1.5rem' }}>{step.num}</div>
                <div style={{ display: 'inline-block', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.6rem' }}>{step.badge}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem', lineHeight: 1.2 }}>{step.title}</h3>
                <p style={{ fontSize: '0.825rem', color: '#6B6760', lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #D4CFC6', fontSize: '0.72rem', color: '#6B6760', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, lineHeight: 1.5 }}>{step.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA SECTION */}
      <section style={{ background: '#1C1A17', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '6rem', alignItems: 'center' }} className="data-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Intelligence
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '22ch' }}>
              Data Is the<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Diagnostic</em> Layer.
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1rem' }}>
              Aperture intelligence capability is not a separate product. It is embedded in everything we do. Data tells us where the engine is leaking, which stage has the highest drop-off, and what is actually driving revenue versus what just looks good on a dashboard.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
              The Navigate platform gives Aperture and our clients a live view of the market, the customer, and the engine performance. It is how we keep score.
            </p>
            <Link href="/data-intelligence" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: 'rgba(240,237,230,0.6)', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid rgba(240,237,230,0.2)', transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE6'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,230,0.6)'; }}>
              Explore Navigate →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(240,237,230,0.06)' }} className="data-right">
            {dataCards.map((card, i) => (
              <div key={i} style={{ background: '#1C1A17', padding: '2rem', transition: 'background 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#232118')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                <div style={{ width: '2.25rem', height: '2.25rem', border: '1px solid rgba(184,146,74,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#B8924A" strokeWidth="1.5">
                    <path d="M7 1v6M7 11v2M1 7h6"/><circle cx="7" cy="7" r="6"/>
                  </svg>
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.5rem', lineHeight: 1.2 }}>{card.title}</h4>
                <p style={{ fontSize: '0.78rem', color: 'rgba(240,237,230,0.4)', lineHeight: 1.65, fontWeight: 300 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: '7rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem', justifyContent: 'center' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Who This Is For
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Built for Businesses<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Ready to Build a System.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B6760', maxWidth: '50ch', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
              Aperture works best with owners and operators who have something that works and need the system to scale it, not with businesses still searching for product-market fit.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#D4CFC6', border: '1px solid #D4CFC6' }} className="who-grid">
            {whoCards.map((card, i) => (
              <div key={i} style={{ background: '#F0EDE6', padding: '2.5rem' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.75rem' }}>{card.label}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem', lineHeight: 1.2 }}>{card.title}</h3>
                <p style={{ fontSize: '0.82rem', color: '#6B6760', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.25rem' }}>{card.desc}</p>
                <ul style={{ listStyle: 'none' }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '0.78rem', color: '#6B6760', padding: '0.45rem 0', borderBottom: '1px solid #D4CFC6', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontWeight: 300, lineHeight: 1.4 }}>
                      <span style={{ display: 'block', width: '3px', height: '3px', borderRadius: '50%', background: '#B8924A', flexShrink: 0, marginTop: '0.5rem' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#1C1A17', padding: '7rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="final-cta-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Ready When You Are
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Start With<br/>the <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Audit.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
              The Revenue Leak Audit is how every Aperture engagement begins. It takes an hour. It is free for qualified businesses. You will leave with a clear diagnosis of where your acquisition engine is breaking and which machine to build first.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.75, fontWeight: 300 }}>
              If you would rather start with a conversation, that works too. Either way, nothing gets recommended before the problem gets understood.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(240,237,230,0.06)' }}>
            {finalCtaOptions.map((option, i) => (
              <Link key={i} href={option.link} style={{ background: '#1C1A17', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', transition: 'background 0.2s', cursor: 'pointer', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#242118')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.4rem' }}>{option.badge}</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.25rem' }}>{option.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(240,237,230,0.35)', fontWeight: 300, margin: 0, lineHeight: 1.5 }}>{option.desc}</p>
                </div>
                <div style={{ flexShrink: 0, width: '36px', height: '36px', border: '1px solid rgba(240,237,230,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(184,146,74,0.4)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(240,237,230,0.1)')}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(240,237,230,0.3)" strokeWidth="1.5" style={{ transition: 'stroke 0.2s' }} onMouseEnter={(e) => { (e.currentTarget as any).style.stroke = '#B8924A'; }} onMouseLeave={(e) => { (e.currentTarget as any).style.stroke = 'rgba(240,237,230,0.3)'; }}>
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </>
  )
}
