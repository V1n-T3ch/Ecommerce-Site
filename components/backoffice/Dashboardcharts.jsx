import React from 'react'
import Weeklysaleschart from './Weeklysaleschart'
import Bestsellingproductscharts from './Bestsellingproductscharts'

export default function Dashboardcharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Weeklysaleschart />
        <Bestsellingproductscharts />
    </div>
  )
}
