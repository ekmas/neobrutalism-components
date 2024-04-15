'use client'

import Button from '@/components/react/components/Button'

export default function ButtonExample() {
  return (
    <Button
      onClick={() => {
        console.log('click')
      }}
    >
      Button
    </Button>
  )
}
