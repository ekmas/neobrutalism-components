import { Bubble, BubbleContent } from "@/components/ui/bubble"

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Bubble variant="muted">
        <BubbleContent>
          Hey! I just pushed the new registry build. Can you take a look?
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          On it. I will run the checks and get back to you in a minute.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
