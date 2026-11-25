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
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
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

// Shared by the styling page and the templates toolbar. Both read and write
// the same localStorage keys, which SetStylingPref applies on every page, so a
// change made in either place carries over to the docs and the templates.

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

function setRootProperty(name: string, value: string) {
  window.document.documentElement.style.setProperty(name, value)
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function useStyling() {
  const [mode, setMode] = useState<ColorMode>(DEFAULT_COLOR_MODE)
  const [palette, setPalette] = useState<ColorPalette>(defaultPalette)
  const [borderRadius, setBorderRadius] = useState(5)
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])
  const [font, setFont] = useState<LoadedFont>(getDefaultFont)

  useLayoutEffect(() => {
    const storedMode = localStorage.getItem(COLOR_MODE_STORAGE_KEY)
    const storedPalette = readStoredPalette()
    const storedRadius = Number(localStorage.getItem("borderRadius"))
    const storedShadow = localStorage.getItem("boxShadow")?.split(",")
    const storedWeight = localStorage.getItem("fontWeight")?.split(",")
    const storedFont = readStoredFont()

    const nextMode = isColorMode(storedMode) ? storedMode : DEFAULT_COLOR_MODE
    setMode(nextMode)

    if (storedPalette) {
      // Prefer the current definition of the stored palette so older stored
      // values pick up palette updates.
      const resolved = getPalette(nextMode, storedPalette.name) ?? storedPalette
      setPalette(resolved)
      applyPalette(resolved)
    }

    if (storedRadius) setBorderRadius(storedRadius)
    if (storedShadow) setBoxShadowLength([+storedShadow[0], +storedShadow[1]])
    if (storedWeight) setFontWeight([+storedWeight[0], +storedWeight[1]])
    if (storedFont) setFont(storedFont)
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
    selectPalette(getPalette(nextMode, palette.name) ?? colors[nextMode][0])
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
    setRootProperty("--border-radius", `${value}px`)
    localStorage.setItem("borderRadius", value.toString())
    setBorderRadius(value)
  }

  const updateHorizontalBoxShadow = (value: number) => {
    setRootProperty("--box-shadow-x", `${value}px`)
    setBoxShadowLength([value, boxShadowLength[1]])
    localStorage.setItem("boxShadow", `${value},${boxShadowLength[1]}`)
  }

  const updateVerticalBoxShadow = (value: number) => {
    setRootProperty("--box-shadow-y", `${value}px`)
    setBoxShadowLength([boxShadowLength[0], value])
    localStorage.setItem("boxShadow", `${boxShadowLength[0]},${value}`)
  }

  const updateHeadingFontWeight = (value: number) => {
    setRootProperty("--heading-font-weight", `${value}`)
    setFontWeight([value, fontWeight[1]])
    localStorage.setItem("fontWeight", `${value},${fontWeight[1]}`)
  }

  const updateBaseFontWeight = (value: number) => {
    setRootProperty("--base-font-weight", `${value}`)
    setFontWeight([fontWeight[0], value])
    localStorage.setItem("fontWeight", `${fontWeight[0]},${value}`)
  }

  const resetStyling = () => {
    applyPalette(defaultPalette)
    clearGoogleFont()

    setRootProperty("--border-radius", "5px")
    setRootProperty("--box-shadow-x", "4px")
    setRootProperty("--box-shadow-y", "4px")
    setRootProperty("--heading-font-weight", "700")
    setRootProperty("--base-font-weight", "500")

    setMode(DEFAULT_COLOR_MODE)
    setPalette(defaultPalette)
    setBorderRadius(5)
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])
    setFont(getDefaultFont())

    localStorage.clear()
  }

  return {
    mode,
    palette,
    borderRadius,
    boxShadowLength,
    fontWeight,
    font,
    updateMode,
    updateColor,
    updateFont,
    updateBorderRadius,
    updateHorizontalBoxShadow,
    updateVerticalBoxShadow,
    updateHeadingFontWeight,
    updateBaseFontWeight,
    resetStyling,
  }
}

export type Styling = ReturnType<typeof useStyling>

