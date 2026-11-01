import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import DirectLinks from '@/components/DirectLinks'
import { engagements, featuredInsights, site } from '@/lib/site'

const who = [
  { t: 'Hospitality & Travel', d: 'Hotels, luxury rentals, travel distribution and experiences, especially growth-stage and PE-backed.' },
  { t: 'Luxury, Lifestyle & Spirits', d: 'Positioning, distribution, retail and partnership growth.' },
  { t: 'Travel-Tech & Proptech', d: 'Scaling go-to-market, pricing and partnerships with hospitality and real estate buyers.' },
]

const services = [
  { t: 'Commercial Strategy & GTM', d: 'Positioning, segmentation, channel and distribution strategy, pricing architecture, launch plans.' },
  { t: 'Revenue & Performance Turnarounds', d: 'Commercial diagnostics, market share and RevPAR gaps, unit economics, P&L and operating cadences.' },
  { t: 'Partnerships & Distribution', d: 'Co-branded and brand-funded programs, retail and trade activation, strategic alliances.' },
  { t: 'Models & Investor Readiness', d: 'Business cases, valuations, scenario models, fundraising and board materials, AI-enabled analytics.' },
]

const stats = [
  { v: '$268M', l: 'Gross revenue at Bonotel Exclusive Travel, up from $229M' },
  { v: '546', l: 'Hotels enrolled in a brand-funded partner program' },
  { v: '700+', l: 'Rooms opened building Sonder California from one person' },
  { v: '+13.2%', l: 'Gross booking value growth as CCO of Lacure Villas' },
]

const record = [
  { co: 'Bonotel Exclusive Travel', note: 'Carlyle-backed', role: 'Chief Operating Officer', line: 'Helped grow gross revenue from $229M to $268M; enrolled 546 hotels in a brand-funded partner program; led the acquisition that created BEYOND by Bonotel.' },
  { co: 'Lacure Villas', role: 'Chief Commercial Officer', line: 'Led a 65-person organization; grew GBV 13.2%; launched programs with American Express Platinum, Visa and NetJets.' },
  { co: 'Sonder', role: 'Area General Manager, California', line: 'Built the region from one person to seven properties (700+ rooms); led the portfolio through COVID-19 at a 240 RevPAR Index.' },
  { co: 'Stillhouse Spirits', note: 'Bacardi-backed', role: 'General Manager & Head of Marketing', line: 'Reset the 2019 brand plan; depletions up 7.5% in Q1 2019; launched Stillhouse Classic Vodka.' },
  // TODO(Brandon): one-pager says ~$35M a year in Captain Morgan media; other materials say ~$30M. Add the confirmed figure here.
  { co: 'Diageo', role: 'Regional Marketing Manager', line: 'Oversaw Captain Morgan national media and Johnnie Walker’s integrated campaigns in South Africa.' },
  { co: 'BLKBOX', role: 'Managing Director', line: 'Won a Mondelēz Brand Accelerator engagement; raised a $1.5M growth round.' },
  { co: 'Navigate', role: 'Founder', line: 'Built an AI-native data platform; reached 60% trial-to-paid conversion.' },
]

// Monochrome logos in public/logos/clients, sized by eye for optical balance.
const clients = [
  { n: 'Swarm', f: 'swarm', h: 56 },
  { n: 'Voyage Real Estate', f: 'voyage', h: 22 },
  { n: 'Beverly Spirits', f: 'beverly-spirits', h: 50 },
  { n: 'Perro Verde', f: 'perro-verde', h: 56 },
  { n: 'WES Brands', f: 'wes-brands', h: 48 },
  { n: 'All World Communications Group', f: 'all-world', h: 50 },
  { n: 'Wilbur Labs', f: 'wilbur-labs', h: 24 },
  { n: 'Boatsetter', f: 'boatsetter', h: 30 },
]

// Brandon's stated principles, shared with brandonmweaver.com ("How I Operate").
const principles = [
  { t: 'Connectivity Is the Advantage', d: 'Most operators see their function in isolation. I connect revenue, operations and strategy. The edge is never in one thing. It is in how the pieces fit.' },
  { t: 'Alignment Creates Scale', d: 'You can’t scale misalignment. Unit economics, go-to-market and operations only compound when they pull in the same direction.' },
  { t: 'Results Over Storytelling', d: 'I optimize for what works, not what looks good in a deck. Data over narrative. Efficiency over elegance.' },
]

