"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.jpg'
import { Boxes, BriefcaseBusiness, ChevronDown, ChevronRight, Columns4, LayoutGrid, LayoutList, LogOut, SendToBack, Settings, Slack, Store, TicketCheck, Truck, UserCheck, Users2, Warehouse } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Sidebar({ showSideBar, setShowSideBar }) {
  const pathName = usePathname()
  const catalogueLinks = [
    {
      title : 'Products',
      icon : Boxes,
      href : "/dashboard/products"
    },
    {
      title : 'Categories',
      icon : LayoutList,
      href : "/dashboard/categories"
    },
    {
      title : 'Attributes',
      icon : SendToBack,
      href : "/dashboard/attributes"
    },
    {
      title : 'Cupons',
      icon : TicketCheck,
      href : "/dashboard/cupons"
    },
    {
      title : 'Store Sliders',
      icon : Columns4,
      href : "/dashboard/sliders"
    },
  ]
  const SidebarLinks = [
    {
      title : 'Customers',
      icon : Users2,
      href : "/dashboard/customers"
    },
    {
      title : 'Markets',
      icon : Warehouse,
      href : "/dashboard/markets"
    },
    {
      title : 'Vendors',
      icon : UserCheck,
      href : "/dashboard/vendors"
    },
    {
      title : 'Orders',
      icon : Truck,
      href : "/dashboard/orders"
    },
    {
      title : 'Staff',
      icon : BriefcaseBusiness,
      href : "/dashboard/staff"
    },
    {
      title : 'Settings',
      icon : Settings,
      href : "/dashboard/settings"
    },
    {
      title : 'Online Shop',
      icon : Store,
      href : "/dashboard/shop"
    }
  ]
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className={showSideBar ? "sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white  w-64 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md" : "hidden sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white  w-64 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-md"}>
        <Link onClick={() => setShowSideBar(false)} className="flex items-center px-6 py-4" href="/dashboard">
          <Image src={logo} alt='Logo' className="w-16"/>
        </Link>
        <div className="space-y-2 flex flex-col ">
            <Link onClick={() => setShowSideBar(false)} href="/dashboard" className={pathName == "/dashboard" ? "flex items-center space-x-3 px-6 py-3 border-l-8 border-green-600 text-green-600" :"flex items-center space-x-3 px-6 py-3" }>
              <LayoutGrid />
              <span>Dashboard</span>
            </Link>
            <Collapsible className="px-6 py-2">
              <CollapsibleTrigger className="" onClick={() => setOpenMenu(!openMenu)}>
                <button className="flex items-center space-x-3 py-2">
                  <div className="flex space-x-3">
                    <Slack />
                    <span>Catalogue</span>
                  </div>
                  {openMenu ? <ChevronDown /> : <ChevronRight />}
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-3 py-3 pl-6 dark:bg-slate-800 bg-white rounded-lg dark:text-slate-50 text-slate-800 shadow-lg">
                  {catalogueLinks.map((item, index)=>{
                    const Icon = item.icon
                    return(
                      <Link onClick={() => setShowSideBar(false)} key={index} href={item.href} className={pathName == item.href ? "flex items-center space-x-3 py-1 text-sm text-green-600 " :"flex items-center space-x-3 py-1" }>
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    )
                  })
                  }
              </CollapsibleContent>
            </Collapsible>
            {
              SidebarLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link onClick={() => setShowSideBar(false)} key={index} href={item.href} className={item.href == pathName ? "flex items-center space-x-3 px-6 py-3 border-l-8 border-green-600 text-green-600" :"flex items-center space-x-3 px-6 py-3" }>
                    <Icon />
                    <span>{item.title}</span>
                  </Link>
                )
              }) 
            }
            <div className="px-6 py-2">
              <button className="flex items-center space-x-3 px-6 py-3 bg-green-600 rounded-md">
                <LogOut />
                <span>Log Out</span>
              </button>
            </div>
        </div>
    </div>
  )
}
