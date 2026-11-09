/* eslint-disable @next/next/no-img-element */
import type { Paper } from '@/lib/substack'

// Latest Aperture Papers, pulled from Substack. Renders nothing if the feed is unavailable.
export default function LatestPapers({ papers, archive }: { papers: Paper[]; archive: string }) {
  if (!papers.length) return null
  const [lead, ...rest] = papers
  return (
    <section className="section" id="latest" aria-labelledby="latest-h">
      <div className="container">
        <div className="sec-head papers-head">
          <div>
            <span className="eyebrow">Latest Papers</span>
            <h2 id="latest-h" className="h2">
              Fresh From <em>Expand Your Aperture</em>
            </h2>
          </div>
          <a className="link" href={archive} target="_blank" rel="noopener">
            Full Archive
          </a>
        </div>

        <a className="paper-lead" href={lead.url} target="_blank" rel="noopener">
          {lead.image && (
            <div className="paper-lead__img">
              <img src={lead.image} alt="" loading="lazy" />
            </div>
          )}
          <div className="paper-lead__txt">
            <p className="paper-meta">
              {lead.no && <span className="paper-no">No. {lead.no}</span>}
              <span className="label">{lead.date}</span>
            </p>
            <h3 className="paper-lead__t">{lead.title}</h3>
            {lead.dek && <p className="paper-lead__d">{lead.dek}</p>}
            <span className="link">Read the Paper</span>
          </div>
        </a>

        {rest.length > 0 && (
          <ul className="paper-list">
            {rest.map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" rel="noopener">
                  <span className="paper-no">{p.no ? `No. ${p.no}` : ''}</span>
                  <span className="paper-list__t">{p.title}</span>
                  <span className="label paper-list__d">{p.date}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
