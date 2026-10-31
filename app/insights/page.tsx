import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { insightGroups, site } from '@/lib/site'

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
            <h1 className="display" style={{ maxWidth: '16ch' }}>On the <em>Record</em></h1>
            <p className="hero__sub">
              I write on building businesses at scale, commercial strategy and leadership, for operators who have to
              make it work on Monday morning.
            </p>
            <div className="hero__cta">
              <a className="btn" href={site.substack} target="_blank" rel="noopener">Subscribe on Substack</a>
            </div>
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
