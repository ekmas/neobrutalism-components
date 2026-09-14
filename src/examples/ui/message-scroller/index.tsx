import { RotateCwIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const messages = [
  { from: "me", text: "Deploying to prod real quick." },
  { from: "them", text: "It's 4:55 PM. On a Friday." },
  { from: "me", text: "Ship it." },
  { from: "them", text: "Did the registry build go through?" },
  { from: "me", text: "Yes, one stale route showed up though." },
  { from: "them", text: "Which one?" },
  { from: "me", text: "The old toast page, still in the sidebar." },
  { from: "them", text: "Remove it and rebuild." },
  { from: "me", text: "Done. Lint and tsc are clean." },
  { from: "them", text: "Charts render fine with recharts 3?" },
  { from: "me", text: "They do. Pushing the fix now." },
  { from: "them", text: "Perfect, that is exactly what I had in mind." },
]

export default function MessageScrollerDemo() {
  return (
    <div className="flex h-[360px] w-full max-w-md flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background text-foreground">
      <div className="flex items-center gap-3 p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
          <span className="truncate font-heading">New Chat</span>
          <span className="truncate font-base">How can I help you today?</span>
        </div>
        <Button
          variant="neutral"
          size="icon"
          className="size-9 shadow-none!"
          aria-label="Reset chat"
        >
          <RotateCwIcon />
        </Button>
      </div>
      <div className="h-0.5 w-full shrink-0 bg-border" />
      <MessageScrollerProvider>
        <MessageScroller className="p-4">
          <MessageScrollerViewport>
            <MessageScrollerContent className="gap-4">
              {messages.map((message, index) => (
                <MessageScrollerItem key={index} messageId={`message-${index}`}>
                  <Message align={message.from === "me" ? "end" : "start"}>
                    <MessageAvatar>
                      <Avatar>
                        <AvatarFallback>BF</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                    <MessageContent>
                      <Bubble
                        variant={message.from === "me" ? "default" : "muted"}
                      >
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
