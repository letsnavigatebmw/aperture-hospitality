import BrandMark from './BrandMark'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__inner">
        <div>
          <BrandMark />
          <p className="foot__tagline">Let’s expand your aperture.</p>
          <p className="foot__sub">Los Angeles · Fractional commercial leadership for hospitality, travel and consumer brands</p>
        </div>
        <ul className="foot__links">
          <li><a href={`mailto:${site.email}`}>Email</a></li>
          <li><a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href={site.substack} target="_blank" rel="noopener">Substack</a></li>
          <li><a href={site.personal} target="_blank" rel="noopener">brandonmweaver.com</a></li>
        </ul>
      </div>
      <div className="container">
        <p className="foot__legal">© {new Date().getFullYear()} Aperture Hospitality</p>
      </div>
    </footer>
  )
}
