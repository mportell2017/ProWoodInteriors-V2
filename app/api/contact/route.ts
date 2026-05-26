import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { contactApiSchema, type ContactApiData } from '@/lib/contact-schema'
import { ContactNotificationEmail } from '@/components/emails/ContactNotificationEmail'

// React Email rendering and the Resend SDK require Node APIs — not Edge.
export const runtime = 'nodejs'

const CONTACT_RECIPIENTS = ['dave@prowoodinteriors.com', 'prowoodinteriors@gmail.com']
const FROM_ADDRESS = 'ProWood Interiors <noreply@prowoodinteriors.com>'

async function verifyTurnstileToken(token: string, ip: string | null): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    console.error('Turnstile secret key not configured - CAPTCHA verification is required')
    return { success: false, error: 'CAPTCHA verification is not properly configured. Please contact support.' }
  }

  try {
    const formData = new FormData()
    formData.append('secret', secretKey)
    formData.append('response', token)
    if (ip) formData.append('remoteip', ip)

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()

    if (result.success) {
      return { success: true }
    } else {
      return { success: false, error: result['error-codes']?.join(', ') || 'Verification failed' }
    }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Verification error' }
  }
}

async function sendEmailNotification(data: ContactApiData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { success: false, error: 'Resend API key not configured' }
  }

  const resend = new Resend(apiKey)

  // The Node SDK renders both the HTML and plain-text bodies from the React
  // component, and escapes all interpolated values for us.
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: CONTACT_RECIPIENTS,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    react: ContactNotificationEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      streetAddress: data.street_address,
      city: data.city,
      zip: data.zip,
      projectTypes: data.project_types,
      timeline: data.timeline,
      message: data.message,
    }),
    tags: [{ name: 'source', value: 'contact-form' }],
  })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedData = contactApiSchema.parse(body)

    // Verify Turnstile CAPTCHA
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip')
    const turnstileResult = await verifyTurnstileToken(validatedData.turnstileToken, ip)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed', details: turnstileResult.error },
        { status: 400 }
      )
    }

    // Send email notification
    const emailResult = await sendEmailNotification(validatedData)

    if (!emailResult.success) {
      console.error('Email send failed:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or call us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
