import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Early-Stage Spirits Brands',
  description:
    'How Aperture helps early-stage spirits brands grow: brand, marketing, commercial planning and investor readiness, with sales execution through our partner MJR Adventures.',
  alternates: { canonical: '/spirits' },
}

const MJR = 'https://www.mjradventures.com/'

const aperture = [
  { t: 'Brand Foundation & Positioning', d: 'A clear story for the brand, told three ways: for the distributor, the buyer and the bartender.' },
  { t: 'Marketing Plan & Sales Tools', d: 'Sales playbooks, sell sheets, bartender kits, shelf guidelines and events built to convert into accounts.' },
  { t: 'Commercial Plan & Route to Market', d: 'Market and channel priorities, pricing architecture, distributor scorecards and the operating rhythm that keeps a plan on track.' },
  { t: 'Models & Investor Readiness', d: 'Three-statement financial models, unit economics and the materials founders need for a raise or a board.' },
]

const mjrStats = [
  { v: '35+', l: 'Years moving brands through the U.S. three-tier system' },
  { v: '5,000+', l: 'Retail accounts built' },
  { v: '15,000', l: 'Points of distribution' },
  { v: '3 → 22', l: 'Distributors grown for DeLeon Tequila' },
]

const mjr = [
  { t: 'Distributor Strategy & Management', d: 'Winning in the middle tier: securing the right distributor, then making sure the brand is the one their team pushes.' },
  { t: 'Account Development', d: 'Building retail and on-premise accounts, from the loading dock to the back bar.' },
  { t: 'Sales Force Building', d: 'Fielding and managing sales teams for founder-led brands, regionally or nationally.' },
  { t: 'Every Beverage Category', d: 'Wine, spirits, RTD, non-alcoholic and THC-infused beverages.' },
]

export default function Spirits() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container">
            <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>
              Early-Stage Spirits Brands
            </p>
            <h1 className="display" style={{ maxWidth: '20ch' }}>
              Brands Need More Than a Good Story. They Need a Sound <em>Strategy</em>.
            </h1>
            <p className="hero__sub">
              Aperture, in partnership with MJR Adventures, designs customized and coordinated sales and marketing
              solutions that deliver results. We focus on the tactics, assets and execution principles that drive
              awareness, build affinity and improve sales velocity, on premise and off.
            </p>
            <div className="hero__cta">
              <Link className="btn" href="/contact">Let’s Talk</Link>
              <a className="link" href="#partners">Aperture &amp; MJR Adventures</a>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="ap-h">
          <div className="container rail">
            <div className="rail__head reveal">
              <span className="eyebrow">What Aperture Brings</span>
              <h2 id="ap-h" className="h2">Strategy, Brand and the Numbers</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Built on launches at Diageo, a P&amp;L at Stillhouse Spirits and advisory work with WES Brands, Beverly
                Spirits and Perro Verde.
              </p>
            </div>
            <ul className="caps reveal">
              {aperture.map((c) => (
                <li key={c.t}>
                  <h3 className="caps__t">{c.t}</h3>
                  <p>{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="partners" aria-labelledby="mjr-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Partner Ecosystem</span>
              <h2 id="mjr-h" className="h2">Sales Execution, Through <em>MJR Adventures</em></h2>
              <p className="lede sec-sub">
                Aperture partners with MJR Adventures to offer customized sales and marketing solutions. Founded by
                Michael Rieck, MJR is the bridge between brand owners and wholesalers, turning ambition into shipped
                cases across the U.S. three-tier system.
              </p>
            </div>
            <dl className="stats reveal">
              {mjrStats.map((s) => (
                <div className="stat" key={s.l}>
                  <dt className="stat__v num">{s.v}</dt>
                  <dd className="stat__l">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="container rail" style={{ marginTop: 'clamp(4rem, 8vw, 6rem)' }}>
            <div className="rail__head reveal">
              <span className="eyebrow">What MJR Brings</span>
              <h2 className="h2">The Bridge Between Bottle and Shelf</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Brands MJR has helped bring to the shelf include Aviation Gin, DeLeon Tequila and Stillhouse Spirits.
              </p>
            </div>
            <div className="reveal">
              <ul className="caps" style={{ marginBottom: '2rem' }}>
                {mjr.map((c) => (
                  <li key={c.t}>
                    <h3 className="caps__t">{c.t}</h3>
                    <p>{c.d}</p>
                  </li>
                ))}
              </ul>
              <a className="link" href={MJR} target="_blank" rel="noopener">Visit MJR Adventures</a>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="fit-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">How It Fits Together</span>
              <h2 id="fit-h" className="h2">One Plan, Two Teams</h2>
            </div>
            <div className="now reveal">
              <article className="card">
                <p className="card__title">Aperture</p>
                <p className="label">Strategy · Brand · Marketing · Models</p>
                <p>
                  The brand foundation, marketing plan, sales tools and financial model, plus the investor and board
                  materials that turn early traction into the next round.
                </p>
              </article>
              <article className="card">
                <p className="card__title">MJR Adventures</p>
                <p className="label">Distribution · Field Sales · Accounts</p>
                <p>
                  Distributor selection and management, reps in market and account development, so the plan shows up
                  as depletions and reorders.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ContactCTA
          title={
            <>
              Let’s Talk About Your <em>Brand</em>
            </>
          }
          body="Tell us where the brand is today and where it needs to be. I reply within one business day."
        />
      </main>
      <Footer />
    </>
  )
}
