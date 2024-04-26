'use client'

import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import { useState } from 'react'
import Link from 'next/link'

import arrow from '../../../public/svgs/arrow.svg'

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
          'absolute flex w-[150px] flex-col rounded-base border-2 border-black bg-white text-lg font-base transition-all',
        )}
      >
        <Link
          href={'/react/installation'}
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center rounded-t-base px-4 py-3 border-b-2 border-b-black hover:bg-main"
        >
          React
          <img
            className="ml-[15px] w-[14px] m400:ml-4 m400:w-[12px]"
            src={arrow.src}
            alt="arrow"
          />
        </Link>
        <Link
          href={'/shadcn/installation'}
          onClick={() => setIsOpen(false)}
          className="text-left flex items-center rounded-b-base px-4 py-3 hover:bg-main"
        >
          Shadcn
          <img
            className="ml-[15px] w-[14px] m400:ml-4 m400:w-[12px]"
            src={arrow.src}
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  )
}
