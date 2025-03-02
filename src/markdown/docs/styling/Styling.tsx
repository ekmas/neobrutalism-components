"use client"

import { useLayoutEffect, useState } from "react"

import colors from "@/data/colors"

import Code from "@/components/app/Code"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import BorderRadius from "./BorderRadius"
import BoxShadow from "./BoxShadow"
import Colors, { type ColorPallette } from "./Colors"
import FontWeight from "./FontWeight"

export default function Styling() {
  const defaultColorPalette: ColorPallette = colors[0]

  const [activeColorPallete, setActiveColorPalette] =
    useState<ColorPallette>(defaultColorPalette)
  const [borderRadius, setBorderRadius] = useState([5])
  const [boxShadowLength, setBoxShadowLength] = useState([4, 4])
  const [fontWeight, setFontWeight] = useState([700, 500])

  useLayoutEffect(() => {
    const colorObj = JSON.parse(localStorage.getItem("color") as string)
    const borderRadius = localStorage.getItem("borderRadius") as string
    const boxShadow = localStorage.getItem("boxShadow")?.split(",")
    const fontWeight = localStorage.getItem("fontWeight")?.split(",")

    if (colorObj) {
      setActiveColorPalette(colorObj)
    }

    if (borderRadius) {
      setBorderRadius([+borderRadius])
    }

    if (boxShadow) {
      setBoxShadowLength([+boxShadow[0], +boxShadow[1]])
    }

    if (fontWeight) {
      setFontWeight([+fontWeight[0], +fontWeight[1]])
    }
  }, [])

  const resetStyling = () => {
    const r = window.document.querySelector(":root") as HTMLElement

    r.style.setProperty("--bg", defaultColorPalette.bg)
    r.style.setProperty("--main", defaultColorPalette.main)
    r.style.setProperty("--main50", defaultColorPalette.main + "b3")
    r.style.setProperty("--dark-bg", defaultColorPalette.darkBg)

    r.style.setProperty("--border-radius", "5px")
    r.style.setProperty("--horizontal-box-shadow", "4px")
    r.style.setProperty("--vertical-box-shadow", "4px")
    r.style.setProperty("--heading-font-weight", "700")
    r.style.setProperty("--base-font-weight", "500")

    setActiveColorPalette(defaultColorPalette)
    setBorderRadius([5])
    setBoxShadowLength([4, 4])
    setFontWeight([700, 500])

    localStorage.clear()
  }

  const indexCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
  
:root {
  --main: ${activeColorPallete.main};
  --overlay: rgba(0, 0, 0, 0.8); /* background color overlay for alert dialogs, modals, etc. */

  --bg: ${activeColorPallete.bg};
  --bw: #fff; /* white and secondary black e.g. utility class variant would be: bg-[#fff] dark:bg-[#212121] */
  --blank: #000; /* blank black and white */
  --border: #000;
  --text: #000;
  --mtext: #000; /* text that is placed on background with main color e.g. text color of default button */
  --ring: #000;
  --ring-offset: #fff;

  --border-radius: ${borderRadius}px;
  --box-shadow-x: ${boxShadowLength[0] + "px"};
  --box-shadow-y: ${boxShadowLength[1] + "px"};
  --reverse-box-shadow-x: ${-boxShadowLength[0] + "px"};
  --reverse-box-shadow-y: ${-boxShadowLength[1] + "px"};
  --base-font-weight: ${fontWeight[1]};
  --heading-font-weight: ${fontWeight[0]};

  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0px 0px var(--border);
}

.dark {
  --bg: ${activeColorPallete.darkBg};
  --bw: #212121;
  --blank: #fff;
  --border: #000;
  --text: #e6e6e6;
  --mtext: #000;
  --ring: #fff;
  --ring-offset: #000;

  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0px 0px var(--border);
}`

  const twConfigCssVars = `theme: {
  extend: {
    colors: {
      main: 'var(--main)',
      overlay: 'var(--overlay)',
      bg: 'var(--bg)',
      bw: 'var(--bw)',
      blank: 'var(--blank)',
      text: 'var(--text)',
      mtext: 'var(--mtext)',
      border: 'var(--border)',
      ring: 'var(--ring)',
      ringOffset: 'var(--ring-offset)',
      
      secondaryBlack: '#212121', 
    },
    borderRadius: {
      base: '${borderRadius}px'
    },
    boxShadow: {
      shadow: 'var(--shadow)'
    },
    translate: {
      boxShadowX: '${boxShadowLength[0] + "px"}',
      boxShadowY: '${boxShadowLength[1] + "px"}',
      reverseBoxShadowX: '${-boxShadowLength[0] + "px"}',
      reverseBoxShadowY: '${-boxShadowLength[1] + "px"}',
    },
    fontWeight: {
      base: '${fontWeight[1]}',
      heading: '${fontWeight[0]}',
    },
  },
},`

  const twConfigUtil = `theme: {
  extend: {
    colors: {
      main: '${activeColorPallete.main}',
      overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      // light mode
      bg: '${activeColorPallete.bg}',
      text: '#000',
      border: '#000',

      // dark mode
      darkBg: '${activeColorPallete.darkBg}',
      darkText: '#eeefe9',
      darkBorder: '#000',
      secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
    },
    borderRadius: {
      base: '${borderRadius}px'
    },
    boxShadow: {
      light: '${boxShadowLength[0] + "px"} ${
        boxShadowLength[1] + "px"
      } 0px 0px #000',
      dark: '${boxShadowLength[0] + "px"} ${
        boxShadowLength[1] + "px"
      } 0px 0px #000',
    },
    translate: {
      boxShadowX: '${boxShadowLength[0] + "px"}',
      boxShadowY: '${boxShadowLength[1] + "px"}',
      reverseBoxShadowX: '${-boxShadowLength[0] + "px"}',
      reverseBoxShadowY: '${-boxShadowLength[1] + "px"}',
    },
    fontWeight: {
      base: '${fontWeight[1]}',
      heading: '${fontWeight[0]}',
    },
  },
},`

  return (
    <>
      <Colors setActiveColorPalette={setActiveColorPalette} />
      <BorderRadius
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
      />
      <BoxShadow
        boxShadowLength={boxShadowLength}
        setBoxShadowLength={setBoxShadowLength}
      />
      <FontWeight fontWeight={fontWeight} setFontWeight={setFontWeight} />
      <Button
        role="button"
        className="w-full mt-5 mb-10"
        aria-label="Reset colors"
        onClick={() => {
          resetStyling()
        }}
      >
        Reset
      </Button>
      <h2>Adding styling to your project</h2>
      <p className="mb-8">
        You can choose either CSS variables or utility classes. Using CSS
        variables means using single class for both light mode and dark mode
        styling e.g. <code>text-text</code>. Using utility classes means using
        double classes e.g.
        <code>text-text dark:text-darkText</code>.
      </p>
      <Tabs defaultValue="css-vars" className="w-full">
        <TabsList className="grid w-full grid-cols-2 overflow-x-hidden rounded-b-none m750:h-10 shadow-light rounded-t-base bg-white p-0 dark:bg-secondaryBlack">
          <TabsTrigger
            className="h-full border-0 border-r-2 z-10 m400:text-xs border-r-border rounded-none sm:text-base data-[state=active]:bg-main dark:data-[state=active]:text-text text-text dark:text-darkText last:border-r-0"
            value="css-vars"
          >
            CSS Variables
          </TabsTrigger>
          <TabsTrigger
            className="h-full border-0 border-r-2 z-10 m400:text-xs border-r-border rounded-none sm:text-base data-[state=active]:bg-main dark:data-[state=active]:text-text text-text dark:text-darkText last:border-r-0"
            value="util"
          >
            Utility classes
          </TabsTrigger>
        </TabsList>
        <TabsContent className="pt-3" value="css-vars">
          <h3>CSS Variables installation</h3>

          <h4>1. Update your index.css</h4>

          <Code className="mb-6" code={indexCss} name="index.css" />

          <h4>
            2. Update <code>theme</code> section inside your tailwind config
          </h4>

          <Code
            className="mb-6"
            code={twConfigCssVars}
            name="tailwind.config.js"
          />
        </TabsContent>
        <TabsContent className="pt-3" value="util">
          <h3>Utility classes installation</h3>

          <h4>
            1. Update <code>theme</code> section inside your tailwind config
          </h4>

          <Code
            className="mb-6"
            code={twConfigUtil}
            name="tailwind.config.js"
          />
        </TabsContent>
      </Tabs>
    </>
  )
}
