import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-sm font-heading leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  )
}

export { Label }
