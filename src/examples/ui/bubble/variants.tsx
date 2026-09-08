import { Bubble, BubbleContent } from "@/components/ui/bubble"

export default function BubbleVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Bubble>
        <BubbleContent>Default bubbles use the main color.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary bubbles sit on a white surface.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted bubbles blend into the background.</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline bubbles only draw a border.</BubbleContent>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>
          Ghost bubbles have no frame and can take the full width.
        </BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive bubbles flag failed actions.</BubbleContent>
      </Bubble>
    </div>
  )
}
