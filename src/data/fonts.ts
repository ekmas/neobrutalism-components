export type GoogleFont = {
  name: string
  // Weights available on Google Fonts. Only weights a font actually has are
  // requested, because the Google Fonts API rejects the whole request otherwise.
  weights: number[]
}

export const DEFAULT_FONT_NAME = "DM Sans"

const ALL_WEIGHTS = [400, 500, 600, 700, 800, 900]

const fonts: GoogleFont[] = [
  { name: "DM Sans", weights: ALL_WEIGHTS },
  { name: "Archivo", weights: ALL_WEIGHTS },
  { name: "Archivo Black", weights: [400] },
  { name: "Bricolage Grotesque", weights: [400, 500, 600, 700, 800] },
  { name: "Chivo", weights: ALL_WEIGHTS },
  { name: "Geist", weights: ALL_WEIGHTS },
  { name: "IBM Plex Sans", weights: [400, 500, 600, 700] },
  { name: "Inter", weights: ALL_WEIGHTS },
  { name: "Instrument Sans", weights: [400, 500, 600, 700] },
  { name: "Lexend", weights: ALL_WEIGHTS },
  { name: "Manrope", weights: [400, 500, 600, 700, 800] },
  { name: "Outfit", weights: ALL_WEIGHTS },
  { name: "Poppins", weights: ALL_WEIGHTS },
  { name: "Public Sans", weights: ALL_WEIGHTS },
  { name: "Rubik", weights: ALL_WEIGHTS },
  { name: "Sora", weights: [400, 500, 600, 700, 800] },
  { name: "Space Grotesk", weights: [400, 500, 600, 700] },
  { name: "Space Mono", weights: [400, 700] },
  { name: "Syne", weights: [400, 500, 600, 700, 800] },
  { name: "Work Sans", weights: ALL_WEIGHTS },
]

export default fonts
