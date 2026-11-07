import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactCTA from '@/components/ContactCTA'
import { method, methodFit } from '@/lib/method'

export const metadata: Metadata = {
  title: 'Our Method',
  description:
    'The Aperture Method: diagnose, brand foundation, marketing plan, commercial plan and operating rhythm. Diagnosis before deliverable.',
  alternates: { canonical: '/method' },
}

export default function Method() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container">
            <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>The Aperture Method</p>
            <h1 className="display" style={{ maxWidth: '18ch' }}>
              Diagnosis Before <em>Deliverable.</em>
            </h1>
            <p className="hero__sub" style={{ maxWidth: '40rem' }}>
              Five steps, in order. We find the real problem first, build the brand before the marketing plan and the
              marketing plan before the sales targets, then put a rhythm in place that keeps the business on the number.
            </p>
            <ol className="steps steps--index">
              {method.map((m) => (
                <li key={m.n}>
                  <a href={`#step-${m.n}`}>
                    <span className="label num">{m.n}</span>
                    <span className="steps__t">{m.t}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {method.map((m) => (
          <section className="section" id={`step-${m.n}`} key={m.n} aria-labelledby={`h-${m.n}`}>
            <div className="container rail">
              <div className="rail__head reveal">
                <span className="eyebrow">Step {m.n}</span>
                <h2 id={`h-${m.n}`} className="h2">{m.t}</h2>
                <p className="lede" style={{ marginTop: '1.25rem' }}>{m.short}</p>
              </div>
              <div className="reveal mstep">
                <p className="mstep__why">{m.why}</p>
                <div className="mstep__grid">
                  <div>
                    <span className="label">What we do</span>
                    <ul>
                      {m.do.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mstep__get">
                    <span className="label label--accent">What you get</span>
                    <p>{m.get}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section" aria-labelledby="fit-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Engagements</span>
              <h2 id="fit-h" className="h2">Where Each Engagement Fits</h2>
            </div>
            <ul className="principles reveal">
              {methodFit.map((f) => (
                <li key={f.e}>
                  <span className="label label--accent">{f.s}</span>
                  <h3 className="h3">{f.e}</h3>
                  <p>{f.d}</p>
                </li>
              ))}
            </ul>
            <div className="reveal" style={{ marginTop: '2.5rem' }}>
              <Link className="link" href="/#start">Choose where to start</Link>
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
