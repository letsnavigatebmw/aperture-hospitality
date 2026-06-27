'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'
import { useState } from 'react'

export default function AISolutionsPage() {
  const [openFaqId, setOpenFaqId] = useState(0)

  const faqItems = [
    { q: 'Is this the same as a chatbot?', a: 'No. Standard chatbots are single-channel, script-driven tools with no learning capacity. Your AI Employee handles voice calls, text conversations, and reviews simultaneously — and is trained specifically on your business, your tone, and your services. Think of it as an AI teammate, not a FAQ widget.' },
    { q: 'Will it sound like a robot to my guests?', a: 'Not if we set it up correctly. Aperture configures every AI Employee specifically for the hospitality and luxury context — the right tone, the right language, the right responses for your brand. From tone of voice to specific responses, every tool can be trained and tailored to match your brand style.' },
    { q: 'What channels does it work on?', a: 'SMS, email, phone, Facebook, Instagram, Google Reviews, and web chat. Wherever your customers are reaching out, your AI Employee can engage. You don\'t need to change how your guests contact you — the AI meets them where they already are.' },
    { q: 'Does this replace my front desk team?', a: 'No, and it\'s not designed to. It handles the repetitive, time-sensitive, low-complexity conversations — missed calls, appointment confirmations, review responses — so your team can focus on delivering the experience your guests are there for. It empowers your team, it doesn\'t replace them.' },
    { q: 'How long does setup take?', a: 'Most properties are live within 48 hours of signing up. Aperture handles the configuration, integration, and training — you don\'t need a technical team or a developer. We manage the setup so you can focus on your business.' },
    { q: 'Can I cancel if it\'s not right for me?', a: 'Yes. Monthly plans can be cancelled before your next billing period with no penalty. Annual plans are billed upfront, but if you have concerns in the first 30 days, get in touch with Aperture directly and we\'ll make it right.' },
    { q: 'What if I need more than just this?', a: 'AI Solutions are designed for near-term, operational problems. If your needs are more strategic — commercial strategy, marketing positioning, forecasting, go-to-market planning — Aperture\'s consulting engagements are built for exactly that. Talk to us and we\'ll point you to the right solution.' }
  ]

  return (
    <>
      <style>{`
        /* AI Solutions - Dark background text to white */
        .ai-solutions-dark-text { color: #F0EDE6 !important; }
        
        /* Tablet & Below: 900px */
        @media (max-width: 900px) {
          .ai-hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ai-problem-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .ai-tools-header { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ai-tools-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .ai-what-does-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 1.5rem !important; }
          .funnel-stage { padding: 1rem !important; }
          .ai-how-it-works-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ai-pricing-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .ai-pricing-card { border-right: none !important; border-bottom: 1px solid #3a3733 !important; padding: 2.5rem 0 !important; }
          .ai-cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ai-hero-box { padding: 2rem !important; }
        }
        
        /* Mobile: 640px and below */
        @media (max-width: 640px) {
          .ai-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .ai-tools-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .ai-tool-card { padding: 1.5rem 0 !important; }
          .ai-tool-card h3 { font-size: 1.25rem !important; }
          .ai-what-does-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; max-width: 100% !important; width: 100% !important; margin: 0 !important; }
          .funnel-stage { padding: 0.75rem !important; text-align: center !important; }
          .ai-what-does-item { padding: 1.5rem 0 !important; }
          .ai-what-does-item h3 { font-size: 1.1rem !important; }
          .ai-what-does-item p { font-size: 0.8rem !important; }
          .ai-pricing-grid { grid-template-columns: 1fr !important; }
          .ai-pricing-card { padding: 2rem 0 !important; border-right: none !important; }
          .ai-pricing-card:not(:last-child) { border-bottom: 1px solid #3a3733 !important; }
          .ai-pricing-card h3 { font-size: 1.25rem !important; }
          .ai-cta-grid { grid-template-columns: 1fr !important; }
          .ai-cta-box { padding: 1.5rem !important; }
        }
        
        /* Small phones: 480px and below */
        @media (max-width: 480px) {
          .ai-hero-box { padding: 1.5rem !important; }
          .ai-hero-grid { padding: 0 1rem !important; }
          .ai-tools-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .ai-tool-card h3 { font-size: 1rem !important; }
          .ai-tool-card p { font-size: 0.8rem !important; line-height: 1.5 !important; }
          .ai-what-does-grid { display: flex !important; flex-direction: column !important; gap: 1rem !important; }
          .ai-what-does-stat { font-size: 2rem !important; }
          .ai-pricing-card h3 { font-size: 1.1rem !important; }
          .ai-pricing-stat { font-size: 2rem !important; }
        }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }} className="ai-hero-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A', flexShrink: 0 }}></div>
                AI Solutions for Small Business Owners and Boutique Luxury Brands
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Win Back Revenue<br/>Lost To <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Missed<br/>Conversations.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Boutique hotels, luxury spirits brands, and independent operators lose bookings and leads every day to missed calls, slow follow-ups, and unmanaged inquiries. Aperture's AI Employee works around the clock so your team doesn't have to.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '280px' }}>
                <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                  Buy Now - $297/Month
                </a>
                <a href="tel:786-706-8231" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none' }}>
                  Try Now: 786-706-8231
                </a>
              </div>
            </div>

            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>The cost of doing nothing</div>
              
              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>62%</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  of inbound calls to small businesses go unanswered. Each one is a potential booking, reservation, or sale walking out the door.
                </div>
              </div>

              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>5×</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  more likely to convert a lead if you follow up within 5 minutes. Most hospitality businesses take hours — or never respond at all.
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>$297</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  per month. Less than the cost of one missed reservation, and far less than a part-time hire. No long-term contract required.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="ai-problem-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                The Problem
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Your Business Runs<br/>On <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Conversations.</em><br/>You're Missing Them.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Running a boutique hotel, luxury spirits brand, or independent hospitality business means wearing every hat. The front desk, the inbox, the phone — they all need attention at the same time your guests do.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Every unanswered call, every slow reply, every ignored review is a signal to your next potential customer that you're not paying attention. An AI Employee fixes that — without adding headcount.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '2rem', borderTop: '2px solid #B8924A', padding: 0 }}>
                {['Calls go to voicemail during peak service hours', 'Website inquiries sit unanswered for hours or days', 'Google and social reviews accumulate without responses', 'No-shows increase when confirmation follow-ups don\'t happen', 'Staff time is consumed by repetitive, low-value conversations'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '2px solid #B8924A', fontSize: '0.9375rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THREE AI TOOLS */}
      <section id="tools" style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }} className="ai-tools-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                The AI Employee
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Three Tools.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>AI Teammate.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Your AI Employee specializes in three specific roles. Use one or all three to capture more revenue, reduce no-shows, and protect your reputation — while your team stays focused on delivering the experience your guests came for.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="ai-tools-grid">
            {[
              { number: '01', name: 'Voice AI', desc: 'Answers your phone 24/7, qualifies callers, captures information, and books appointments — in your brand\'s voice. Never miss a call again.', features: ['Answers inbound calls around the clock', 'Qualifies leads and captures contact details', 'Books appointments directly into your calendar', 'Sends SMS confirmation and reminders', 'Trained on your specific services and tone'] },
              { number: '02', name: 'Conversation AI', desc: 'Handles multiple text conversations simultaneously — across your website, social channels, and mobile — so no inquiry goes cold while your team is busy.', features: ['Web chat, SMS, Facebook, Instagram, Google', 'Books appointments with instant confirmations', 'Sends automated follow-ups to reduce no-shows', 'Escalates complex queries to your team', 'Fully customizable responses and tone'] },
              { number: '03', name: 'Reviews AI', desc: 'Automatically requests reviews from satisfied guests and responds to existing reviews across Google and Facebook — protecting and building your reputation without manual effort.', features: ['Automated review requests post-stay or post-visit', 'Responds to Google and Facebook reviews', 'Maintains consistent brand voice in responses', 'Surfaces negative feedback before it goes public', 'Reputation dashboard for at-a-glance monitoring'] }
            ].map((tool, i) => (
              <div key={i} style={{ padding: '0' }} className="ai-tool-card">
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>{tool.number}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.625rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>{tool.name}</h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.75rem' }}>{tool.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tool.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                      <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNNEL FLOW */}
      <section style={{ background: '#1C1A17', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>
              AI Implementation Snapshot
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, margin: 0 }}>
              Funnel <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Flow</em>
            </h2>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(240,237,230,0.1)', margin: '2.5rem 0 3rem 0 ' }}></div>

          {/* Funnel Steps - Browser Mockups with detailed content */}
          <style>{`
            .funnel-stage { position: relative; }
            .funnel-stage:not(:last-child)::after {
              content: '';
              position: absolute;
              top: 72px;
              right: -10px;
              width: 20px;
              height: 1px;
              background: #B8924A;
              opacity: 0.5;
              z-index: 2;
            }
            .funnel-stage:not(:last-child)::before {
              content: '';
              position: absolute;
              top: 68px;
              right: -6px;
              border-top: 4px solid transparent;
              border-bottom: 4px solid transparent;
              border-left: 6px solid #B8924A;
              opacity: 0.5;
              z-index: 3;
            }
            .screen-content {
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
              padding: 0.5rem;
            }
            .video-thumb {
              background: #243040;
              border-radius: 3px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 0.3rem;
            }
            .form-field {
              height: 5px;
              background: #232018;
              border: 0.5px solid #3A3730;
              border-radius: 1px;
            }
            .form-row {
              display: flex;
              gap: 3px;
            }
            .form-row .form-field { flex: 1; }
            .cal-wrap {
              background: #1A2A38;
              border: 0.75px solid #2A3D50;
              border-radius: 3px;
              padding: 0.3rem;
              margin-bottom: 0.3rem;
            }
            .cal-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 2px;
            }
            .cal-dot {
              height: 4px;
              background: rgba(184,146,74,0.4);
              border-radius: 1px;
            }
            .cal-dot.active { background: rgba(184,146,74,0.8); }
            .confirm-hero {
              background: #1D2D1F;
              border-radius: 3px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 0.3rem;
            }
            .check-circle {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 1px solid rgba(184,146,74,0.5);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .check-mark {
              width: 10px;
              height: 6px;
              border-left: 1.5px solid #B8924A;
              border-bottom: 1.5px solid #B8924A;
              transform: rotate(-45deg) translate(0.5px, -0.5px);
            }
            .screen-btn {
              background: #B8924A;
              color: #1C1A17;
              font-size: 0.5rem;
              font-weight: 600;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              text-align: center;
              padding: 0.4rem 0;
              border-radius: 2px;
              border: none;
              cursor: pointer;
            }
          `}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', marginBottom: '3rem', position: 'relative', alignItems: 'start' }} className="ai-what-does-grid">
            {/* 01 Sales Page */}
            <div className="funnel-stage ai-what-does-item" style={{ textAlign: 'center' }}>
              <div style={{ background: '#1C1A17', border: '1px solid rgba(184,146,74,0.4)', borderRadius: '0.3rem', padding: '0.5rem', marginBottom: '1rem', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ background: '#2A2720', borderRadius: '2px', padding: '0.35rem', display: 'flex', gap: '0.3rem', fontSize: '0.8rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E05555', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E0A935', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4CAF50', opacity: 0.7 }}></span>
                </div>
                <div className="screen-content">
                  <div className="video-thumb"><div style={{ width: '0', height: '0', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid #B8924A', opacity: 0.8 }}></div></div>
                  <button className="screen-btn">Get Started</button>
                </div>
              </div>
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.3rem' }}>Sales Page</div>
              <div style={{ fontSize: '0.65rem', color: '#F0EDE6', lineHeight: 1.3, marginBottom: '0.5rem' }}>Prospect lands<br/>on your page</div>
              <div style={{ fontSize: '0.6rem', color: '#6B6760' }}>01</div>
            </div>

            {/* 02 Order Form */}
            <div className="funnel-stage" style={{ textAlign: 'center' }}>
              <div style={{ background: '#1C1A17', border: '1px solid rgba(184,146,74,0.4)', borderRadius: '0.3rem', padding: '0.5rem', marginBottom: '1rem', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ background: '#2A2720', borderRadius: '2px', padding: '0.35rem', display: 'flex', gap: '0.3rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E05555', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E0A935', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4CAF50', opacity: 0.7 }}></span>
                </div>
                <div className="screen-content">
                  <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.45rem', fontWeight: 600, color: '#B8924A', background: '#243040', padding: '1px 3px', borderRadius: '1px' }}>VISA</span>
                    <span style={{ fontSize: '0.45rem', fontWeight: 600, color: '#6B6760', background: '#243040', padding: '1px 3px', borderRadius: '1px' }}>MC</span>
                    <span style={{ fontSize: '0.45rem', fontWeight: 600, color: '#6B6760', background: '#243040', padding: '1px 3px', borderRadius: '1px' }}>DISC</span>
                  </div>
                  <div className="form-field" style={{ marginBottom: '0.25rem' }}></div>
                  <div className="form-field" style={{ marginBottom: '0.25rem' }}></div>
                  <div className="form-row" style={{ marginBottom: '0.3rem' }}><div className="form-field"></div><div className="form-field"></div></div>
                  <button className="screen-btn">Complete Order</button>
                </div>
              </div>
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.3rem' }}>Order Form</div>
              <div style={{ fontSize: '0.65rem', color: '#F0EDE6', lineHeight: 1.3, marginBottom: '0.5rem' }}>Prospect goes<br/>through checkout</div>
              <div style={{ fontSize: '0.6rem', color: '#6B6760' }}>02</div>
            </div>

            {/* 03 Survey */}
            <div className="funnel-stage" style={{ textAlign: 'center' }}>
              <div style={{ background: '#1C1A17', border: '1px solid rgba(184,146,74,0.4)', borderRadius: '0.3rem', padding: '0.5rem', marginBottom: '1rem', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ background: '#2A2720', borderRadius: '2px', padding: '0.35rem', display: 'flex', gap: '0.3rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E05555', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E0A935', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4CAF50', opacity: 0.7 }}></span>
                </div>
                <div className="screen-content">
                  <div style={{ height: '6px', background: 'rgba(184,146,74,0.3)', borderRadius: '1px', marginBottom: '0.25rem' }}></div>
                  <div className="form-field" style={{ marginBottom: '0.2rem' }}></div>
                  <div className="form-field" style={{ marginBottom: '0.2rem' }}></div>
                  <div className="form-field" style={{ marginBottom: '0.2rem' }}></div>
                  <div className="form-field" style={{ marginBottom: '0.3rem' }}></div>
                  <button className="screen-btn">Submit</button>
                </div>
              </div>
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.3rem' }}>Survey</div>
              <div style={{ fontSize: '0.65rem', color: '#F0EDE6', lineHeight: 1.3, marginBottom: '0.5rem' }}>Customer fills out<br/>pre-onboarding survey</div>
              <div style={{ fontSize: '0.6rem', color: '#6B6760' }}>03</div>
            </div>

            {/* 04 Calendar */}
            <div className="funnel-stage" style={{ textAlign: 'center' }}>
              <div style={{ background: '#1C1A17', border: '1px solid rgba(184,146,74,0.4)', borderRadius: '0.3rem', padding: '0.5rem', marginBottom: '1rem', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ background: '#2A2720', borderRadius: '2px', padding: '0.35rem', display: 'flex', gap: '0.3rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E05555', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E0A935', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4CAF50', opacity: 0.7 }}></span>
                </div>
                <div className="screen-content">
                  <div className="cal-wrap">
                    <div className="cal-grid">
                      <div className="cal-dot"></div>
                      <div className="cal-dot"></div>
                      <div className="cal-dot"></div>
                      <div className="cal-dot"></div>
                      <div className="cal-dot"></div>
                      <div className="cal-dot active"></div>
                      <div className="cal-dot"></div>
                      <div className="cal-dot"></div>
                    </div>
                  </div>
                  <button className="screen-btn">Book Call</button>
                </div>
              </div>
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.3rem' }}>Calendar</div>
              <div style={{ fontSize: '0.65rem', color: '#F0EDE6', lineHeight: 1.3, marginBottom: '0.5rem' }}>Customer books<br/>implementation call</div>
              <div style={{ fontSize: '0.6rem', color: '#6B6760' }}>04</div>
            </div>

            {/* 05 Thank You */}
            <div className="funnel-stage" style={{ textAlign: 'center' }}>
              <div style={{ background: '#1C1A17', border: '1px solid rgba(184,146,74,0.6)', borderRadius: '0.3rem', padding: '0.5rem', marginBottom: '1rem', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ background: '#2A2720', borderRadius: '2px', padding: '0.35rem', display: 'flex', gap: '0.3rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E05555', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E0A935', opacity: 0.7 }}></span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4CAF50', opacity: 0.7 }}></span>
                </div>
                <div className="screen-content">
                  <div className="confirm-hero">
                    <div className="check-circle">
                      <div className="check-mark"></div>
                    </div>
                  </div>
                  <div className="form-field" style={{ marginBottom: '0.2rem' }}></div>
                  <div className="form-field" style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '0.3rem' }}></div>
                  <button className="screen-btn">You're In</button>
                </div>
              </div>
              <div style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.3rem' }}>Thank You Page</div>
              <div style={{ fontSize: '0.65rem', color: '#F0EDE6', lineHeight: 1.3, marginBottom: '0.5rem' }}>Customer directed<br/>to confirmation</div>
              <div style={{ fontSize: '0.6rem', color: '#6B6760' }}>05</div>
            </div>
          </div>

          {/* Timeline footer */}
          <div style={{ borderTop: '1px solid rgba(240,237,230,0.15)', paddingTop: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <span>Prospect Lands</span>
              <span style={{ color: '#B8924A' }}>→</span>
              <span>Checkout</span>
              <span style={{ color: '#B8924A' }}>→</span>
              <span>Onboarding Survey</span>
              <span style={{ color: '#B8924A' }}>→</span>
              <span>Books Implementation Call</span>
              <span style={{ color: '#B8924A' }}>→</span>
              <span>Confirmed</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section style={{ background: '#E8E4DB', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
              <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
              Who It's For
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '55ch' }}>
              Built For The Businesses That Make Hospitality<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Worth Experiencing.</em>
            </h2>
          </div>

          {/* Testimonial */}
          <div style={{ paddingTop: '3rem', borderTop: '2px solid #B8924A' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.5625rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.75, color: '#1C1A17', marginBottom: '2.5rem', margin: '0 0 2.5rem 0' }}>
              "Brandon has a unique ability to connect strategy with execution. During our growth initiatives, he consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner."
            </p>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6760' }}>
              — Ari Afshar, Founder · Voyage Real Estate
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                Pricing
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15 }}>
                Transparent Pricing.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>No Surprises.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760' }}>
              Less than the cost of one missed reservation per month. No hidden fees, no long-term contracts. Cancel anytime before your next billing period.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }} className="ai-pricing-grid">
            {/* Monthly */}
            <div style={{ padding: '3.5rem', border: '2px solid #B8924A', borderRight: 'none' }} className="ai-pricing-card">
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Monthly</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#1C1A17', marginBottom: '0.5rem', lineHeight: 1.1 }}>AI Employee</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', marginBottom: '2rem', lineHeight: 1.6 }}>All three tools. Full access. Month to month.</p>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1, marginBottom: '0.25rem' }}>$297</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2.5rem' }}>per month · cancel anytime</div>
              <ul style={{ listStyle: 'none', borderTop: '2px solid #B8924A', margin: 0, padding: 0, marginBottom: '2.5rem' }}>
                {['Voice AI — 24/7 inbound call handling', 'Conversation AI — web, SMS, and social', 'Reviews AI — request & respond', 'Aperture brand voice setup included', 'Hospitality-specific configuration', 'Standard onboarding support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 0', borderBottom: '2px solid #B8924A', fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.5 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now - $297/Month
              </a>
              <p style={{ fontSize: '0.75rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6, marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '2px solid #B8924A' }}>Setup fee may apply depending on integration complexity. Aperture handles all configuration.</p>
            </div>

            {/* Annual */}
            <div style={{ padding: '3.5rem', background: '#1C1A17', border: '1px solid #1C1A17', borderRight: '2px solid #B8924A' }} className="ai-pricing-card">
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Annual · Best Value</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '0.5rem', lineHeight: 1.1 }}>AI Employee</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#4a4845', marginBottom: '2rem', lineHeight: 1.6 }}>Two months free when you commit to a year.</p>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>$2,997</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2.5rem' }}>per year · equivalent to $249.75/mo</div>
              <ul style={{ listStyle: 'none', borderTop: '2px solid #3a3733', margin: 0, padding: 0, marginBottom: '2.5rem' }}>
                {['Everything in the monthly plan', 'Priority onboarding & setup', 'Quarterly performance review with Aperture', 'First access to new AI tools as they launch', 'Dedicated Aperture point of contact', 'Two months free vs. monthly billing'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 0', borderBottom: '2px solid #3a3733', fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.5 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now $2,997.00/yr
              </a>
              <p style={{ fontSize: '0.75rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6, marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '2px solid #3a3733' }}>Annual plans are billed upfront. Aperture handles all configuration at no additional charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI MARKETING WORKSPACE KIT */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A', display: 'block' }}></span>
                Ready to Install the Fix?
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Stop Rebuilding From Scratch.<br/>Start Running A <em style={{ fontStyle: 'italic', color: '#B8924A' }}>System.</em>
              </h2>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Every week you operate without a marketing foundation, the leak gets bigger. Standards stay in your head. New content starts from zero. AI tools produce output that sounds like everyone else's property. Team members guess. Deals slip through because the follow-up copy wasn't ready.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                <strong style={{ fontWeight: 400 }}>The AI Marketing Workspace Kit fixes the foundation — one time.</strong>
              </p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#B8924A' }}>
                One AI. One workspace. One operating system for every piece of marketing you ship.
              </p>
            </div>

            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem', borderRadius: '16px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1.5rem', lineHeight: 1.2 }}>AI Marketing Workspace Kit</h3>
              
              <a href="https://request.revenuefactory.com/widget/bookings/ai-employee-convo" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '1.5rem 2rem', background: '#1C1A17', color: '#FFFFFF', border: '1.5px solid #B8924A', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', marginBottom: '1rem', cursor: 'pointer', width: '100%', boxSizing: 'border-box' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#B8924A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1.2 }}>Get The Workspace Kit - $1,497</div>
              </a>

              <p style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                One-time setup fee. No subscription. No monthly retainer.
              </p>

              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6, marginTop: '1.5rem' }}>
                Want to start with the foundation only? Get the <strong style={{ fontWeight: 400 }}>Reference Library Builder Set — $297</strong>
              </p>
              <a href="/workplacekit" style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', borderBottom: '1px solid #B8924A', paddingBottom: '4px', textDecoration: 'none', cursor: 'pointer', marginTop: '0.5rem', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EDE6'; e.currentTarget.style.borderBottomColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#B8924A'; e.currentTarget.style.borderBottomColor = '#B8924A'; }}>
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', position: 'sticky', top: '5rem' }}>
              Questions<br/>Worth <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Asking.</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{ borderBottom: '2px solid #3a3733', padding: '1.75rem 0', cursor: 'pointer' }}
                  onClick={() => setOpenFaqId(openFaqId === i ? -1 : i)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.3, margin: 0 }}>
                      {item.q}
                    </h3>
                    <span style={{ fontSize: '1.25rem', lineHeight: 1, color: '#B8924A', transition: 'transform 0.2s', transform: openFaqId === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </div>
                  {openFaqId === i && (
                    <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginTop: '1.25rem', margin: '1.25rem 0 0 0' }}>
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
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '22ch', margin: 0 }}>
              Ready To Stop <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Missing Conversations?</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexShrink: 0 }}>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now - $297/Month
              </a>
              <a href="tel:786-706-8231" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Try Now: 786-706-8231
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-ai" />

      <Footer />
    </>
  )
}
