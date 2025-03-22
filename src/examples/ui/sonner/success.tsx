"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerSuccessDemo() {
  return (
    <Button onClick={() => toast.success("Event has been created")}>
      Success
    </Button>
  )
}
