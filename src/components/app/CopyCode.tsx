'use client'

import { useState } from 'react'

import { Button } from '@/components//ui/button'

export default function CopyCode({
  code,
  copyBtnText,
}: {
  code: string
  copyBtnText: string
}) {
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
    <Button
      className="w-full py-3 mt-5 m400:py-2 text-base h-[unset] m400:text-sm"
      onClick={handleClick}
    >
      {isClicked ? 'Copied to clipboard' : copyBtnText}
    </Button>
  )
}
