# Aperture Hospitality website

Next.js 15 (App Router) site for aperturehospitality.com, deployed on Vercel.
Positioning and content follow `APERTURE_REDESIGN_BRIEF.md`.

## Design system

The visual system is shared with brandonmweaver.com and must stay identical.

- `app/tokens.css`: tokens, fonts and base styles ported verbatim from the personal site
- `app/components.css`: section components (hero, stats, rail, caps, cards, track record, form)
- `public/fonts/`: self-hosted Newsreader and Inter variable fonts (OFL)
- Palette: paper `#f5f1ea`, ink `#15130f`, oxblood accent `#7a2e22`

Change tokens here and on the personal site together. A shared package is the long-term fix.

## Structure

- `/` single long-scroll homepage (`app/page.tsx`)
- `/insights` article index, data in `lib/site.ts`
- `/contact` booking link plus the six-field form (`components/IntakeForm.tsx` posts to `app/api/contact`, sent with Resend)
- Retired pages redirect permanently, see `next.config.ts`
- Legacy resource pages (frameworks, scorecard, kits, downloads) are still live but unlinked; Tailwind remains only for them

## Environment

- `RESEND_API_KEY` is required for the contact form in production.

## Develop

```bash
npm install
npm run dev
```
