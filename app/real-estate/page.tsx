import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'
import LibraryGate from '@/components/LibraryGate'
import { library } from '@/lib/library'

export const metadata: Metadata = {
  title: 'Residential Real Estate & PropTech',
  description:
    'Agent prospecting coaching from Navigate, the AI-native prospecting and property intelligence platform Brandon Weaver founded: a free library of decks and recordings, organized by topic.',
  alternates: { canonical: '/real-estate' },
}

const helps = [
  {
    t: 'Brokerages & Teams',
    d: 'Prospecting systems your agents will actually run, the training behind them and the weekly scorecard that shows which activity turns into listings.',
  },
  {
    t: 'PropTech Go-to-Market',
    d: 'Positioning, pricing and channel strategy for platforms that sell to agents and brokerages, from someone who has built and sold one.',
  },
  {
    t: 'New Development & Luxury',
    d: 'Sales and marketing strategy for luxury projects and platforms, informed by work with Compass’s New Development team on branded residences and advisory to Voyage Real Estate.',
  },
]

export default function RealEstate() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container">
            <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>
              Residential Real Estate &amp; PropTech
            </p>
            <h1 className="display" style={{ maxWidth: '19ch' }}>
              Agent Prospecting, <em>Rebuilt</em> From the Property Up.
            </h1>
            <p className="hero__sub" style={{ maxWidth: '42rem' }}>
              I founded Navigate, an AI-native prospecting and property intelligence platform for real estate agents. In
              2025 I led a weekly prospecting track for agents in a national coaching program, with guest sessions from
              Tony Dicks, on how to find, reach and convert the right homeowners. The full library is here:{' '}
              {library.length} sessions, organized by topic, free with one short form.
            </p>
            <div className="hero__cta">
              <a className="btn" href="#unlock">Unlock the Library</a>
              <a className="link link--down" href="#library">Browse the Sessions</a>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="help-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Where Aperture Helps</span>
              <h2 id="help-h" className="h2">
                From the Agent&rsquo;s Desk to the <em>Boardroom</em>
              </h2>
            </div>
            <ul className="principles reveal">
              {helps.map((h, i) => (
                <li key={h.t}>
                  <span className="label num">0{i + 1}</span>
                  <h3 className="h3">{h.t}</h3>
                  <p>{h.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <LibraryGate />

        <ContactCTA
          title={
            <>
              Let&rsquo;s Talk About Your <em>Agents</em>
            </>
          }
          body="Tell us about your brokerage, team or platform and where growth is stuck. I reply within one business day."
        />
      </main>
      <Footer />
    </>
  )
}
