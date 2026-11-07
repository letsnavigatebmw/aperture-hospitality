import { Resend } from 'resend'

// Shared delivery for every form on the site: the Apps Script webhook (Inquiries sheet + Gmail),
// then Resend as a fallback. Returns true when either path accepted the inquiry.
const FALLBACK_TO = 'brandon@aperturehospitality.com'

export type Inquiry = {
  name: string
  email: string
  company: string
  role: string
  engagement: string
  message: string
  page: string
  question?: string
}

export const clean = (v: unknown, n = 5000) => String(v ?? '').trim().slice(0, n)

export async function deliverInquiry(data: Inquiry): Promise<boolean> {
  const hook = process.env.INQUIRY_WEBHOOK_URL
  const secret = process.env.INQUIRY_WEBHOOK_SECRET
  if (hook && secret) {
    try {
      const res = await fetch(hook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The sheet and email show the question the visitor answered above their reply.
        body: JSON.stringify({ ...data, message: data.question ? `${data.question}\n\n${data.message}` : data.message, secret }),
        redirect: 'follow',
        cache: 'no-store',
      })
      const out = await res.json().catch(() => null)
      if (out?.ok) return true
      console.error('Inquiry webhook rejected:', out)
    } catch (err) {
      console.error('Inquiry webhook failed:', err)
    }
  }

  if (process.env.RESEND_API_KEY) {
    const text = `New inquiry from aperturehospitality.com

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Role: ${data.role || 'Not provided'}
Engagement of interest: ${data.engagement}
Page: ${data.page || '/'}

${data.question || 'Message'}
${data.message}`
    const resend = new Resend(process.env.RESEND_API_KEY)
    const r = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: FALLBACK_TO,
      replyTo: data.email,
      subject: `New inquiry: ${data.name}, ${data.company} (${data.engagement})`,
      text,
    })
    if (!r.error) return true
    console.error('Resend error:', r.error)
  }
  return false
}
