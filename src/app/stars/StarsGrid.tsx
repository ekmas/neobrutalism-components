"use client"

import { useState } from "react"

import STARS from "@/data/stars"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TooltipProvider } from "@/components/ui/tooltip"

import CopyBtn from "./CopyBtn"
import ShadcnBtn from "./ShadcnBtn"

export default function StarsGrid() {
  const [command, setCommand] = useState(
    "pnpm dlx shadcn@latest add https://neobrutalism.dev/r/",
  )

  const handleChange = (pkg: string) => {
    const command = "shadcn@latest add https://neobrutalism.dev/r/"

    if (pkg === "pnpm") {
      setCommand("pnpm dlx " + command)
    } else if (pkg === "npm") {
      setCommand("npx " + command)
    } else if (pkg === "yarn") {
      setCommand("npx " + command)
    } else {
      setCommand("bunx --bun " + command)
    }
  }

  return (
    <>
      <div className="mb-5 flex justify-end">
        <Select onValueChange={handleChange} defaultValue="pnpm">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Pnpm" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Package manager</SelectLabel>
              <SelectItem value="pnpm">Pnpm</SelectItem>
              <SelectItem value="npm">Npm</SelectItem>
              <SelectItem value="yarn">Yarn</SelectItem>
              <SelectItem value="bun">Bun</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 m1200:gap-5 m1100:grid-cols-3 m800:grid-cols-2 m400:grid-cols-1 gap-[50px]">
        {STARS.map((star, i) => {
          return (
            <div
              className="flex items-center gap-4 p-5 justify-center flex-col border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack rounded-base shadow-light dark:shadow-dark"
              key={i}
            >
              <div className="w-[200px] h-[200px] m1200:w-[160px] m1200:h-[160px] m800:w-[120px] m800:h-[120px] ">
                <star.componentExample />
              </div>

              <p className="text-2xl font-heading m800:text-xl m500:text-lg m400:text-base">
                Star {i + 1}
              </p>

              <div className="flex items-center gap-2 m600:flex-col">
                <TooltipProvider delayDuration={0}>
                  <ShadcnBtn command={command + `s${i + 1}.json`} />
                  <CopyBtn code={star.code} />
                </TooltipProvider>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
