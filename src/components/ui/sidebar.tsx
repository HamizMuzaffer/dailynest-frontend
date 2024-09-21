'use client'

import { useState } from 'react'
import { CalendarIcon, LayoutDashboardIcon, UserIcon, ActivityIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

export function SidebarComponent() {
  const [expanded, setExpanded] = useState(false)

  const menuItems = [
    { icon: LayoutDashboardIcon, label: 'Dashboard' },
    { icon: CalendarIcon, label: 'Calendar' },   
    { icon: ActivityIcon, label: 'Progress' },
    { icon: UserIcon, label: 'Profile' },
    
  ]

  return (
    <aside className={cn(
      "flex flex-col h-screen bg-indigo-500 text-white transition-all duration-300",
      expanded ? "w-64" : "w-16",
      "lg:w-64" // Always expanded on large screens
    )}>
      <div className="flex items-center justify-between p-4">
        <h2 className={cn("text-xl font-bold", !expanded && "hidden", "lg:block")}>DailyNest</h2>
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="p-1 rounded-full hover:bg-base lg:hidden"
        >
          {expanded ? <ChevronLeftIcon size={24} /> : <ChevronRightIcon size={24} />}
        </button>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="flex items-center px-4 py-3 hover:bg-base transition-colors"
              >
                <item.icon size={24} />
                <span className={cn("ml-4", !expanded && "hidden", "lg:inline")}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}