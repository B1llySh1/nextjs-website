import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <h1>Billy Shi</h1>
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}
