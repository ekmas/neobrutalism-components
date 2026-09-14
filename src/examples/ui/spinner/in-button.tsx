import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerInButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>
        <Spinner />
        Please wait
      </Button>
      <Button variant="neutral" disabled>
        <Spinner />
        Please wait
      </Button>
    </div>
  )
}
