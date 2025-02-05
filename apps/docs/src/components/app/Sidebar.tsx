"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="scrollbar fixed top-[88px] bg-white dark:bg-secondaryBlack h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-border dark:border-darkNavBorder m900:hidden">
      {MAIN_SIDEBAR.map((item, id) => {
        return typeof item === "string" ? (
          <div
            key={id}
            className="block border-b-4 border-r-4 border-border dark:border-darkNavBorder p-4 text-xl font-heading"
          >
            {item}
          </div>
        ) : (
          <Link
            key={id}
            href={`${item.href}`}
            className={cn(
              "block border-b-4 border-r-4 border-border dark:border-darkNavBorder p-4 pl-7 text-lg font-base text-text/90 dark:text-darkText/90 hover:bg-main50 dark:hover:text-text",
              item.href === pathname && "bg-main dark:text-text hover:bg-main",
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}
