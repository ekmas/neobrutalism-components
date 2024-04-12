'use client'

import { useState } from 'react'

import Modal from '../components/Modal'

export default function ModalExample() {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsModalActive(true)
        }}
        className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        Open modal
      </button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <p>This is modal</p>
      </Modal>
    </>
  )
}
