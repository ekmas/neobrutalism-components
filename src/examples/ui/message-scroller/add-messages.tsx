"use client"

import { RotateCwIcon } from "lucide-react"

import * as React from "react"

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
  useMessageScroller,
} from "@/components/ui/message-scroller"

type ChatMessage = { from: "me" | "them"; text: string }

const initialMessages: ChatMessage[] = [
  { from: "them", text: "Hey, are you around?" },
  { from: "me", text: "Yes, what is up?" },
  { from: "them", text: "I need a review on the message scroller." },
]

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
  const [messages, setMessages] = React.useState(initialMessages)

  function addMessage() {
    setMessages((current) => {
      const last = current[current.length - 1]
      const added = current.length - initialMessages.length

      return [
        ...current,
        {
          from: last?.from === "me" ? "them" : "me",
          text: replies[added % replies.length],
        },
      ]
    })
  }

  return (
    <MessageScrollerProvider>
      <div className="flex w-full max-w-md flex-col gap-4">
        <div className="flex h-[360px] w-full flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background text-foreground">
          <div className="flex items-center gap-3 p-4">
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
              <span className="truncate font-heading">New Chat</span>
              <span className="truncate font-base">
                How can I help you today?
              </span>
            </div>
            <Button
              variant="neutral"
              size="icon"
              className="size-9 shadow-none!"
              aria-label="Reset chat"
              onClick={() => setMessages(initialMessages)}
            >
              <RotateCwIcon />
            </Button>
          </div>
          <div className="h-0.5 w-full shrink-0 bg-border" />
          <MessageScroller className="p-4">
            <MessageScrollerViewport>
              <MessageScrollerContent className="gap-4">
                {messages.map((message, index) => (
                  <MessageScrollerItem
                    key={index}
                    messageId={`message-${index}`}
                  >
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
        </div>
        <div className="flex justify-end">
          <AddMessageButton onAdd={addMessage} />
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
