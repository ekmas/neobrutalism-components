import { SendIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export default function InputGroupTextareaDemo() {
  return (
    <InputGroup className="w-full">
      <InputGroupTextarea placeholder="Ask anything..." />
      <InputGroupAddon align="block-end" className="border-t-2 border-border">
        <InputGroupText>Markdown supported</InputGroupText>
        <InputGroupButton
          variant="default"
          size="icon-sm"
          className="ml-auto"
          aria-label="Send"
        >
          <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
