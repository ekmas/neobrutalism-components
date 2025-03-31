"use client"

import { Search as SearchIcon } from "lucide-react"

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { COMPONENTS_LINKS, GETTING_STARTED_LINKS } from "@/data/sidebar-links"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function Search() {
  const DOCS_LINKS = [
    {
      heading: "Getting started",
      links: [...GETTING_STARTED_LINKS],
    },
    {
      heading: "Components",
      links: [...COMPONENTS_LINKS],
    },
  ]

  const router = useRouter()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="relative bg-secondary-background dark:text-white shadow-nav dark:shadow-navDark hover:translate-x-[4px]! hover:translate-y-[4px]! hover:shadow-none dark:hover:shadow-none px-3 pr-3 xl:pr-16 lg:pr-12 shrink-0 lg:w-[unset] w-9 h-9 text-base"
      >
        <span className="flex text-sm items-center gap-1">
          <SearchIcon className="size-5! lg:size-4! shrink-0" />
          <span className="xl:inline hidden">Search</span>
        </span>

        <span className="absolute lg:flex hidden items-center justify-center text-black border text-xs px-1 border-black rounded-base bg-main h-6 right-2 top-1">
          ⌘ K
        </span>
      </Button>
      <CommandDialog
        title="Search documentation"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search documentation..." />
        <CommandList className="command-scrollbar **:data-[slot=command-item]:py-1.5!">
          <CommandEmpty>No results found.</CommandEmpty>
          {DOCS_LINKS.map(({ heading, links }, i) => {
            return (
              <React.Fragment key={heading}>
                <CommandGroup heading={heading}>
                  {links.map(({ text, href }) => {
                    return (
                      <CommandItem
                        value={text}
                        onSelect={() => {
                          runCommand(() => router.push(href))
                        }}
                        key={href}
                      >
                        {text}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
                {i < 2 && <CommandSeparator />}
              </React.Fragment>
            )
          })}
        </CommandList>
      </CommandDialog>
    </>
  )
}
