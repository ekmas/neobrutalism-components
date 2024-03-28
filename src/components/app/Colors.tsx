'use client'

import colors from '@/data/colors'
import Code from '@/components/app/Code'
import CopyCode from '@/components/app/CopyCode'
import { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'

type ColorPallette = {
  bg: string
  main: string
  mainAccent: string
}

export default function Colors() {
  const defaultColorPalette = {
    bg: '#daf5f0',
    main: '#c4a1ff',
    mainAccent: '#a36ec4',
  }

  const [activeColorPallete, setActiveColorPalette] =
    useState<ColorPallette>(defaultColorPalette)
  const [saveColorsPreference, setSaveColorsPrefernce] = useState<
    boolean | null
  >(null)

  useEffect(() => {
    if (saveColorsPreference === null) return

    if (
      JSON.stringify(activeColorPallete) === JSON.stringify(defaultColorPalette)
    ) {
      localStorage.clear()
    } else {
      localStorage.setItem('color', JSON.stringify(activeColorPallete))
    }
  }, [saveColorsPreference])

  useEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem('color') as string)

    if (colorObj) {
      setSaveColorsPrefernce(true)
      setActiveColorPalette(colorObj)
    }
  }, [])

  const updateColorPalette = (color: ColorPallette) => {
    const r = window.document.querySelector(':root') as HTMLElement

    r.style.setProperty('--bg', color.bg)
    r.style.setProperty('--main', color.main)
    r.style.setProperty('--main-accent', color.mainAccent)

    setActiveColorPalette(color)

    if (saveColorsPreference) {
      localStorage.setItem('color', JSON.stringify(color))
    }
  }

  const twConfig = `colors: {
  bg: '${activeColorPallete.bg}',
  main: '${activeColorPallete.main}',
  mainAccent: '${activeColorPallete.mainAccent}',
},`

  return (
    <>
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
                className="flex rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <div
                  className="h-12 w-12 rounded-l-md border-r-2 border-black m1100:h-8 m1100:w-8"
                  style={{ backgroundColor: color.bg }}
                ></div>
                <div
                  className="h-12 w-12 rounded-r-md m1100:h-8 m1100:w-8"
                  style={{ backgroundColor: color.main }}
                ></div>
              </button>
            </div>
          )
        })}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => {
            setSaveColorsPrefernce(
              saveColorsPreference === null || saveColorsPreference === false
                ? true
                : false,
            )
          }}
          className="flex items-center font-bold"
          role="checkbox"
          aria-checked={
            saveColorsPreference === null ? false : saveColorsPreference
          }
        >
          <div className="mr-2.5 grid h-5 w-5 place-items-center rounded-[5px] bg-white outline outline-2 outline-black">
            {saveColorsPreference && <MdClose className="h-4 w-4" />}
          </div>
          <p className="m400:text-sm">Save color preferences</p>
        </button>
        <button
          role="button"
          aria-label="Reset colors"
          onClick={() => {
            updateColorPalette(defaultColorPalette)
            setSaveColorsPrefernce(false)
          }}
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-main px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m400:px-3.5 m400:text-xs"
        >
          Reset
        </button>
      </div>
      <p>After you chose prefered colors, copy them to tailwind config.</p>
      <Code code={twConfig} name="tailwind.config.js" limitedHeight={false} />
      <CopyCode code={twConfig} copyBtnText="Copy this config" />
    </>
  )
}
