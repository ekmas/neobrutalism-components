"use client"

import { Check, Clipboard } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <Button
      size="icon"
      className="size-9 absolute right-3.5 top-2"
      variant="noShadow"
      onClick={copy}
      aria-label="Copy"
    >
      <span className="sr-only">Copy</span>
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}
