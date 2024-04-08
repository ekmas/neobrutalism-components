import Navbar from '@/components/app/Navbar'

import './globals.css'

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import SetStylingPref from '@/components/app/SetStylingPref'
import { Toaster } from '@/components/ui/toaster'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neobrutalism components',
  description: 'A collection of neobrutalism-styled Tailwind components.',
  keywords: [
    'neobrutalism',
    'neobrutalism components',
    'neobrutalism tailwind',
    'react neobrutalism',
    'react tailwind components',
    'shadcn components',
    'shadcn neobrutalism',
  ],
  authors: [{ name: 'Samuel Breznjak', url: 'https://github.com/ekmas' }],
  openGraph: {
    type: 'website',
    description: 'A collection of neobrutalism-styled Tailwind components.',
    images: ['https://neobrutalism-components.vercel.app/preview.png'],
    url: 'https://neobrutalism-components.vercel.app/',
    title: 'Neobrutalism components',
  },
  metadataBase: new URL('https://neobrutalism-components.vercel.app/'),
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
        <Toaster />
        <SetStylingPref />
      </body>
    </html>
  )
}
