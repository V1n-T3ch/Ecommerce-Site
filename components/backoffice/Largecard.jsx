import { Layers } from 'lucide-react'
import React from 'react'

export default function Largecard({data}) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}>
        <Layers />
        <h4>{data.title}</h4>
        <h2 className="text-2xl lg:text-3xl">Ksh.{data.sales}</h2>
    </div>
  )
}
