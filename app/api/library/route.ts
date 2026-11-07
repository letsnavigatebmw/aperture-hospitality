import { createHmac, timingSafeEqual } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { clean, deliverInquiry } from '@/lib/inquiry'
import { libraryLinks } from '@/lib/library-links'

// Gate for the real estate library. A completed form logs the lead (sheet + email) and sets a
// signed cookie; the links are only ever returned by this route, never rendered into the page.
const COOKIE = 'ah_library'
const MAX_AGE = 60 * 60 * 24 * 180 // 180 days
const secret = () => process.env.LIBRARY_SECRET || process.env.INQUIRY_WEBHOOK_SECRET || 'dev-only-secret'
const sign = (v: string) => createHmac('sha256', secret()).update(v).digest('base64url')

function valid(token?: string) {
  if (!token) return false
  const i = token.lastIndexOf('.')
  if (i < 1) return false
  const a = Buffer.from(sign(token.slice(0, i)))
  const b = Buffer.from(token.slice(i + 1))
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function GET(request: NextRequest) {
  if (!valid(request.cookies.get(COOKIE)?.value)) return NextResponse.json({ unlocked: false })
  return NextResponse.json({ unlocked: true, links: libraryLinks })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (clean(body._gotcha)) return NextResponse.json({ unlocked: false })

    const data = {
      name: clean(body.name, 200),
      email: clean(body.email, 200),
      company: clean(body.company, 200),
      role: clean(body.role, 200),
      engagement: 'Real Estate Library access',
      message: clean(body.message, 2000) || '(No note left)',
      page: clean(body.page, 200) || '/real-estate',
      question: `Requested: ${clean(body.session, 200) || 'Full library'}`,
    }
    if (!data.name || !data.email || !data.company || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the lead. If delivery is down, still let the visitor in: a lost row beats a locked-out prospect.
    const delivered = await deliverInquiry(data)
    if (!delivered) console.error('Library lead not delivered:', data.email)

    const payload = Buffer.from(`${data.email}|${Date.now()}`).toString('base64url')
    const res = NextResponse.json({ unlocked: true, links: libraryLinks })
    res.cookies.set(COOKIE, `${payload}.${sign(payload)}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: MAX_AGE,
      path: '/',
    })
    return res
  } catch (error) {
    console.error('Library unlock error:', error)
    return NextResponse.json({ error: 'Failed to unlock' }, { status: 500 })
  }
}
