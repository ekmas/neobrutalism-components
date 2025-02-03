"use client"

import { SetStateAction } from "react"

import { Slider } from "../../../components/ui/slider"

export default function BorderRadius({
  setBorderRadius,
  borderRadius,
}: {
  setBorderRadius: React.Dispatch<SetStateAction<number[]>>
  borderRadius: number[]
}) {
  const updateBorderRadius = (number: [number]) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--border-radius", String(number[0]) + "px")

    setBorderRadius(number)

    localStorage.setItem("borderRadius", String(number))
  }

  return (
    <>
      <h3>Border radius</h3>
      <Slider
        className="my-5"
        onValueChange={updateBorderRadius}
        value={borderRadius}
        max={20}
        step={1}
      />
      <p className="mb-2 text-center">{borderRadius[0]}px</p>
    </>
  )
}
