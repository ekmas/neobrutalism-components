import { Spinner } from "@/components/ui/spinner"

export default function SpinnerSizeDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}
