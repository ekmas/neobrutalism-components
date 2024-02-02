'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function DropdownExample() {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const items = [
    {
      name: 'Youtube',
      link: 'https://www.youtube.com',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
    },
    {
      name: 'Google',
      link: 'https://www.google.com',
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex w-[200px] cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-7 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
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
        style={{
          top: isActiveDropdown ? '80px' : '50px',
          opacity: isActiveDropdown ? '1' : '0',
          visibility: isActiveDropdown ? 'visible' : 'hidden',
        }}
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              className="block w-full border-b-2 border-black bg-[#C4A1FF] px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-[#a36ec4]"
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}
