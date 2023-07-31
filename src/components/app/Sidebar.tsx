import components from '@/data/components'

export default function Sidebar() {
  return (
    <aside className="scrollbar fixed top-20 h-[calc(100svh-80px)] max-h-[calc(100svh-80px)] w-[250px] overflow-y-auto border-r-4 border-black m800:w-[180px] m600:hidden">
      {components.map((item, index) => {
        return (
          <a
            href={`#${item.name}`}
            id={`sidebar${item.name}`}
            key={index}
            className="sidebaritem block border-b-4 border-black p-5 text-xl font-bold hover:bg-[#bc95d4] m800:p-4 m800:text-lg"
          >
            {item.name}
          </a>
        )
      })}
    </aside>
  )
}
