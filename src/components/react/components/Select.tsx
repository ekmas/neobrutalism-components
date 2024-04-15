'use client'

import { FaChevronDown } from 'react-icons/fa'

import { useState } from 'react'

export default function Select({ items }: { items: string[] }) {
  const [selectedItem, setSelectedItem] = useState<null | string>(null)
  const [isActiveSelect, setIsActiveSelect] = useState(false)

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName)
    setIsActiveSelect(false)
  }

  return (
    <div
      data-state={isActiveSelect ? 'open' : 'closed'}
      className="relative group"
      aria-expanded={isActiveSelect}
    >
      <button
        onClick={() => {
          setIsActiveSelect(!isActiveSelect)
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className="flex w-[200px] cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {selectedItem === null ? 'Select' : selectedItem}
          <FaChevronDown
            className={
              'ml-3 h-4 w-4 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        aria-labelledby="select-label"
        className="absolute left-0 w-[200px] group-data-[state=open]:top-20 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-black font-bold shadow-base transition-all"
      >
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleItemClick(item)
              }}
              className="block w-full border-b-2 border-black bg-main px-5 py-3 first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
