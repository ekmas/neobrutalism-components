'use client'

import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import { useState } from 'react'
import Link from 'next/link'

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onBlur={() => [setIsOpen(false)]}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="flex items-center gap-2 text-xl font-base"
      >
        Components
        <ChevronDown
          className={clsx(
            isOpen ? 'rotate-180' : 'rotate-0',
            'h-5 w-5 transition-transform',
          )}
          color="black"
        />
      </button>
      <div
        className={clsx(
          isOpen ? 'visible top-12 opacity-100' : 'invisible top-10 opacity-0',
          'absolute flex w-[150px] flex-col gap-3 rounded-base border-2 border-black bg-white p-4 text-lg font-base transition-all',
        )}
      >
        <Link
          href={'/react/installation'}
          onClick={() => setIsOpen(false)}
          className="block text-left"
        >
          React
        </Link>
        <Link
          href={'/shadcn/installation'}
          onClick={() => setIsOpen(false)}
          className="block text-left"
        >
          Shadcn
        </Link>
      </div>
    </div>
  )
}
