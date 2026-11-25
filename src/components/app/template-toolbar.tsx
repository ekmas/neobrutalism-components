"use client"

import { ArrowLeft, Download, Paintbrush } from "lucide-react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  StylingSheetContent,
  useStyling,
} from "@/components/app/styling-customizer"
import TemplateInstallContent from "@/components/app/template-install-content"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

// Registry item that installs each template page.
const TEMPLATE_ITEMS: Record<string, string> = {
  "/templates/saas": "/r/saas-landing.json",
  "/templates/dashboard": "/r/dashboard.json",
}

// Floating dock on template pages: a link back to the templates list, the
// same styling sheet as the styling page (so changes here also apply to the
// docs), and install instructions for the template with the current styling.
export default function TemplateToolbar() {
  const styling = useStyling()
  const pathname = usePathname()
  // Hidden until mounted, and inside the iframe previews on /templates.
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(window.self === window.top)
  }, [])

  if (!visible) return null

  const templateItem = TEMPLATE_ITEMS[pathname]

  return (
    <div
      role="toolbar"
      aria-label="Template tools"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-base border-2 border-border bg-secondary-background p-1.5 shadow-shadow sm:bottom-6 sm:gap-2 sm:p-2"
    >
      <Button
        variant="noShadow"
        nativeButton={false}
        render={<Link href="/templates" />}
        aria-label="Back to templates"
        className="bg-secondary-background px-3 text-foreground sm:px-4"
      >
        <ArrowLeft />
        <span className="hidden min-[400px]:inline">Templates</span>
      </Button>
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="noShadow"
              aria-label="Customize styling"
              className="bg-secondary-background px-3 text-foreground sm:px-4"
            />
          }
        >
          Customize
          <Paintbrush />
        </SheetTrigger>
        <StylingSheetContent styling={styling} />
      </Sheet>
      {templateItem && (
        <Dialog>
          <DialogTrigger
            render={<Button variant="noShadow" className="px-3 sm:px-4" />}
          >
            Install
            <Download />
          </DialogTrigger>
          <TemplateInstallContent item={templateItem} styling={styling} />
        </Dialog>
      )}
    </div>
  )
}
