'use client'

import { useState } from 'react'

import Button from '@/components/react/components/Button'
import Modal from '@/components/react/components/Modal'

export default function ModalExample() {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setIsModalActive(true)
        }}
      >
        Open modal
      </Button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <p>This is modal</p>
      </Modal>
    </>
  )
}
