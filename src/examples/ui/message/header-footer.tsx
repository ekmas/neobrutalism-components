import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"

export default function MessageHeaderFooterDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Ekmas</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              The header shows who sent the message and the footer shows when.
            </BubbleContent>
          </Bubble>
          <MessageFooter>10:24 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>You</MessageHeader>
          <Bubble>
            <BubbleContent>Got it, thanks for the explanation.</BubbleContent>
          </Bubble>
          <MessageFooter>10:26 AM</MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
