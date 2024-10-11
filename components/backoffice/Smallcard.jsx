import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function Smallcard({data}) {
  const { title, number, iconBg, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
        <div className="flex space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
            <Icon />
            </div>
            <div className>
                <p>{title}</p>
                <h1 className="text-2xl font-bold">{number}</h1>
            </div>
        </div>
    </div>
  )
}
