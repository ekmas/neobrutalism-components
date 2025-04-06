"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerPromiseDemo() {
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000),
    )

  return (
    <Button
      onClick={() =>
        toast.promise(promise, {
          loading: "Loading...",
          success: () => {
            return `Sonner toast has been added`
          },
          error: "Error",
        })
      }
    >
      Promise
    </Button>
  )
}
