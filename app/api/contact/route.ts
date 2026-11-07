import { NextRequest, NextResponse } from 'next/server'
import { clean, deliverInquiry } from '@/lib/inquiry'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot: bots fill the hidden field. Pretend success, do nothing.
    if (clean(body._gotcha)) return NextResponse.json({ success: true })

    const data = {
      name: clean(body.name, 200),
      email: clean(body.email, 200),
      company: clean(body.company, 200),
      role: clean(body.role, 200),
      engagement: clean(body.engagement, 200),
      message: clean(body.message),
      page: clean(body.page, 200),
      question: clean(body.question, 200),
    }
    if (!data.name || !data.email || !data.company || !data.engagement || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (await deliverInquiry(data)) return NextResponse.json({ success: true })
    return NextResponse.json({ error: 'Inquiry delivery is not configured' }, { status: 500 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
