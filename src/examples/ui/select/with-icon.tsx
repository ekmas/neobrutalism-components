import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react"

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
        <SelectValue
          placeholder={
            <>
              <CircleDashed />
              With Icon
            </>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="line">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem value="bar">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem value="pie">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
