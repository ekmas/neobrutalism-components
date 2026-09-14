import { HeartIcon, ThumbsUpIcon } from "lucide-react"

import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble"

export default function BubbleWithReactionsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Bubble variant="muted">
        <BubbleContent>
          The new landing page is live. Thanks everyone for the hard work!
        </BubbleContent>
        <BubbleReactions align="start">
          <HeartIcon className="size-3.5" />
          <span className="text-xs">12</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Great job team, that was a big one.</BubbleContent>
        <BubbleReactions side="top">
          <ThumbsUpIcon className="size-3.5" />
          <span className="text-xs">3</span>
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
