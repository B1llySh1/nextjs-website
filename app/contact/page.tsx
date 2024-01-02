import Link from 'next/link'
import React from 'react'

export default function Contact
() {
  return (
    <div className='flex justify-center m-10'>
        <Link href="https://github.com/B1llySh1">
            <button className='btn-primary'>
                GitHub
            </button>
        </Link>
    </div>
  )
}
