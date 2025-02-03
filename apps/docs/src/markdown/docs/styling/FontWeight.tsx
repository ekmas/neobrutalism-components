import { SetStateAction } from "react"

import { Slider } from "@/components/ui/slider"

export default function FontWeight({
  fontWeight,
  setFontWeight,
}: {
  fontWeight: number[]
  setFontWeight: React.Dispatch<SetStateAction<number[]>>
}) {
  const updateHeadingFontWeight = (number: [number]) => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--heading-font-weight", `${number[0]}`)

    setFontWeight([number[0], fontWeight[1]])

    localStorage.setItem("fontWeight", `${number[0]},${fontWeight[1]}`)
  }

  const updateBaseFontWeight = (number: [number]) => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--base-font-weight", `${number[0]}`)

    setFontWeight([fontWeight[0], number[0]])

    localStorage.setItem("fontWeight", `${fontWeight[0]},${number[0]}`)
  }

  return (
    <>
      <h3>Font weight</h3>

      <div className="grid grid-cols-2 gap-5 m750:my-4 m400:grid-cols-1 m400:gap-3">
        <div>
          <h4>Headings</h4>

          <Slider
            className="my-4"
            onValueChange={updateHeadingFontWeight}
            value={[fontWeight[0]]}
            min={700}
            max={900}
            step={100}
          />

          <p className="mb-2 text-center">{fontWeight[0]}</p>
        </div>
        <div>
          <h4>Everything else</h4>

          <Slider
            className="my-4"
            onValueChange={updateBaseFontWeight}
            value={[fontWeight[1]]}
            min={400}
            max={700}
            step={100}
          />

          <p className="mb-2 text-center">{fontWeight[1]}</p>
        </div>
      </div>
    </>
  )
}
