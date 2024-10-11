import React from 'react'
import Smallcard from './Smallcard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function Largecards() {
    const orderStatus = [
        {
            title: "Total Orders",
            number: 100,
            iconBg: "bg-green-600",
            icon: ShoppingCart,
        },
        {
            title: "Pending Orders",
            number: 200,
            iconBg: "bg-blue-600",
            icon: Loader2,
        },
        {
            title: "Processing Orders",
            number: 300,
            iconBg: "bg-orange-600",
            icon: RefreshCcw,
        },
        {
            title: "Delivered Orders",
            number: 400,
            iconBg: "bg-purple-600",
            icon: CheckCheck,
        }
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-m lg:grid-cols-4 gap-4 py-8">
        {
            orderStatus.map((data, index) => {
                return (
                    <Smallcard data={data} />
                )
            })
       }
    </div>
  )
}
