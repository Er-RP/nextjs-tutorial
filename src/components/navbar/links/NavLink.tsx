'use client' // usePathName hook should be used in client component.
import { INavLink } from '@/types/common'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    navLink :INavLink 
}

const NavLink = ({navLink}: Props) => {
    const pathname = usePathname()
  return (
    <Link href={navLink?.path} className={`min-w-24 font-semibold rounded-2xl  p-2 text-center ${pathname === navLink?.path ? 'bg-text-light text-main' :''}`}>
          {navLink?.name}
        </Link>
  )
}

export default NavLink