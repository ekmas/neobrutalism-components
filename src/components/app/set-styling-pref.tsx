"use client"

import { useLayoutEffect } from "react"

export default function SetStylingPref() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = localStorage.getItem("borderRadius")
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")

    const r = window.document.querySelector(":root") as HTMLElement
    const isDarkMode = document.documentElement.classList.contains("dark")

    if (colorObj) {
      if (isDarkMode) {
        r.style.setProperty("--background", colorObj.darkBg)
        r.style.setProperty("--main", colorObj.darkMain)
        r.style.setProperty("--chart-1", colorObj.darkChart1)
        r.style.setProperty("--chart-2", colorObj.darkChart2)
        r.style.setProperty("--chart-3", colorObj.darkChart3)
        r.style.setProperty("--chart-4", colorObj.darkChart4)
        r.style.setProperty("--chart-5", colorObj.darkChart5)
      } else {
        r.style.setProperty("--background", colorObj.bg)
        r.style.setProperty("--main", colorObj.main)
        r.style.setProperty("--chart-1", colorObj.chart1)
        r.style.setProperty("--chart-2", colorObj.chart2)
        r.style.setProperty("--chart-3", colorObj.chart3)
        r.style.setProperty("--chart-4", colorObj.chart4)
        r.style.setProperty("--chart-5", colorObj.chart5)
      }

      r.style.setProperty("--dark-background", colorObj.darkBg)
      r.style.setProperty("--dark-main", colorObj.darkMain)
      r.style.setProperty("--light-background", colorObj.bg)
      r.style.setProperty("--light-main", colorObj.main)
    }

    if (borderRadius) {
      r.style.setProperty("--border-radius", borderRadius + "px")
    }

    if (boxShadow) {
      r.style.setProperty("--box-shadow-x", boxShadow[0] + "px")
      r.style.setProperty("--box-shadow-y", boxShadow[1] + "px")
    }

    if (fontWeight) {
      r.style.setProperty("--heading-font-weight", fontWeight[0])
      r.style.setProperty("--base-font-weight", fontWeight[1])
    }
  }, [])

  return <></>
}
