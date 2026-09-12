import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function ItemAsLinkDemo() {
  return (
    <Item className="max-w-md" render={<a href="#" />}>
      <ItemMedia variant="icon">
        <ExternalLinkIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Visit our documentation</ItemTitle>
        <ItemDescription>
          Learn how to get started with our components.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  )
}
