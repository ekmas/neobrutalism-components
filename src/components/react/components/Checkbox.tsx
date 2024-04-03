'use client'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function Checkbox({ item }: { item: string }) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <button
      onClick={() => {
        setIsChecked(!isChecked)
      }}
      className="my-2 flex items-center font-bold"
      role="checkbox"
      aria-checked={isChecked}
    >
      <div className="mr-2.5 grid h-5 w-5 place-items-center rounded-[5px] bg-white outline outline-2 outline-black">
        {isChecked && <MdClose className="h-4 w-4" />}
      </div>
      <p>{item}</p>
    </button>
  )
}
