import { BoldIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold" defaultPressed>
      <BoldIcon />
    </Toggle>
  )
}
