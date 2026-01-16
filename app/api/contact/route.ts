import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// Create a Supabase client with the anon key for public API routes
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

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

    // TODO: Send email notification here (optional)
    // For now, the submission is safely stored in the database
    // and can be viewed in the admin dashboard

    return NextResponse.json({ success: true, id: data.id })
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
