'use client'
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import { MdClose } from 'react-icons/md'

type Props = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export default function Modal({ active, setActive, children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div
        style={{
          opacity: isVisible ? '1' : '0',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        className="relative flex w-[350px] flex-col items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] p-10 pt-12 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
      >
        <button onClick={closeModal}>
          <MdClose className="absolute right-3 top-3 h-6 w-6" />
        </button>
        {children}
        <button
          className="mt-5 cursor-pointer rounded-md border-2 border-black bg-white px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          onClick={closeModal}
        >
          Ok
        </button>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,

    // don't forget to add
    // <div id="modal"></div>
    // to index.html
  )
}
