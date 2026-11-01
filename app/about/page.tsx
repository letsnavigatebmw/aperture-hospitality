import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Brandon M. Weaver, Founder & CEO of Aperture Hospitality. Two decades across spirits, luxury hospitality, travel and real estate technology.',
  alternates: { canonical: '/about' },
}

const BIO = 'https://drive.google.com/file/d/1C4ksHla5bttjS9S_on_dwylaBkkfqSLp/view?usp=drive_link'

const education = [
  { school: 'Kellogg School of Management', degree: 'MBA, Northwestern University' },
  { school: 'Kennedy School of Government', degree: 'MPA, Harvard University' },
  { school: 'University of Southern California', degree: 'B.A., Communication' },
]

export default function About() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="container about-hero">
            <figure className="about-hero__photo">
              <img src="/brandon-about.webp" alt="Brandon M. Weaver" width={804} height={936} fetchPriority="high" />
            </figure>
            <div>
              <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 1.5rem' }}>Founder &amp; CEO</p>
              <h1 className="display" style={{ fontSize: 'clamp(2.5rem,5vw,4.25rem)' }}>Brandon M. Weaver</h1>
              <p className="lede" style={{ margin: '1.25rem 0 2rem' }}>Many Rooms, One Frequency</p>
              <div className="about-copy">
                <p>
                  I’ve spent much of my life trying to answer a simple question:{' '}
                  <strong>How do you build something that truly matters?</strong>
                </p>
                <p>
                  That journey has taken me from <strong>USC’s Annenberg School of Communication</strong> to{' '}
                  <strong>Harvard’s Kennedy School of Government</strong> and{' '}
                  <strong>Northwestern’s Kellogg School of Management</strong>, each challenging me to think differently
                  about how people, ideas and opportunity intersect.
                </p>
              </div>
              <div className="about-edu">
                <span className="eyebrow">Education</span>
                <ul>
                  {education.map((e) => (
                    <li key={e.school}>
                      <strong>{e.school}</strong>
                      <span>{e.degree}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="links" style={{ marginTop: '2rem' }}>
                <a className="link" href={BIO} target="_blank" rel="noopener">Executive Bio</a>
                <a className="link" href={site.personal} target="_blank" rel="noopener">Learn More About Brandon</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="arc-h">
          <div className="container rail">
            <div className="rail__head reveal">
              <span className="eyebrow">The Arc</span>
              <h2 id="arc-h" className="h2">Two Decades. One <em>Question</em>.</h2>
            </div>
            <div className="about-copy about-copy--long reveal">
              <p>
                Growing up in Los Angeles surrounded by successful people, I learned early that success doesn’t come from
                following a predetermined path. I chose differently, and that choice shaped everything that followed.
              </p>
              <p>
                My career has taken me across industries, continents and cultures: from{' '}
                <strong>Diageo’s luxury portfolio in Africa</strong> to scaling and eventually selling a PE-backed
                hospitality platform. I’ve managed <strong>$750M+ in P&amp;L responsibility</strong>, launched{' '}
                <strong>8+ B2C and B2B brands</strong>, and raised <strong>$10M+ across ventures</strong>.
              </p>
              <p>
                But the thread running through all of it isn’t the résumé. It’s the relationships. I move through rooms
                differently: not as the loudest voice, but as the most connected one.{' '}
                <strong>
                  I build relationship capital the way others build financial capital: deliberately, generously and with
                  a long time horizon.
                </strong>
              </p>
              <p>
                That instinct brought me to real estate technology. Navigate wasn’t a pivot. It was the logical conclusion
                of watching an industry resist modernization until someone forces the issue. Same pattern. Different
                stage.
              </p>
              <blockquote className="pov__quote">
                Success moves at the speed of connectivity. In a world increasingly mediated by algorithms, that
                conviction has never felt more true.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
