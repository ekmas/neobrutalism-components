"use client"

import { SetStateAction } from "react"

import colors from "@/data/colors"

export type ColorPallette = {
  main: string
  bg: string
  darkBg: string
}

export default function Colors({
  setActiveColorPalette,
}: {
  setActiveColorPalette: React.Dispatch<SetStateAction<ColorPallette>>
}) {
  const updateColorPalette = (color: ColorPallette) => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--bg", color.bg)
    r.style.setProperty("--main", color.main)
    r.style.setProperty("--main50", color.main + "b3")
    r.style.setProperty("--dark-bg", color.darkBg)

    setActiveColorPalette(color)

    localStorage.setItem("color", JSON.stringify(color))
  }

  return (
    <>
      <h3>Colors</h3>
      <p>
        Here are some color palettes you can try. You can click each color
        palette to see how it looks.
      </p>
      <div className="mt-10 grid w-full grid-cols-3">
        {colors.map((color, id) => {
          const flexJustify =
            id % 3 === 0
              ? "justify-start"
              : id % 3 === 1
                ? "justify-center"
                : "justify-end"

          return (
            <div className={`flex items-center ${flexJustify} mb-10`} key={id}>
              <button
                onClick={() => {
                  updateColorPalette(color)
                }}
                className="flex rounded-base border-2 overflow-x-hidden border-border dark:border-darkBorder shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
              >
                <div
                  className="dark:hidden h-12 w-12 border-r-2 border-border dark:border-darkBorder m750:h-8 m750:w-8"
                  style={{ backgroundColor: color.bg }}
                ></div>
                <div
                  className="dark:hidden h-12 w-12 m750:h-8 m750:w-8"
                  style={{ backgroundColor: color.main }}
                ></div>

                <div
                  className="hidden dark:block h-12 w-12 border-r-2 border-border dark:border-darkBorder m750:h-8 m750:w-8"
                  style={{ backgroundColor: color.darkBg }}
                ></div>
                <div
                  className="hidden dark:block h-12 w-12 m750:h-8 m750:w-8"
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
