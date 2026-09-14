import fs from "fs"
import path from "path"

import colors, { ColorMode, ColorPalette } from "@/data/colors"

const SITE_URL = "https://neobrutalism.dev"

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

// Monochromatic palettes keep their original file names (e.g. blue.json),
// duotone palettes get a "-duotone" suffix (e.g. blue-duotone.json).
const PALETTES = (Object.keys(colors) as ColorMode[]).flatMap((mode) =>
  colors[mode].map((color: ColorPalette) => ({
    ...color,
    id: mode === "monochromatic" ? color.name : `${color.name}-${mode}`,
    title:
      mode === "monochromatic"
        ? `Neobrutalism ${capitalize(color.name)}`
        : `Neobrutalism ${capitalize(color.name)} ${capitalize(mode)}`,
  })),
)

// Everything below mirrors src/styling/globals.css. Each palette compiles to
// a registry:style item that `shadcn init <url>` writes into a fresh
// project's globals.css, so it has to carry every token and rule the ui
// components depend on, not just the palette colours. Keep the two in sync.

// @theme inline tokens. The CLI adds a --color-* entry for every colour in
// cssVars.light on its own; the rest are listed here.
const THEME = {
  "color-main": "var(--main)",
  "color-background": "var(--background)",
  "color-secondary-background": "var(--secondary-background)",
  "color-foreground": "var(--foreground)",
  "color-main-foreground": "var(--main-foreground)",
  "color-border": "var(--border)",
  "color-ring": "var(--ring)",
  "color-overlay": "var(--overlay)",
  "color-chart-1": "var(--chart-1)",
  "color-chart-2": "var(--chart-2)",
  "color-chart-3": "var(--chart-3)",
  "color-chart-4": "var(--chart-4)",
  "color-chart-5": "var(--chart-5)",
  "spacing-boxShadowX": "4px",
  "spacing-boxShadowY": "4px",
  "spacing-reverseBoxShadowX": "-4px",
  "spacing-reverseBoxShadowY": "-4px",
  "radius-base": "5px",
  "font-weight-base": "500",
  "font-weight-heading": "700",
  "shadow-shadow": "var(--shadow)",
  "animate-marquee": "marquee 5s linear infinite",
  "animate-marquee2": "marquee2 5s linear infinite",
}

// Extra CSS the components need beyond tokens: the tw-animate-css import
// (dialogs, sheets and so on use its animate-in utilities), the base font
// weights, the marquee keyframes and the scrollbar styling used by
// scroll-area. The CLI places @keyframes inside @theme inline, like
// globals.css does.
const CSS = {
  '@import "tw-animate-css"': {},
  "@layer base": {
    body: {
      "font-weight": "var(--font-weight-base)",
      color: "var(--foreground)",
    },
    "h1, h2, h3, h4, h5, h6": {
      "font-weight": "var(--font-weight-heading)",
    },
  },
  "@keyframes marquee": {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  "@keyframes marquee2": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0%)" },
  },
  "body, .scrollbar": {
    "--sb-track-color": "#ffffff",
    "--sb-thumb-color": "#000000",
  },
  ".scrollbar::-webkit-scrollbar": { width: "16px" },
  ".scrollbar::-webkit-scrollbar-track": {
    background: "var(--sb-track-color)",
  },
  ".scrollbar::-webkit-scrollbar-thumb": {
    background: "var(--sb-thumb-color)",
  },
  "@supports not selector(::-webkit-scrollbar)": {
    ".scrollbar": {
      "scrollbar-color": "var(--sb-thumb-color) var(--sb-track-color)",
    },
  },
}

const STYLES = PALETTES.map((color) => ({
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: `neobrutalism-${color.id}`,
  type: "registry:style",
  // A palette is the whole theme, so init starts from this item alone
  // instead of layering it over shadcn's default style. "utils" is
  // shadcn's own item for lib/utils.ts, which every component imports.
  extends: "none",
  title: color.title,
  description:
    "A collection of neobrutalism-styled components based on shadcn/ui.",
  dependencies: ["tw-animate-css", "class-variance-authority", "lucide-react"],
  // Button is installed alongside the theme so init scaffolds a project
  // with something already on the page.
  registryDependencies: ["utils", `${SITE_URL}/r/button.json`],
  cssVars: {
    light: {
      background: color.bg,
      "secondary-background": "oklch(100% 0 0)",
      main: color.main,
      ring: "oklch(0% 0 0)",
      foreground: "oklch(0% 0 0)",
      "main-foreground": "oklch(0% 0 0)",
      border: "oklch(0% 0 0)",
      overlay: "oklch(0% 0 0 / 0.8)",
      shadow: "4px 4px 0px 0px var(--border)",
      "chart-1": color.chart1,
      "chart-2": color.chart2,
      "chart-3": color.chart3,
      "chart-4": color.chart4,
      "chart-5": color.chart5,
      "chart-active-dot": "#000",
    },
    theme: THEME,
  },
  css: CSS,
}))

// Create directory if it doesn't exist
const dir = path.join(process.cwd(), "public", "r", "styling")
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

// Write all styles to files
STYLES.forEach((style) => {
  fs.writeFileSync(
    path.join(dir, `${style.name.replace("neobrutalism-", "")}.json`),
    JSON.stringify(style, null, 2),
  )
})

// Normalize line endings inside the generated registry items so the output
// does not depend on the line endings of the checkout (git autocrlf on Windows).
// The file contents are JSON strings, so CRLF shows up as the escaped "\r\n".
const registryDir = path.join(process.cwd(), "public", "r")
fs.readdirSync(registryDir)
  .filter((file) => file.endsWith(".json"))
  .forEach((file) => {
    const filePath = path.join(registryDir, file)
    fs.writeFileSync(
      filePath,
      fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n"),
    )
  })

console.log(`Wrote ${STYLES.length} styling items to ${dir}`)
