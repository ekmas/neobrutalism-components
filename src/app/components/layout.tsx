import DocsLayout from "@/layouts/Docs"
import Sidebar from "@/components/app/Sidebar"

export default function ComponentsDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Sidebar />
      <DocsLayout>{children}</DocsLayout>
    </>
  )
}
