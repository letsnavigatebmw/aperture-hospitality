// The Aperture Papers, section 04: "The Rise of the AI Implementation Architect".
// Text is Brandon's essay, verbatim; the layout breaks it into its arguments.

const eras = [
  { tech: 'Enterprise computing', role: 'Systems integrators' },
  { tech: 'Cloud computing', role: 'Cloud architects, implementation consultants and managed service providers' },
  { tech: 'Digital transformation', role: 'Data engineers, product managers and operational strategists' },
]

const needs = [
  { who: 'A multinational corporation', what: 'may need teams capable of coordinating AI across complex enterprise systems.' },
  {
    who: 'A regional hospitality group',
    what: 'may need someone who understands how to integrate AI into revenue management, guest communications, distribution, and operational planning.',
  },
  {
    who: 'A real estate brokerage',
    what: 'may need customized intelligence that connects property data, ownership information, customer relationships, and prospecting activities.',
  },
  {
    who: 'A growing consumer brand',
    what: 'may need systems that coordinate customer acquisition, inventory planning, marketing execution, and commercial reporting.',
  },
]

const builders = [
  'From experienced operators who understand their industries.',
  'From consultants who can connect strategy to execution.',
  'From entrepreneurs who recognize recurring operational problems and build scalable solutions around them.',
  'And from organizations willing to rethink how human and artificial intelligence work together.',
]

const audiences = [
  { who: 'For established businesses', what: 'this represents an opportunity to leverage years of institutional knowledge rather than abandon it.' },
  { who: 'For emerging companies', what: 'it creates the possibility of delivering sophisticated capabilities without replicating the cost structures of traditional enterprises.' },
  { who: 'For professionals', what: 'it suggests that industry expertise, commercial judgment, and operational experience may become more valuable when combined with AI fluency.' },
]

const disciplines = ['Strategy', 'Technology', 'Operations', 'Organizational design']

const duties = [
  'Identifying high-value workflows',
  'Connecting fragmented information',
  'Configuring intelligent systems',
  'Defining human oversight',
  'Measuring business outcomes',
]

export default function ImplementationArchitect({ substack }: { substack: string }) {
  return (
    <section className="section essay" id="implementation-architect" aria-labelledby="ia-h">
      <div className="container rail">
        <div className="rail__head">
          <span className="eyebrow">From the Papers · Section</span>
          <p className="essay__num" aria-hidden="true">04</p>
          <h2 id="ia-h" className="h2">
            The Rise of the <em>AI Implementation</em> Architect
          </h2>
          <a className="link" href={`${substack}archive`} target="_blank" rel="noopener" style={{ marginTop: '1.5rem' }}>
            Read the Full Paper
          </a>
        </div>

        <div className="essay__body">
          <p className="essay__lede">
            Every major technology transition creates new categories of professional expertise.
          </p>

          <ol className="eras" aria-label="Technology transitions and the expertise they created">
            {eras.map((e) => (
              <li key={e.tech}>
                <span className="label">{e.tech}</span>
                <span className="eras__role">{e.role}</span>
              </li>
            ))}
            <li className="eras__now">
              <span className="label">Artificial intelligence</span>
              <span className="eras__role">Its own professional infrastructure</span>
            </li>
          </ol>

          <p>
            Artificial intelligence will create its own professional infrastructure. But this time, the opportunity may be
            considerably more <em>decentralized</em>.
          </p>

          <ul className="needs">
            {needs.map((n) => (
              <li key={n.who}>
                <strong>{n.who}</strong> {n.what}
              </li>
            ))}
          </ul>

          <p>
            Each business requires a different implementation strategy. And each operates with its own combination of
            proprietary information, institutional knowledge, operational constraints, and commercial priorities.
          </p>
          <p>This creates demand for what I would describe as the AI Implementation Architect.</p>

          <p className="essay__not">
            <span>Not simply a developer.</span> <span>Not merely a consultant.</span>{' '}
            <span>
              And certainly not someone whose entire value proposition is knowing how to construct a prompt.
            </span>
          </p>

          <blockquote className="pov__quote">
            Rather, a professional capable of understanding a business at the operating-model level and translating that
            understanding into an integrated system of human and artificial intelligence.
          </blockquote>

          <div className="essay__role">
            <div>
              <p className="label">The role sits at the intersection of</p>
              <ul className="essay__tags">
                {disciplines.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Its responsibilities include</p>
              <ol className="essay__duties">
                {duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ol>
            </div>
          </div>

          <p>
            The opportunity is not limited to individual professionals. Entire consulting firms, specialized
            implementation businesses, and AI-native service organizations could emerge around this capability.
          </p>

          <blockquote className="pov__quote">
            In many respects, the Implementation Economy may become the connective tissue between rapidly advancing AI
            technology and the businesses expected to adopt it.
          </blockquote>

          <p className="essay__lede essay__q">
            If technology can increasingly be customized to the needs of individual businesses, who will build,
            implement, manage, and continuously improve those systems?
          </p>
          <p>The answer will not come exclusively from Silicon Valley.</p>
          <ul className="builders">
            {builders.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="avail">
            <div>
              <p className="label">Making AI available</p>
              <p>Primarily a technology challenge.</p>
            </div>
            <div className="avail__v">
              <p className="label">Making AI valuable</p>
              <p>A commercial and organizational challenge.</p>
            </div>
          </div>
          <p>
            There is an important distinction between making AI available and making AI valuable. And as the technology
            becomes more accessible, the second may become the more consequential source of competitive advantage.
          </p>

          <ul className="needs needs--3">
            {audiences.map((a) => (
              <li key={a.who}>
                <strong>{a.who}</strong> {a.what}
              </li>
            ))}
          </ul>

          <p>
            The next generation of opportunity will not necessarily belong to the people who can build the most
            sophisticated models. It may belong to those who can translate increasingly sophisticated models into outcomes
            that customers are willing to pay for.
          </p>
          <blockquote className="pov__quote">
            The technology is becoming more accessible. The ability to operationalize it remains scarce.
          </blockquote>
          <p>
            And scarcity, when connected to measurable value, creates opportunity. That is the foundation of the
            Implementation Economy.
          </p>

          <h3 className="essay__h3">
            The Closing <em>Aperture</em>
          </h3>
          <p>Every major technology revolution eventually moves beyond invention and into implementation.</p>
          <p>
            The internet created extraordinary value through its infrastructure, but it transformed the economy when
            businesses reimagined commerce, communications, and distribution around it.
          </p>
          <p>
            Cloud computing changed how technology was delivered, but its greatest commercial impact came as organizations
            rebuilt their operating models around scalable infrastructure.
          </p>
          <p>Artificial intelligence is approaching a similar inflection point.</p>
          <p className="essay__not">
            <span>The next question is not simply what AI can do.</span>
            <span>It is who can make it work, for whom, and to what commercial end.</span>
          </p>
          <blockquote className="pov__quote">
            The next great AI economy may not be built around selling intelligence. It may be built around making
            intelligence productive.
          </blockquote>
          <p className="essay__sign">That is where I believe the next chapter of business transformation begins.</p>
        </div>
      </div>
    </section>
  )
}
