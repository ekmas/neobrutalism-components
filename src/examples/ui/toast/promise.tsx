"use client"

import { Button } from "@/components/ui/button"
import { Toaster, useToastManager } from "@/components/ui/toast"

function ToastPromiseButton() {
  const toast = useToastManager()

  function showToast() {
    toast.promise(
      new Promise<{ name: string }>((resolve) => {
        window.setTimeout(() => resolve({ name: "Event" }), 2000)
      }),
      {
        loading: "Creating event…",
        success: (data) => `${data.name} created.`,
        error: "Could not create event.",
      },
    )
  }

  return (
    <Button variant="neutral" onClick={showToast}>
      Create Event
    </Button>
  )
}

export default function ToastPromiseDemo() {
  return (
    <Toaster>
      <ToastPromiseButton />
    </Toaster>
  )
}
