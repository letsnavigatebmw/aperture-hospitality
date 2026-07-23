import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const required = ['firstName', 'lastName', 'email', 'business', 'type', 'challenge']
    for (const field of required) {
      if (!body[field] || !body[field].toString().trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Log intake data (replace with your CRM/email service)
    console.log('📋 INTAKE SUBMISSION:', {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      business: body.business,
      type: body.type,
      challenge: body.challenge,
      system: body.system || 'Not provided',
      revenue: body.revenue || 'Not specified',
      submittedAt: new Date().toISOString(),
    })

    // ──────────────────────────────────────────────────────────
    // WIRE YOUR INTEGRATION HERE
    // ──────────────────────────────────────────────────────────
    
    // Option A: Send email via your email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@aperturehospitality.com',
    //     to: 'brandon@aperturehospitality.com',
    //     subject: `New Acquisition Blueprint Intake: ${body.firstName} ${body.lastName}`,
    //     html: `
    //       <h2>New Intake Submission</h2>
    //       <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
    //       <p><strong>Email:</strong> ${body.email}</p>
    //       <p><strong>Business:</strong> ${body.business}</p>
    //       <p><strong>Type:</strong> ${body.type}</p>
    //       <p><strong>Challenge:</strong> ${body.challenge}</p>
    //       <p><strong>Current System:</strong> ${body.system || 'Not provided'}</p>
    //       <p><strong>Target Revenue:</strong> ${body.revenue || 'Not specified'}</p>
    //     `,
    //   }),
    // })
    
    // Option B: Save to database
    // await db.intakes.create({...})
    
    // Option C: Post to Zapier/Make.com webhook
    // await fetch(process.env.ZAPIER_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(body) })

    // For now, return success (you can uncomment the email/webhook call above)
    return NextResponse.json(
      {
        success: true,
        message: 'Intake submitted successfully',
        email: body.email,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Intake submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit intake' },
      { status: 500 }
    )
  }
}
