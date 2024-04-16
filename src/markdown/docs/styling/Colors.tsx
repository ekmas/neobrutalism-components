'use client'

import { SetStateAction } from 'react'

import colors from '@/data/colors'

type ColorPallette = {
  bg: string
  main: string
  mainAccent: string
}

export default function Colors({
  saveStylingPreference,
  setActiveColorPalette,
}: {
  saveStylingPreference: boolean | null
  setActiveColorPalette: React.Dispatch<SetStateAction<ColorPallette>>
}) {
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
                className="flex rounded-base border-2 border-black shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
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
    </>
  )
}
