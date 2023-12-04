'use client'

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav>
        <ul>
            <div className="logo"><h1>Logo</h1></div>

            <div className="link-container">
                <Link href='/' className='link'>Home</Link>
                <Link href='/about'className='link'>About</Link>
                <Link href='/portfolio'className='link'>Portfolio</Link>
            </div>
            <button className="button"   onClick={()=> router.push("contact")}> Lets talk</button>
        </ul>
    </nav>
  )
}

export default Navbar
