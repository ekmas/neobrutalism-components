'use client'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Drawer from '../neobrutalism/Drawer'
import components from '@/data/components'
import { useRouter } from 'next/navigation'

export default function MobileDrawer() {
  const router = useRouter()

  const [isDrawerActive, setIsDrawerActive] = useState(false)

  const handleLinkClick = (path: string) => {
    setIsDrawerActive(false)
    router.push(path)
  }

  return (
    <>
      <button
        onClick={() => setIsDrawerActive(true)}
        className="hidden items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m600:flex"
      >
        <FaBars className="h-6 w-6 m500:h-4 m500:w-4" />
      </button>

      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <div className="scrollbar h-full w-full overflow-y-scroll bg-white">
          <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
            Getting started
          </div>
          <button
            onClick={() => {
              handleLinkClick('/docs')
            }}
            className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-semibold text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
          >
            Introduction
          </button>
          <button
            onClick={() => {
              handleLinkClick(`/docs/installation`)
            }}
            className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-semibold text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
          >
            Installation
          </button>
          <button
            onClick={() => {
              handleLinkClick(`/docs/resources`)
            }}
            className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-semibold text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
          >
            Resources
          </button>
          <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
            Components
          </div>
          {components.map((item, index) => {
            return (
              <button
                onClick={() => {
                  handleLinkClick(`/docs/components/${item.name}`)
                }}
                key={index}
                className="sidebaritem block w-full border-b-4 border-r-4 border-black p-4 pl-7 text-left text-lg font-semibold text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </Drawer>
    </>
  )
}
