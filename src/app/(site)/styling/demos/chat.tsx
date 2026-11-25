import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"

const thread = [
  {
    author: "Mia",
    time: "10:24 AM",
    fallback: "MI",
    text: "I checked the latest deployment and the build failed while installing dependencies. Can you share the error from the logs?",
  },
  {
    author: "You",
    time: "10:26 AM",
    fallback: "ME",
    align: "end" as const,
    text: "Sure, sending it over now. It looks like a peer dependency issue.",
  },
  {
    author: "Mia",
    time: "10:31 AM",
    fallback: "MI",
    text: "Got it. Pinning the version should fix it, I will push a patch in a minute.",
  },
]

export default function ChatDemo() {
  return (
    <div className="flex w-full flex-col gap-5 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
      {thread.map((message, index) => (
        <Message key={index} align={message.align}>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>{message.fallback}</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>{message.author}</MessageHeader>
            <Bubble variant={message.align === "end" ? "default" : "muted"}>
              <BubbleContent>{message.text}</BubbleContent>
            </Bubble>
            <MessageFooter>{message.time}</MessageFooter>
          </MessageContent>
        </Message>
      ))}
    </div>
  )
}
