"use client"

import { Search as SearchIcon } from "lucide-react"

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { COMPONENTS_LINKS, GETTING_STARTED_LINKS } from "@/data/sidebar-links"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Dialog, DialogContent } from "@/components/ui/dialog"

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
        className="relative bg-white dark:text-white dark:bg-secondaryBlack shadow-nav dark:shadow-navDark hover:!translate-x-[4px] hover:!translate-y-[4px] hover:shadow-none dark:hover:shadow-none px-5 m1250:pr-14 m1200:pr-5 m1200:p-2 pr-20 m500:h-9 shrink-0 m500:w-9 m500:p-0 h-[44px] text-lg"
      >
        <span className="m1200:hidden">Search docs...</span>
        <span className="hidden m1200:inline">
          <SearchIcon className="h-4 w-4 m1200:w-6 m1200:h-6 m500:h-4 m500:w-4 shrink-0" />
        </span>

        <span className="absolute m1200:hidden text-black border text-base px-1 py-0.5 border-black rounded-base bg-main h-[28px] right-2 top-1.5">
          ⌘K
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden rounded-none border-0 p-0">
          <Command className="rounded-none">
            <CommandInput placeholder="Search documentation..." />
            <CommandList className="command-scrollbar">
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
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
