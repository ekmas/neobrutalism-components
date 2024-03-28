'use client'

import { useLayoutEffect } from 'react'

export default function SetColorPalette() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)

    if (colorObj) {
      const r = window.document.querySelector(':root') as HTMLElement

      r.style.setProperty('--bg', colorObj.bg)
      r.style.setProperty('--main', colorObj.main)
      r.style.setProperty('--main-accent', colorObj.mainAccent)
    }
  }, [])

  return <></>
}
