import fs from "fs"
import path from "path"

import colors from "@/data/colors"

// First create all styles
const STYLES = colors.map((color) => ({
  name: `neobrutalism-${color.name}`,
  type: "registry:style",
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  title: `Neobrutalism ${color.name.charAt(0).toUpperCase() + color.name.slice(1)}`,
  cssVars: {
    dark: {
      background: color.darkBg,
      "secondary-background": "oklch(100% 0 0)",
      main: color.darkMain,
      ring: "oklch(100% 0 0)",
      foreground: "oklch(92.49% 0 0)",
      "main-foreground": "oklch(0% 0 0)",
      border: "oklch(0% 0 0)",
      overlay: "rgba(0, 0, 0, 0.8)",
      shadow: "4px 4px 0px 0px var(--border)",
    },
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
