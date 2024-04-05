'use client'

import colors from '@/data/colors'
import Code from '@/components/app/Code'
import CopyCode from '@/components/app/CopyCode'
import { useState, useEffect } from 'react'
import { MdCheck } from 'react-icons/md'
import { Slider } from '../ui/slider'

type ColorPallette = {
  bg: string
  main: string
  mainAccent: string
}

export default function Styling() {
  const defaultColorPalette = {
    bg: '#daf5f0',
    main: '#c4a1ff',
    mainAccent: '#9e66ff',
  }

  const [activeColorPallete, setActiveColorPalette] =
    useState<ColorPallette>(defaultColorPalette)
  const [borderRadius, setBorderRadius] = useState([5])
  const [saveStylingPreference, setSaveStylingPreference] = useState<
    boolean | null
  >(null)

  useEffect(() => {
    if (saveStylingPreference === null) return

    if (!saveStylingPreference) {
      localStorage.clear()
    } else {
      if (
        JSON.stringify(activeColorPallete) ===
          JSON.stringify(defaultColorPalette) &&
        borderRadius[0] === 5
      ) {
        localStorage.clear()
      }

      if (
        JSON.stringify(activeColorPallete) !==
        JSON.stringify(defaultColorPalette)
      ) {
        localStorage.setItem('color', JSON.stringify(activeColorPallete))
      }

      if (borderRadius[0] !== 5) {
        localStorage.setItem('borderRadius', String(borderRadius[0]))
      }
    }
  }, [saveStylingPreference])

  useEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)
    const borderRadius = localStorage.getItem('borderRadius') as string

    if (colorObj || borderRadius) {
      setSaveStylingPreference(true)
    }

    if (colorObj) {
      setActiveColorPalette(colorObj)
    }

    if (borderRadius) {
      setBorderRadius([+borderRadius])
    }
  }, [])

  const updateColorPalette = (color: ColorPallette) => {
    const r = window.document.querySelector(':root') as HTMLElement

    r.style.setProperty('--bg', color.bg)
    r.style.setProperty('--main', color.main)
    r.style.setProperty('--main-accent', color.mainAccent)

    setActiveColorPalette(color)

    if (saveStylingPreference) {
      localStorage.setItem('color', JSON.stringify(color))
    }
  }

  const updateBorderRadius = (number: [number]) => {
    const r = window.document.querySelector(':root') as HTMLElement
    r.style.setProperty('--border-radius', String(number[0]) + 'px')

    setBorderRadius(number)

    if (saveStylingPreference) {
      localStorage.setItem('borderRadius', String(number))
    }
  }

  const twConfig = `colors: {
  bg: '${activeColorPallete.bg}',
  main: '${activeColorPallete.main}',
  mainAccent: '${activeColorPallete.mainAccent}', // not needed for shadcn
},
borderRadius: {
  base: '${borderRadius}px'
}`

  return (
    <>
      <h3 className="mb-5 text-xl font-bold m400:text-lg">Colors</h3>
      <p>
        Here are some color palettes you can try. You can click each color
        palette to see how it looks.
      </p>
      <div className="mt-10 grid w-full grid-cols-3">
        {colors.map((color, id) => {
          const flexJustify =
            id % 3 === 0
              ? 'justify-start'
              : id % 3 === 1
              ? 'justify-center'
              : 'justify-end'

          return (
            <div className={`flex items-center ${flexJustify} mb-10`} key={id}>
              <button
                onClick={() => {
                  updateColorPalette(color)
                }}
                className="flex rounded-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <div
                  className="h-12 w-12 rounded-l-base border-r-2 border-black m1100:h-8 m1100:w-8"
                  style={{ backgroundColor: color.bg }}
                ></div>
                <div
                  className="h-12 w-12 rounded-r-base m1100:h-8 m1100:w-8"
                  style={{ backgroundColor: color.main }}
                ></div>
              </button>
            </div>
          )
        })}
      </div>
      <h3 className="mb-5 text-xl font-bold m400:text-lg">Border radius</h3>
      <Slider
        className="my-5"
        onValueChange={updateBorderRadius}
        value={borderRadius}
        max={20}
        step={1}
      />
      <p className="mb-2 text-center">{borderRadius[0]}px</p>
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
            updateColorPalette(defaultColorPalette)
            setSaveStylingPreference(false)
          }}
          className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m400:px-3.5 m400:text-xs"
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
