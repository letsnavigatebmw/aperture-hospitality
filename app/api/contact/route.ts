import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const { first_name, last_name, email, business_name } = formData
    if (!first_name || !last_name || !email || !business_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailBody = `
New Intake Form Submission

PERSONAL INFORMATION:
Name: ${first_name} ${last_name}
Email: ${email}
Phone: ${formData.phone || 'Not provided'}

BUSINESS INFORMATION:
Business Name: ${business_name}
Business Type: ${formData.business_type || 'Not specified'}
Industry: ${formData.industry || 'Not specified'}
Location: ${formData.location || 'Not specified'}
Annual Revenue: ${formData.revenue || 'Not specified'}
Number of Employees: ${formData.employees || 'Not specified'}

INTEREST:
Interested In: ${formData.interested_in || 'Not specified'}

---
This submission came from aperturehospitality.com intake form.
    `.trim()

    // Send with Resend
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'brandon@aperturehospitality.com',
      replyTo: email,
      subject: `New Inquiry from ${first_name} ${last_name}`,
      text: emailBody,
      html: `<pre style="font-family: monospace; white-space: pre-wrap;">${emailBody}</pre>`
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
