"use client"

import { Button } from "@/components/ui/button"
import { Toaster, useToastManager } from "@/components/ui/toast"

function ToastActionButton() {
  const toast = useToastManager()

  function showToast() {
    const id = toast.add({
      title: "Event created",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id)
        },
      },
    })
  }

  return (
    <Button variant="neutral" onClick={showToast}>
      Show Toast
    </Button>
  )
}

export default function ToastActionDemo() {
  return (
    <Toaster>
      <ToastActionButton />
    </Toaster>
  )
}
