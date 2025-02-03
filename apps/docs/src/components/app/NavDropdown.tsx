"use client"

import clsx from "clsx"
import { ArrowUpRight, ChevronDown } from "lucide-react"

import { useState } from "react"
import Link from "next/link"

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onBlur={() => [setIsOpen(false)]}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="flex items-center gap-2 text-xl m1100:text-base font-base"
      >
        Components
        <ChevronDown
          className={clsx(
            isOpen ? "rotate-180" : "rotate-0",
            "stroke-text dark:stroke-darkText h-5 w-5 transition-transform",
          )}
        />
      </button>
      <div
        className={clsx(
          isOpen ? "visible top-12 opacity-100" : "invisible top-10 opacity-0",
          "absolute flex w-[150px] m1100:w-[130px] flex-col rounded-base overflow-x-hidden border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-lg m1100:text-base font-base transition-all",
        )}
      >
        <Link
          href={"/react/installation"}
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center px-4 py-3 border-b-2 border-border dark:border-darkBorder hover:bg-main hover:text-text"
        >
          React
          <ArrowUpRight className="ml-4 m1100:ml-3 m1100:w-5 m1100:h-5 shrink-0 w-6 h-6 m500:w-4 m500:h-4" />
        </Link>
        <Link
          href={"/shadcn/installation"}
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center px-4 py-3 hover:bg-main hover:text-text"
        >
          Shadcn
          <ArrowUpRight className="ml-4 m1100:ml-3 m1100:w-5 m1100:h-5 shrink-0 w-6 h-6 m500:w-4 m500:h-4" />
        </Link>
      </div>
    </div>
  )
}
