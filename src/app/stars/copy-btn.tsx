"use client"

import { Check, Copy } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) return

    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleCopy} variant="noShadow">
          Copy
          {copied ? (
            <Check className="size-[18px]" />
          ) : (
            <Copy className="size-[18px]" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy to clipboard</p>
      </TooltipContent>
    </Tooltip>
  )
}
