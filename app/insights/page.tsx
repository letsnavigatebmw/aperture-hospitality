import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { insightGroups } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'White papers, playbooks and essays on commercial strategy, luxury, marketing and operations from Brandon M. Weaver.',
  alternates: { canonical: '/insights' },
}

export default function Insights() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container">
            <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>Insights</p>
            <h1 className="display" style={{ maxWidth: '18ch' }}>Aperture <em>Thought Leadership</em></h1>
            <p className="lede" style={{ maxWidth: '44rem', marginTop: '2rem' }}>
              White papers, playbooks and essays on commercial strategy, luxury and operations, drawn from two decades
              of launching brands, opening properties and leading commercial teams across spirits, hospitality, travel
              and real estate. Each piece is written to be used: practical frameworks and hard-won lessons for operators,
              not theory.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {insightGroups.map((g) => (
              <div className="rail insights-group reveal" key={g.topic}>
                <div className="rail__head">
                  <span className="eyebrow">{g.topic}</span>
                </div>
                <ul className="pieces" style={{ margin: 0 }}>
                  {g.items.map((p) => (
                    <li key={p.title}>
                      <a href={p.link} target="_blank" rel="noopener">
                        <span className="label">{p.type}</span>
                        <span className="pieces__t">{p.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
