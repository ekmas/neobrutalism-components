"use client"

import * as React from "react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/components/ui/message-scroller"

const replies = [
  "Sounds good to me.",
  "Can you double check the build output?",
  "Done, everything looks clean.",
  "Let us ship it then.",
  "Pushing now.",
]

function AddMessageButton({ onAdd }: { onAdd: () => void }) {
  const { scrollToEnd } = useMessageScroller()

  return (
    <Button
      onClick={() => {
        onAdd()
        requestAnimationFrame(() => scrollToEnd({ behavior: "smooth" }))
      }}
    >
      Add message
    </Button>
  )
}

export default function MessageScrollerAddMessagesDemo() {
  const [messages, setMessages] = React.useState<string[]>([
    "Hey, are you around?",
    "Yes, what is up?",
    "I need a review on the message scroller.",
  ])

  function addMessage() {
    setMessages((current) => [
      ...current,
      replies[current.length % replies.length],
    ])
  }

  return (
    <MessageScrollerProvider>
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="h-[300px] w-full rounded-base border-2 border-border bg-background p-4 shadow-shadow">
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent className="gap-3">
                {messages.map((text, index) => (
                  <MessageScrollerItem
                    key={index}
                    messageId={`message-${index}`}
                  >
                    <Message align={index % 2 === 0 ? "start" : "end"}>
                      <MessageContent>
                        <Bubble variant={index % 2 === 0 ? "muted" : "default"}>
                          <BubbleContent>{text}</BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </div>
        <div className="flex justify-end">
          <AddMessageButton onAdd={addMessage} />
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
