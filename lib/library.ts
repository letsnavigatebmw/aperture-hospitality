// Public metadata for the real estate prospecting library. No links here: deck and recording
// URLs live in lib/library-links.ts and are only returned by /api/library after the form.

export type Session = {
  id: string
  date: string
  speaker: string
  title: string
  preview: string
  points: string[]
  topic: TopicId
  deck: boolean
}

export type TopicId = 'foundations' | 'methods' | 'data' | 'offers' | 'conversion'

export const topics: { id: TopicId; title: string; blurb: string }[] = [
  { id: 'foundations', title: 'Foundations & Systems', blurb: 'Goals, markets and the operating system that makes prospecting predictable.' },
  { id: 'data', title: 'Property Data & Messaging', blurb: 'The series’ signature idea: read the property first, then say something worth hearing.' },
  { id: 'methods', title: 'Prospecting Methods', blurb: 'Channels and field tactics: calls, circles, open houses and your sphere.' },
  { id: 'offers', title: 'Offers & Campaigns', blurb: 'Value-first offers and the campaigns that carry them.' },
  { id: 'conversion', title: 'Conversion & Follow-Up', blurb: 'Turning attention and inquiries into conversations and clients.' },
]

const BW = 'Brandon Weaver'
const TD = 'Tony Dicks'

