import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - ProWood Interiors',
  robots: 'noindex, nofollow',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
