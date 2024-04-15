'use client'

import { useState } from 'react'

import Button from '@/components/react/components/Button'
import Drawer from '@/components/react/components/Drawer'

export default function DrawerExample() {
  const [isDrawerActive, setIsDrawerActive] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerActive(true)
        }}
      >
        Open Drawer
      </Button>
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
