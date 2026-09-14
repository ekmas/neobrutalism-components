"use client"

import { useLayoutEffect, useState } from "react"

import colors, {
  ColorMode,
  colorModes,
  ColorPalette,
  DEFAULT_COLOR_MODE,
  defaultPalette,
  getPalette,
} from "@/data/colors"
import fonts from "@/data/fonts"

import {
  DocsTabs,
  DocsTabsContent,
  DocsTabsList,
  DocsTabsTrigger,
} from "@/components/app/docs-tabs"
import { Pre } from "@/components/app/pre"
import ShadcnCliCommand from "@/components/app/shadcn-cli-command"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  applyGoogleFont,
  clearGoogleFont,
  FONT_STORAGE_KEY,
  getDefaultFont,
  getGoogleFont,
  isDefaultFont,
  LoadedFont,
  readStoredFont,
} from "@/lib/google-fonts"
import { REGISTRY_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

export const COLOR_MODE_STORAGE_KEY = "colorMode"

function isColorMode(value: string | null): value is ColorMode {
  return value !== null && value in colors
}

function readStoredPalette(): ColorPalette | null {
  try {
    const raw = localStorage.getItem("palette")
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function applyPalette(palette: ColorPalette) {
  const r = window.document.documentElement
  r.style.setProperty("--background", palette.bg)
  r.style.setProperty("--main", palette.main)
  r.style.setProperty("--chart-1", palette.chart1)
  r.style.setProperty("--chart-2", palette.chart2)
  r.style.setProperty("--chart-3", palette.chart3)
  r.style.setProperty("--chart-4", palette.chart4)
  r.style.setProperty("--chart-5", palette.chart5)
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export default function Styling() {
  const [mode, setMode] = useState<ColorMode>(DEFAULT_COLOR_MODE)
  const [palette, setPalette] = useState<ColorPalette>(defaultPalette)
  const [borderRadius, setBorderRadius] = useState(5)
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])
  const [font, setFont] = useState<LoadedFont>(getDefaultFont)

  const { name, bg, main, chart1, chart2, chart3, chart4, chart5 } = palette

  useLayoutEffect(() => {
    const storedMode = localStorage.getItem(COLOR_MODE_STORAGE_KEY)
    const storedPalette = readStoredPalette()
    const borderRadius = Number(localStorage.getItem("borderRadius"))
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")
    const storedFont = readStoredFont()

    const mode = isColorMode(storedMode) ? storedMode : DEFAULT_COLOR_MODE
    setMode(mode)

    if (storedPalette) {
      // Prefer the current definition of the stored palette so older stored
      // values pick up palette updates.
      const resolved = getPalette(mode, storedPalette.name) ?? storedPalette
      setPalette(resolved)
      applyPalette(resolved)
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

    if (storedFont) {
      setFont(storedFont)
    }
  }, [])

  const selectPalette = (next: ColorPalette) => {
    setPalette(next)
    applyPalette(next)
    localStorage.setItem("palette", JSON.stringify(next))
  }

  const updateColor = (value: string | null) => {
    if (!value) return
    const next = getPalette(mode, value)
    if (next) selectPalette(next)
  }

  const updateMode = (nextMode: ColorMode) => {
    setMode(nextMode)
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, nextMode)
    selectPalette(getPalette(nextMode, name) ?? colors[nextMode][0])
  }

  const updateFont = (family: string | null) => {
    if (!family) return

    const resolved = getGoogleFont(family)
    if (!resolved) return

    setFont(resolved)

    if (isDefaultFont(resolved.family)) {
      clearGoogleFont()
      localStorage.removeItem(FONT_STORAGE_KEY)
    } else {
      applyGoogleFont(resolved)
      localStorage.setItem(FONT_STORAGE_KEY, JSON.stringify(resolved))
    }
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

    applyPalette(defaultPalette)
    clearGoogleFont()

    r.style.setProperty("--border-radius", "5px")
    r.style.setProperty("--box-shadow-x", "4px")
    r.style.setProperty("--box-shadow-y", "4px")
    r.style.setProperty("--heading-font-weight", "700")
    r.style.setProperty("--base-font-weight", "500")

    setMode(DEFAULT_COLOR_MODE)
    setPalette(defaultPalette)
    setBorderRadius(5)
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])
    setFont(getDefaultFont())

    localStorage.clear()
  }

  const knownFont = fonts.some((item) => item.name === font.family)

  // Registry styling item for the selected palette; duotone palettes carry a
  // "-duotone" suffix (see src/scripts/add-registry-styles.ts).
  const stylingUrl = `${REGISTRY_URL}/styling/${mode === "monochromatic" ? palette.name : `${palette.name}-${mode}`}.json`

  const styling = `@import "tailwindcss";
@import "tw-animate-css";

/* Neobrutalism ${mode} palette: ${name} */
:root {
  --background: ${bg};
  --secondary-background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --main-foreground: oklch(0% 0 0);
  --main: ${main};
  --border: oklch(0% 0 0);
  --ring: oklch(0% 0 0);
  --overlay: oklch(0% 0 0 / 0.8);
  --shadow: ${boxShadowLength[0]}px ${boxShadowLength[1]}px 0px 0px var(--border);
  --chart-1: ${chart1};
  --chart-2: ${chart2};
  --chart-3: ${chart3};
  --chart-4: ${chart4};
  --chart-5: ${chart5};
  --chart-active-dot: #000;
}

@theme inline {
  --color-main: var(--main);
  --color-background: var(--background);
  --color-secondary-background: var(--secondary-background);
  --color-foreground: var(--foreground);
  --color-main-foreground: var(--main-foreground);
  --color-border: var(--border);
  --color-overlay: var(--overlay);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --spacing-boxShadowX: ${boxShadowLength[0]}px;
  --spacing-boxShadowY: ${boxShadowLength[1]}px;
  --spacing-reverseBoxShadowX: -${boxShadowLength[0]}px;
  --spacing-reverseBoxShadowY: -${boxShadowLength[1]}px;
  --radius-base: ${borderRadius}px;
  --shadow-shadow: var(--shadow);
  --font-weight-base: ${fontWeight[1]};
  --font-weight-heading: ${fontWeight[0]};
}

@layer base {
  body {
    @apply text-foreground font-base bg-background;
  }

  h1, h2, h3, h4, h5, h6{
    @apply font-heading;
  }
}`

  // The registry item installs the palette with a 5px radius, a 4px shadow
  // and 500/700 font weights. This is what the Manual CSS sets on top of
  // that, so a CLI install can be brought in line with the picks.
  const cliOverrides = `:root {
  --shadow: ${boxShadowLength[0]}px ${boxShadowLength[1]}px 0px 0px var(--border);
}

@theme inline {
  --spacing-boxShadowX: ${boxShadowLength[0]}px;
  --spacing-boxShadowY: ${boxShadowLength[1]}px;
  --spacing-reverseBoxShadowX: -${boxShadowLength[0]}px;
  --spacing-reverseBoxShadowY: -${boxShadowLength[1]}px;
  --radius-base: ${borderRadius}px;
  --font-weight-base: ${fontWeight[1]};
  --font-weight-heading: ${fontWeight[0]};
}`

  return (
    <div className="flex items-center justify-center gap-4">
      <Sheet>
        <SheetTrigger render={<Button />}>Customize</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Customize styling</SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min overflow-y-auto gap-4 px-4 pb-2">
            <div className="grid gap-3">
              <Label>Color Mode</Label>
              <div className="grid grid-cols-2 gap-2">
                {colorModes.map((item) => (
                  <Button
                    onClick={() => updateMode(item.value)}
                    className={cn(
                      "h-8",
                      mode === item.value
                        ? "bg-main text-main-foreground"
                        : "bg-secondary-background text-foreground",
                    )}
                    key={item.value}
                    variant="noShadow"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="color">Color</Label>
              <Select
                value={name}
                onValueChange={updateColor}
                items={colors[mode].map((color) => ({
                  value: color.name,
                  label: capitalize(color.name),
                }))}
              >
                <SelectTrigger
                  id="color"
                  className="bg-secondary-background text-foreground"
                >
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent className="bg-secondary-background text-foreground">
                  {colors[mode].map((color) => (
                    <SelectItem key={color.name} value={color.name}>
                      <div className="flex items-center gap-2">
                        <div className="flex overflow-hidden rounded-base border-2 border-border">
                          <div
                            className="size-4"
                            style={{ backgroundColor: color.main }}
                          />
                          <div className="w-0.5 shrink-0 bg-border" />
                          <div
                            className="size-4"
                            style={{ backgroundColor: color.bg }}
                          />
                        </div>
                        {capitalize(color.name)}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="font">Font</Label>
              <Select
                value={knownFont ? font.family : null}
                onValueChange={updateFont}
                items={fonts.map((item) => ({
                  value: item.name,
                  label: item.name,
                }))}
              >
                <SelectTrigger
                  id="font"
                  className="bg-secondary-background text-foreground"
                >
                  <SelectValue placeholder={font.family} />
                </SelectTrigger>
                <SelectContent className="bg-secondary-background text-foreground">
                  {fonts.map((item) => (
                    <SelectItem key={item.name} value={item.name}>
                      {item.name}
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
            <SheetClose render={<Button />}>Save changes</SheetClose>
            <Button variant="neutral" onClick={resetStyling}>
              Reset
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Dialog>
        <DialogTrigger render={<Button variant="neutral" />}>
          Copy
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Install this theme</DialogTitle>
            <DialogDescription>
              Copy the command for your package manager, or paste the CSS into
              your project.
            </DialogDescription>
          </DialogHeader>
          <DocsTabs
            defaultValue="cli"
            className="min-w-0 shadow-none! [&_[data-slot=pre-wrapper]]:shadow-none [&_[data-slot=tabs]]:shadow-none"
          >
            <DocsTabsList className="grid w-full grid-cols-2">
              <DocsTabsTrigger value="cli">Shadcn CLI</DocsTabsTrigger>
              <DocsTabsTrigger value="manual">Manual</DocsTabsTrigger>
            </DocsTabsList>
            <DocsTabsContent value="cli">
              <div className="flex min-w-0 flex-col gap-4 pt-4 [&_[data-slot=pre-wrapper]]:mb-0">
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Scaffold a new project already themed:
                  </div>
                  <ShadcnCliCommand command="init" url={stylingUrl} multiline />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Or add to an existing project:
                  </div>
                  <ShadcnCliCommand command="add" url={stylingUrl} multiline />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Then update these in your globals.css to match your radius,
                    shadow and font weights:
                  </div>
                  <Pre
                    wrapperClassName="w-full max-w-full text-white overflow-x-auto"
                    __rawstring__={cliOverrides}
                  >
                    {cliOverrides}
                  </Pre>
                </div>
              </div>
            </DocsTabsContent>
            <DocsTabsContent value="manual">
              <div className="flex min-w-0 flex-col gap-4 pt-4 [&_[data-slot=pre-wrapper]]:mb-0">
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Paste into your globals.css. This includes your radius,
                    shadow and font weights:
                  </div>
                  <Pre
                    wrapperClassName="w-full max-w-full text-white overflow-x-auto"
                    __rawstring__={styling}
                  >
                    {styling}
                  </Pre>
                </div>
              </div>
            </DocsTabsContent>
          </DocsTabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}
