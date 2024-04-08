import { Metadata } from 'next'

import { SHADCN_SIDEBAR } from '@/data/sidebar-links'

import DocsLayout from '@/layouts/Docs'
import Sidebar from '@/components/app/Sidebar'

export const metadata: Metadata = {
  title: 'Documentation - Neobrutalism Components',
  description: 'Documentation for neobrutalism components.',
}

export default function ShadcnDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar links={SHADCN_SIDEBAR} />
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
