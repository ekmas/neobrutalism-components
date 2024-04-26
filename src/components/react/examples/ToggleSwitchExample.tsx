'use client'

import { useState } from 'react'

import ToggleSwitch from '@/components/react/components/ToggleSwitch'

export default function ToggleSwitchExample() {
  const [isToggled, setIsToggled] = useState(false)

  return <ToggleSwitch isToggled={isToggled} setIsToggled={setIsToggled} />
}
