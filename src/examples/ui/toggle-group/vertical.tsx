import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupVerticalDemo() {
  return (
    <ToggleGroup multiple orientation="vertical" defaultValue={["italic"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
