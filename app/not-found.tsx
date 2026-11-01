import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="container notfound">
        <p className="label label--accent" style={{ letterSpacing: '.16em', margin: '0 0 2rem' }}>404</p>
        <h1 className="display">That page has <em>moved</em> on.</h1>
        <p className="hero__sub">The site has been simplified. Everything worth reading is on the homepage.</p>
        <div className="hero__cta">
          <Link className="btn" href="/">Back to home</Link>
          <Link className="link" href="/insights">Read the insights</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
