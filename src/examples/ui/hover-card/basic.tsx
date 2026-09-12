import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardBasicDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        href="#"
        className="font-heading underline underline-offset-4"
      >
        Hover Here
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-heading">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="mt-1 text-xs text-foreground">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
