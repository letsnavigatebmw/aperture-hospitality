import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Fallback recipient for the Resend path (unchanged from the original setup).
const FALLBACK_TO = 'brandon@aperturehospitality.com'
const clean = (v: unknown, n = 5000) => String(v ?? '').trim().slice(0, n)

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
    }
    if (!data.name || !data.email || !data.company || !data.engagement || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Primary: Google Apps Script web app (adds a row to the Inquiries sheet and emails Brandon from Gmail)
    const hook = process.env.INQUIRY_WEBHOOK_URL
    const secret = process.env.INQUIRY_WEBHOOK_SECRET
    if (hook && secret) {
      try {
        const res = await fetch(hook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, secret }),
          redirect: 'follow',
          cache: 'no-store',
        })
        const out = await res.json().catch(() => null)
        if (out?.ok) return NextResponse.json({ success: true })
        console.error('Inquiry webhook rejected:', out)
      } catch (err) {
        console.error('Inquiry webhook failed:', err)
      }
    }

    // Fallback: email only, via Resend
    if (process.env.RESEND_API_KEY) {
      const text = `New inquiry from aperturehospitality.com

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role || 'Not provided'}
Engagement of interest: ${data.engagement}
Page: ${data.page || '/'}

Where is growth stuck?
${data.message}`
      const resend = new Resend(process.env.RESEND_API_KEY)
      const r = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: FALLBACK_TO,
        replyTo: data.email,
        subject: `New inquiry: ${data.name}, ${data.company} (${data.engagement})`,
        text,
      })
      if (!r.error) return NextResponse.json({ success: true })
      console.error('Resend error:', r.error)
    }

    return NextResponse.json({ error: 'Inquiry delivery is not configured' }, { status: 500 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
