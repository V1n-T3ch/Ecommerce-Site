"use client"
import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React, { useState } from 'react'

export default function Layout({children}) {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className="flex">
        {/* Side Bar */}
        <Sidebar showSideBar={showSideBar} />
        <div className="lg:ml-64 ml-0 w-full bg-slate-100 min-h-screen">
          {/* Header */}
          <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          {/* Main */}
          <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
            {children}
          </main>
        </div>
        {/* Main Body */}
    </div>
  )
}
