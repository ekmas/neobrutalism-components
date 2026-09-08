"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import * as React from "react"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-base border-2 border-border bg-secondary-background",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="h-full w-full"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full border-r-2 border-border bg-main transition-all"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
