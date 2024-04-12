'use client'

import { useState } from 'react'

import Drawer from '../components/Drawer'

export default function DrawerExample() {
  const [isDrawerActive, setIsDrawerActive] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsDrawerActive(true)
        }}
        className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        Open Drawer
      </button>
      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <a
          className="block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent"
          href="#"
        >
          Item 1
        </a>
        <a
          className="block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent"
          href="#"
        >
          Item 2
        </a>
        <a
          className="block w-full border-b-2 border-black bg-main px-5 py-4 hover:bg-mainAccent"
          href="#"
        >
          Item 3
        </a>
      </Drawer>
    </>
  )
}
