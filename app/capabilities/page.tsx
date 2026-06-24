'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import Link from 'next/link'

export default function CapabilitiesPage() {
  const engines = [
    {
      number: '01',
      label: 'Awareness Machine',
      name: 'Get in Front of the Right People.',
      description: 'Before anyone can buy from you, they have to know you exist. The Awareness Machine puts you in front of the right audience at the right moment, consistently, not just when you have time to post something.',
      tags: ['Content Strategy', 'SEO', 'Paid Social', 'Brand Presence', 'Google Ads'],
      goal: 'A consistent, measurable flow of the right people seeing your business. Traffic you can build on.'
    },
    {
      number: '02',
      label: 'Acquisition Machine',
      name: 'Turn Visitors into Leads.',
      description: 'Getting traffic is one thing. Capturing it is another. The Acquisition Machine converts the people who land on your site into contacts in your database, so you can market to them again. Without this, you\'re paying for attention you can\'t keep.',
      tags: ['Landing Pages', 'Lead Magnets', 'AI Employee', 'CRM Setup', 'Lead Capture Workflows'],
      goal: 'Contacts. Someone downloaded something, booked a meeting, or raised their hand. Now you can market to them.'
    },
    {
      number: '03',
      label: 'Activation Machine',
      name: 'Turn Contacts into Customers.',
      description: 'A lead is not a customer. The Activation Machine is the follow-up, the nurture sequence, the proposal, the close. Most businesses lose here not because the offer is wrong but because the follow-through is inconsistent. This machine makes it automatic.',
      tags: ['Email Sequences', 'Sales Enablement', 'Appointment Workflows', 'Proposal Systems', 'Pipeline Automation'],
      goal: 'Customers. Revenue on the board. Not leads sitting in a spreadsheet you\'ll get to eventually.'
    },
    {
      number: '04',
      label: 'Amplification Machine',
      name: 'Turn Customers into Promoters.',
      description: 'The most valuable marketing you have is a customer who tells someone else. The Amplification Machine earns reviews, generates referrals, and brings customers back for more, turning your best buyers into your best channel.',
      tags: ['Review Campaigns', 'Referral Programs', 'Retention Workflows', 'Loyalty Touchpoints', 'Re-engagement'],
      goal: 'Promoters. Customers who give you reviews, send referrals, and come back. The engine that compounds.'
    }
  ]

  const problems = [
    'Ad spend with no clear line back to revenue',
    'A website that gets traffic and converts nobody',
    'Leads that fall through because nobody followed up fast enough',
    'Email lists that sit unused or blast the same generic newsletter',
    'Social content that stays busy without driving business',
    'No view of which marketing activities are actually working',
    'Five tools that do not talk to each other and a workflow that depends on you'
  ]

  const auditItems = [
    'Where are prospects entering your world, and what happens next',
    'Which stage of the journey has the highest drop-off rate',
    'Whether your follow-up system exists and whether it works',
    'What your current tools are and whether they are connected',
    'Where the highest-leverage opportunity is for your business specifically',
    'Which engine to build first based on the evidence, not a hunch'
  ]

  const mobileStyles = `
    @media (max-width: 900px) {
      .problem-inner { grid-template-columns: 1fr; gap: 3rem; }
      .audit-inner { grid-template-columns: 1fr; gap: 3rem; }
      .engines-grid { grid-template-columns: 1fr; }
      .process-steps { grid-template-columns: 1fr; }
      .process-step { border-right: none; border-bottom: 1px solid #D4CFC6; padding: 2rem 0; }
      .process-step:last-child { border-bottom: none; }
      .process-step:not(:first-child) { padding-left: 0; }
      .pipeline-track { grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
      .pipeline-track::before { display: none; }
    }
    @media (max-width: 560px) {
      .pipeline-track { grid-template-columns: 1fr 1fr; }
      .engine-card { padding: 2rem; }
    }
  `

  return (
    <>
      <style>{mobileStyles}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(7rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden' }}>
        {/* Aperture Logo */}
        <div style={{ position: 'absolute', top: '80px', right: '40px', width: '240px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
          <svg viewBox="0 0 200 200" width="240" height="240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle - very subtle */}
            <circle cx="100" cy="100" r="95" stroke="rgba(184,146,74,0.08)" strokeWidth="1"/>
            {/* Middle circle */}
            <circle cx="100" cy="100" r="75" stroke="rgba(184,146,74,0.15)" strokeWidth="1.2"/>
            {/* Inner circle */}
            <circle cx="100" cy="100" r="55" stroke="rgba(184,146,74,0.25)" strokeWidth="1.5"/>
            {/* Brass accent arc - upper right */}
            <path d="M 155 55 A 78 78 0 0 1 180 100" stroke="#B8924A" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Brass accent arc - lower right */}
            <path d="M 155 145 A 78 78 0 0 0 180 100" stroke="#B8924A" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Center dot */}
            <circle cx="100" cy="100" r="3" fill="#B8924A"/>
          </svg>
        </div>

        <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '2px', height: '1.25rem', background: '#B8924A', flexShrink: 0 }}></div>
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B8924A' }}>Capabilities</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', lineHeight: 1.05, color: '#F0EDE6', maxWidth: '16ch', marginBottom: '1.75rem', letterSpacing: '-0.01em' }}>
            Stop Buying<br/>Tactics. Start<br/>Building <em style={{ fontStyle: 'italic', color: '#B8924A' }}>A System.</em>
          </h1>

          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,237,230,0.65)', maxWidth: '52ch', marginBottom: '3rem', fontWeight: 300 }}>
            Most small businesses have pieces. A landing page here, some ads there, an email tool they barely use. None of it works because none of it connects. Aperture builds the acquisition engine that ties it together, from first contact to loyal customer.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#audit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#B8924A', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid #B8924A', transition: 'background 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
              Run the Revenue Leak Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </Link>
            <a href="#engines" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: 'rgba(240,237,230,0.6)', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid rgba(240,237,230,0.2)', transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE6'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,230,0.6)'; }}>
              See the Four Engines
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM STRIP */}
      <section style={{ background: '#1C1A17', padding: '5rem clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid rgba(240,237,230,0.08)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="problem-inner">
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              You Have<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Tactics.</em> You<br/>Need a System.
            </h2>
            <p style={{ color: 'rgba(240,237,230,0.55)', fontSize: '0.95rem', lineHeight: 1.75, fontWeight: 300, marginTop: '1.5rem' }}>
              Tactics are the things you buy hoping something will move. A system is what makes everything move together. The difference between the two is not effort. It is architecture.
            </p>
          </div>
          <div style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {problems.map((problem, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.1rem 0', borderBottom: '1px solid rgba(240,237,230,0.08)', fontSize: '0.9rem', color: 'rgba(240,237,230,0.6)', lineHeight: 1.5, fontWeight: 300 }}>
                <span style={{ display: 'block', width: '4px', height: '4px', borderRadius: '50%', background: '#B8924A', flexShrink: 0, marginTop: '0.55rem' }}></span>
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section style={{ padding: '6rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Framework
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginBottom: '1rem', marginTop: '1rem' }}>
              Every Business Runs<br/>the <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Same Sequence.</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#6B6760', maxWidth: '54ch', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
              The question is whether yours does it on purpose or by accident. Aperture maps your customer journey, finds where it breaks, and builds the system to move people through it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginBottom: '3rem', position: 'relative' }} className="pipeline-track">
            {[
              { label: 'Start', stage: 'Stranger', tag: 'No awareness', active: false },
              { label: 'Prospect', stage: 'Prospect', tag: 'Aware of you', active: true },
              { label: 'Lead', stage: 'Lead', tag: 'In your database', active: true },
              { label: 'Customer', stage: 'Customer', tag: 'Revenue on the board', active: true },
              { label: 'Promoter', stage: 'Promoter', tag: 'Your best marketing', active: true }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '5.5rem', height: '5.5rem', borderRadius: '50%', border: item.active ? '1px solid #B8924A' : '1px solid #D4CFC6', background: item.active ? 'rgba(184,146,74,0.12)' : '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'border-color 0.2s, background 0.2s' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: item.active ? '#B8924A' : '#6B6760', fontWeight: 500 }}>{item.label}</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.25rem' }}>{item.stage}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6760', fontWeight: 400 }}>{item.tag}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#6B6760', letterSpacing: '0.06em', fontWeight: 300 }}>
            Traffic → Conversion → Results. Three ingredients. Every engine is built around all three.
          </p>
        </div>
      </section>

      {/* ENGINES */}
      <section style={{ background: '#1C1A17', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }} id="engines">
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", color: '#B8924A', marginBottom: '1.25rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Four Engines
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1 }}>
              Four Machines.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Acquisition</em><br/>Engine.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(240,237,230,0.08)' }} className="engines-grid">
            {engines.map((engine, i) => (
              <div key={i} style={{ background: '#1C1A17', padding: '3rem', position: 'relative', transition: 'background 0.25s' }} className="engine-card" onMouseEnter={(e) => (e.currentTarget.style.background = '#232118')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', fontWeight: 300, color: 'rgba(184,146,74,0.15)', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>{engine.number}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.6rem' }}>{engine.label}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.15, marginBottom: '1.25rem' }}>{engine.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(240,237,230,0.55)', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>{engine.description}</p>
                <div style={{ width: '2rem', height: '1px', background: 'rgba(184,146,74,0.35)', marginBottom: '1.5rem' }}></div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', fontWeight: 500, marginBottom: '0.85rem' }}>What is inside</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {engine.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '0.68rem', letterSpacing: '0.08em', color: 'rgba(240,237,230,0.45)', border: '1px solid rgba(240,237,230,0.12)', padding: '0.3rem 0.7rem', fontWeight: 300 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(240,237,230,0.08)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(184,146,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#B8924A" strokeWidth="1.5">
                      <path d="M6 1v5M6 9v1"/><circle cx="6" cy="6" r="5"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(240,237,230,0.45)', lineHeight: 1.5, fontWeight: 300 }}>
                    <strong style={{ color: 'rgba(240,237,230,0.75)', fontWeight: 500, display: 'block', marginBottom: '0.15rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>The Goal</strong>
                    {engine.goal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '6rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              How It Works
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1, marginTop: '1rem' }}>
              Audit First.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Recommendations</em><br/>Second. Build Third.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid #D4CFC6' }} className="process-steps">
            {[
              { num: '01', title: 'Revenue Leak Audit', desc: 'Before anything is recommended, we diagnose. The audit maps your current customer journey, identifies where revenue is leaking, and pinpoints which engine is broken or missing. No assumptions. No generic advice.' },
              { num: '02', title: 'Recommendation and Roadmap', desc: 'The audit produces a clear diagnosis and a prioritized plan. Which engine to build first, what that looks like in practice, what it costs, and what you can expect from it. You will know exactly what you are buying before you buy it.' },
              { num: '03', title: 'Build and Execute', desc: 'Aperture configures the platforms, builds the workflows, and deploys the system. You are not handed a strategy deck. The machine gets built, measured, and optimized so you can see what it is doing.' }
            ].map((step, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem 0', borderRight: i < 2 ? '1px solid #D4CFC6' : 'none', ...(!i && {}) }} className="process-step">
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#D4CFC6', lineHeight: 1, marginBottom: '1.5rem' }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT CTA */}
      <section style={{ background: '#1C1A17', padding: '6rem clamp(1.5rem, 5vw, 4rem)' }} id="audit">
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="audit-inner">
          <div>
            <div style={{ color: '#B8924A', marginBottom: '1.25rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Start Here
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Find Out<br/>Where Your<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Revenue Leaks.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.55)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1rem' }}>
              Most businesses do not have a marketing problem. They have a system problem. The Revenue Leak Audit maps your current customer journey, finds the gaps, and tells you which engine to build first. It is the only honest place to start.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.55)', lineHeight: 1.75, fontWeight: 300, marginBottom: '2rem' }}>
              The audit is the entry point for every Aperture engagement. The diagnosis comes first. The recommendation follows from the evidence. Nothing is sold before the problem is understood.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#B8924A', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid #B8924A', transition: 'background 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
              Book the Audit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </Link>
          </div>
          <div style={{ border: '1px solid rgba(184,146,74,0.25)', padding: '2.5rem', position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, border: '1px solid rgba(184,146,74,0.35)', padding: '0.3rem 0.75rem', marginBottom: '1.5rem' }}>Revenue Leak Audit</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.75rem', lineHeight: 1.2 }}>What the Audit Covers</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(240,237,230,0.5)', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 300 }}>A structured diagnostic across your full customer journey. Where you are losing people and why.</p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              {auditItems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.82rem', color: 'rgba(240,237,230,0.55)', padding: '0.65rem 0', borderBottom: '1px solid rgba(240,237,230,0.06)', fontWeight: 300, lineHeight: 1.5 }}>
                  <span style={{ display: 'block', width: '4px', height: '4px', borderRadius: '50%', background: '#B8924A', flexShrink: 0, marginTop: '0.55rem' }}></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', background: '#B8924A', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid #B8924A', transition: 'background 0.2s, color 0.2s', cursor: 'pointer', marginBottom: '1rem' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
              Start With the Audit
            </Link>
            <p style={{ fontSize: '0.72rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.04em', fontWeight: 300, marginTop: '1rem' }}>Free for qualified businesses. One hour. You will leave with a diagnosis, not a sales pitch.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '6rem clamp(1.5rem, 5vw, 4rem)', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '5rem', color: '#D4CFC6', lineHeight: 0.7, marginBottom: '2rem', fontWeight: 300 }}>"</div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 300, fontStyle: 'italic', color: '#1C1A17', lineHeight: 1.5, marginBottom: '2rem' }}>
            What used to require constant monitoring, follow-up, and administrative effort now happens automatically and consistently. It created a better experience for both our agents and our clients by ensuring every inquiry received an immediate, professional response.
          </p>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6B6760', fontWeight: 400 }}>
            <strong style={{ color: '#1C1A17', fontWeight: 500 }}>Brooke Winner</strong> &nbsp;·&nbsp; Founder &amp; CEO, Voyage Real Estate
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: '#1C1A17', padding: '7rem clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", color: '#B8924A', marginBottom: '1.5rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
            Ready When You Are
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Build the<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Engine.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,230,0.5)', marginBottom: '2.5rem', lineHeight: 1.7, fontWeight: 300 }}>
            The audit is free and takes an hour. You will know exactly what is broken, what to build first, and what it takes to fix it. No pressure, no generic advice. Just an honest read on your business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#B8924A', color: '#F0EDE6', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid #B8924A', transition: 'background 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#a07e40'; (e.currentTarget as HTMLElement).style.borderColor = '#a07e40'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#B8924A'; (e.currentTarget as HTMLElement).style.borderColor = '#B8924A'; }}>
              Run the Revenue Leak Audit
            </Link>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'transparent', color: 'rgba(240,237,230,0.6)', fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.85rem 1.75rem', textDecoration: 'none', border: '1px solid rgba(240,237,230,0.2)', transition: 'border-color 0.2s, color 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.5)'; (e.currentTarget as HTMLElement).style.color = '#F0EDE6'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,237,230,0.2)'; (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,230,0.6)'; }}>
              Start a conversation instead
            </a>
          </div>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </>
  )
}
