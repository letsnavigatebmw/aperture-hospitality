import { site } from '@/lib/site'

/** Contact links under the Contact heading (homepage and /contact). */
export default function DirectLinks({ showLocation = false }: { showLocation?: boolean }) {
  return (
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
        <span className="label">LinkedIn</span>
        <a className="link link--plain" href={site.linkedin} target="_blank" rel="noopener">Aperture Hospitality</a>
      </li>
      <li>
        <span className="label">Substack</span>
        <a className="link link--plain" href={site.substack} target="_blank" rel="noopener">Expand Your Aperture</a>
      </li>
      <li>
        <span className="label">About</span>
        <a className="link link--plain" href={site.personal} target="_blank" rel="noopener">Learn More About Brandon</a>
      </li>
      {showLocation && (
        <li>
          <span className="label">Based in</span>
          <span style={{ color: 'var(--ink)' }}>Los Angeles</span>
        </li>
      )}
    </ul>
  )
}
