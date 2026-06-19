import { NextRequest, NextResponse } from 'next/server'

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

    // Option 1: Using Resend (Recommended)
    // Uncomment below and add RESEND_API_KEY to .env.local
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const response = await resend.emails.send({
      from: 'inquiries@aperturehospitality.com',
      to: 'brandon@aperturehospitality.com',
      replyTo: email,
      subject: `New Inquiry from ${first_name} ${last_name}`,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return NextResponse.json({ success: true })
    */

    // Option 2: Using SendGrid
    // Uncomment below and add SENDGRID_API_KEY to .env.local
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    await sgMail.send({
      to: 'brandon@aperturehospitality.com',
      from: 'noreply@aperturehospitality.com',
      replyTo: email,
      subject: `New Inquiry from ${first_name} ${last_name}`,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`
    })

    return NextResponse.json({ success: true })
    */

    // Option 3: Using Nodemailer with Gmail/SMTP
    // Uncomment below and add EMAIL_USER, EMAIL_PASS to .env.local
    /*
    import nodemailer from 'nodemailer'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'brandon@aperturehospitality.com',
      replyTo: email,
      subject: `New Inquiry from ${first_name} ${last_name}`,
      text: emailBody,
      html: `<pre>${emailBody}</pre>`
    })

    return NextResponse.json({ success: true })
    */

    // Default: Return success (until email service is configured)
    // This prevents form errors while you set up your email service
    console.log('Form submission received:', { first_name, last_name, email })
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
