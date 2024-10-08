'use client'

import { useLayoutEffect, useState } from 'react'

import colors from '@/data/colors'

import Code from '@/components/app/Code'
import { Button } from '@/components/ui/button'

import BorderRadius from './BorderRadius'
import BoxShadow from './BoxShadow'
import Colors, { type ColorPallette } from './Colors'
import FontWeight from './FontWeight'

export default function Styling() {
  const defaultColorPalette: ColorPallette = colors[0]

  const [activeColorPallete, setActiveColorPalette] =
    useState<ColorPallette>(defaultColorPalette)
  const [borderRadius, setBorderRadius] = useState([5])
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])

  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius') as string
    const boxShadow = localStorage.getItem('boxShadow')?.split(',')
    const fontWeight = localStorage.getItem('fontWeight')?.split(',')

    if (colorObj) {
      setActiveColorPalette(colorObj)
    }

    if (borderRadius) {
      setBorderRadius([+borderRadius])
    }

    if (boxShadow) {
      setBoxShadowLength([+boxShadow[0], +boxShadow[1]])
    }

    if (fontWeight) {
      setFontWeight([+fontWeight[0], +fontWeight[1]])
    }
  }, [])

  const resetStyling = () => {
    const r = window.document.querySelector(':root') as HTMLElement

    r.style.setProperty('--bg', defaultColorPalette.bg)
    r.style.setProperty('--main', defaultColorPalette.main)
    r.style.setProperty('--main50', defaultColorPalette.main + 'b3')
    r.style.setProperty('--main-accent', defaultColorPalette.mainAccent)
    r.style.setProperty('--dark-bg', defaultColorPalette.darkBg)

    r.style.setProperty('--border-radius', '5px')
    r.style.setProperty('--horizontal-box-shadow', '4px')
    r.style.setProperty('--vertical-box-shadow', '4px')
    r.style.setProperty('--heading-font-weight', '700')
    r.style.setProperty('--base-font-weight', '500')

    setActiveColorPalette(defaultColorPalette)
    setBorderRadius([5])
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])

    localStorage.clear()
  }

  const twConfig = `theme: {
  extend: {
    colors: {
      main: '${activeColorPallete.main}',
      mainAccent: '${
        activeColorPallete.mainAccent
      }', // not needed for shadcn components
      overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      // light mode
      bg: '${activeColorPallete.bg}',
      text: '#000',
      border: '#000',

      // dark mode
      darkBg: '${activeColorPallete.darkBg}',
      darkText: '#eeefe9',
      darkBorder: '#000',
      secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
    },
    borderRadius: {
      base: '${borderRadius}px'
    },
    boxShadow: {
      light: '${boxShadowLength[0] + 'px'} ${
        boxShadowLength[1] + 'px'
      } 0px 0px #000',
      dark: '${boxShadowLength[0] + 'px'} ${
        boxShadowLength[1] + 'px'
      } 0px 0px #000',
    },
    translate: {
      boxShadowX: '${boxShadowLength[0] + 'px'}',
      boxShadowY: '${boxShadowLength[1] + 'px'}',
      reverseBoxShadowX: '${-boxShadowLength[0] + 'px'}',
      reverseBoxShadowY: '${-boxShadowLength[1] + 'px'}',
    },
    fontWeight: {
      base: '${fontWeight[1]}',
      heading: '${fontWeight[0]}',
    },
  },
},`

  return (
    <>
      <Colors setActiveColorPalette={setActiveColorPalette} />
      <BorderRadius
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
      />
      <BoxShadow
        boxShadowLength={boxShadowLength}
        setBoxShadowLength={setBoxShadowLength}
      />
      <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
      <Button
        role="button"
        className="w-full mt-5 mb-10"
        aria-label="Reset colors"
        onClick={() => {
          resetStyling()
        }}
      >
        Reset
      </Button>
      <p>
        After you choose your preferred styling, copy this to <code>theme</code>{' '}
        section inside your tailwind config.
      </p>
      <Code code={twConfig} name="tailwind.config.js" />
    </>
  )
}
