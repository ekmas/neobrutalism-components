import { Bubble, BubbleContent } from "@/components/ui/bubble"

export default function BubbleAsButtonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Bubble variant="muted">
        <BubbleContent render={<button type="button" />}>
          This bubble is rendered as a button. Hover or focus it to see the
          interactive state.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent render={<a href="#" />}>
          This one is rendered as a link.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
