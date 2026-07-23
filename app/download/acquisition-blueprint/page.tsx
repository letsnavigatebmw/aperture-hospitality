'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DownloadBlueprintPage() {
  const [currentPage, setCurrentPage] = useState('thank-you')
  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget
    setFormData(prev => ({ ...prev, [id.replace('f-', '')]: value }))
  }

  const downloadCheatSheet = () => {
    // Wire to your actual PDF URL
    const url = '/downloads/Aperture_Acquisition_Blueprint.pdf'
    const link = document.createElement('a')
    link.href = url
    link.download = 'Aperture_Acquisition_Blueprint_Cheatsheet.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadFullGuide = () => {
    // Wire to your actual PDF URL
    const url = '/downloads/Aperture_Acquisition_Blueprint_Guide.pdf'
    const link = document.createElement('a')
    link.href = url
    link.download = 'Aperture_Acquisition_Blueprint_Guide.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Collect form data
      const intakeData = {
        firstName: (document.getElementById('f-firstname') as HTMLInputElement)?.value,
        lastName: (document.getElementById('f-lastname') as HTMLInputElement)?.value,
        email: (document.getElementById('f-email') as HTMLInputElement)?.value,
        business: (document.getElementById('f-business') as HTMLInputElement)?.value,
        type: (document.getElementById('f-type') as HTMLSelectElement)?.value,
        challenge: (document.getElementById('f-challenge') as HTMLSelectElement)?.value,
        system: (document.getElementById('f-system') as HTMLTextAreaElement)?.value || '',
        revenue: (document.getElementById('f-revenue') as HTMLSelectElement)?.value || '',
        submittedAt: new Date().toISOString(),
      }

      // Send to API route
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(intakeData),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || 'Submission failed')
      }

      // Update email display and transition to confirmed state
      setFormData(prev => ({ ...prev, email: intakeData.email }))
      setCurrentPage('confirmed')
      window.scrollTo(0, 0)
    } catch (err) {
      console.error('Submission error:', err)
      alert('Something went wrong. Please try again or email inquiries@aperturehospitality.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --ink: #1C1A17; --parch: #F0EDE6; --parch2: #E8E4DB;
          --brass: #B8924A; --brass-dim: #9a7a3e; --muted: #6B6760;
          --rule: #D4CFC6; --dark2: #2e2b26; --dark3: #252320;
        }
        html { scroll-behavior: smooth; }
        body {
          background: var(--ink); color: var(--parch);
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 16px; line-height: 1.6;
          -webkit-font-smoothing: antialiased; min-height: 100vh;
        }
        a { color: inherit; text-decoration: none; }

        nav {
          border-bottom: 1px solid var(--dark2);
          padding: 0 clamp(1.5rem, 5vw, 4rem);
          height: 60px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { display: flex; align-items: center; gap: 0.625rem; }
        .nav-back { font-size: 0.6875rem; font-weight: 300; letter-spacing: 0.1em; color: var(--muted); transition: color 0.2s; }
        .nav-back:hover { color: var(--parch); }

        .ty-wrap, .confirmed-wrap { min-height: calc(100vh - 60px); display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; }
        .ty-left, .confirmed-left, .ty-right, .confirmed-right { padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 5rem); display: flex; flex-direction: column; justify-content: center; }
        .ty-left, .confirmed-left { border-right: 1px solid var(--dark2); }
        .ty-right, .confirmed-right { background: var(--dark3); }

        .eyebrow { display: flex; align-items: center; gap: 0.625rem; font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.75rem; }
        .eyebrow::before { content: ''; display: block; width: 2px; height: 1rem; background: var(--brass); flex-shrink: 0; }
        
        .ty-headline, .confirmed-headline { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 300; line-height: 1.1; color: var(--parch); margin-bottom: 1.25rem; }
        .ty-headline { font-size: clamp(2.25rem, 4vw, 3.5rem); }
        .confirmed-headline { font-size: clamp(2.5rem, 4.5vw, 4rem); line-height: 1.05; }
        .ty-headline em, .confirmed-headline em { font-style: italic; color: var(--brass); }
        
        .ty-body, .confirmed-body { font-size: 1rem; font-weight: 300; line-height: 1.8; color: var(--parch); margin-bottom: 2rem; max-width: 44ch; }

        .download-card { border: 1px solid var(--dark2); background: var(--dark2); padding: 1.5rem; display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem; transition: border-color 0.2s; }
        .download-card:hover { border-color: var(--brass); }
        .dl-icon { width: 48px; height: 48px; flex-shrink: 0; background: var(--brass); display: flex; align-items: center; justify-content: center; color: var(--parch); }
        .dl-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.125rem; font-weight: 300; color: var(--parch); margin-bottom: 0.25rem; }
        .dl-meta { font-size: 0.75rem; font-weight: 300; color: var(--muted); letter-spacing: 0.06em; }
        .dl-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.125rem; background: var(--brass); color: var(--parch); font-size: 0.625rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.2s; white-space: nowrap; flex-shrink: 0; }
        .dl-btn:hover { background: var(--brass-dim); }

        .inside-label { font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
        .inside-list { list-style: none; border-top: 1px solid var(--dark2); }
        .inside-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem 0; border-bottom: 1px solid var(--dark2); font-size: 0.875rem; font-weight: 300; color: var(--parch); line-height: 1.5; }
        .inside-dot { width: 4px; height: 4px; background: var(--brass); border-radius: 50%; flex-shrink: 0; margin-top: 0.45rem; }

        .guide-header { padding-bottom: 1.5rem; border-bottom: 1px solid var(--dark2); margin-bottom: 1.75rem; }
        .guide-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--dark2); padding: 0.375rem 0.75rem; font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--brass); margin-bottom: 1rem; }
        .guide-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 300; color: var(--parch); line-height: 1.2; margin-bottom: 0.625rem; }
        .guide-desc { font-size: 0.9375rem; font-weight: 300; line-height: 1.75; color: var(--muted); }

        .form-section-label { font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.25rem; }
        .form-grid { display: flex; flex-direction: column; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.375rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        label { font-size: 0.625rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        label span.req { color: var(--brass); }
        input, select, textarea { padding: 0.75rem 0.875rem; background: var(--dark2); border: 1px solid #3a3733; color: var(--parch); font-family: 'Inter', sans-serif; font-size: 0.9375rem; font-weight: 300; outline: none; transition: border-color 0.2s; width: 100%; }
        input::placeholder, textarea::placeholder { color: #4a4845; }
        input:focus, select:focus, textarea:focus { border-color: var(--brass); }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6760' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.875rem center; padding-right: 2.5rem; cursor: pointer; appearance: none; }
        textarea { height: 80px; resize: vertical; line-height: 1.6; }

        .submit-btn { width: 100%; padding: 1rem; background: var(--brass); border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px; transition: background 0.2s; margin-top: 0.5rem; }
        .submit-btn:hover:not(:disabled) { background: var(--brass-dim); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .submit-btn-main { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.125rem; font-weight: 300; color: var(--parch); line-height: 1; }
        .submit-btn-sub { font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(240,237,230,0.65); }
        .form-note { font-size: 0.75rem; font-weight: 300; color: #4a4845; text-align: center; margin-top: 0.75rem; line-height: 1.6; }

        .check-circle { width: 56px; height: 56px; border: 1px solid var(--brass); display: flex; align-items: center; justify-content: center; margin-bottom: 1.75rem; }
        .confirmed-email-note { font-size: 0.875rem; font-weight: 300; color: var(--muted); line-height: 1.7; padding-top: 1.5rem; border-top: 1px solid var(--dark2); }
        .confirmed-email-note strong { font-weight: 400; color: var(--parch); }
        .confirmed-downloads { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; }

        .next-label { font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.5rem; }
        .next-item { padding: 1.5rem 0; border-bottom: 1px solid var(--dark2); }
        .next-item:last-child { border-bottom: none; }
        .next-item-num { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 0.875rem; font-weight: 300; color: var(--brass); margin-bottom: 0.375rem; }
        .next-item-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.125rem; font-weight: 300; color: var(--parch); margin-bottom: 0.375rem; }
        .next-item-desc { font-size: 0.875rem; font-weight: 300; color: var(--muted); line-height: 1.6; }
        .cta-row { display: flex; gap: 0.75rem; margin-top: 2rem; flex-wrap: wrap; }
        .btn-brass { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 1.75rem; background: var(--brass); color: var(--parch); font-size: 0.625rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; border: none; cursor: pointer; transition: background 0.2s; }
        .btn-brass:hover { background: var(--brass-dim); }
        .btn-outline { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 1.75rem; background: transparent; color: var(--parch); border: 1px solid #3a3733; font-size: 0.625rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; cursor: pointer; transition: border-color 0.2s; }
        .btn-outline:hover { border-color: var(--brass); color: var(--brass); }

        .progress { display: flex; align-items: center; gap: 0; margin-bottom: 2rem; }
        .progress-step { display: flex; align-items: center; gap: 0.5rem; font-size: 0.5625rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #4a4845; }
        .progress-step.done { color: var(--muted); }
        .progress-step.active { color: var(--parch); }
        .progress-dot { width: 6px; height: 6px; border-radius: 50%; background: #3a3733; flex-shrink: 0; }
        .progress-dot.done { background: var(--brass); }
        .progress-dot.active { background: var(--parch); }
        .progress-line { width: 2rem; height: 1px; background: #3a3733; margin: 0 0.5rem; }
        .progress-line.done { background: var(--brass); }

        footer { border-top: 1px solid var(--dark2); padding: 1.5rem clamp(1.5rem,5vw,4rem); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .footer-left { font-size: 0.6875rem; color: #4a4845; }
        .footer-links { display: flex; gap: 1.5rem; list-style: none; }
        .footer-links a { font-size: 0.6875rem; color: #4a4845; transition: color 0.2s; }
        .footer-links a:hover { color: var(--muted); }

        @media (max-width: 900px) {
          .ty-wrap, .confirmed-wrap { grid-template-columns: 1fr; }
          .ty-left, .ty-right, .confirmed-left, .confirmed-right { border-right: none; border-bottom: 1px solid var(--dark2); padding: clamp(2rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem); }
          .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          nav { height: auto; padding: 1rem clamp(1rem, 4vw, 2rem); flex-direction: column; gap: 1rem; align-items: flex-start; }
          .nav-logo { gap: 0.5rem; }
          .nav-wordmark span { font-size: 0.5rem; letter-spacing: 0.24em; }
          .nav-back { font-size: 0.625rem; }
          
          .ty-left, .ty-right, .confirmed-left, .confirmed-right { padding: clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem); }
          
          .eyebrow { font-size: 0.5rem; margin-bottom: 1rem; }
          .eyebrow::before { height: 0.75rem; }
          .ty-headline, .confirmed-headline { font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: 1rem; }
          .ty-body, .confirmed-body { font-size: 0.9375rem; margin-bottom: 1.5rem; }
          
          .download-card { padding: 1rem; gap: 1rem; flex-direction: column; align-items: flex-start; }
          .dl-icon { width: 40px; height: 40px; }
          .dl-title { font-size: 1rem; }
          .dl-meta { font-size: 0.7rem; }
          .dl-btn { font-size: 0.5625rem; padding: 0.5rem 1rem; }
          
          .inside-label { font-size: 0.5rem; margin-bottom: 0.75rem; }
          .inside-item { padding: 0.6rem 0; font-size: 0.8125rem; gap: 0.6rem; }
          
          .guide-header { padding-bottom: 1rem; margin-bottom: 1.25rem; }
          .guide-title { font-size: clamp(1.25rem, 3vw, 1.625rem); margin-bottom: 0.5rem; }
          .guide-desc { font-size: 0.875rem; }
          
          .form-section-label { font-size: 0.5rem; margin-bottom: 1rem; }
          label { font-size: 0.5625rem; margin-bottom: 0.25rem; }
          input, select, textarea { font-size: 0.9375rem; padding: 0.625rem 0.75rem; }
          textarea { height: 70px; }
          
          .submit-btn { padding: 0.875rem 1rem; }
          .submit-btn-main { font-size: 1rem; }
          .submit-btn-sub { font-size: 0.5rem; }
          .form-note { font-size: 0.7rem; margin-top: 0.5rem; }
          
          .check-circle { width: 48px; height: 48px; margin-bottom: 1.25rem; }
          .confirmed-email-note { font-size: 0.8125rem; padding-top: 1rem; margin-top: 1.5rem; }
          .confirmed-downloads { gap: 0.5rem; }
          
          .next-label { font-size: 0.5rem; margin-bottom: 1rem; }
          .next-item { padding: 1rem 0; }
          .next-item-num { font-size: 0.8rem; margin-bottom: 0.25rem; }
          .next-item-title { font-size: 1rem; margin-bottom: 0.25rem; }
          .next-item-desc { font-size: 0.8rem; }
          
          .cta-row { gap: 0.5rem; }
          .btn-brass, .btn-outline { padding: 0.75rem 1.25rem; font-size: 0.5625rem; }
          
          .progress { margin-bottom: 1.5rem; gap: 0.3rem; }
          .progress-step { font-size: 0.5rem; gap: 0.4rem; }
          .progress-line { width: 1rem; margin: 0 0.3rem; }
          
          footer { padding: 1rem clamp(1rem, 4vw, 2rem); flex-direction: column; align-items: flex-start; }
          .footer-left { font-size: 0.625rem; }
          .footer-links { gap: 1rem; }
          .footer-links a { font-size: 0.625rem; }
        }
        @media (max-width: 480px) {
          nav { padding: 0.75rem 1rem; }
          .nav-wordmark span { font-size: 0.475rem; }
          
          .ty-headline, .confirmed-headline { font-size: clamp(1.5rem, 3.5vw, 2rem); line-height: 1.1; }
          .guide-title { font-size: clamp(1rem, 2.5vw, 1.25rem); }
          
          .download-card { padding: 0.875rem; }
          .dl-icon { width: 36px; height: 36px; }
          
          input, select, textarea { font-size: 16px; } /* Prevent iOS zoom */
          .form-row { gap: 0.75rem; }
          
          .confirmed-downloads { gap: 0.375rem; }
          .next-item { padding: 0.875rem 0; }
          
          .cta-row { flex-direction: column; gap: 0.5rem; }
          .btn-brass, .btn-outline { width: 100%; padding: 0.875rem 1rem; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#F0EDE6" strokeWidth="1">
            <circle cx="16" cy="16" r="13"/>
            <path d="M16 3 A13 13 0 0 1 29 16" stroke="#B8924A" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <div style={{ display: 'block' }}>
            <span style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#F0EDE6', lineHeight: 1, display: 'block' }}>APERTURE</span>
          </div>
        </Link>
        <Link href="/capabilities" className="nav-back">← Back to Capabilities</Link>
      </nav>

      {/* THANK YOU PAGE */}
      {currentPage === 'thank-you' && (
        <div className="ty-wrap">
          {/* LEFT */}
          <div className="ty-left">
            <div className="progress" style={{ marginBottom: '2rem' }}>
              <div className="progress-step done">
                <div className="progress-dot done"></div>
                Cheat Sheet
              </div>
              <div className="progress-line done"></div>
              <div className="progress-step active">
                <div className="progress-dot active"></div>
                Full Guide
              </div>
              <div className="progress-line"></div>
              <div className="progress-step">
                <div className="progress-dot"></div>
                Confirmed
              </div>
            </div>

            <div className="eyebrow">Download Ready</div>
            <h1 className="ty-headline">Your cheat sheet<br/>is <em>ready to download.</em></h1>
            <p className="ty-body">The Acquisition Blueprint Cheat Sheet — your sequential build order from zero to a fully operational customer acquisition system.</p>

            <div className="download-card">
              <div className="dl-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 3v13M7 11l5 5 5-5M3 21h18"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div className="dl-title">The Acquisition Blueprint — Cheat Sheet</div>
                <div className="dl-meta">PDF · 1 page · Aperture</div>
              </div>
              <button className="dl-btn" onClick={downloadCheatSheet}>Download</button>
            </div>

            <div className="inside-label">What's in the full guide</div>
            <ul className="inside-list">
              <li className="inside-item"><div className="inside-dot"></div><span>6 pages covering all four phases — Foundation, Acquisition Engine, Conversion System, and Launch &amp; Scale</span></li>
              <li className="inside-item"><div className="inside-dot"></div><span>20 numbered deliverables with detailed explanations of what each one is and why it matters</span></li>
              <li className="inside-item"><div className="inside-dot"></div><span>Track A and Track B execution paths — volume growth vs. high-ticket conversion</span></li>
              <li className="inside-item"><div className="inside-dot"></div><span>A full reference map so every member of your team can see the complete system at a glance</span></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="ty-right">
            <div className="guide-header">
              <div className="guide-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>
                Full Guide — 6 Pages
              </div>
              <h2 className="guide-title">Access the complete<br/>Acquisition Blueprint.</h2>
              <p className="guide-desc">Tell us about your business and we'll send you the full guide — plus a note from Brandon on where your biggest acquisition gap likely is.</p>
            </div>

            <div className="form-section-label">Your Business</div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name <span className="req">*</span></label>
                  <input type="text" id="f-firstname" placeholder="First" required onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                  <label>Last Name <span className="req">*</span></label>
                  <input type="text" id="f-lastname" placeholder="Last" required onChange={handleInputChange}/>
                </div>
              </div>
              <div className="form-group">
                <label>Email <span className="req">*</span></label>
                <input type="email" id="f-email" placeholder="you@yourbusiness.com" required onChange={handleInputChange}/>
              </div>
              <div className="form-group">
                <label>Business Name <span className="req">*</span></label>
                <input type="text" id="f-business" placeholder="Your company or brand" required onChange={handleInputChange}/>
              </div>
              <div className="form-group">
                <label>Type of Business <span className="req">*</span></label>
                <select id="f-type" required onChange={handleInputChange}>
                  <option value="" disabled selected>Select your category</option>
                  <option value="hospitality">Hospitality — hotel, restaurant, venue</option>
                  <option value="realestate">Real estate — brokerage, development, property</option>
                  <option value="consumer">Consumer brand — product or CPG</option>
                  <option value="services">Professional services — consulting, agency, advisory</option>
                  <option value="technology">Technology — SaaS, platform, software</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Primary Revenue Challenge <span className="req">*</span></label>
                <select id="f-challenge" required onChange={handleInputChange}>
                  <option value="" disabled selected>What's the biggest blocker right now?</option>
                  <option value="lead-gen">Not generating enough leads consistently</option>
                  <option value="conversion">Getting leads but not converting them</option>
                  <option value="retention">Losing customers before they become repeat buyers</option>
                  <option value="scale">Have demand but can't scale without adding headcount</option>
                  <option value="data">Sitting on data I can't turn into decisions</option>
                  <option value="alignment">Marketing and sales aren't working from the same plan</option>
                </select>
              </div>
              <div className="form-group">
                <label>Current Acquisition System</label>
                <textarea id="f-system" placeholder="Briefly describe what you're currently doing to attract and convert new customers — or 'nothing formal yet' if you're starting fresh." onChange={handleInputChange}></textarea>
              </div>
              <div className="form-group">
                <label>Target Monthly Revenue</label>
                <select id="f-revenue" onChange={handleInputChange}>
                  <option value="" disabled selected>Where are you trying to get to?</option>
                  <option value="under-25k">Under $25k / month</option>
                  <option value="25k-75k">$25k – $75k / month</option>
                  <option value="75k-250k">$75k – $250k / month</option>
                  <option value="250k-plus">$250k+ / month</option>
                </select>
              </div>
              <button type="submit" className="submit-btn" disabled={submitting}>
                <span className="submit-btn-main">Send Me the Full Guide</span>
                <span className="submit-btn-sub">6-page PDF → delivered instantly</span>
              </button>
              <p className="form-note">Brandon reviews every submission personally.<br/>If it makes sense to connect, he'll reach out directly.</p>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRMED PAGE */}
      {currentPage === 'confirmed' && (
        <div className="confirmed-wrap">
          {/* LEFT */}
          <div className="confirmed-left">
            <div className="progress" style={{ marginBottom: '2rem' }}>
              <div className="progress-step done"><div className="progress-dot done"></div>Cheat Sheet</div>
              <div className="progress-line done"></div>
              <div className="progress-step done"><div className="progress-dot done"></div>Full Guide</div>
              <div className="progress-line done"></div>
              <div className="progress-step active"><div className="progress-dot active"></div>Confirmed</div>
            </div>

            <div className="check-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8924A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4 10-10"/>
              </svg>
            </div>

            <h2 className="confirmed-headline">Both guides<br/>are <em>yours.</em></h2>
            <p className="confirmed-body">Download them below. Brandon will review your intake and follow up personally if there's a good reason to connect.</p>

            <div className="confirmed-downloads">
              <div className="download-card" style={{ marginBottom: 0 }}>
                <div className="dl-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 3v13M7 11l5 5 5-5M3 21h18"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="dl-title">Cheat Sheet</div>
                  <div className="dl-meta">PDF · 1 page · Build sequence</div>
                </div>
                <button className="dl-btn" onClick={downloadCheatSheet}>Download</button>
              </div>

              <div className="download-card" style={{ marginBottom: 0, background: 'var(--dark2)' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: 'var(--dark2)', border: '1px solid var(--brass)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8924A" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="dl-title">The Full Guide</div>
                  <div className="dl-meta">PDF · 6 pages · Complete framework</div>
                </div>
                <button className="dl-btn" onClick={downloadFullGuide}>Download</button>
              </div>
            </div>

            <div className="confirmed-email-note">
              A copy of both is on its way to <strong>{formData.email}</strong>.<br/>
              Brandon will review your intake and follow up within one business day if it makes sense to connect.
            </div>
          </div>

          {/* RIGHT */}
          <div className="confirmed-right">
            <div className="next-label">What Happens Next</div>

            <div className="next-item">
              <div className="next-item-num">01 — Right now</div>
              <div className="next-item-title">Download both guides.</div>
              <div className="next-item-desc">Start with the cheat sheet — it gives you the full system on one page. Then work through the guide phase by phase. Phase 1 alone will surface at least one thing you haven't defined clearly enough.</div>
            </div>

            <div className="next-item">
              <div className="next-item-num">02 — This week</div>
              <div className="next-item-title">Run yourself through the Phase 1 audit.</div>
              <div className="next-item-desc">Answer the five questions honestly: who is your ideal client, what is your value proposition, how is your offer structured, how is it priced, and what does your current acquisition system actually look like. Most businesses discover at least one gap in the first 20 minutes.</div>
            </div>

            <div className="next-item">
              <div className="next-item-num">03 — If it makes sense</div>
              <div className="next-item-title">Brandon will follow up personally.</div>
              <div className="next-item-desc">He reviews every intake himself. If your situation is one where Aperture could be genuinely useful — not just interesting — he'll reach out with a specific observation about your business and a suggestion for what to do about it.</div>
            </div>

            <div className="cta-row">
              <Link href="/capabilities" className="btn-brass">Explore Capabilities</Link>
              <Link href="/contact" className="btn-outline">Start a Conversation</Link>
            </div>
          </div>
        </div>
      )}

      <footer>
        <span className="footer-left">© 2026 Aperture. All rights reserved.</span>
        <ul className="footer-links">
          <li><Link href="/capabilities">Capabilities</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><a href="mailto:inquiries@aperturehospitality.com">inquiries@aperturehospitality.com</a></li>
        </ul>
      </footer>
    </>
  )
}