// Featured engagements. Copy describes role and scope only: no fees, targets,
// distributor, account names or fundraising detail (client-confidential).
// TODO(Brandon): confirm both descriptions and image permissions before production.
const features = [
  {
    name: 'Perro Verde Mezcal',
    label: 'Current engagement',
    role: 'Marketing & Commercial Strategy, California',
    body: 'Building California for an artisanal Oaxacan mezcal, account by account. My remit covers marketing, commercial strategy and key accounts: the playbook and sales tools the reps sell with, the brand story told for distributors, buyers and bartenders, store execution, events built to convert into accounts, and introductions into luxury hotels and fine dining across Southern California.',
    img: '/logos/clients/perro-verde-espadin.webp',
    alt: 'Perro Verde Espadín mezcal bottle',
    w: 331,
    h: 944,
    bottles: [
      { src: '/logos/clients/perro-verde-espadin.webp', alt: 'Perro Verde Espadín mezcal', w: 331, h: 944 },
      { src: '/logos/clients/perro-verde-ensamble.webp', alt: 'Perro Verde Ensamble mezcal', w: 578, h: 1623 },
      { src: '/logos/clients/perro-verde-tobasiche.webp', alt: 'Perro Verde Tobasiche mezcal', w: 494, h: 1390 },
    ],
    tall: true,
    flip: true,
    more: { href: '/spirits', label: 'Learn More About How Aperture Helps Early\u2011Stage Spirits Brands' },
  },
  {
    name: 'WES Brands',
    label: 'Featured engagement',
    role: 'Strategic Advisor, 2021 to 2023',
    body: 'Advised a multi-brand spirits portfolio spanning tequila, whiskey and vodka on route to market and retail growth across grocery, independent and large-format accounts.',
    img: '/logos/clients/wes-portfolio.webp',
    alt: 'Bottles from the WES Brands spirits portfolio: tequila, whiskey, vodka and a flavored whiskey',
    w: 1468,
    h: 1272,
    tall: false,
  },
  {
    name: 'Voyage Real Estate',
    label: 'Featured engagement',
    role: 'Strategic Advisor to Executive Leadership',
    body: 'Advised executive leadership on enterprise growth, strategic partnerships, organizational design and multi-market expansion for a luxury real estate platform operating within the Compass ecosystem.',
    points: [
      ['Market expansion & business development', 'Evaluated growth opportunities, partnership structures and market-entry priorities, aligning commercial initiatives with organizational capabilities.'],
      ['Strategic advisory & commercial innovation', 'Developed adjacent service and partnership strategies to expand the company’s commercial ecosystem and strengthen its value proposition for clients and agents.'],
    ],
    img: '/logos/clients/voyage.png',
    alt: 'Voyage Real Estate',
    w: 386,
    h: 86,
    tall: false,
    flip: true,
    panel: true,
  },
]

