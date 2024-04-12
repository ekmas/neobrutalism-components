'use client'

import { MdCheck } from 'react-icons/md'

import { useEffect, useLayoutEffect, useState } from 'react'

import colors from '@/data/colors'

import Code from '@/components/app/Code'
import CopyCode from '@/components/app/CopyCode'

import BorderRadius from '@/app/docs/styling/BorderRadius'
import BoxShadow from '@/app/docs/styling/BoxShadow'
import Colors from '@/app/docs/styling/Colors'

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
  const [saveStylingPreference, setSaveStylingPreference] = useState<
    boolean | null
  >(null)

  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius') as string
    const boxShadow = localStorage.getItem('boxShadow')?.split(',')

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
  }, [])

  useEffect(() => {
    if (saveStylingPreference === null) return

    const saveToLocalStorage = () => {
      if (
        JSON.stringify(activeColorPallete) ===
          JSON.stringify(defaultColorPalette) &&
        borderRadius[0] === 5 &&
        JSON.stringify(boxShadowLength) === JSON.stringify([4, 4])
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

    setActiveColorPalette(defaultColorPalette)
    setBorderRadius([5])
    setBoxShadowLength([4, 4])

    setSaveStylingPreference(false)
  }

  const twConfig = `colors: {
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
}
translate: {
  boxShadowX: '${boxShadowLength[0] + 'px'}',
  boxShadowY: '${boxShadowLength[1] + 'px'}',
}`

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
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => {
            setSaveStylingPreference(
              saveStylingPreference === null || saveStylingPreference === false
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
            {saveStylingPreference && <MdCheck className="h-[18px] w-[18px]" />}
          </div>
          <p className="m400:text-sm">Save styling pref.</p>
        </button>
        <button
          role="button"
          aria-label="Reset colors"
          onClick={() => {
            resetStyling()
          }}
          className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-5 py-2 text-sm font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none m400:px-3.5 m400:text-xs"
        >
          Reset
        </button>
      </div>
      <p>
        After you choose your preferred styling, copy this to your tailwind
        config.
      </p>
      <Code code={twConfig} name="tailwind.config.js" limitedHeight={false} />
      <CopyCode code={twConfig} copyBtnText="Copy this config" />
    </>
  )
}
