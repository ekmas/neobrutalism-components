"use client"

import { Slider } from "@/components/ui/slider"

export default function VerticalSliderDemo() {
  return (
    <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" />
  )
}
