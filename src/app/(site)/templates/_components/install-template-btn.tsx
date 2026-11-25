"use client"

import { Download } from "lucide-react"

import { useStyling } from "@/components/app/styling-customizer"
import TemplateInstallContent from "@/components/app/template-install-content"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export default function InstallTemplateBtn({ item }: { item: string }) {
  const styling = useStyling()

  return (
    <Dialog>
      <DialogTrigger render={<Button className="w-full" />}>
        Install
        <Download />
      </DialogTrigger>
      <TemplateInstallContent item={item} styling={styling} />
    </Dialog>
  )
}
