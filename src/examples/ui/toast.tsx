"use client"

import { Button } from "@/components/ui/button"
import { toast, Toaster } from "@/components/ui/toast"

export default function ToastDemo() {
  function showWithAction() {
    const id = toast.add({
      title: "Event created",
      description: "You can undo this action.",
      actionProps: {
        children: "Undo",
        onClick() {
          toast.close(id)
          toast.add({ description: "Event creation undone." })
        },
      },
    })
  }

  function showPromise() {
    toast.promise(
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, 2000)
      }),
      {
        loading: { title: "Uploading...", description: "Hang tight." },
        success: { title: "Done", description: "Your file was uploaded." },
        error: { title: "Failed", description: "Something went wrong." },
      },
    )
  }

  return (
    <Toaster>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="neutral"
          onClick={() =>
            toast.add({
              title: "Event created",
              description: "Sunday, December 3 at 9:00 AM",
            })
          }
        >
          Default
        </Button>
        <Button
          variant="neutral"
          onClick={() =>
            toast.add({
              type: "success",
              title: "Changes saved",
              description: "Your profile has been updated.",
            })
          }
        >
          Success
        </Button>
        <Button variant="neutral" onClick={showWithAction}>
          With action
        </Button>
        <Button variant="neutral" onClick={showPromise}>
          Promise
        </Button>
      </div>
    </Toaster>
  )
}
