import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleOutlineDemo() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle bold" defaultPressed>
        <BoldIcon />
        Bold
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
    </div>
  )
}
