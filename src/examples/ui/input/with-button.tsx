import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button variant="noShadow" type="submit">
        Subscribe
      </Button>
    </div>
  )
}
