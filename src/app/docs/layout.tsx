import { MAIN_SIDEBAR } from '@/data/sidebar-links'

import DocsLayout from '@/layouts/Docs'
import Sidebar from '@/components/app/Sidebar'

export default function MainDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar links={MAIN_SIDEBAR} />
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
