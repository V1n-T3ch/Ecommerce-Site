import Heading from '@/components/backoffice/Heading'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function PageHeader({ heading,LinkTitle,href }) {
  return (
    <div>
        <div className="flex justify-between py-4 mb-4">
        <Heading title={heading}/>
        <Link href={href} className="text-white  bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-green-600/30 me-2 mb-2"><Plus/>
        <span>{LinkTitle}</span></Link>
      </div>
    </div>
  )
}
