import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <div className="logo"><h1>Logo</h1></div>
            <div className="link-container">
                <Link href='/' className='link'>Home</Link>
                <Link href='/about'className='link'>About</Link>
                <Link href='/portfolio'className='link'>Portfolio</Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
