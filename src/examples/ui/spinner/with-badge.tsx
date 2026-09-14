import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerWithBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="neutral">
        <Spinner />
        Syncing
      </Badge>
    </div>
  )
}
