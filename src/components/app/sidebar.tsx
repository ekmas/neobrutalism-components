"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="scrollbar fixed top-[70px] bg-secondary-background h-[calc(100svh-70px)] max-h-[calc(100svh-70px)] w-[250px] overflow-y-auto border-r-4 lg:block hidden border-border">
      {MAIN_SIDEBAR.map((item, id) => {
        return typeof item === "string" ? (
          <div
            key={id}
            className="block border-b-4 border-r-4 border-border p-4 text-xl font-heading"
          >
            {item}
          </div>
        ) : (
          <Link
            key={id}
            href={`${item.href}`}
            className={cn(
              "block border-b-4 border-r-4 border-border p-4 pl-7 text-lg font-base text-foreground/90 hover:bg-main/70 hover:text-main-foreground",
              item.href === pathname &&
                "bg-main text-main-foreground hover:bg-main",
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}
