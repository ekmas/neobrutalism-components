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

const charts = [
  {
    value: "line",
    label: (
      <>
        <ChartLineIcon />
        Line
      </>
    ),
  },
  {
    value: "bar",
    label: (
      <>
        <ChartBarIcon />
        Bar
      </>
    ),
  },
  {
    value: "pie",
    label: (
      <>
        <ChartPieIcon />
        Pie
      </>
    ),
  },
]

export default function SelectDemo() {
  return (
    <Select items={charts}>
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
        {charts.map((chart) => (
          <SelectItem key={chart.value} value={chart.value}>
            {chart.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
