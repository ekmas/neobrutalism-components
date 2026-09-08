import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function ItemWithImageDemo() {
  return (
    <Item className="max-w-md">
      <ItemMedia variant="image">
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="shadcn"
          width={40}
          height={40}
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>shadcn</ItemTitle>
        <ItemDescription>Building things for the web.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="neutral" size="sm" className="shadow-none!">
          Follow
        </Button>
      </ItemActions>
    </Item>
  )
}
