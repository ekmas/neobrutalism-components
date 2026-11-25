"use client"

import { Check } from "lucide-react"

import { useId, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function EmailCapture({
  cta = "Get started",
  variant = "default",
  className,
}: {
  cta?: string
  variant?: "default" | "neutral"
  className?: string
}) {
  const id = useId()
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p
        role="status"
        className={cn(
          "flex h-11 w-fit items-center gap-2 rounded-base border-2 border-border bg-chart-4 px-4 text-sm font-heading text-foreground shadow-shadow",
          className,
        )}
      >
        <Check className="size-4" /> You&apos;re on the list. Check your inbox.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className={cn("flex w-full max-w-md flex-col gap-3 sm:flex-row", className)}
    >
      <label htmlFor={id} className="sr-only">
        Work email
      </label>
      <Input
        id={id}
        type="email"
        required
        placeholder="Work email"
        className="h-11"
      />
      <Button type="submit" size="lg" variant={variant} className="shrink-0">
        {cta}
      </Button>
    </form>
  )
}
