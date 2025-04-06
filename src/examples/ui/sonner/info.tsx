"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerInfoDemo() {
  return (
    <Button
      onClick={() =>
        toast.info("Be at the area 10 minutes before the event time")
      }
    >
      Info
    </Button>
  )
}
