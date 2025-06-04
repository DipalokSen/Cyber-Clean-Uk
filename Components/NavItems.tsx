"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'

 const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companion', href: '/companion' },
    { label: 'My Journey', href: '/my-journey' },
  ]

const NavItems = () => {
 const pathName=usePathname()

  return (
    <nav className='flex items-center gap-4'>
      {navItems.map(({ label, href }) => (
        <Link key={label} 
        
        
        href={href} >
          {label }
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
