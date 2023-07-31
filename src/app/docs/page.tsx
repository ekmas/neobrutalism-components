import DocsMain from '@/components/app/DocsMain'
import Sidebar from '@/components/app/Sidebar'
import { Metadata } from 'next'
import { metadata as rootMetadata } from '../layout'

export const metadata: Metadata = {
  ...rootMetadata,
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
