import { BadgeCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function ItemDemo() {
  return (
    <Item className="max-w-md">
      <ItemMedia variant="icon">
        <BadgeCheckIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="neutral" size="sm" className="shadow-none!">
          Action
        </Button>
      </ItemActions>
    </Item>
  )
}
