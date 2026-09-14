"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"

export default function ProgressControlledDemo() {
  const [value, setValue] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value} className="w-full" />
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  )
}
