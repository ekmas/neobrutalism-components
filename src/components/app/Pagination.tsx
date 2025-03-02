"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

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
    justifyContent = "justify-between"
  } else if (prev) {
    justifyContent = "justify-start"
  } else if (next) {
    justifyContent = "justify-end"
  }

  return (
    <div className={`${justifyContent} mt-8 flex w-full items-center`}>
      {prev?.name && (
        <Button
          className="px-5 py-2 h-[unset] m400:px-3.5 m400:text-xs"
          onClick={() => {
            router.push(prev.path)
          }}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          {prev.name}
        </Button>
      )}

      {next?.name && (
        <Button
          className="px-5 py-2 h-[unset] m400:px-3.5 m400:text-xs"
          onClick={() => {
            router.push(next.path)
          }}
        >
          {next.name}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
