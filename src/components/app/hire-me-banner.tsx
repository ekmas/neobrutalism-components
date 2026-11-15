"use client"

import { X } from "lucide-react"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HireMeBanner() {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("hire-me-banner-dismissed") === "true") {
      setDismissed(true)
    }
  }, [])

  function dismiss() {
    document.documentElement.style.setProperty("--banner-h", "0px")
    localStorage.setItem("hire-me-banner-dismissed", "true")
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div data-hire-me-banner className="fixed left-0 top-0 z-30 flex h-10 w-full items-center justify-center border-b-4 border-border bg-chart-3 px-4 text-main-foreground">
      <p className="text-sm text-center">
        <span className="[@media(min-width:500px)]:hidden">Available for hire.</span>
        <span className="hidden [@media(min-width:500px)]:inline">The developer of this library is available for hire.</span>
      </p>
      <Button
        variant="noShadow"
        size="xs"
        nativeButton={false}
        render={<Link href="/hire-me" />}
        className="ml-3 shrink-0 h-6 bg-secondary-background text-foreground border-main-foreground"
      >
        <span className="[@media(min-width:500px)]:hidden">Learn more</span>
        <span className="hidden [@media(min-width:500px)]:inline">Get in touch →</span>
      </Button>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 flex h-6 w-6 items-center justify-center text-main-foreground transition-opacity hover:opacity-70"
      >
        <X className="size-3.5" />
      </button>
    </div>
  )
}
