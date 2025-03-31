"use client"

import { useLayoutEffect, useState } from "react"

import colors from "@/data/colors"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

export default function Styling() {
  const defaultColorPalette = colors[10]

  const [color, setColor] = useState(defaultColorPalette)
  const [borderRadius, setBorderRadius] = useState(5)
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])

  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = Number(localStorage.getItem("borderRadius"))
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")

    if (colorObj) {
      setColor(colorObj)
    }

    if (borderRadius) {
      setBorderRadius(borderRadius)
    }

    if (boxShadow) {
      setBoxShadowLength([+boxShadow[0], +boxShadow[1]])
    }

    if (fontWeight) {
      setFontWeight([+fontWeight[0], +fontWeight[1]])
    }
  }, [])

  const updateColor = (value: string) => {
    const r = window.document.querySelector(":root") as HTMLElement
    const color = colors.find((color) => color.name === value)!

    setColor(color)

    localStorage.setItem("color", JSON.stringify(color))

    const isDarkMode = document.documentElement.classList.contains("dark")

    if (isDarkMode) {
      r.style.setProperty("--background", color.darkBg)
      r.style.setProperty("--main", color.darkMain)
    } else {
      r.style.setProperty("--background", color.bg)
      r.style.setProperty("--main", color.main)
    }

    r.style.setProperty("--dark-background", color.darkBg)
    r.style.setProperty("--dark-main", color.darkMain)
    r.style.setProperty("--light-background", color.bg)
    r.style.setProperty("--light-main", color.main)
  }

  const updateBorderRadius = (value: number) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--border-radius", `${value}px`)

    localStorage.setItem("borderRadius", value.toString())

    setBorderRadius(value)
  }

  const updateHorizontalBoxShadow = (value: number) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--box-shadow-x", value + "px")

    setBoxShadowLength([value, boxShadowLength[1]])

    localStorage.setItem("boxShadow", `${value},${boxShadowLength[1]}`)
  }

  const updateVerticalBoxShadow = (value: number) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--box-shadow-y", value + "px")

    setBoxShadowLength([boxShadowLength[0], value])

    localStorage.setItem("boxShadow", `${boxShadowLength[0]},${value}`)
  }

  const updateHeadingFontWeight = (value: number) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--heading-font-weight", `${value}`)

    setFontWeight([value, fontWeight[1]])

    localStorage.setItem("fontWeight", `${value},${fontWeight[1]}`)
  }

  const updateBaseFontWeight = (value: number) => {
    const r = window.document.querySelector(":root") as HTMLElement
    r.style.setProperty("--base-font-weight", `${value}`)

    setFontWeight([fontWeight[0], value])

    localStorage.setItem("fontWeight", `${fontWeight[0]},${value}`)
  }

  const resetStyling = () => {
    const r = window.document.querySelector(":root") as HTMLElement

    updateColor(defaultColorPalette.name)

    r.style.setProperty("--border-radius", "5px")
    r.style.setProperty("--box-shadow-x", "4px")
    r.style.setProperty("--box-shadow-y", "4px")
    r.style.setProperty("--heading-font-weight", "700")
    r.style.setProperty("--base-font-weight", "500")

    setColor(defaultColorPalette)
    setBorderRadius(5)
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])

    localStorage.clear()
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Customize</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Customize styling</SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min overflow-y-auto gap-4 px-4">
            <div className="grid gap-3">
              <Label htmlFor="color">Color</Label>
              <Select value={color.name} onValueChange={updateColor}>
                <SelectTrigger
                  id="color"
                  className="bg-secondary-background text-foreground"
                >
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent className="bg-secondary-background text-foreground">
                  {colors.map(({ name, main }) => (
                    <SelectItem key={name} value={name}>
                      <div className="flex items-center gap-2">
                        <div
                          className="size-4 rounded-full border-2 border-border"
                          style={{ backgroundColor: main }}
                        />
                        {name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="border-radius">Border Radius</Label>
              <div className="grid grid-cols-4 gap-2">
                {[0, 5, 10, 15].map((btn) => (
                  <Button
                    onClick={() => updateBorderRadius(btn)}
                    className={cn(
                      "h-8",
                      borderRadius === btn
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={btn}
                    variant="noShadow"
                  >
                    {`${btn} px`}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="border-radius">Horizontal Box Shadow</Label>
              <div className="grid grid-cols-5 gap-2">
                {[-4, -2, 0, 2, 4].map((btn) => (
                  <Button
                    onClick={() => updateHorizontalBoxShadow(btn)}
                    className={cn(
                      "h-8",
                      boxShadowLength[0] === btn
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={btn}
                    variant="noShadow"
                  >
                    {`${btn} px`}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="border-radius">Vertical Box Shadow</Label>
              <div className="grid grid-cols-5 gap-2">
                {[-4, -2, 0, 2, 4].map((btn) => (
                  <Button
                    onClick={() => updateVerticalBoxShadow(btn)}
                    className={cn(
                      "h-8",
                      boxShadowLength[1] === btn
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={btn}
                    variant="noShadow"
                  >
                    {`${btn} px`}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="border-radius">Heading Font Weight</Label>
              <div className="grid grid-cols-3 gap-2">
                {[700, 800, 900].map((btn) => (
                  <Button
                    onClick={() => updateHeadingFontWeight(btn)}
                    className={cn(
                      "h-8",
                      fontWeight[0] === btn
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={btn}
                    variant="noShadow"
                  >
                    {btn}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="border-radius">Base Font Weight</Label>
              <div className="grid grid-cols-3 gap-2">
                {[500, 600, 700].map((btn) => (
                  <Button
                    onClick={() => updateBaseFontWeight(btn)}
                    className={cn(
                      "h-8",
                      fontWeight[1] === btn
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={btn}
                    variant="noShadow"
                  >
                    {btn}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Save changes</Button>
            </SheetClose>
            <Button variant="neutral" onClick={resetStyling}>
              Reset
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {/* <CopyCodeButton variant="ghost" size="sm" className="[&_svg]:hidden" /> */}
    </div>
  )
}
