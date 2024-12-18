import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Litter-Free Kenya',
  description: 'Together, for a Cleaner Kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-green-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">Litter-Free Kenya</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-white hover:text-green-200">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-green-200">About Us</Link></li>
              <li><Link href="/join-cleanup" className="text-white hover:text-green-200">Join Cleanup</Link></li>
              <li><Link href="/blog" className="text-white hover:text-green-200">Blog/News</Link></li>
              <li><Link href="/contact" className="text-white hover:text-green-200">Contact</Link></li>
              <li><Link href="/partner" className="text-white hover:text-green-200">Partner</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-green-500 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Litter-Free Kenya. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

