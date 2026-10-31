import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell me where growth is stuck. I read every message personally and reply within one business day.',
  alternates: { canonical: '/contact' },
}

export default function Contact() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="section section--flush">
          <div className="container rail">
            <div className="rail__head">
              <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>Contact</p>
              <h1 className="h2">Let’s Talk About Your <em>Growth Plan</em></h1>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Tell me where growth is stuck. I read every message personally and reply within one business day.
              </p>
              <ul className="direct">
                <li>
                  <span className="label">Book a time</span>
                  <a className="link link--plain" href={site.bookingUrl} target="_blank" rel="noopener">Pick a slot on my calendar</a>
                </li>
                <li>
                  <span className="label">Email</span>
                  <a className="link link--plain" href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <span className="label">Based in</span>
                  <span style={{ color: 'var(--ink)' }}>Los Angeles</span>
                </li>
              </ul>
            </div>
            <Suspense>
              <IntakeForm />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
