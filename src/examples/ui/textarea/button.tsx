import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaButtonDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
