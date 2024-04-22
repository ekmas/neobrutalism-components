import Link from 'next/link'

export default function Sidebar({
  links,
}: {
  links: (
    | string
    | {
        href: string
        text: string
      }
  )[]
}) {
  return (
    <aside className="scrollbar fixed top-[88px] h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-black m800:w-[180px] m600:hidden">
      {links.map((item, id) => {
        return typeof item === 'string' ? (
          <div
            key={id}
            className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-heading m800:p-4 m800:text-base"
          >
            {item}
          </div>
        ) : (
          <Link
            key={id}
            href={`${item.href}`}
            className="sidebaritem block border-b-4 border-r-4 border-black p-4 pl-7 text-lg font-base text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
          >
            {item.text}
          </Link>
        )
      })}
    </aside>
  )
}
