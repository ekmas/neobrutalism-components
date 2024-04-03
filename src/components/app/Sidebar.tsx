import Link from 'next/link'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="scrollbar fixed top-[88px] h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] w-[250px] overflow-y-auto border-r-4 border-black m800:w-[180px] m600:hidden">
      {children}
    </aside>
  )
}

export function SidebarLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={`${href}`}
      className="sidebaritem block border-b-4 border-r-4 border-black p-4 pl-7 text-lg font-semibold text-black/90 hover:bg-main m800:p-4 m800:pl-6 m800:text-base"
    >
      {text}
    </Link>
  )
}

export function SidebarHeader({ text }: { text: string }) {
  return (
    <div className="sidebaritem block border-b-4 border-r-4 border-black p-4 text-xl font-bold m800:p-4 m800:text-base">
      {text}
    </div>
  )
}
