import React from 'react'
import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeFetcherBtn from '../ThemeSwitcherBtn'

export default function Navbar({ setShowSideBar, showSideBar }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-4 fixed top-0 w-full z-50 sm:pr-[20rem]">
      {/* Icon */}
      <button className="text-green-700 dark:text-green-500" onClick={() => setShowSideBar(!showSideBar)}>
        <AlignJustify />
      </button>

      {/* Icons */}
      <div className="flex space-x-3">
        <ThemeFetcherBtn />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
              <Bell className='text-green-700 dark:text-green-500' />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {[...Array(3)].map((_, i) => (
              <DropdownMenuItem key={i}>
                <div className="flex items-center space-x-2">
                  <img src='/Passport.jpg' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out</p>
                    <div className="flex items-center space-x-2">
                      <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                      <p className="text-red-500">2 days ago</p>
                    </div>
                  </div>
                  <span className="cursor-pointer">
                    <X />
                  </span>
                </div>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer">
              <img src='/Passport.jpg' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
