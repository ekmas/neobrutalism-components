'use client'
import { useState } from 'react'

const styling = `
  input.rangeSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border: 3px solid black;
    border-radius: 50%;
    background: #C4A1FF;
    cursor: pointer;
  }
`

export default function RangeSlider() {
  const [rangeValue, setRangeValue] = useState(50)

  return (
    <>
      <style>{styling}</style>
      <div className="w-full">
        <label htmlFor="range-slider" className="sr-only">
          Default range
        </label>
        <input
          id="range-slider"
          type="range"
          min={0}
          max={100}
          value={rangeValue}
          onChange={(e) => setRangeValue(+e.target.value)}
          className="rangeSlider h-2 w-full cursor-pointer appearance-none rounded-lg border-2 border-black bg-white"
        />
      </div>
    </>
  )
}
