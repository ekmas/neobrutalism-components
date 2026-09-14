import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const items = Array.from({ length: 100 }, (_, i) => ({
  value: `item-${i}`,
  label: `Item ${i}`,
}))

export default function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Large List" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
