'use client'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type Props = {
  prev?: {
    name: string
    path: string
  }
  next?: {
    name: string
    path: string
  }
}

export default function Pagination({ prev, next }: Props) {
  const router = useRouter()

  let justifyContent

  if (prev && next) {
    justifyContent = 'justify-between'
  } else if (prev) {
    justifyContent = 'justify-start'
  } else if (next) {
    justifyContent = 'justify-end'
  }

  return (
    <div className={`${justifyContent} mt-8 flex w-full items-center`}>
      {prev?.name && (
        <button
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-main px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m400:px-3.5 m400:text-xs"
          onClick={() => {
            router.push(prev.path)
          }}
        >
          <FaArrowLeft className="mr-2" />
          {prev.name}
        </button>
      )}

      {next?.name && (
        <button
          className="flex cursor-pointer items-center rounded-md border-2 border-black bg-main px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m400:px-3.5 m400:text-xs"
          onClick={() => {
            router.push(next.path)
          }}
        >
          {next.name}
          <FaArrowRight className="ml-2" />
        </button>
      )}
    </div>
  )
}
