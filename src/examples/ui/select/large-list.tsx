import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Large List" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 100 }).map((_, i) => (
          <SelectItem key={i} value={`item-${i}`}>
            Item {i}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
