"use client"

import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-5">
      <Button
        variant="noShadow"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
        }}
      >
        Default
      </Button>
      <Button
        variant="noShadow"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
            variant: "destructive",
          })
        }}
      >
        Destructive
      </Button>
    </div>
  )
}
