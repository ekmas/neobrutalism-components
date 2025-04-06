"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerActionDemo() {
  return (
    <Button
      onClick={() =>
        toast("Event has been created", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Action
    </Button>
  )
}
