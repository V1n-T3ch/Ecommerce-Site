import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className="bg-slate-700 space-y-6 w-60 h-screen text-slate-50 p-3 fixed left-0 top-0">
        <Link className="mb-6" href="/">Logo</Link>
        <div className="space-y-3 flex flex-col">
            <Link href="/about">Dashboard</Link>
            <Link href="/about">Catalogue</Link>
            <Link href="/about">Customers</Link>
            <Link href="/about">Markets</Link>
            <Link href="/about">Vendors</Link>
            <Link href="/about">Orders</Link>
            <Link href="/about">Staff</Link>
            <Link href="/about">Settings</Link>
            <Link href="/about">Online Store</Link>
        </div>
    </div>
  )
}
