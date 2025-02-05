"use client"

import clsx from "clsx"

import { useState } from "react"

export default function CopyCode({ code }: { code: string }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true)
        setTimeout(() => {
          setIsClicked(false)
        }, 1500)
      })
      .catch(() => {
        alert(
          "Your device doesn't support navigator api, so you'll have to manually select and copy the code.",
        )
      })
  }

  return (
    <div className="absolute top-2.5 right-2.5">
      <button
        onClick={handleClick}
        className="w-[38px] h-[38px] m400:w-7 m400:h-7 relative bg-white border-2 p-[7px] border-black opacity-0 group-hover:opacity-100 portrait:opacity-100 transition-opacity"
      >
        <img
          alt="copy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75'%3E%3Cpath d='M3 19a2 2 0 0 1-1-2V2a2 2 0 0 1 1-1h13a2 2 0 0 1 2 1'/%3E%3Crect x='6' y='5' width='16' height='18' rx='1.5' ry='1.5'/%3E%3C/svg%3E"
        />

        <div
          className={clsx(
            "text-black bg-white border-2 border-black font-bold self-center w-max text-sm absolute ease-in-out duration-200 transition-all right-10 py-1 px-3",
            isClicked
              ? "opacity-100 top-px visible"
              : "opacity-0 invisible top-[5px]",
          )}
        >
          Copied!
        </div>
      </button>
    </div>
  )
}
