'use client'

import { MdCheck } from 'react-icons/md'

import { useEffect, useLayoutEffect, useState } from 'react'

import colors from '@/data/colors'

import Code from '@/components/app/Code'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import BorderRadius from './BorderRadius'
import BoxShadow from './BoxShadow'
import Colors from './Colors'
import FontWeight from './FontWeight'

type ColorPallette = {
  bg: string
  main: string
  mainAccent: string
}

export default function Styling() {
  const defaultColorPalette: ColorPallette = colors[0]

  const [activeColorPallete, setActiveColorPalette] =
    useState<ColorPallette>(defaultColorPalette)
  const [borderRadius, setBorderRadius] = useState([5])
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])
  const [saveStylingPreference, setSaveStylingPreference] = useState<
    boolean | null
  >(null)

  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius') as string
    const boxShadow = localStorage.getItem('boxShadow')?.split(',')
    const fontWeight = localStorage.getItem('fontWeight')?.split(',')

    if (colorObj || borderRadius || boxShadow) {
      setSaveStylingPreference(true)
    }

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

  useEffect(() => {
    if (saveStylingPreference === null) return

    const saveToLocalStorage = () => {
      if (
        JSON.stringify(activeColorPallete) ===
          JSON.stringify(defaultColorPalette) &&
        borderRadius[0] === 5 &&
        JSON.stringify(boxShadowLength) === JSON.stringify([4, 4]) &&
        JSON.stringify(fontWeight) === JSON.stringify([700, 500])
      ) {
        localStorage.clear()
      } else {
        if (
          JSON.stringify(activeColorPallete) !==
          JSON.stringify(defaultColorPalette)
        ) {
          localStorage.setItem('color', JSON.stringify(activeColorPallete))
        }

        if (borderRadius[0] !== 5) {
          localStorage.setItem('borderRadius', String(borderRadius[0]))
        }

        if (JSON.stringify(boxShadowLength) !== JSON.stringify([4, 4])) {
          localStorage.setItem(
            'boxShadow',
            `${boxShadowLength[0]},${boxShadowLength[1]}`,
          )
        }

        if (JSON.stringify(fontWeight) !== JSON.stringify([700, 500])) {
          localStorage.setItem(
            'fontWeight',
            `${fontWeight[0]},${fontWeight[1]}`,
          )
        }
      }
    }

    if (saveStylingPreference) {
      saveToLocalStorage()
    } else {
      localStorage.clear()
    }
  }, [saveStylingPreference])

  const resetStyling = () => {
    const r = window.document.querySelector(':root') as HTMLElement

    r.style.setProperty('--bg', defaultColorPalette.bg)
    r.style.setProperty('--main', defaultColorPalette.main)
    r.style.setProperty('--main-accent', defaultColorPalette.mainAccent)
    r.style.setProperty('--border-radius', '5px')
    r.style.setProperty('--horizontal-box-shadow', '4px')
    r.style.setProperty('--vertical-box-shadow', '4px')
    r.style.setProperty('--heading-font-weight', '700')
    r.style.setProperty('--base-font-weight', '500')

    setActiveColorPalette(defaultColorPalette)
    setBorderRadius([5])
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])

    setSaveStylingPreference(false)
  }

  const twConfig = `theme: {
  extend: {
    colors: {
      bg: '${activeColorPallete.bg}',
      main: '${activeColorPallete.main}',
      mainAccent: '${activeColorPallete.mainAccent}', // not needed for shadcn
    },
    borderRadius: {
      base: '${borderRadius}px'
    },
    boxShadow: {
      base: '${boxShadowLength[0] + 'px'} ${
        boxShadowLength[1] + 'px'
      } 0px 0px rgba(0,0,0,1)',
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
    }
  }
},`

  return (
    <>
      <Colors
        setActiveColorPalette={setActiveColorPalette}
        saveStylingPreference={saveStylingPreference}
      />
      <BorderRadius
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
        saveStylingPreference={saveStylingPreference}
      />
      <BoxShadow
        boxShadowLength={boxShadowLength}
        setBoxShadowLength={setBoxShadowLength}
        saveStylingPreference={saveStylingPreference}
      />
      <FontWeight
        fontWeight={fontWeight}
        setFontWeight={setFontWeight}
        saveStylingPreference={saveStylingPreference}
      />
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => {
              setSaveStylingPreference(
                saveStylingPreference === null ||
                  saveStylingPreference === false
                  ? true
                  : false,
              )
            }}
            className="flex items-center font-bold"
            role="checkbox"
            aria-checked={
              saveStylingPreference === null ? false : saveStylingPreference
            }
          >
            <div className="mr-2.5 grid h-5 w-5 place-items-center bg-white outline outline-2 outline-black">
              {saveStylingPreference && (
                <MdCheck className="h-[18px] w-[18px]" />
              )}
            </div>
            <p className="m400:text-sm">Save styling pref.</p>
          </button>
          <HoverCard>
            <HoverCardTrigger className="ml-3 bg-main px-1.5 border border-black rounded-base">
              <button>?</button>
            </HoverCardTrigger>
            <HoverCardContent className="m400:text-sm">
              Check this if you want to save current styling to local storage so
              you will have it next time you visit this site.
            </HoverCardContent>
          </HoverCard>
        </div>
        <button
          role="button"
          aria-label="Reset colors"
          onClick={() => {
            resetStyling()
          }}
          className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-5 py-2 text-sm font-base shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m400:px-3.5 m400:text-xs"
        >
          Reset
        </button>
      </div>
      <p>
        After you choose your preferred styling, copy this to your tailwind
        config.
      </p>
      <Code code={twConfig} name="tailwind.config.js" limitedHeight={false} />
    </>
  )
}
