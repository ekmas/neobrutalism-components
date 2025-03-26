import { BellRing, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import { cn } from "@/lib/utils"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className="bg-background text-foreground font-base" {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription className="text-foreground">
          You have 3 unread messages.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-base border-2 bg-secondary-background border-border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-heading leading-none">
              Push Notifications
            </p>
            <p className="text-sm">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-3 w-3 translate-y-1 rounded-full bg-main border-2 border-border" />
              <div className="space-y-1">
                <p className="text-sm font-heading leading-none">
                  {notification.title}
                </p>
                <p className="text-sm">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
