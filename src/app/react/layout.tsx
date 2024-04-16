import { REACT_SIDEBAR } from '@/data/sidebar-links'

import DocsLayout from '@/layouts/Docs'
import Sidebar from '@/components/app/Sidebar'

export default function ReactDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar links={REACT_SIDEBAR} />
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
