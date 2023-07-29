'use client'
import { useState } from 'react'
import Modal from '../neobrutalism/Modal'

export default function ModalExample() {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsModalActive(true)
        }}
        className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        Open modal
      </button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <p>This is modal</p>
      </Modal>
    </>
  )
}
