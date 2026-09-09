import fs from "fs"
import path from "path"

import colors, { ColorMode, ColorPalette } from "@/data/colors"

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

// First create all styles
const STYLES = PALETTES.map((color) => ({
  name: `neobrutalism-${color.id}`,
  type: "registry:style",
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  title: color.title,
  cssVars: {
    light: {
      background: color.bg,
      "secondary-background": "oklch(23.93% 0 0)",
      main: color.main,
      ring: "oklch(0% 0 0)",
      foreground: "oklch(0% 0 0)",
      "main-foreground": "oklch(0% 0 0)",
      border: "oklch(0% 0 0)",
      overlay: "rgba(0, 0, 0, 0.8)",
      shadow: "4px 4px 0px 0px var(--border)",
      "chart-1": color.chart1,
      "chart-2": color.chart2,
      "chart-3": color.chart3,
      "chart-4": color.chart4,
      "chart-5": color.chart5,
    },
    theme: {
      "color-main": "var(--main)",
      "color-background": "var(--background)",
      "color-secondary-background": "var(--secondary-background)",
      "color-foreground": "var(--foreground)",
      "color-main-foreground": "var(--main-foreground)",
      "color-border": "var(--border)",
      "color-ring": "var(--ring)",
      "color-overlay": "var(--overlay)",
      "spacing-boxShadowX": "4px",
      "spacing-boxShadowY": "4px",
      "spacing-reverseBoxShadowX": "-4px",
      "spacing-reverseBoxShadowY": "-4px",
      "radius-base": "5px",
      "font-weight-base": "500",
      "font-weight-heading": "700",
      "shadow-shadow": "var(--shadow)",
    },
  },
  extends: "none",
  description:
    "A collection of neobrutalism-styled components based on shadcn/ui.",
  dependencies: ["tw-animate-css", "class-variance-authority", "lucide-react"],
  registryDependencies: ["utils"],
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
      fs.readFileSync(filePath, "utf8").replace(/\\r\\n/g, "\\n"),
    )
  })
