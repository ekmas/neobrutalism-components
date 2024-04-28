'use client'

import { Check } from 'lucide-react'

import { useState } from 'react'

export default function Checkbox({ item }: { item: string }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <button
      onClick={() => {
        setIsChecked(!isChecked)
      }}
      className="my-2 flex items-center font-base"
      role="checkbox"
      aria-checked={isChecked}
    >
      <div className="mr-2.5 grid h-5 w-5 place-items-center bg-white outline outline-2 outline-black">
        {isChecked && <Check className="h-4 w-4" />}
      </div>
      <p>{item}</p>
    </button>
  )
}