const quotes = [
  { q: 'Brandon has a unique ability to connect strategy with execution. He consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion.', n: 'Ari Afshar', t: 'Founder & CEO, Voyage Real Estate' },
  { q: 'Working with Brandon felt like having a true strategic partner rather than an outside advisor. He challenged our assumptions in the right ways and translated complex growth objectives into practical, measurable actions.', n: 'Michael Silver', t: 'President, Foto Comercio' },
  { q: 'Brandon brings a rare blend of luxury brand expertise, commercial leadership, and authentic relationship-building. He never loses sight of revenue and operational performance.', n: 'Andy Borenzweig', t: 'Founder & CEO, Beverly Spirits' },
]

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <p className="label label--accent">Fractional Commercial Leadership · Hospitality, Travel &amp; Consumer Brands</p>
              <h1 className="display">
                Senior Commercial Leadership, <em>Without</em> the Full&#8209;Time Hire.
              </h1>
              <p className="hero__sub">
                Aperture works with CEOs, founders and boards as a fractional Chief Commercial or Marketing Officer,
                bringing the operating experience of a former COO, CCO and GM to growth, go-to-market and turnaround
                challenges. We don’t hand over a deck and leave. I build the plan, lead the team through it and measure
                the result.
              </p>
              <div className="hero__cta">
                <Link className="btn" href="/contact">Start a conversation</Link>
                <a className="link" href="#results">See the results</a>
              </div>
            </div>
            <figure className="hero__photo">
              <img src="/brandon-hero.webp" alt="Brandon M. Weaver, Founder & Principal of Aperture Hospitality" width={1717} height={2576} fetchPriority="high" />
            </figure>
          </div>
        </section>

        {/* Who we work with */}
        <section className="section" id="who" aria-labelledby="who-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Who We Work With</span>
              <h2 id="who-h" className="h2">Built for Operators and the Brands They Run</h2>
            </div>
            <ul className="principles reveal">
              {who.map((w, i) => (
                <li key={w.t}>
                  <span className="label num">0{i + 1}</span>
                  <h3 className="h3">{w.t}</h3>
                  <p>{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services" aria-labelledby="services-h">
          <div className="container rail">
            <div className="rail__head reveal">
              <span className="eyebrow">Services</span>
              <h2 id="services-h" className="h2">What We Do</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>Hands on the plan, the team and the number.</p>
            </div>
            <ul className="caps reveal">
              {services.map((s) => (
                <li key={s.t}>
                  <h3 className="caps__t">{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="section" id="results" aria-labelledby="results-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">By the Numbers</span>
              <h2 id="results-h" className="h2">Proven Results, Not Just a Pretty Deck</h2>
            </div>
            <dl className="stats reveal">
              {stats.map((s) => (
                <div className="stat" key={s.v}>
                  <dt className="stat__v num">{s.v}</dt>
                  <dd className="stat__l">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="container rail" style={{ marginTop: 'clamp(4rem, 8vw, 6rem)' }}>
            <div className="rail__head reveal">
              <span className="eyebrow">Selected Results</span>
              <h2 className="h2">Operating Roles, Measurable Outcomes</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>I’ve run the P&amp;L, not just advised on it.</p>
            </div>
            <div className="reveal">
              <span className="eyebrow">Professional Experience</span>
              <ul className="tl">
                {record.map((r) => (
                  <li className="tl__row" key={r.co}>
                    <div>
                      <h3 className="tl__co">
                        {r.co}
                        {r.note && <span className="tl__note"> · {r.note}</span>}
                      </h3>
                      <p className="tl__role">{r.role}</p>
                      <p className="tl__line">{r.line}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a className="link" href={site.personal} target="_blank" rel="noopener">Full background at brandonmweaver.com</a>
            </div>
          </div>
        </section>

        {/* Advisory clients + testimonials */}
        <section className="section" id="clients" aria-labelledby="clients-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Selected Engagements</span>
              <h2 id="clients-h" className="h2">Who I’ve Worked With</h2>
            </div>
            <ul className="creds__logos reveal">
              {clients.map((c) => (
                <li key={c.f}>
                  <img src={`/logos/clients/${c.f}.png`} alt={c.n} style={{ height: c.h }} loading="lazy" />
                </li>
              ))}
            </ul>
            {features.map((f) => (
              <figure className={`feature reveal${f.tall ? ' feature--tall' : ''}${'flip' in f && f.flip ? ' feature--flip' : ''}${'panel' in f && f.panel ? ' feature--panel' : ''}`} key={f.name}>
                <div className="feature__img">
                  {'bottles' in f && f.bottles ? (
                    <div className="bottles">
                      {f.bottles.map((bt) => (
                        <img key={bt.src} src={bt.src} alt={bt.alt} width={bt.w} height={bt.h} loading="lazy" />
                      ))}
                    </div>
                  ) : (
                    <img src={f.img} alt={f.alt} width={f.w} height={f.h} loading="lazy" />
                  )}
                </div>
                <figcaption className="feature__copy">
                  <span className="label label--accent">{f.label}</span>
                  <p className="card__title">{f.name}</p>
                  <p className="tl__role">{f.role}</p>
                  <p>{f.body}</p>
                  {'more' in f && f.more && (
                    <Link className="link" href={f.more.href} style={{ alignSelf: 'start', marginTop: '.5rem' }}>
                      {f.more.label}
                    </Link>
                  )}
                  {'points' in f && f.points && (
                    <ul className="feature__points">
                      {f.points.map(([t, d]) => (
                        <li key={t}>
                          <strong>{t}.</strong> {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </figcaption>
              </figure>
            ))}
            <div className="reveal sec-head sec-head--quotes">
              <span className="eyebrow">Client Testimonials</span>
              <h2 className="h2">What Clients Say</h2>
            </div>
            <div className="quotes reveal">
              {quotes.map((q) => (
                <figure className="quote" key={q.n}>
                  <blockquote>“{q.q}”</blockquote>
                  <figcaption>
                    <strong>{q.n}</strong>
                    <span>{q.t}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="section" id="engagements" aria-labelledby="eng-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Engagements</span>
              <h2 id="eng-h" className="h2">How We Work Together</h2>
            </div>
            <div className="now now--3 reveal">
              {engagements.map((e) => (
                <article className="card" key={e.id}>
                  <p className="card__title">{e.title}</p>
                  <p className="label">{e.format}</p>
                  <p>{e.body}</p>
                  <Link className="link" href={`/contact?engagement=${e.id}`}>Let’s Talk</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="section" id="background" aria-labelledby="bg-h">
          <div className="container">
            <div className="reveal sec-head">
              <span className="eyebrow">Background</span>
              <h2 id="bg-h" className="h2">Seasoned Operator Who Understands the Public &amp; Private Sectors</h2>
              <p className="lede sec-sub">
                Growth decisions don’t stop at the P&amp;L. They land on guests, employees, partners, regulators and the
                community around the business. I lead with all of those constituents in view.
              </p>
            </div>
            <div className="reveal">
              <ul className="creds__schools">
                <li>
                  <img src="/logos/kellogg.png" alt="Kellogg School of Management" className="creds__school" style={{ height: 60 }} loading="lazy" />
                  <span className="creds__sub">MBA, Corporate Finance</span>
                </li>
                <li>
                  <img src="/logos/hks.png" alt="Harvard Kennedy School" className="creds__school" style={{ height: 54 }} loading="lazy" />
                  <span className="creds__sub">MPA, Economics</span>
                </li>
                <li>
                  <img src="/logos/usc-annenberg.png" alt="USC Annenberg" className="creds__school" style={{ height: 62 }} loading="lazy" />
                  <span className="creds__sub">BA, Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Point of view */}
        <section className="section" id="insights" aria-labelledby="pov-h">
          <div className="container">
            <div className="rail">
              <div className="rail__head reveal">
                <span className="eyebrow">Point of View</span>
                <h2 id="pov-h" className="h2">The <em>Aperture</em> Papers</h2>
                <p className="lede" style={{ marginTop: '1rem' }}>Published on <em>Expand Your Aperture</em>, my Substack.</p>
                <div className="pov__cta">
                  <a className="btn" href={site.substack} target="_blank" rel="noopener">Subscribe</a>
                  <a className="link" href={`${site.substack}archive`} target="_blank" rel="noopener">Read the Papers</a>
                </div>
              </div>
              <div className="pov reveal">
                <p className="lede">
                  I created The Aperture Papers to explore the forces reshaping how businesses compete, operate and grow.
                </p>
                <p>
                  Drawing on my experience as an operator, entrepreneur and strategic advisor, I examine the intersection
                  of artificial intelligence, human capital, emerging technologies and business strategy, connecting
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
            <span className="eyebrow reveal" style={{ marginTop: 'clamp(3.5rem, 7vw, 5rem)' }}>How I Operate</span>
            <ul className="principles reveal">
              {principles.map((pr, i) => (
                <li key={pr.t}>
                  <span className="label num">0{i + 1}</span>
                  <h3 className="h3">{pr.t}</h3>
                  <p>{pr.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="container rail" style={{ marginTop: 'clamp(4rem, 8vw, 6rem)' }}>
            <div className="rail__head reveal">
              <span className="eyebrow">Thought Leadership</span>
              <h2 className="h2">On the Record</h2>
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
              <Link className="link" href="/insights">All insights</Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact" aria-labelledby="contact-h">
          <div className="container rail">
            <div className="rail__head reveal">
              <span className="eyebrow">Contact</span>
              <h2 id="contact-h" className="h2">Let’s Talk About Your Growth Plan</h2>
              <p className="lede" style={{ marginTop: '1.25rem' }}>
                Tell us where growth is stuck. I read every message personally and reply within one business day.
              </p>
              <DirectLinks />
            </div>
            <div className="reveal">
              <IntakeForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
