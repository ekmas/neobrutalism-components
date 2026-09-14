import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup defaultValue={["all"]}>
      <ToggleGroupItem value="all" aria-label="Show all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="missed" aria-label="Show missed">
        Missed
      </ToggleGroupItem>
      <ToggleGroupItem value="archived" aria-label="Show archived">
        Archived
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
