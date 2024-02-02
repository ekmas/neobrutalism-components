import components from '@/data/components'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="scrollbar fixed top-[88px] h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-black m800:w-[180px] m600:hidden">
      <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
        Getting started
      </div>
      <Link
        href={`/docs`}
        className="sidebaritem block border-b-4 border-r-4 border-black p-4 pl-7 text-lg font-semibold text-black/90 hover:bg-[#bc95d4] m800:p-4 m800:pl-6 m800:text-base"
      >
        Introduction
      </Link>
      <Link
        href={`/docs/installation`}
        className="sidebaritem block border-b-4 border-r-4 border-black p-4 pl-7 text-lg font-semibold text-black/90 hover:bg-[#bc95d4] m800:p-4 m800:pl-6 m800:text-base"
      >
        Installation
      </Link>
      <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
        Components
      </div>
      {components.map((item, index) => {
        return (
          <Link
            href={`/docs/components/${item.name}`}
            key={index}
            className="sidebaritem block border-b-4 border-r-4 border-black p-4 pl-7 text-lg font-semibold text-black/90 hover:bg-[#bc95d4] m800:p-4 m800:pl-6 m800:text-base"
          >
            {item.name}
          </Link>
        )
      })}
    </aside>
  )
}
