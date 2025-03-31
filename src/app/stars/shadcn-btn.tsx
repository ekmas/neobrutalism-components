"use client"

import { Check } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ShadcnBtn({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (copied) return

    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleCopy} variant="noShadow">
          Copy
          {copied ? <Check className="size-[18px]" /> : <ShadcnIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy Shadcn CLI command</p>
      </TooltipContent>
    </Tooltip>
  )
}

const ShadcnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-[18px]"
    viewBox="0 0 256 256"
    fill="none"
  >
    <g clipPath="url(#clip0_574_2)">
      <path
        d="M208 128L128 208"
        stroke="black"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M192 40L40 192"
        stroke="black"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_574_2">
        <rect width="256" height="256" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
