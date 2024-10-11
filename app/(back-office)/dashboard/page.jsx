import Dashboardcharts from '@/components/backoffice/Dashboardcharts'
import Heading from '@/components/backoffice/Heading'
import Largecards from '@/components/backoffice/Largecards'
import Smallcards from '@/components/backoffice/Smallcards'
import React from 'react'

export default function page() {
  return (
    <div>
        <Heading title="Dashboard Overview" />
        {/* Large Cards */}
        <Largecards />
        {/* Small Cards */}
        <Smallcards />
        {/* Charts */}
        <Dashboardcharts />
        {/* Recent Orders Table */}
    </div>
  )
}