export const library: Session[] = [
  // Foundations & Systems
  {
    id: 'prospecting-reimagined', date: 'Jul 2025', speaker: BW, topic: 'foundations', deck: true,
    title: 'Prospecting Reimagined',
    preview: 'The shift from volume-based outreach to property-first prospecting, where equity, permit history, ownership duration and tax data signal opportunity before you call. Closes with a five-step framework for choosing a market, a property focus and weekly goals.',
    points: ['Why prospecting properties beats prospecting people', 'Reading a property’s data for seller signals', 'A five-step framework for owning a market segment'],
  },
  {
    id: 'creating-the-foundation', date: 'Jul 2025', speaker: BW, topic: 'foundations', deck: true,
    title: 'Creating the Foundation for Your Business',
    preview: 'Work backward from a 12-month GCI goal to the deals, listing appointments and outreach volume you need. Then choose a high-turnover farm, a property specialization and an ideal seller profile to form your go-to-market plan.',
    points: ['Converting an income goal into weekly activity targets', 'Selecting a farm with enough annual turnover', 'Defining the sellers you serve best'],
  },
  {
    id: 'system-thinking', date: 'Sep 2025', speaker: BW, topic: 'foundations', deck: true,
    title: 'The Power of System Thinking',
    preview: 'Turn a single offer into a repeatable monthly prospecting engine built on a four-week market report cadence. Map the path from report download to booked meeting, set up CRM tags and track targets like open rate and cost per lead.',
    points: ['A four-week monthly market report cycle', 'Five steps from report download to meeting', 'CRM tagging and KPI targets for predictability'],
  },
  {
    id: 'tracking-and-optimizing', date: 'May 2025', speaker: BW, topic: 'foundations', deck: false,
    title: 'Tracking, Measuring and Optimizing Your Prospecting',
    preview: 'How to track your prospecting activity, measure what it produces and use the numbers to decide where your time goes next.',
    points: [],
  },
  {
    id: 'secret-characteristic', date: 'Jun 2025', speaker: BW, topic: 'foundations', deck: false,
    title: 'The Secret Characteristic to Success in Prospecting',
    preview: 'The one trait that separates agents whose prospecting pays off from those who stall, and how to build it into a weekly routine.',
    points: [],
  },
  // Property Data & Messaging
  {
    id: 'property-first-prospecting', date: 'Aug 2025', speaker: BW, topic: 'data', deck: true,
    title: 'Property-First Prospecting',
    preview: 'Read property signals such as high equity with no HELOC, a home that no longer fits its owner or out-of-area ownership. Each signal pairs with a message angle, with a walkthrough of how Navigate filters properties to find them.',
    points: ['Combining data points into seller signals', 'Matching each signal to a message angle', 'Using property and owner intelligence together'],
  },
  {
    id: 'from-data-to-dialogue', date: 'Aug 2025', speaker: BW, topic: 'data', deck: true,
    title: 'From Data to Dialogue',
    preview: 'Turn property signals into outreach that pairs a property detail with a current market tension, such as rates, inventory or new regulations. Build a relevance-based message bank and rewrite generic check-ins into timely, advisory messages.',
    points: ['The property-plus-tension formula for outreach', 'Building a relevance-based message bank', 'When to bring in lenders, attorneys or contractors'],
  },
  // Prospecting Methods
  {
    id: 'channel-selection', date: 'Aug 2025', speaker: BW, topic: 'methods', deck: true,
    title: 'Channel Selection: Matching the Message to the Medium',
    preview: 'Compare direct, broadcast and authority-building channels on cost, time, scalability, response rate and personal fit. Map your comfort level against time investment and pick a multi-channel stack, from boots on the ground to digital first.',
    points: ['A channel-fit framework scored on five factors', 'Cadence and sequencing by channel', 'Six ready-made channel stacks to adapt'],
  },
  {
    id: 'circle-prospecting', date: 'May 2025', speaker: BW, topic: 'methods', deck: true,
    title: 'How to Circle Prospect Like a Pro',
    preview: 'Prospect the homes around a recent listing or sale, starting within 48 hours while neighbor curiosity peaks. Includes call, mail, digital and door-knocking scripts, a four-week cadence and weekly activity goals.',
    points: ['Defining and segmenting your circle', 'Scripts for calls, voicemail, email and door knocking', 'A four-week cadence with measurable goals'],
  },
  {
    id: 'cold-call-techniques', date: 'May 2025', speaker: BW, topic: 'methods', deck: false,
    title: 'Cold Call Techniques for Real Estate Lists',
    preview: 'Techniques for working prospect lists by phone: how to open, keep the conversation going and earn the next step.',
    points: [],
  },
  {
    id: 'networking-sphere', date: 'May 2025', speaker: BW, topic: 'methods', deck: false,
    title: 'Networking and Growing Your Sphere of Influence',
    preview: 'How to add new relationships to your sphere and keep them warm, so referrals and repeat business compound over time.',
    points: [],
  },
  {
    id: 'open-houses', date: 'Jun 2025', speaker: BW, topic: 'methods', deck: false,
    title: 'Maximizing Your Efforts at Open Houses',
    preview: 'Getting more from every open house you hold, and turning the traffic through the door into prospects you can follow up with.',
    points: [],
  },
  // Offers & Campaigns
  {
    id: 'power-of-the-offer', date: 'Sep 2025', speaker: BW, topic: 'offers', deck: true,
    title: 'The Power of the Offer',
    preview: 'Replace “just checking in” with specific, value-first offers like home value rechecks, equity reports and strategy calls. Learn a five-part offer anatomy and build a campaign for past clients, cold leads or your sphere.',
    points: ['Why offers outperform scripts and check-ins', 'Re-engagement and referral offers to send today', 'Audience, trigger, offer, CTA and follow-up'],
  },
  {
    id: 'offer-playbook', date: 'Sep 2025', speaker: TD, topic: 'offers', deck: true,
    title: 'Offer Playbook: The Neighborhood Market Report',
    preview: 'A step-by-step playbook for a gated neighborhood market report built on recent sales: what goes in it, the landing page and multi-channel promotion. Adds a 30-day follow-up routine, a four-email nurture and the metrics to scale it.',
    points: ['The four sections of a neighborhood report', 'Landing page, targeting and outbound scripts', 'Diagnosing and scaling with weekly metrics'],
  },
  {
    id: 'big-bad-wolf-mailer', date: 'Jun 2025', speaker: BW, topic: 'offers', deck: false,
    title: 'The Big Bad Wolf Mailing Campaign',
    preview: 'A walkthrough of the Big Bad Wolf direct mail campaign: how it’s structured, who it targets and how to run it in your market.',
    points: [],
  },
  // Conversion & Follow-Up
  {
    id: 'mechanics-of-messaging', date: 'Aug 2025', speaker: TD, topic: 'conversion', deck: true,
    title: 'Marketing Mechanics: Turning Attention Into Opportunity',
    preview: 'Build the capture step that turns marketing attention into contacts: a lead magnet, headline, short form, clear call to action and automated follow-up. Compares common capture tools and walks through six sample flows.',
    points: ['The five parts of a high-converting capture point', 'Choosing a capture tool for your budget', 'A seven-step plan to launch your first lead magnet'],
  },
  {
    id: 'digital-lead-conversion', date: 'Jun 2025', speaker: BW, topic: 'conversion', deck: false,
    title: 'The Secrets to Digital Lead Conversion',
    preview: 'How to turn online inquiries into real conversations, and real conversations into qualified clients.',
    points: [],
  },
  {
    id: 'q3-session-10', date: 'Sep 2025', speaker: TD, topic: 'conversion', deck: false,
    title: 'Prospecting Boot Camp: Driving Traffic',
    preview: 'The series goes digital: how to drive traffic into your prospecting system, paid versus organic reach and the core parts of a high-converting funnel.',
    points: [],
  },
]
