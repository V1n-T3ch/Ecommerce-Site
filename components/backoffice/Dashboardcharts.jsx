import React from 'react'
import Weeklysaleschart from './Weeklysaleschart'
import Bestsellingproductscharts from './Bestsellingproductscharts'

export default function Dashboardcharts() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mt-6 mb-1 text-center text-slate-800 dark:text-slate-50">Sales Charts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8">
        <Weeklysaleschart />
        <Bestsellingproductscharts />
      </div>
    </div>
  )
}
