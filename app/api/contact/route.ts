import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// Create a Supabase client with the service role key for server-side operations
// This bypasses RLS and allows us to insert submissions and update email status
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  }
)

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  street_address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  project_types: z.array(z.string()).min(1, 'Please select at least one project type'),
  timeline: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  turnstileToken: z.string().min(1, 'CAPTCHA verification required'),
})

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

type ContactData = z.infer<typeof contactSchema>

/**
 * Escapes HTML special characters to prevent XSS attacks in email templates
 */
function escapeHtml(text: string | null | undefined): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

/**
 * Escapes HTML and converts newlines to <br> tags for message fields
 */
function escapeHtmlWithBreaks(text: string | null | undefined): string {
  if (!text) return ''
  return escapeHtml(text).replace(/\n/g, '<br>')
}

async function sendEmailNotification(data: ContactData, submissionId: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.SMTP2GO_API_KEY
  if (!apiKey) {
    return { success: false, error: 'SMTP2GO API key not configured' }
  }

  // Escape all user inputs to prevent XSS attacks
  const location = [data.street_address, data.city, data.zip].filter(Boolean).map(escapeHtml).join(', ')
  const escapedName = escapeHtml(data.name)
  const escapedEmail = escapeHtml(data.email)
  const escapedPhone = escapeHtml(data.phone)
  const escapedProjectTypes = data.project_types.map(escapeHtml).join(', ')
  const escapedTimeline = escapeHtml(data.timeline)
  const escapedMessage = escapeHtmlWithBreaks(data.message)

  const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2C1810; color: #FBF7F0; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #FBF7F0; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #5B3A2A; }
    .value { margin-top: 5px; }
    .message-box { background-color: #fff; border: 1px solid #ddd; padding: 15px; margin-top: 10px; }
    .footer { text-align: center; padding: 15px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapedName}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapedEmail}">${escapedEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${escapedPhone}">${escapedPhone}</a></div>
      </div>
      ${location ? `
      <div class="field">
        <div class="label">Project Location</div>
        <div class="value">${location}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Project Type</div>
        <div class="value">${escapedProjectTypes}</div>
      </div>
      ${data.timeline ? `
      <div class="field">
        <div class="label">Timeline</div>
        <div class="value">${escapedTimeline}</div>
      </div>
      ` : ''}
      ${data.message ? `
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapedMessage}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>This submission has been saved to your admin dashboard.</p>
      <p>Submission ID: ${submissionId}</p>
    </div>
  </div>
</body>
</html>
`

  try {
    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        to: ['dave@prowoodinteriors.com', 'prowoodinteriors@gmail.com'],
        sender: 'ProWood Interiors <noreply@prowoodinteriors.com>',
        subject: `New Contact Form Submission from ${data.name}`,
        html_body: emailBody,
      }),
    })

    const result = await response.json()

    if (result.data?.succeeded > 0) {
      return { success: true }
    } else {
      return { success: false, error: result.data?.failures?.[0]?.error || 'Email send failed' }
    }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Verify Turnstile token
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip')
    const turnstileResult = await verifyTurnstileToken(validatedData.turnstileToken, ip)
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed', details: turnstileResult.error },
        { status: 400 }
      )
    }

    // Insert the submission into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        street_address: validatedData.street_address || null,
        city: validatedData.city || null,
        zip: validatedData.zip || null,
        project_types: validatedData.project_types,
        timeline: validatedData.timeline || null,
        message: validatedData.message || null,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      )
    }

    // Send email notification
    const emailResult = await sendEmailNotification(validatedData, data.id)

    // Update the submission with email status
    await supabase
      .from('contact_submissions')
      .update({
        email_sent: emailResult.success,
        email_error: emailResult.error || null,
      })
      .eq('id', data.id)

    if (!emailResult.success) {
      console.error('Email send failed:', emailResult.error)
    }

    return NextResponse.json({ success: true, id: data.id, emailSent: emailResult.success })
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
