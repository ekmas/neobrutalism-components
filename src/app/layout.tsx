import Navbar from '@/components/app/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalism components',
  description:
    'A collection of type-safe components written in React and Tailwind.',
  keywords: [
    'neobrutalism',
    'neobrutalism components',
    'neobrutalism tailwind',
    'react neobrutalism',
    'react tailwind components',
  ],
  authors: [{ name: 'Samuel Breznjak', url: 'https://github.com/ekmas' }],
  openGraph: {
    type: 'website',
    description:
      "'A collection of type-safe components written in React and Tailwind.'",
    images: ['https://neobrutalism-components.vercel.app/preview.png'],
    url: 'https://neobrutalism-components.vercel.app/',
    title: 'Neobrutalism components',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
        <div id="drawer"></div>
        <div id="modal"></div>
      </body>
    </html>
  )
}
