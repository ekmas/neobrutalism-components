import { CopyIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function InputGroupWithButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search the docs..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default" size="sm">
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput readOnly defaultValue="https://neobrutalism.dev" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="neutral" size="icon-sm" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
