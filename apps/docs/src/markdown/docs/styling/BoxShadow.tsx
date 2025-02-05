"use client"

import { SetStateAction } from "react"

import { Slider } from "../../../components/ui/slider"

export default function BoxShadow({
  boxShadowLength,
  setBoxShadowLength,
}: {
  boxShadowLength: number[]
  setBoxShadowLength: React.Dispatch<SetStateAction<number[]>>
}) {
  const updateX = (number: [number]) => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--horizontal-box-shadow", number[0] + "px")

    setBoxShadowLength([number[0], boxShadowLength[1]])

    localStorage.setItem("boxShadow", `${number[0]},${boxShadowLength[1]}`)
  }

  const updateY = (number: [number]) => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--vertical-box-shadow", number[0] + "px")

    setBoxShadowLength([boxShadowLength[0], number[0]])

    localStorage.setItem("boxShadow", `${boxShadowLength[0]},${number[0]}`)
  }

  return (
    <>
      <h3>Box shadow</h3>
      <div className="grid grid-cols-2 gap-5 m750:my-4 m400:grid-cols-1 m400:gap-3">
        <div>
          <h4>Horizontal offset</h4>

          <Slider
            className="my-4"
            onValueChange={updateX}
            value={[boxShadowLength[0]]}
            min={-6}
            max={6}
            step={1}
          />

          <p className="mb-2 text-center">{boxShadowLength[0]}px</p>
        </div>
        <div>
          <h4>Vertical offset</h4>

          <Slider
            className="my-4"
            onValueChange={updateY}
            value={[boxShadowLength[1]]}
            min={-6}
            max={6}
            step={1}
          />

          <p className="mb-2 text-center">{boxShadowLength[1]}px</p>
        </div>
      </div>
    </>
  )
}
