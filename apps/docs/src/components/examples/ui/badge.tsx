import { Badge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-col gap-5">
      <Badge>Default</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  )
}
