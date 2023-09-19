import DocsMain from '@/components/app/DocsMain'
import Sidebar from '@/components/app/Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - Neobrtualism Components',
  description: 'Documentation for neobrutalism components.',
}

export default function Docs() {
  return (
    <>
      <Sidebar />
      <DocsMain />
    </>
  )
}
