import { ArrowLeftIcon, ArrowRightIcon, CircleDashedIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

export default function KbdWithIconDemo() {
  return (
    <KbdGroup>
      <Kbd>
        <CircleDashedIcon />
      </Kbd>
      <Kbd>
        <ArrowLeftIcon />
      </Kbd>
      <Kbd>
        <ArrowRightIcon />
      </Kbd>
    </KbdGroup>
  )
}
