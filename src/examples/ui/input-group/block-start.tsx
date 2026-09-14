import { InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export default function InputGroupBlockStartDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="John" />
      <InputGroupAddon align="block-start">
        <InputGroupText className="font-heading text-foreground">
          First Name
        </InputGroupText>
        <InfoIcon className="ml-auto" />
      </InputGroupAddon>
    </InputGroup>
  )
}
