'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { ContactSubmission } from '@/lib/supabase/types'

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkAuthAndFetchData()
  }, [])

  const checkAuthAndFetchData = async () => {
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      router.push('/admin')
      return
    }

    fetchSubmissions()
  }

  const fetchSubmissions = async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching submissions:', error)
    } else {
      setSubmissions(data || [])
    }
    setIsLoading(false)
  }

  const markAsRead = async (id: string) => {
    await supabase
      .from('contact_submissions')
      .update({ read: true })
      .eq('id', id)

    setSubmissions(submissions.map(s =>
      s.id === id ? { ...s, read: true } : s
    ))

    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, read: true })
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const filteredSubmissions = submissions.filter(s => {
    if (filter === 'unread') return !s.read
    if (filter === 'read') return s.read
    return true
  })

  const unreadCount = submissions.filter(s => !s.read).length

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contact Submissions</h1>
            <p className="text-sm text-gray-500">
              {submissions.length} total, {unreadCount} unread
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter tabs */}
        <div className="mb-6 flex gap-2">
          {(['all', 'unread', 'read'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'unread' && unreadCount > 0 && (
                <span className="ml-2 bg-white text-amber-700 px-2 py-0.5 rounded-full text-xs">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Submissions list */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 max-h-[calc(100vh-280px)] overflow-y-auto">
              {filteredSubmissions.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No submissions found
                </div>
              ) : (
                filteredSubmissions.map((submission) => (
                  <button
                    key={submission.id}
                    onClick={() => {
                      setSelectedSubmission(submission)
                      if (!submission.read) {
                        markAsRead(submission.id)
                      }
                    }}
                    className={`w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors ${
                      selectedSubmission?.id === submission.id ? 'bg-amber-50' : ''
                    } ${!submission.read ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {!submission.read && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          )}
                          <p className={`text-sm truncate ${!submission.read ? 'font-semibold' : 'font-medium'} text-gray-900`}>
                            {submission.name}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{submission.email}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {submission.project_types.join(', ')}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                        {formatDate(submission.created_at)}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Detail panel */}
          <div className="bg-white rounded-lg shadow">
            {selectedSubmission ? (
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedSubmission.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {formatDate(selectedSubmission.created_at)}
                    </p>
                  </div>
                  {selectedSubmission.read && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                      Read
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm">
                        <span className="text-gray-500">Email:</span>{' '}
                        <a href={`mailto:${selectedSubmission.email}`} className="text-amber-700 hover:underline">
                          {selectedSubmission.email}
                        </a>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Phone:</span>{' '}
                        <a href={`tel:${selectedSubmission.phone}`} className="text-amber-700 hover:underline">
                          {selectedSubmission.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {(selectedSubmission.street_address || selectedSubmission.city || selectedSubmission.zip) && (
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Project Location</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-900">
                          {selectedSubmission.street_address && <>{selectedSubmission.street_address}<br /></>}
                          {selectedSubmission.city && <>{selectedSubmission.city}, </>}
                          {selectedSubmission.zip}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Project Details</h3>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm">
                        <span className="text-gray-500">Type:</span>{' '}
                        <span className="text-gray-900">{selectedSubmission.project_types.join(', ')}</span>
                      </p>
                      {selectedSubmission.timeline && (
                        <p className="text-sm">
                          <span className="text-gray-500">Timeline:</span>{' '}
                          <span className="text-gray-900">{selectedSubmission.timeline}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {selectedSubmission.message && (
                    <div>
                      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Message</h3>
                      <p className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">
                        {selectedSubmission.message}
                      </p>
                    </div>
                  )}

                  {selectedSubmission.email_sent !== undefined && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Email notification: {selectedSubmission.email_sent ? 'Sent' : 'Not sent'}
                        {selectedSubmission.email_error && (
                          <span className="text-red-600 ml-2">({selectedSubmission.email_error})</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                Select a submission to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
