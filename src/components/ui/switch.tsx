"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import * as React from "react"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-border bg-secondary-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-main data-unchecked:bg-secondary-background",
        size === "default" && "h-6 w-12",
        size === "sm" && "h-5 w-9",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full bg-white border-2 border-border ring-0 transition-transform data-unchecked:translate-x-1",
          size === "default" && "h-4 w-4 data-checked:translate-x-6",
          size === "sm" && "h-3 w-3 data-checked:translate-x-4",
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
