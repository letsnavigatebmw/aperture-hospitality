import Link from 'next/link'
import { site } from '@/lib/site'

/** Contact call to action placed directly above the footer on landing pages. */
export default function ContactCTA({
  title = (
    <>
      Let’s Talk About Your <em>Growth Plan</em>
    </>
  ),
  body = 'Tell us where growth is stuck. I read every message personally and reply within one business day.',
}: {
  title?: React.ReactNode
  body?: string
}) {
  return (
    <section className="section cta" aria-labelledby="cta-h">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2 id="cta-h" className="h2">{title}</h2>
          <p className="lede sec-sub">{body}</p>
          <div className="hero__cta" style={{ marginTop: '2rem' }}>
            <Link className="btn" href="/contact">Let’s Talk</Link>
            <a className="link" href={site.bookingUrl} target="_blank" rel="noopener">Book a time</a>
          </div>
        </div>
      </div>
    </section>
  )
}
