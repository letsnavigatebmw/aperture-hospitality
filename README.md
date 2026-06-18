# Aperture Hospitality Website

Next.js website for Aperture Hospitality, built with Tailwind CSS.

## Phase 1 Complete

✅ Homepage - hero, credibility bar, services grid, engagements list
✅ About page - Brandon bio and credentials
✅ Contact page - email and Google Calendar embed
✅ Navigation - About | Contact
✅ Footer - corrected branding (Aperture, LinkedIn)
✅ SEO - unique meta tags, sitemap, robots.txt
✅ Design system - white background, brass accents, typography locked

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS
- **Fonts:** Cormorant Garamond (display) + Inter (body)
- **Deployment:** Vercel

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── layout.tsx         # Root layout with fonts
├── globals.css        # Global styles & utilities
├── page.tsx          # Homepage
├── about/
│   └── page.tsx      # About page
├── contact/
│   └── page.tsx      # Contact page
├── sitemap.ts        # XML sitemap
└── robots.ts         # Robots.txt

components/
├── Nav.tsx           # Navigation header
└── Footer.tsx        # Footer
```

## Design Tokens

**Colors:**
- `ink` (#1C1A17) - Dark text/backgrounds
- `parchment` (#F0EDE6) - Main background
- `brass` (#B8924A) - Accent color
- `muted` (#6B6760) - Secondary text
- `rule` (#D4CFC6) - Borders/dividers

**Typography:**
- Display: Cormorant Garamond (300, 400, 500, 600)
- Body: Inter (300, 400, 500)

## Next Steps (Phase 2)

- [ ] Work page with full case studies
- [ ] Insights hub and article template
- [ ] Testimonials component
- [ ] Services page expanded content
- [ ] Blog posts and thought leadership

## Deployment to Vercel

1. Push to GitHub (`letsnavigatebmw/aperture-hospitality-website`)
2. Connect repo to Vercel project
3. Deploy automatically on push
4. Add custom domain: `aperturehospitality.com`

---

Built with Scout 🧭
