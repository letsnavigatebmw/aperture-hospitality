/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'The Travel Distribution Ecosystem',
  description:
    'Who owns the product, who buys and resells it, the pipes that connect them, and where each player makes its money. A one-page map of hotel and travel distribution from Aperture Hospitality.',
  alternates: { canonical: '/guides/travel-distribution' },
  openGraph: { images: ['/guides/travel-distribution-ecosystem-og.jpg'] },
}

const PDF = '/guides/travel-distribution-ecosystem.pdf'

const read = [
  {
    t: 'Five layers, left to right',
    d: 'Suppliers own the product and set the price. Rate plans decide what gets pushed to the channel. Intermediaries buy at net and resell. Distributors sell to the traveler, who pays for every margin upstream.',
  },
  {
    t: 'The rails underneath',
    d: 'PMS, CRS, channel managers, switches, GDS and payments move rates, availability and inventory to every buyer and settle the money. Each one takes a toll.',
  },
  {
    t: 'Follow the money',
    d: 'One $400 room night, three ways: direct, commissionable and net rate. The same guest, the same price, and a $100 swing in what the hotel keeps.',
  },
]

export default function TravelDistribution() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container">
            <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>
              Hospitality &amp; Travel · Resource
            </p>
            <h1 className="display" style={{ maxWidth: '18ch' }}>
              The Travel Distribution <em>Ecosystem</em>
            </h1>
            <p className="hero__sub" style={{ maxWidth: '42rem' }}>
              Who owns the product, who buys and resells it, the pipes that connect them, and where each player makes its
              money. One page, for owners, operators and investors who want to see the whole chain at once.
            </p>
            <div className="hero__cta">
              <a className="btn" href={PDF} target="_blank" rel="noopener">
                Download the PDF
              </a>
              <a className="link link--down" href="#map">
                View the Map
              </a>
            </div>
          </div>
        </section>

        <section className="section tde" id="map" aria-label="The travel distribution ecosystem map">
          <div className="container">
            <a className="tde__frame" href={PDF} target="_blank" rel="noopener" aria-label="Open the full-size PDF">
              <img
                src="/guides/travel-distribution-ecosystem.webp"
                width={3264}
                height={2112}
                alt="Map of travel distribution: suppliers, rate plans, intermediaries, distributors and travelers, with the connectivity and payment rails underneath and a worked example of a $400 room night sold direct, commissionable and at net."
              />
            </a>
            <p className="tde__hint">Scroll sideways to explore, or open the PDF for full detail.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="read-h">
          <div className="container">
            <div className="sec-head">
              <span className="eyebrow">How to Read It</span>
              <h2 id="read-h" className="h2">
                Every Margin Comes Out of the <em>Same</em> Price
              </h2>
            </div>
            <ul className="principles">
              {read.map((r, i) => (
                <li key={r.t}>
                  <span className="label num">0{i + 1}</span>
                  <h3 className="h3">{r.t}</h3>
                  <p>{r.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactCTA
          title={
            <>
              Is Your Channel Mix <em>Costing</em> You?
            </>
          }
          body="If you can't say what each channel nets you after commissions, markups and fees, that's where a Commercial Diagnostic starts. I reply within one business day."
        />
      </main>
      <Footer />
    </>
  )
}
