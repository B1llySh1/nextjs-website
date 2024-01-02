import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

// components
import NavBar from './_components/NavBar'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Billy Webpage',
  description: 'Simple web in progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
