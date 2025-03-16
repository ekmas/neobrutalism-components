"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import * as React from "react"

import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        className="h-11 w-11 p-0 [&_svg]:size-6 shadow-nav hover:translate-x-[4px]! hover:translate-y-[4px]! hover:shadow-none bg-bw"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="hidden dark:inline stroke-text" />
        <Moon className="inline dark:hidden stroke-text" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
