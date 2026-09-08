"use client"

import { useLayoutEffect } from "react"

export default function SetStylingPref() {
  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = localStorage.getItem("borderRadius")
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")

    const r = window.document.querySelector(":root") as HTMLElement
    if (colorObj) {
      r.style.setProperty("--background", colorObj.bg)
      r.style.setProperty("--main", colorObj.main)
      r.style.setProperty("--chart-1", colorObj.chart1)
      r.style.setProperty("--chart-2", colorObj.chart2)
      r.style.setProperty("--chart-3", colorObj.chart3)
      r.style.setProperty("--chart-4", colorObj.chart4)
      r.style.setProperty("--chart-5", colorObj.chart5)
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
