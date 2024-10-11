import React from 'react'
import Largecard from './Largecard'

export default function Largecards() {
    const orderStats = [
        {
            title: "Today's Orders",
            sales: 110000,
            color: "bg-green-600"
        },
        {
            title: "Yesterday's Orders",
            sales: 130000,
            color: "bg-blue-600"
            },
        {
            title: "This Month",
            sales: 300000,
            color: "bg-orange-600"
        },
        {
            title: "All-Time Sales",
            sales: 110000,
            color: "bg-purple-600"
        }
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-m lg:grid-cols-4 gap-4 py-8">
        {
            orderStats.map((stat, index) => {
                return (
                    <Largecard className="bg-green-600" data={stat} key={index} />
                )
            })
       }
    </div>
  )
}