// Install instructions for the current picks: the registry styling item, the
// full CSS for a manual install, and what to set on top of the registry item
// (which ships a 5px radius, a 4px shadow and 700/500 font weights).
export function getStylingInstall(styling: Styling) {
  const { mode, palette, borderRadius, boxShadowLength, fontWeight } = styling
  const { name, bg, main, chart1, chart2, chart3, chart4, chart5 } = palette
  const [shadowX, shadowY] = boxShadowLength
  const [headingWeight, baseWeight] = fontWeight

  // Duotone palettes carry a "-duotone" suffix (see
  // src/scripts/add-registry-styles.ts).
  const url = `${REGISTRY_URL}/styling/${mode === "monochromatic" ? name : `${name}-${mode}`}.json`

  const isDefaultPalette =
    mode === DEFAULT_COLOR_MODE && name === defaultPalette.name
  const hasOverrides =
    borderRadius !== 5 ||
    shadowX !== 4 ||
    shadowY !== 4 ||
    headingWeight !== 700 ||
    baseWeight !== 500

  const css = `@import "tailwindcss";
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
  --shadow: ${shadowX}px ${shadowY}px 0px 0px var(--border);
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

  --spacing-boxShadowX: ${shadowX}px;
  --spacing-boxShadowY: ${shadowY}px;
  --spacing-reverseBoxShadowX: -${shadowX}px;
  --spacing-reverseBoxShadowY: -${shadowY}px;
  --radius-base: ${borderRadius}px;
  --shadow-shadow: var(--shadow);
  --font-weight-base: ${baseWeight};
  --font-weight-heading: ${headingWeight};
}

@layer base {
  body {
    @apply text-foreground font-base bg-background;
  }

  h1, h2, h3, h4, h5, h6{
    @apply font-heading;
  }
}`

  const overrides = `:root {
  --shadow: ${shadowX}px ${shadowY}px 0px 0px var(--border);
}

@theme inline {
  --spacing-boxShadowX: ${shadowX}px;
  --spacing-boxShadowY: ${shadowY}px;
  --spacing-reverseBoxShadowX: -${shadowX}px;
  --spacing-reverseBoxShadowY: -${shadowY}px;
  --radius-base: ${borderRadius}px;
  --font-weight-base: ${baseWeight};
  --font-weight-heading: ${headingWeight};
}`

  return {
    url,
    css,
    overrides,
    isDefaultPalette,
    hasOverrides,
    isDefault: isDefaultPalette && !hasOverrides,
  }
}

function OptionButtons<T extends string | number>({
  options,
  value,
  onSelect,
  format = (option) => `${option}`,
}: {
  options: readonly T[]
  value: T
  onSelect: (option: T) => void
  format?: (option: T) => string
}) {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => onSelect(option)}
          className={cn(
            "h-8",
            value === option
              ? "bg-main text-main-foreground"
              : "bg-secondary-background text-foreground",
          )}
          variant="noShadow"
        >
          {format(option)}
        </Button>
      ))}
    </div>
  )
}

// The body of the "Customize styling" sheet. Render it inside a <Sheet>.
export function StylingSheetContent({ styling }: { styling: Styling }) {
  const { mode, palette, borderRadius, boxShadowLength, fontWeight, font } =
    styling
  const knownFont = fonts.some((item) => item.name === font.family)
  const px = (value: number) => `${value} px`

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Customize styling</SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-4 overflow-y-auto px-4 pb-2">
        <div className="grid gap-3">
          <Label>Color Mode</Label>
          <OptionButtons
            options={colorModes.map((item) => item.value)}
            value={mode}
            onSelect={styling.updateMode}
            format={(value) =>
              colorModes.find((item) => item.value === value)?.label ?? value
            }
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="color">Color</Label>
          <Select
            value={palette.name}
            onValueChange={styling.updateColor}
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
            onValueChange={styling.updateFont}
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
          <Label>Border Radius</Label>
          <OptionButtons
            options={[0, 5, 10, 15]}
            value={borderRadius}
            onSelect={styling.updateBorderRadius}
            format={px}
          />
        </div>
        <div className="grid gap-3">
          <Label>Horizontal Box Shadow</Label>
          <OptionButtons
            options={[-4, -2, 0, 2, 4]}
            value={boxShadowLength[0]}
            onSelect={styling.updateHorizontalBoxShadow}
            format={px}
          />
        </div>
        <div className="grid gap-3">
          <Label>Vertical Box Shadow</Label>
          <OptionButtons
            options={[-4, -2, 0, 2, 4]}
            value={boxShadowLength[1]}
            onSelect={styling.updateVerticalBoxShadow}
            format={px}
          />
        </div>
        <div className="grid gap-3">
          <Label>Heading Font Weight</Label>
          <OptionButtons
            options={[700, 800, 900]}
            value={fontWeight[0]}
            onSelect={styling.updateHeadingFontWeight}
          />
        </div>
        <div className="grid gap-3">
          <Label>Base Font Weight</Label>
          <OptionButtons
            options={[500, 600, 700]}
            value={fontWeight[1]}
            onSelect={styling.updateBaseFontWeight}
          />
        </div>
      </div>
      <SheetFooter>
        <SheetClose render={<Button />}>Save changes</SheetClose>
        <Button variant="neutral" onClick={styling.resetStyling}>
          Reset
        </Button>
      </SheetFooter>
    </SheetContent>
  )
}
