import fonts, { DEFAULT_FONT_NAME } from "@/data/fonts"

export type LoadedFont = {
  family: string
  url: string
}

export const FONT_STORAGE_KEY = "font"
export const GOOGLE_FONT_LINK_ID = "google-font-stylesheet"
export const FONT_FAMILY_VARIABLE = "--base-font-family"

export function googleFontUrl(family: string, weights: number[] = []) {
  const name = family.trim().replace(/\s+/g, "+")
  const axis = weights.length ? `:wght@${weights.join(";")}` : ""
  return `https://fonts.googleapis.com/css2?family=${name}${axis}&display=swap`
}

export function fontFamilyValue(family: string) {
  return `"${family}", sans-serif`
}

export function isDefaultFont(family: string) {
  return family.trim().toLowerCase() === DEFAULT_FONT_NAME.toLowerCase()
}

export function getGoogleFont(family: string): LoadedFont | null {
  const font = fonts.find(
    (font) => font.name.toLowerCase() === family.trim().toLowerCase(),
  )
  return font
    ? { family: font.name, url: googleFontUrl(font.name, font.weights) }
    : null
}

export function getDefaultFont(): LoadedFont {
  return getGoogleFont(DEFAULT_FONT_NAME)!
}

export function applyGoogleFont(font: LoadedFont) {
  let link = document.getElementById(
    GOOGLE_FONT_LINK_ID,
  ) as HTMLLinkElement | null

  if (!link) {
    link = document.createElement("link")
    link.id = GOOGLE_FONT_LINK_ID
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }

  if (link.href !== font.url) {
    link.href = font.url
  }

  document.documentElement.style.setProperty(
    FONT_FAMILY_VARIABLE,
    fontFamilyValue(font.family),
  )
}

export function clearGoogleFont() {
  document.getElementById(GOOGLE_FONT_LINK_ID)?.remove()
  document.documentElement.style.removeProperty(FONT_FAMILY_VARIABLE)
}

export function readStoredFont(): LoadedFont | null {
  try {
    const raw = localStorage.getItem(FONT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (
      parsed &&
      typeof parsed.family === "string" &&
      typeof parsed.url === "string"
    ) {
      return parsed
    }
  } catch {}
  return null
}
