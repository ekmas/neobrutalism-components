'use client'

import ReactDom from 'react-dom'

import { useEffect, useState } from 'react'

type Props = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: string | JSX.Element | JSX.Element[]
}

export default function Drawer({ active, setActive, children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const closeDrawer = () => {
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
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? 'true' : 'false'}
      onClick={closeDrawer}
      className="fixed left-0 group top-0 z-50 flex h-[100dvh] data-[visible=true]:opacity-100 data-[visible=true]:visible data-[visible=false]:opacity-0 data-[visible=false]:invisible w-screen items-start justify-start bg-gray-500/50 transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-10 h-full w-[250px] group-data-[visible=true]:translate-x-0 group-data-[visible=false]:translate-x-[-250px] border-2 border-black bg-main font-base transition-transform duration-300"
      >
        {children}
      </div>
    </div>,
    document.getElementById('drawer') as HTMLElement,
  )
}
