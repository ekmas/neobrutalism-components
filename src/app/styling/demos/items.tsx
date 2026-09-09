import { BellIcon, GitPullRequestIcon, StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const items = [
  {
    icon: GitPullRequestIcon,
    title: "Pull request opened",
    description: "Mia opened #128: pin peer dependency versions",
  },
  {
    icon: StarIcon,
    title: "New star",
    description: "Your repository reached 1,000 stars",
  },
  {
    icon: BellIcon,
    title: "Reminder",
    description: "Release notes are due tomorrow",
  },
]

export default function ItemsDemo() {
  return (
    <ItemGroup className="w-full gap-3">
      {items.map((item) => (
        <Item key={item.title} className="bg-secondary-background">
          <ItemMedia variant="icon">
            <item.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="noShadow" size="sm">
              View
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
