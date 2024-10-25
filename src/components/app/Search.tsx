'use client'

import { Search as SearchIcon } from 'lucide-react'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  GETTING_STARTED_LINKS,
  REACT_LINKS,
  SHADCN_LINKS,
} from '@/data/sidebar-links'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function Search() {
  const DOCS_LINKS = [
    {
      heading: 'Getting started',
      links: [...GETTING_STARTED_LINKS],
    },
    {
      heading: 'Shadcn',
      links: [
        {
          href: '/shadcn/installation',
          text: 'Installation',
        },
        ...SHADCN_LINKS,
      ],
    },
    {
      heading: 'React',
      links: [
        {
          href: '/react/installation',
          text: 'Installation',
        },
        ...REACT_LINKS,
      ],
    },
  ]

  const router = useRouter()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="relative bg-white dark:text-white dark:bg-secondaryBlack shadow-nav dark:shadow-navDark hover:!translate-x-[4px] hover:!translate-y-[4px] hover:shadow-none dark:hover:shadow-none px-5 m1250:pr-14 m1100:p-2 pr-20 m500:h-9 shrink-0 m500:w-9 m500:p-0 h-[44px] text-lg"
      >
        <span className="m1250:hidden">Search docs...</span>
        <span className="hidden m1250:inline">
          <SearchIcon className="h-4 w-4 m900:w-6 m900:h-6 m500:h-4 m500:w-4 shrink-0" />
        </span>

        <span className="absolute m1100:hidden text-black border text-base px-1 py-0.5 border-black rounded-base bg-main h-[28px] right-2 top-1.5">
          ⌘K
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden rounded-none border-0 p-0">
          <Command className="rounded-none">
            <CommandInput placeholder="Search documentation..." />
            <CommandList className="command-scrollbar">
              <CommandEmpty>No results found.</CommandEmpty>
              {DOCS_LINKS.map(({ heading, links }) => {
                const isReact = heading === 'React'
                const isShadcn = heading === 'Shadcn'

                return (
                  <CommandGroup
                    className="[&_[cmdk-group-heading]]:text-base"
                    key={heading}
                    heading={heading}
                  >
                    {links.map(({ text, href }) => {
                      const formattedText = isShadcn
                        ? `Shadcn ${text}`
                        : isReact
                        ? `React ${text}`
                        : text

                      return (
                        <CommandItem
                          value={formattedText}
                          onSelect={() => {
                            runCommand(() => router.push(href))
                          }}
                          key={href}
                        >
                          {formattedText}
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                )
              })}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
