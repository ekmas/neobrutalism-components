import { CopyIcon, RefreshCwIcon, ThumbsUpIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"

export default function MessageWithActionsDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Here is a summary of the changes: the registry was rebuilt, two
              stale routes were removed and the docs were updated.
            </BubbleContent>
          </Bubble>
          <div className="flex items-center gap-1">
            <Button
              variant="neutral"
              size="icon"
              className="size-8 shadow-none! hover:translate-x-0! hover:translate-y-0!"
              aria-label="Copy"
            >
              <CopyIcon />
            </Button>
            <Button
              variant="neutral"
              size="icon"
              className="size-8 shadow-none! hover:translate-x-0! hover:translate-y-0!"
              aria-label="Regenerate"
            >
              <RefreshCwIcon />
            </Button>
            <Button
              variant="neutral"
              size="icon"
              className="size-8 shadow-none! hover:translate-x-0! hover:translate-y-0!"
              aria-label="Like"
            >
              <ThumbsUpIcon />
            </Button>
          </div>
        </MessageContent>
      </Message>
    </div>
  )
}
