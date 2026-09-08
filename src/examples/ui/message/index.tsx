import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"

export default function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="https://github.com/ekmas.png" alt="@ekmas" />
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              I checked the latest deployment and the build failed while
              installing dependencies. Can you share the error from the logs?
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Sure, sending it over now. It looks like a peer dependency issue.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
