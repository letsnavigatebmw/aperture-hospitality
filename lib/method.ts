// The Aperture Method: five steps, diagnosis before deliverable.
export const method = [
  {
    n: '01',
    t: 'Diagnose',
    short: 'Find the real problem before proposing the solution.',
    why: 'Most growth problems are misdiagnosed. A weak quarter gets a new campaign when the real issue is pricing, channel or a brand nobody can explain. We start by finding the higher-order problem.',
    do: ['Leadership and team interviews', 'P&L, funnel and channel performance review', 'Customer, competitor and category scan', 'Brand and message audit'],
    get: 'A diagnostic readout: where growth is stuck, the three priorities that matter and a 90-day action plan.',
  },
  {
    n: '02',
    t: 'Brand Foundation',
    short: 'Decide who you are for and why you win.',
    why: 'A marketing plan cannot come before a brand plan. Without a clear position, every channel tells a different story and spend works against itself.',
    do: ['Target audiences and the jobs you do for them', 'Positioning, brand promise and proof points', 'Messaging hierarchy and brand standards', 'The story told for customers, partners and your own team'],
    get: 'A brand foundation the whole business can sell from.',
  },
  {
    n: '03',
    t: 'Marketing Plan',
    short: 'Turn the brand into demand.',
    why: 'Marketing earns its budget when it is planned against revenue, not activity. We build the plan backward from the number.',
    do: ['Audience priorities and channel mix', 'Campaign calendar, content and creative', 'Agency and partner roles', 'Budget tied to revenue targets and KPIs'],
    get: 'A 12-month marketing plan and budget, with the KPIs that prove it is working.',
  },
  {
    n: '04',
    t: 'Commercial Plan',
    short: 'Turn demand into revenue.',
    why: 'Demand only matters if sales, channels and pricing are built to convert it. This is where the plan meets the P&L.',
    do: ['Sales targets, segments and territories', 'Channel, distribution and partnership strategy', 'Pricing architecture and margin', 'Sales tools and the team playbook'],
    get: 'A commercial plan, pricing architecture and a playbook the team can execute.',
  },
  {
    n: '05',
    t: 'Operating Rhythm',
    short: 'Make it run, and measure it.',
    why: 'Plans fail in week six, not week one. A weekly rhythm keeps the team on the number and surfaces problems while they are still cheap to fix.',
    do: ['Weekly dashboard and KPIs', 'Meeting cadence and clear owners', 'Hiring, agency and partner management', 'Board and investor reporting'],
    get: 'An operating cadence that keeps working after we step back.',
  },
] as const

export const methodFit = [
  { e: 'Commercial or Brand & Marketing Diagnostic', s: 'Step 01', d: 'A fixed-fee read on the real problem, the priorities and a 90-day plan.' },
  { e: 'Fractional CCO / CMO', s: 'Steps 02 to 05', d: 'Senior leadership that builds the plans and runs the rhythm with your team.' },
  { e: 'Revenue Sprint', s: 'One step, one outcome', d: 'A focused push on a single step: a pricing reset, a launch or a turnaround plan.' },
] as const
