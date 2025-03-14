"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MAIN_SIDEBAR } from "@/data/sidebar-links"

import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="scrollbar fixed top-[88px] bg-bw h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-border m900:hidden">
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
              "block border-b-4 border-r-4 border-border p-4 pl-7 text-lg font-base text-text/90 hover:bg-main50 hover:text-mtext",
              item.href === pathname && "bg-main text-mtext hover:bg-main",
            )}
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}
