export type ColorMode = "monochromatic" | "duotone"

export type ColorPalette = {
  name: string
  main: string
  bg: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
}

export const colorModes: { value: ColorMode; label: string }[] = [
  { value: "monochromatic", label: "Monochromatic" },
  { value: "duotone", label: "Duotone" },
]

export const DEFAULT_COLOR_MODE: ColorMode = "monochromatic"
export const DEFAULT_COLOR_NAME = "blue"

// Palettes are taken from the "Monochromatic color palettes" and
// "Duotone mode palettes" frames in the Neobrutalism components Figma file.
const monochromatic: ColorPalette[] = [
  {
    name: "red",
    main: "hsl(359, 100%, 69%)",
    bg: "hsl(0, 100%, 94%)",
    chart1: "#FF6164",
    chart2: "#5294FF",
    chart3: "#FACC00",
    chart4: "#05E17A",
    chart5: "#7A83FF",
  },
  {
    name: "orange",
    main: "hsl(28, 100%, 51%)",
    bg: "hsl(33, 100%, 92%)",
    chart1: "#FF7A05",
    chart2: "#0099FF",
    chart3: "#FFBF00",
    chart4: "#00D696",
    chart5: "#7A83FF",
  },
  {
    name: "amber",
    main: "hsl(45, 100%, 50%)",
    bg: "hsl(48, 96%, 89%)",
    chart1: "#FFBF00",
    chart2: "#0099FF",
    chart3: "#FF7A05",
    chart4: "#00D696",
    chart5: "#7A83FF",
  },
  {
    name: "yellow",
    main: "hsl(49, 100%, 49%)",
    bg: "hsl(54, 92%, 88%)",
    chart1: "#FACC00",
    chart2: "#7A83FF",
    chart3: "#FF4D50",
    chart4: "#00D696",
    chart5: "#0099FF",
  },
  {
    name: "lime",
    main: "hsl(84, 100%, 45%)",
    bg: "hsl(84, 71%, 89%)",
    chart1: "#8AE500",
    chart2: "#0099FF",
    chart3: "#FF4D50",
    chart4: "#FACC00",
    chart5: "#7A83FF",
  },
  {
    name: "green",
    main: "hsl(152, 96%, 45%)",
    bg: "hsl(142, 84%, 93%)",
    chart1: "#05E17A",
    chart2: "#FF7A05",
    chart3: "#0099FF",
    chart4: "#FFBF00",
    chart5: "#7A83FF",
  },
  {
    name: "emerald",
    main: "hsl(162, 100%, 42%)",
    bg: "hsl(156, 84%, 90%)",
    chart1: "#00D696",
    chart2: "#7A83FF",
    chart3: "#FACC00",
    chart4: "#FF4D50",
    chart5: "#0099FF",
  },
  {
    name: "teal",
    main: "hsl(173, 100%, 42%)",
    bg: "hsl(170, 82%, 89%)",
    chart1: "#00D6BD",
    chart2: "#0099FF",
    chart3: "#7A83FF",
    chart4: "#FF4D50",
    chart5: "#FACC00",
  },
  {
    name: "cyan",
    main: "hsl(190, 100%, 47%)",
    bg: "hsl(190, 95%, 90%)",
    chart1: "#00C8F0",
    chart2: "#FF7A05",
    chart3: "#7A83FF",
    chart4: "#FF4D50",
    chart5: "#FACC00",
  },
  {
    name: "sky",
    main: "hsl(204, 100%, 50%)",
    bg: "hsl(207, 89%, 93%)",
    chart1: "#0099FF",
    chart2: "#FF4D50",
    chart3: "#FACC00",
    chart4: "#05E17A",
    chart5: "#7A83FF",
  },
  {
    name: "blue",
    main: "hsl(217, 100%, 66%)",
    bg: "hsl(214, 95%, 93%)",
    chart1: "#5294FF",
    chart2: "#FF4D50",
    chart3: "#FACC00",
    chart4: "#05E17A",
    chart5: "#7A83FF",
  },
  {
    name: "indigo",
    main: "hsl(236, 100%, 76%)",
    bg: "hsl(236, 100%, 94%)",
    chart1: "#858DFF",
    chart2: "#FACC00",
    chart3: "#FF4D50",
    chart4: "#00D696",
    chart5: "#0099FF",
  },
  {
    name: "violet",
    main: "hsl(258, 100%, 76%)",
    bg: "hsl(259, 94%, 95%)",
    chart1: "#A985FF",
    chart2: "#00D696",
    chart3: "#FACC00",
    chart4: "#FF4D50",
    chart5: "#0099FF",
  },
  {
    name: "purple",
    main: "hsl(276, 100%, 74%)",
    bg: "hsl(270, 100%, 95%)",
    chart1: "#CA7AFF",
    chart2: "#FFBF00",
    chart3: "#00D696",
    chart4: "#FF7A05",
    chart5: "#0099FF",
  },
  {
    name: "fuchsia",
    main: "hsl(291, 100%, 71%)",
    bg: "hsl(290, 100%, 95%)",
    chart1: "#E96BFF",
    chart2: "#FACC00",
    chart3: "#FF7A05",
    chart4: "#FF4D50",
    chart5: "#7A83FF",
  },
  {
    name: "pink",
    main: "hsl(332, 96%, 69%)",
    bg: "hsl(327, 73%, 95%)",
    chart1: "#FC64AB",
    chart2: "#FACC00",
    chart3: "#FF7A05",
    chart4: "#FF4D50",
    chart5: "#7A83FF",
  },
  {
    name: "rose",
    main: "hsl(353, 100%, 70%)",
    bg: "hsl(355, 100%, 94%)",
    chart1: "#FF6678",
    chart2: "#7A83FF",
    chart3: "#FACC00",
    chart4: "#00D696",
    chart5: "#5294FF",
  },
]

