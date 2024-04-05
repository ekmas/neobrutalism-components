'use client'

import { useLayoutEffect } from 'react'

export default function SetStylingPref() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius')

    const r = window.document.querySelector(':root') as HTMLElement

    if (colorObj) {
      r.style.setProperty('--bg', colorObj.bg)
      r.style.setProperty('--main', colorObj.main)
      r.style.setProperty('--main-accent', colorObj.mainAccent)
    }

    if (borderRadius) {
      r.style.setProperty('--border-radius', borderRadius + 'px')
    }
  }, [])

  return <></>
}
