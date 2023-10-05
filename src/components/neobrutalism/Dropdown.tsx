'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function Dropdown({
  items,
}: {
  items: { name: string; link: string }[]
}) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)

  return (
    <div className="relative">
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-7 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          Dropdown
          <FaChevronDown
            style={{
              transform: `rotate(${isActiveDropdown ? '180deg' : '0'})`,
            }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        role="listbox"
        style={{
          top: isActiveDropdown ? '80px' : '50px',
          opacity: isActiveDropdown ? '1' : '0',
          visibility: isActiveDropdown ? 'visible' : 'hidden',
        }}
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        {items.map((item, index) => {
          let borderRadius = ''

          if (index === 0) {
            borderRadius = 'rounded-t-[5px]'
          } else if (index === items.length - 1) {
            borderRadius = 'rounded-b-[5px]'
          }

          return (
            <a
              key={index}
              href={item.link}
              className={`bg-[#bc95d4] ${borderRadius} block w-full border-b-2 border-black px-7 py-3 hover:bg-[#b482d3]`}
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
