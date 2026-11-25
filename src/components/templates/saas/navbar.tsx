"use client"

import { Menu, X } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-4 border-border bg-secondary-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-3 font-heading text-xl">
          <span className="flex size-8 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground">
            P
          </span>
          Planly
        </a>

        <nav className="hidden items-center gap-8 text-sm font-base md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="decoration-2 underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="neutral" size="sm">
            Sign in
          </Button>
          <Button size="sm">Start free trial</Button>
        </div>

        <Button
          variant="neutral"
          size="icon-sm"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t-4 border-border md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-base px-3 py-2 font-base hover:bg-background"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button variant="neutral">Sign in</Button>
              <Button>Start free trial</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
