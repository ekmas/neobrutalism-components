'use client'

import { useState } from 'react'

import Input from '@/components/react/components/Input'

export default function InputExample() {
  const [username, setUsername] = useState('')

  return (
    <Input value={username} setValue={setUsername} placeholder="Username" />
  )
}
