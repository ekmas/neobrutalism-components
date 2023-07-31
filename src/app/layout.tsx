import Navbar from '@/components/app/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'

const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalism components',
  description:
    'A collection of type-safe components written in React and Tailwind.',
  keywords: ['react', 'components', 'tailwind'],
  authors: [{ name: 'Samuel Breznjak', url: 'https://github.com/ekmas' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar />
        {children}
        <div id="drawer"></div>
        <div id="modal"></div>
      </body>
    </html>
  )
}
