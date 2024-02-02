'use client'
import React, { useState } from 'react'

export default function CopyCode({ code }: { code: string }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true)
        setTimeout(() => {
          setIsClicked(false)
        }, 2500)
      })
      .catch(() => {
        alert(
          "Your device doesn't support navigator api, so you'll have to manually select and copy the code.",
        )
      })
  }

  return (
    <button
      className="mt-5 w-full cursor-pointer rounded-md border-2 border-black bg-main py-3 text-center font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      onClick={handleClick}
    >
      {isClicked ? 'Copied to clipboard' : 'Copy this component'}
    </button>
  )
}
