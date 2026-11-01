import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { featuredInsights, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'The Aperture Papers',
  description:
    'The Aperture Papers, published on Expand Your Aperture: Brandon M. Weaver on AI, human capital, emerging technology and business strategy.',
  alternates: { canonical: '/papers' },
}

export default function Papers() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container rail">
            <div className="rail__head">
              <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>Point of View</p>
              <h1 className="display" style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)' }}>
                The <em>Aperture</em> Papers
              </h1>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Published on <em>Expand Your Aperture</em>, my Substack.
              </p>
              <div className="pov__cta">
                <a className="btn" href={site.substack} target="_blank" rel="noopener">Subscribe</a>
                <a className="link" href={`${site.substack}archive`} target="_blank" rel="noopener">Read the Papers</a>
              </div>
            </div>
            <div className="pov">
              <p className="lede">
                I created The Aperture Papers to explore the forces reshaping how businesses compete, operate and grow.
              </p>
              <p>
                Drawing on my experience as an operator, entrepreneur and strategic advisor, I examine the intersection of
                artificial intelligence, human capital, emerging technologies and business strategy, connecting
                technological innovation to its real-world commercial implications.
              </p>
              <blockquote className="pov__quote">
                Technology alone doesn’t create competitive advantage. It’s how organizations combine intelligence,
                institutional knowledge and human judgment to unlock economic value.
              </blockquote>
              <p>
                At a time when innovation is accelerating faster than many businesses can adapt, The Aperture Papers
                offers a practical, forward-looking perspective on the opportunities, challenges and strategic decisions
                defining the next era of business.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="more-h">
          <div className="container rail">
            <div className="rail__head reveal">
              <span className="eyebrow">Thought Leadership</span>
              <h2 id="more-h" className="h2">More From the Record</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                White papers, playbooks and essays on commercial strategy, luxury and operations.
              </p>
            </div>
            <div className="reveal">
              <ul className="pieces">
                {featuredInsights.map((p) => (
                  <li key={p.title}>
                    <a href={p.link} target="_blank" rel="noopener">
                      <span className="label">{p.type} · {p.topic}</span>
                      <span className="pieces__t">{p.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="links">
                <Link className="link" href="/insights">All insights</Link>
                <a className="link" href={site.substack} target="_blank" rel="noopener">Subscribe on Substack</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
