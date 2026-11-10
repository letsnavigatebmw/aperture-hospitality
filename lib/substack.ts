import { site } from './site'

// Pulls The Aperture Papers from the Expand Your Aperture RSS feed. Pages that use it revalidate
// hourly, so a new paper shows up on the site within the hour of publishing on Substack.
export type Paper = { no: string; title: string; dek: string; url: string; date: string; image?: string }

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s*\u2014\s*/g, ', ') // house style: no em dashes
    .trim()

const tag = (xml: string, t: string) => decode(xml.match(new RegExp(`<${t}>([\\s\\S]*?)</${t}>`))?.[1] ?? '')

// Substack titles look like "The Aperture Papers .008 | When Software Stops Selling Seats".
// Split out the paper number and the headline; when the headline is missing, the subtitle is it.
function parse(raw: string, dek: string) {
  const parts = raw.split('|').map((p) => p.trim()).filter(Boolean)
  const numMatch = raw.match(/(?:Paper(?:s)?\s*(?:No\.?|#)?\s*|#)?\.?\s*0*(\d{1,3})\b/i)
  const no = numMatch ? numMatch[1].padStart(3, '0') : ''
  const headline = parts.find((p) => !/aperture\s+paper/i.test(p) && !/^(?:paper\s*no\.?\s*|#|\.)?\s*\d+$/i.test(p))
  return { no, title: headline || dek, dek: headline ? cleanDek(dek) : '' }
}

// Subtitles often end in "| The Aperture Papers | November 2026". Keep only the real subtitle.
const cleanDek = (d: string) =>
  d
    .split('|')
    .map((p) => p.trim())
    .filter((p) => p && !/aperture\s+paper/i.test(p) && !/^[A-Z][a-z]+ \d{4}$/.test(p))
    .join(' | ')

export async function getPapers(): Promise<Paper[]> {
  try {
    const res = await fetch(`${site.substack}feed`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1])
    return items
      .map((it) => {
        const raw = tag(it, 'title')
        if (!/aperture\s+paper/i.test(raw)) return null // papers only, not dispatches
        const { no, title, dek } = parse(raw, tag(it, 'description'))
        return {
          no,
          title,
          dek,
          url: tag(it, 'link'),
          date: new Date(tag(it, 'pubDate')).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' }),
        } as Paper
      })
      .filter((p): p is Paper => !!p && !!p.title && !!p.url)
      // Skip re-posts of the same paper number; the feed is newest first, so the latest wins.
      .filter((p, i, all) => !p.no || all.findIndex((q) => q.no === p.no) === i)
  } catch {
    return []
  }
}
