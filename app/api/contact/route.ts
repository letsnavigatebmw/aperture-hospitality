import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const clean = (v: unknown) => String(v ?? '').trim().slice(0, 5000)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = clean(body.name)
    const email = clean(body.email)
    const company = clean(body.company)
    const role = clean(body.role)
    const engagement = clean(body.engagement)
    const message = clean(body.message)

    if (!name || !email || !company || !engagement || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const text = `New inquiry from aperturehospitality.com

Name: ${name}
Email: ${email}
Company: ${company}
Role: ${role || 'Not provided'}
Engagement of interest: ${engagement}

Where is growth stuck?
${message}`

    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const resend = new Resend(process.env.RESEND_API_KEY)
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'brandon@aperturehospitality.com',
      replyTo: email,
      subject: `New inquiry: ${name}, ${company} (${engagement})`,
      text,
      html: `<pre style="font-family: monospace; white-space: pre-wrap;">${escaped}</pre>`,
    })

    if (response.error) throw new Error(response.error.message)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
