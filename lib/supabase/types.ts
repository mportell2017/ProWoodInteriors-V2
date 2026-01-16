export type ContactSubmission = {
  id: string
  created_at: string
  name: string
  phone: string
  email: string
  street_address: string | null
  city: string | null
  zip: string | null
  project_types: string[]
  timeline: string | null
  message: string | null
  email_sent: boolean
  email_error: string | null
  read: boolean
}

export type ContactSubmissionInsert = Omit<ContactSubmission, 'id' | 'created_at' | 'email_sent' | 'email_error' | 'read'>
