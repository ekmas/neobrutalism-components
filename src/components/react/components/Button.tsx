'use client'

type Props = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className="flex cursor-pointer items-center rounded-base border-2 border-black bg-main px-10 py-3 font-bold shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
    >
      {children}
    </button>
  )
}