const duotone: ColorPalette[] = [
  {
    name: "red",
    main: "hsl(359, 100%, 69%)",
    bg: "hsl(204, 100%, 80%)",
    chart1: "#FF6164",
    chart2: "#0099FF",
    chart3: "#FACC00",
    chart4: "#05E17A",
    chart5: "#7A83FF",
  },
  {
    name: "orange",
    main: "hsl(28, 100%, 51%)",
    bg: "hsl(204, 100%, 80%)",
    chart1: "#FF7A05",
    chart2: "#0099FF",
    chart3: "#FFBF00",
    chart4: "#00D696",
    chart5: "#7A83FF",
  },
  {
    name: "amber",
    main: "hsl(45, 100%, 50%)",
    bg: "hsl(28, 100%, 80%)",
    chart1: "#FFBF00",
    chart2: "#FF7A05",
    chart3: "#0099FF",
    chart4: "#00D696",
    chart5: "#7A83FF",
  },
  {
    name: "yellow",
    main: "hsl(49, 100%, 49%)",
    bg: "hsl(236, 100%, 80%)",
    chart1: "#FACC00",
    chart2: "#7A83FF",
    chart3: "#FF4D50",
    chart4: "#00D696",
    chart5: "#0099FF",
  },
  {
    name: "lime",
    main: "hsl(84, 100%, 45%)",
    bg: "hsl(204, 100%, 80%)",
    chart1: "#8AE500",
    chart2: "#0099FF",
    chart3: "#FF4D50",
    chart4: "#FACC00",
    chart5: "#7A83FF",
  },
  {
    name: "green",
    main: "hsl(152, 96%, 45%)",
    bg: "hsl(28, 100%, 80%)",
    chart1: "#05E17A",
    chart2: "#FF7A05",
    chart3: "#0099FF",
    chart4: "#FFBF00",
    chart5: "#7A83FF",
  },
  {
    name: "emerald",
    main: "hsl(162, 100%, 42%)",
    bg: "hsl(236, 100%, 80%)",
    chart1: "#00D696",
    chart2: "#7A83FF",
    chart3: "#FACC00",
    chart4: "#FF4D50",
    chart5: "#0099FF",
  },
  {
    name: "teal",
    main: "hsl(173, 100%, 42%)",
    bg: "hsl(204, 100%, 80%)",
    chart1: "#00D6BD",
    chart2: "#0099FF",
    chart3: "#7A83FF",
    chart4: "#FF4D50",
    chart5: "#FACC00",
  },
  {
    name: "cyan",
    main: "hsl(190, 100%, 47%)",
    bg: "hsl(28, 100%, 80%)",
    chart1: "#00C8F0",
    chart2: "#FF7A05",
    chart3: "#7A83FF",
    chart4: "#FF4D50",
    chart5: "#FACC00",
  },
  {
    name: "sky",
    main: "hsl(204, 100%, 50%)",
    bg: "hsl(236, 100%, 80%)",
    chart1: "#0099FF",
    chart2: "#7A83FF",
    chart3: "#FACC00",
    chart4: "#05E17A",
    chart5: "#FF4D50",
  },
  {
    name: "violet",
    main: "hsl(258, 100%, 76%)",
    bg: "hsl(162, 100%, 80%)",
    chart1: "#A985FF",
    chart2: "#00D696",
    chart3: "#FACC00",
    chart4: "#FF4D50",
    chart5: "#0099FF",
  },
  {
    name: "fuchsia",
    main: "hsl(291, 100%, 71%)",
    bg: "hsl(49, 100%, 80%)",
    chart1: "#E96BFF",
    chart2: "#FACC00",
    chart3: "#FF7A05",
    chart4: "#FF4D50",
    chart5: "#7A83FF",
  },
  {
    name: "rose",
    main: "hsl(353, 100%, 70%)",
    bg: "hsl(236, 100%, 80%)",
    chart1: "#FF6678",
    chart2: "#7A83FF",
    chart3: "#FACC00",
    chart4: "#00D696",
    chart5: "#5294FF",
  },
]

const colors: Record<ColorMode, ColorPalette[]> = {
  monochromatic,
  duotone,
}

export function getPalette(mode: ColorMode, name: string) {
  return colors[mode].find((palette) => palette.name === name)
}

export const defaultPalette = getPalette(
  DEFAULT_COLOR_MODE,
  DEFAULT_COLOR_NAME,
)!

export default colors
