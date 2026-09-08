import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ButtonGroupWithDropdownDemo() {
  return (
    <ButtonGroup>
      <Button variant="neutral">Update</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="neutral" size="icon" aria-label="More options" />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Disable</DropdownMenuItem>
          <DropdownMenuItem>Uninstall</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
