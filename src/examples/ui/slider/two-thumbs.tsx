"use client"

import { Slider } from "@/components/ui/slider"

export default function TwoThumbsSliderDemo() {
  return <Slider defaultValue={[25, 50]} max={100} step={1} />
}
