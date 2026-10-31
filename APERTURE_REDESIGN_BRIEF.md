# Aperture Hospitality: Website Redesign Brief

**For:** Claude Code
**Owner:** Brandon M. Weaver
**Live site:** https://www.aperturehospitality.com
**Design reference:** https://www.brandonmweaver.com
**Source of truth for content:** the Aperture one-pager ("Fractional Commercial Leadership for Hospitality, Travel & Consumer Brands")
**Deploy target:** Vercel (production on the existing aperturehospitality.com project)

---

## 0. Read this first

1. **This is a simplification, not a refresh.** Seven nav pages become one long homepage plus Insights and Contact. If a section is not in this brief, it does not ship.
2. **Visual system must match brandonmweaver.com exactly.** Do not eyeball it. Copy the design tokens and base stylesheet from the personal site's repo (tokens, typography, buttons, rules, section and container classes) into this project. The values in Section 3 were measured from the live site and are for verification only.
3. **Voice changes from "we" to "I".** Aperture is Brandon. The one-pager is written in first person; the site follows it.
4. **The old palette is retired.** Brass (#B8924A), Ink (#1C1A17), Parchment (#F0EDE6) and Cormorant Garamond all go.
5. Work on a branch, deploy a Vercel preview, and wait for Brandon's sign-off before promoting to production.

---

## 1. Positioning shift

| | Current site | New site |
|---|---|---|
| Category | Strategy, intelligence and automation firm for SMBs | Fractional commercial leadership |
| Buyer | Any business with a data problem | CEOs, founders and boards at hospitality, travel and consumer brands |
| Lead message | "Clarity Over Data. Growth Over Noise." | "Senior commercial leadership, without the full-time hire." |
| Proof | Two testimonials, client name list | Named roles at named companies with numbers |
| Voice | "We", "Aperture" | "I", Brandon |
| Offer | Four practice areas, six services each | Three engagement formats with clear scope |

Remove entirely: AI Solutions, Intelligence, Philosophy, the "Problem isn't Data" section, the five-industry grid (Technology & SaaS and Professional Services are out of scope), the four-practice-area service lists, the orbit/ring hero graphic, and the People · Property · Products · Performance ticker.

---

## 2. Information architecture

### Navigation

`APERTURE` mark (left) | Services · Results · Engagements · Insights | **Contact** button (right)

Nav links are anchors on the homepage except Insights. Header behaves exactly like brandonmweaver.com: sticky, translucent paper background, 1px bottom rule, solid accent Contact button.

### Pages

- `/` single long-scroll homepage (Section 4)
- `/insights` index of articles, restyled to the new system, link out to Substack
- `/contact` booking calendar (keep the existing Google Calendar integration) plus the simplified form
- `404` page in the new system

### Redirects (301, in `vercel.json` or `next.config`)

| From | To |
|---|---|
| /how-we-work | /#engagements |
| /capabilities | /#services |
| /executive-advisory | /#services |
| /ai-solutions | / |
| /data-intelligence | / |
| /philosophy | / |
| /about | /#background |

Check for any other indexed URLs (sitemap, Search Console) and redirect them too. No dead links.

---

## 3. Design system (match brandonmweaver.com)

### Color tokens, light (default)

```css
:root {
  --paper:      #f5f1ea;  /* page background */
  --paper-2:    #ece6db;  /* cards, alternate surfaces */
  --ink:        #15130f;  /* headings, primary text */
  --ink-2:      #4a453d;  /* body copy */
  --ink-3:      #645d53;  /* captions, meta, dates */
  --rule:       #d9d1c3;  /* dividers, borders */
  --accent:     #7a2e22;  /* oxblood: buttons, kicker labels, italic emphasis */
  --accent-ink: #f5f1ea;  /* text on accent */
  --focus:      #b5532f;  /* focus rings */
}
```

### Color tokens, dark (present in the personal site's CSS; carry them over unchanged)

```css
--paper: #0e0d0b; --paper-2: #191714; --ink: #f2ede4; --ink-2: #bdb5a8;
--ink-3: #8c857a; --rule: #2c2925; --accent: #c8b99a; --accent-ink: #0e0d0b; --focus: #e0cda8;
```

Apply dark tokens exactly the way the personal site does (same selector/media query). Do not invent a different trigger.

### Typography

```css
--serif: "Newsreader Variable", Georgia, "Times New Roman", serif;
--sans:  "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Self-host both variable fonts the same way the personal site does.

Measured ratios (sizes measured at reduced browser zoom, so trust the source CSS for absolute values):

| Element | Font | Weight | Tracking | Notes |
|---|---|---|---|---|
| H1 display | Newsreader | 400 | -0.012em | Line height ~1.12. One phrase in *italic*, colored `--accent` |
| H2 section title | Newsreader | 400 | -0.015em | ~57% of H1 size |
| H3 item title | Newsreader | 450 | -0.015em | Small, used in grids and lists |
| Eyebrow | Inter | 700 | 0.14em | Uppercase, `--ink`, sits above every H2 |
| Kicker label | Inter | 550 | 0.16em | Uppercase, `--accent`, hero only, middle-dot separators |
| Body | Inter | 400 | normal | `--ink-2`, line height ~1.65 |
| Role / sub-line | Newsreader | 400 italic | normal | `--ink-3`, e.g. "Chief Commercial Officer" |
| Dates / meta | Inter | 500 | wide | Uppercase, small, `--ink-3` |
| Text link | Inter | 600 | normal | `--ink`, underline offset with 4px bottom padding, trailing "→" |

### Layout tokens

```css
--container: 1200px;
--gutter:    24px;   /* 48px at >=768px */
--section:   clamp(4.5rem, 9vw, 8rem);  /* vertical section padding */
```

### Components to replicate

- **Primary button:** `--accent` background, `--accent-ink` text, Inter 550 to 600, 2px radius, no uppercase. Labels in sentence case ("Start a conversation").
- **Section pattern A (stacked):** eyebrow, H2, then a full-width 1px rule in `--ink` (reduced opacity), then content.
- **Section pattern B (split):** left column (about 1/3) holds eyebrow, H2 and an optional italic Newsreader sub-line. Right column (about 2/3) holds a list or grid, opened by a 1px rule, rows separated by `--rule`.
- **Stat strip:** four columns, large Newsreader numerals with a lighter "+" or unit, small Inter caption below, vertical `--rule` dividers.
- **Track-record list:** date column (Inter caps, `--ink-3`), then company (Newsreader), role (Newsreader italic), one-line result (Inter body). Copy the personal site's "Twenty Years, One Through Line" component.
- **Cards:** `--paper-2` background, no shadow, no radius beyond 2px, generous padding. Copy the "What I'm Building" cards.
- **Logo rows:** monochrome logos at reduced opacity, evenly spaced, between rules. Copy "Where I've Worked".
- **Testimonials:** three columns, quote in Newsreader italic, name in Inter 600, title in Inter `--ink-3`.
- **Full-width hairline** (`--rule`) between every section.

### Brand mark

Keep the open-arc motif and the spaced `A P E R T U R E` wordmark (as it appears in the "What I'm Building" card on the personal site). Recolor the arc to `--accent`. Wordmark in `--ink`. Update favicon and OG image to the new palette.

### Motion

Match the personal site: subtle fade/raise on scroll, nothing else. Respect `prefers-reduced-motion`. No orbit animation, no tickers.

---

## 4. Homepage, section by section

Copy below is final unless marked [confirm].

### 4.1 Hero (split, like the personal site)

- **Kicker** (accent): `Fractional Commercial Leadership · Hospitality, Travel & Consumer Brands`
- **H1:** Senior commercial leadership, *without* the full-time hire.
  (Italic accent on "without".)
- **Lede:**
  I work with CEOs, founders and boards as a fractional Chief Commercial or Marketing Officer, bringing the operating experience of a former COO, CCO and GM to growth, go-to-market and turnaround challenges. I don't hand over a deck and leave. I build the plan, lead the team through it and measure the result.
- **Buttons:** `Start a conversation` (primary, to /contact) and `See the results →` (text link, to #results)
- **Right side:** portrait of Brandon, same treatment as the personal site (cut-out, soft fade into `--paper`). Use a different shot from the personal site [confirm asset].

### 4.2 Who I work with (`#who`, pattern A, three columns)

Eyebrow: `Who I Work With`. H2: `Built for operators and the brands they run`

1. **Hospitality & Travel.** Hotels, luxury rentals, travel distribution and experiences, especially growth-stage and PE-backed.
2. **Luxury, Lifestyle & Spirits.** Positioning, distribution, retail and partnership growth.
3. **Travel-Tech & Proptech.** Scaling go-to-market, pricing and partnerships with hospitality and real estate buyers.

### 4.3 What I do (`#services`, pattern B, 2x2 grid like "What I Do" on the personal site)

Eyebrow: `Services`. H2: `What I Do`

| Title | Description |
|---|---|
| Commercial Strategy & GTM | Positioning, segmentation, channel and distribution strategy, pricing architecture, launch plans. |
| Revenue & Performance Turnarounds | Commercial diagnostics, market share and RevPAR gaps, unit economics, P&L and operating cadences. |
| Partnerships & Distribution | Co-branded and brand-funded programs, retail and trade activation, strategic alliances. |
| Models & Investor Readiness | Business cases, valuations, scenario models, fundraising and board materials, AI-enabled analytics. |

### 4.4 Results (`#results`)

**Stat strip** (eyebrow `By the Numbers`):

| Figure | Caption |
|---|---|
| $268M | Gross revenue at Bonotel Exclusive Travel, up from $229M |
| 546 | Hotels enrolled in a brand-funded partner program |
| 700+ | Rooms opened building Sonder California from one person |
| +13.2% | Gross booking value growth as CCO of Lacure Villas |

**Track-record list** (pattern B). Eyebrow: `Selected Results`. H2: `Operating roles, measurable outcomes`. Italic sub-line: *I've run the P&L, not just advised on it.*

| Company | Role | Result |
|---|---|---|
| Bonotel Exclusive Travel (Carlyle-backed) | Chief Operating Officer | Helped grow gross revenue from $229M to $268M; enrolled 546 hotels in a brand-funded partner program; led the acquisition that created BEYOND by Bonotel. |
| Lacure Villas | Chief Commercial Officer | Led a 65-person organization; grew GBV 13.2%; launched programs with American Express Platinum, Visa and NetJets. |
| Sonder | Area General Manager, California | Built the region from one person to seven properties (700+ rooms); led the portfolio through COVID-19 at a 240 RevPAR Index. |
| Stillhouse Spirits (Bacardi-backed) | General Manager & Head of Marketing | Reset the 2019 brand plan; depletions up 7.5% in Q1 2019; launched Stillhouse Classic Vodka. |
| Diageo | Regional Marketing Manager | Oversaw Captain Morgan national media and Johnnie Walker's integrated campaigns in South Africa. [confirm figure, see Section 7] |
| BLKBOX | Managing Director | Won a Mondelēz Brand Accelerator engagement; raised a $1.5M growth round. |
| Navigate | Founder | Built an AI-native data platform; reached 60% trial-to-paid conversion. |

No dates in this list (unlike the personal site). Text link at the end: `Full background at brandonmweaver.com →`

### 4.5 Advisory clients (logo row, like "Where I've Worked")

Eyebrow: `Advisory Clients`. Logos or clean wordmarks: Swarm, Voyage Real Estate, Perro Verde, Beverly Spirits, Wilbur Labs, Boatsetter. Optional one-line caption under Swarm: "Supported a $3M seed raise." Use only logos Brandon has permission to display [confirm].

### 4.6 Testimonials

Eyebrow: `Client Testimonials`. H2: `What Clients Say`. Three columns, same three quotes and attributions as the personal site (Ari Afshar, Michael Silver, Andy Borenzweig). Titles must match the personal site exactly.

### 4.7 How we work together (`#engagements`, three cards)

Eyebrow: `Engagements`. H2: `How We Work Together`

| Card | Format | What you get |
|---|---|---|
| **Commercial Diagnostic** | 4 to 6 weeks · fixed fee | A clear read on where growth is stuck, the three priorities that matter and a 90-day action plan. |
| **Fractional CCO / CMO** | 1 to 3 days a week · monthly retainer | Hands-on leadership of the commercial team, GTM execution, partner deals and board-level reporting. |
| **Revenue Sprint** | 8 to 12 weeks · project fee | One focused outcome: a pricing reset, channel or product launch, partnership program or turnaround plan. |

Format line in Inter caps meta style. Each card ends with a text link: `Discuss this →` to /contact with the engagement preselected.

### 4.8 Background (`#background`, credential row)

Eyebrow: `Background`. Logos as on the personal site: Kellogg (MBA, corporate finance), Harvard Kennedy School (MPA, economics), USC Annenberg (BA). Under the row, one line: Board Member & Strategic Advisor, Dowling Street · Publisher, *Expand Your Aperture* on Substack.

### 4.9 Insights (pattern B, like "On the Record")

Eyebrow: `Insights`. H2: `On the Record`. Three most recent pieces as rows (meta label + title). Links: `All insights →` and `Subscribe on Substack →`.

### 4.10 Closing CTA and contact

H2: Let's talk about your growth plan. Body: Tell me where growth is stuck. I read every message personally and reply within one business day.

**Form fields, and only these:** Name, Email, Company, Role, Engagement of interest (Commercial Diagnostic / Fractional CCO or CMO / Revenue Sprint / Not sure yet), Message.
Remove: business type (SaaS, Agency, E-commerce), revenue band, employee count, state, "Interested in Strategy / Automation / AI Solutions".

Secondary actions: `Book a time` (calendar) and the email address [confirm which, see Section 7].

### 4.11 Footer

APERTURE mark · Los Angeles · email · LinkedIn · Substack · brandonmweaver.com · © 2026 Aperture Hospitality.

---

## 5. Technical requirements

- Keep the current framework and Vercel project. Do not create a new Vercel project or change the domain.
- Lift tokens and base CSS from the personal site's repo into a shared file (e.g. `styles/tokens.css`). If both repos are available, note in the PR that a shared package is the long-term fix.
- Fonts self-hosted, `font-display: swap`, preload the two variable files.
- Lighthouse targets on mobile: Performance 90+, Accessibility 100, SEO 100.
- Accessibility: AA contrast (oxblood on paper passes; check `--ink-3` on `--paper-2`), visible focus rings in `--focus`, skip link, semantic headings (one H1).
- Meta: title `Aperture Hospitality | Fractional Commercial Leadership`. Description: `Fractional Chief Commercial and Marketing Officer for hospitality, travel and consumer brands. Senior commercial leadership, without the full-time hire.` New OG image in the new palette.
- Structured data: `ProfessionalService` with founder `Person` (Brandon M. Weaver, sameAs brandonmweaver.com and LinkedIn).
- `sitemap.xml` and `robots.txt` updated for the new page set.
- Form submissions keep routing to wherever they route today; verify end to end on the preview.

---

## 6. Process

1. Create branch `redesign/one-pager`.
2. Port tokens and base styles from brandonmweaver.com. Build a `/styleguide` route (preview only) showing type, colors, buttons, rules and each section pattern. Screenshot it next to the personal site.
3. Build the homepage sections in order. Remove deprecated pages and add redirects.
4. Restyle /insights and /contact.
5. QA at 375, 768, 1280 and 1512 widths, light and dark. Check every redirect.
6. Deploy a Vercel preview. Post the URL and side-by-side screenshots with brandonmweaver.com. Stop.
7. Promote to production only after Brandon approves.

---

## 7. Open items for Brandon (resolve before production)

1. **Diageo figure.** The one-pager says about $35M a year in Captain Morgan media. Other materials say about $30M. Pick one and use it everywhere.
2. **Contact email.** The one-pager uses brandon@aperturehospitality.com; the site uses inquiries@aperturehospitality.com. Pick one.
3. **Hero portrait.** Same image as the personal site, or a different shot.
4. **Client logos.** Confirm permission to display each advisory client.
5. **Personal site alignment.** brandonmweaver.com describes Aperture as an advisory practice for "super-premium" spirits, consumer and hospitality brands. Update that card to the fractional-leadership language so the two sites tell one story.
