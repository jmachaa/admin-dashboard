'use client'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
      </nav>
    </aside>
  )
}