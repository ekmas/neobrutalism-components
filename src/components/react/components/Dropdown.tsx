'use client'

import { FaChevronDown } from 'react-icons/fa'

import { useState } from 'react'

export default function Dropdown({
  items,
}: {
  items: { name: string; link: string }[]
}) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)

  return (
    <div
      data-state={isActiveDropdown ? 'open' : 'closed'}
      className="relative group"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-base border-2 border-black bg-main px-7 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          Dropdown
          <FaChevronDown
            className={
              'ml-3 h-4 w-4 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        className="absolute left-0 w-[200px] group-data-[state=open]:top-20 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-black text-center font-bold shadow-base transition-all"
      >
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              className="block w-full border-b-2 border-black bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
