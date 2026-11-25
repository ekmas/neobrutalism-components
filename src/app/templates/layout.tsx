import SetStylingPref from "@/components/app/set-styling-pref"
import TemplateToolbar from "@/components/app/template-toolbar"

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <SetStylingPref />
      <TemplateToolbar />
    </>
  )
}
