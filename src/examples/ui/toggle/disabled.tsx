import { UnderlineIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabledDemo() {
  return (
    <Toggle aria-label="Toggle underline" disabled>
      <UnderlineIcon />
    </Toggle>
  )
}
