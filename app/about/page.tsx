'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <style>{`
        /* About Page Mobile Optimization */
        
        /* Tablet & Below: 900px */
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-hero-img { max-height: 400px !important; }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-story-heading { max-width: 100% !important; }
          .about-competencies { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-values-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .about-values-card { border-right: none !important; border-bottom: 1px solid #B8924A !important; padding: 2rem !important; }
          .about-values-card:last-child { border-bottom: none !important; }
          .about-approach { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-team-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        
        /* Mobile: 640px and below */
        @media (max-width: 640px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; padding: 0 1rem !important; }
          .about-hero-img { max-height: 300px !important; object-fit: cover !important; }
          .about-hero-content h1 { font-size: 1.75rem !important; }
          .about-hero-content p { font-size: 0.9rem !important; }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 0 1rem !important; }
          .about-story-heading { font-size: 1.25rem !important; }
          .about-story-text { font-size: 0.9rem !important; line-height: 1.6 !important; }
          .about-competencies { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .about-competencies > div h3 { font-size: 1.1rem !important; }
          .about-values-grid { grid-template-columns: 1fr !important; }
          .about-values-card { padding: 1.5rem !important; }
          .about-values-card h3 { font-size: 1.1rem !important; }
          .about-values-card p { font-size: 0.85rem !important; }
          .about-approach { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .about-approach-heading { font-size: 1.5rem !important; }
          .about-team-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .about-team-card { padding: 1.5rem !important; }
          .about-team-card h3 { font-size: 1rem !important; }
        }
        
        /* Small phones: 480px and below */
        @media (max-width: 480px) {
          .about-hero-grid { padding: 0 0.75rem !important; }
          .about-hero-content h1 { font-size: 1.5rem !important; }
          .about-story-heading { font-size: 1.1rem !important; }
          .about-competencies > div h3 { font-size: 1rem !important; }
          .about-values-card h3 { font-size: 1rem !important; }
          .about-approach-heading { font-size: 1.25rem !important; }
        }
      `}</style>
      <Nav />
      
      {/* HERO - DARK BG */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }} className="about-hero-grid">
          {/* Left: Photo */}
          <div style={{ overflow: 'hidden', borderRadius: '2px' }} className="about-hero-img">
            <img 
              src="/brandon-headshot.jpg" 
              alt="Brandon M. Weaver" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Right: Bio */}
          <div className="about-hero-content">
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: '0.5rem', color: '#F0EDE6' }}>
              Brandon M. Weaver
            </h1>
            <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
              Founder &amp; CEO
            </p>

            <div style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', marginBottom: '2.5rem' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#B8924A' }}>Many Rooms, One Frequency</strong>
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                I've spent much of my life trying to answer a simple question: <strong>How do you build something that truly matters?</strong>
              </p>
              <p>
                That journey has taken me from <strong>USC's Annenberg School of Communication</strong> to <strong>Kennedy School of Government</strong> and <strong>Northwestern's Kellogg School of Management</strong>—each challenging me to think differently about how people, ideas, and opportunity intersect.
              </p>
            </div>

            {/* Education */}
            <div style={{ borderTop: '1px solid #2e2b26', paddingTop: '2rem', marginTop: '2rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>Education</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F0EDE6', marginBottom: '0.25rem' }}>Kellogg School of Management</p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>MBA, Northwestern University</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F0EDE6', marginBottom: '0.25rem' }}>Kennedy School of Government</p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>MPA, Harvard University</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: '#F0EDE6', marginBottom: '0.25rem' }}>University of Southern California</p>
                  <p style={{ fontSize: '0.8125rem', color: '#B8924A' }}>B.A., Communication</p>
                </div>
              </div>

              {/* Links */}
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://drive.google.com/file/d/1C4ksHla5bttjS9S_on_dwylaBkkfqSLp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9375rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}>
                  Executive Bio →
                </a>
                <a href="https://www.brandonmweaver.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9375rem', color: '#B8924A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A574')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B8924A')}>
                  Learn more about Brandon →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY - DARK BG */}
      <section style={{ background: '#1C1A17', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }} className="about-story-grid">
            <div className="about-story-heading">
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
                The Arc
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 300, lineHeight: 1.3, color: '#F0EDE6' }}>
                Two decades. One question.
              </h2>
            </div>

            <div style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#F0EDE6', display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="about-story-text">
              <p>
                Growing up in Los Angeles surrounded by successful people, I learned early that success doesn't come from following a predetermined path. I chose differently—and that choice shaped everything that followed.
              </p>

              <p>
                My career has taken me across industries, continents, and cultures: from <strong>Diageo's luxury portfolio in Africa</strong> to scaling and eventually selling a PE-backed hospitality platform. I've managed <strong>$750M+ in P&L responsibility</strong>, launched <strong>8+ B2C and B2B brands</strong>, and raised <strong>$10M+ across ventures</strong>.
              </p>

              <p>
                But the thread running through all of it isn't the résumé. It's the relationships. I move through rooms differently—not as the loudest voice, but as the most connected one. <strong>I build relationship capital the way others build financial capital: deliberately, generously, and with a long time horizon.</strong>
              </p>

              <p>
                That instinct brought me to real estate technology. Navigate wasn't a pivot. It was the logical conclusion of watching an industry resist modernization until someone forces the issue. Same pattern. Different stage.
              </p>

              <p>
                <strong>Success moves at the speed of connectivity.</strong> In a world increasingly mediated by algorithms, that conviction has never felt more true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO - DARK BG */}
      <section style={{ background: '#1C1A17', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              Core Competencies
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
              What I <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Do</em>
            </h2>
            <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', maxWidth: '600px' }}>
              The core competencies that drive growth, operational excellence, and sustainable value creation.
            </p>
          </div>

          {/* Competencies Grid - 3 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }} className="about-competencies">
            {[
              { title: 'P&L Management', desc: 'Full P&L ownership across pricing strategy, unit economics, and financial modeling. Reduced data enrichment costs by 25% through vendor negotiation and demand-based optimization.' },
              { title: 'Go-to-Market Strategy', desc: 'GTM execution, demand generation, and sales leadership. Built Compass partnership driving +75% trial participation and 90% trial-to-paid conversion.' },
              { title: 'Operating Model Design', desc: 'Re-architected sales organizations, supply portfolios, and cross-functional workflows to align inventory with demand and improve execution.' },
              { title: 'Team Building', desc: 'Led organizations from 20 to 65 people across Sales, Marketing, Operations, and Client Services. Recognized for sales leadership and performance management.' },
              { title: 'Data Strategy', desc: 'Architect data-driven business models by integrating customer, property, behavioral, and market intelligence into scalable operating systems.' },
              { title: 'Leadership Coaching', desc: 'Coached executives and commercial teams through growth, restructuring, and business transformation. Built leadership capabilities and accountability systems.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.65, color: '#F0EDE6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy Quote */}
          <div style={{ padding: '3rem', borderTop: '2px solid #B8924A', borderBottom: '2px solid #B8924A', textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.125rem, 1.75vw, 1.375rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: '#F0EDE6' }}>
              I operate at the intersection of revenue, marketing, and product—ensuring strategy translates into execution and measurable growth. My focus: aligning product, go-to-market, and unit economics to build <em style={{ fontStyle: 'normal', color: '#B8924A' }}>defensible revenue growth.</em>
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '2px solid #B8924A', marginBottom: '3rem' }} className="about-values-grid">
            {[
              { num: '8+', label: 'B2C & B2B Brands Launched & Scaled' },
              { num: '$10M+', label: 'Capital Raised Across Ventures' },
              { num: '20+', label: 'Years Across Hospitality, Tech, Real Estate & Finance' },
              { num: '$750M+', label: 'P&L Management' },
            ].map((stat, i) => (
              <div key={i} style={{ padding: '3rem', borderRight: i % 2 === 0 ? '2px solid #B8924A' : 'none', borderBottom: i < 2 ? '2px solid #B8924A' : 'none' }} className="about-values-card">
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 300, color: '#B8924A', marginBottom: '1rem', lineHeight: 1 }}>
                  {stat.num}
                </div>
                <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE6', lineHeight: 1.5 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div style={{ padding: '3rem', border: '2px solid #B8924A', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#B8924A', marginBottom: '1.5rem' }}>∞</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.375rem, 2vw, 1.75rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.3 }}>
              Experience Forged Across Industry.<br/>A Perspective Built For What's <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Next.</em>
            </h3>
          </div>
        </div>
      </section>

      {/* LEADERSHIP ROLES - DARK BG */}
      <section style={{ background: '#1C1A17', borderBottom: '1px solid #2e2b26', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              Leadership Experience
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
              My Professional Path
            </h2>
            <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6' }}>
              Across luxury, hospitality, technology, and real estate, driving revenue growth, launching new business units, and managing $750M+ in P&L responsibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }} className="about-approach">
            {[
              { name: 'Diageo', role: 'Marketing Leadership, Reserve Portfolio' },
              { name: 'Lacure', role: 'Chief Commercial Officer · 65-person org' },
              { name: 'Sonder', role: 'Regional General Manager' },
              { name: 'Bonotel Exclusive Travel', role: 'Executive, Commercial & Operations' },
              { name: 'General Electric', role: 'Sales Leadership, Consumer Finance' },
              { name: 'Navigate', role: 'Founder & CEO' },
            ].map((company, i) => (
              <div key={i} className="about-approach-heading">
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                  {company.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#B8924A', fontWeight: 300, lineHeight: 1.5 }}>
                  {company.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
