'use client'

import { useState } from 'react'

import RangeSlider from '../components/RangeSlider'

export default function RangeSliderExample() {
  const [rangeValue, setRangeValue] = useState(50)

  return (
    <div className="w-full">
      <RangeSlider
        max={100}
        min={0}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
      />
      <div className="mt-3 text-center">
        <p className="font-bold">{rangeValue}</p>
      </div>
    </div>
  )
}
