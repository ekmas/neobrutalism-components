'use client'

import { useState } from 'react'

import Textarea from '@/components/react/components/Textarea'

export default function TextareaExample() {
  const [message, setMessage] = useState('')

  return (
    <Textarea value={message} setValue={setMessage} placeholder="Message" />
  )
}
