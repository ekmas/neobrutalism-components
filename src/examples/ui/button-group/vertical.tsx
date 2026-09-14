import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupVerticalDemo() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Zoom controls">
      <Button variant="neutral" size="icon" aria-label="Zoom in">
        <PlusIcon />
      </Button>
      <Button variant="neutral" size="icon" aria-label="Zoom out">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
