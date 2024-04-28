'use client'

import { ClassValue } from 'clsx'
import { ChevronDown } from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  className?: ClassValue
  question: string
  answer: string
}

export default function Accordion({ question, answer, className }: Props) {
  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [showContent])

  return (
    <div
      data-state={showContent ? 'open' : 'closed'}
      className="w-[500px] group rounded-base border-2 border-black shadow-base"
    >
      <button
        role="button"
        aria-expanded={showContent}
        className={cn(
          'flex w-full items-center transition-[border-radius] justify-between border-b-0 group-data-[state=closed]:rounded-base group-data-[state=open]:rounded-t-base group-data-[state=open]:border-b-2 border-b-black bg-main p-4 md:p-5 font-heading',
          className,
        )}
        onClick={() => {
          setShowContent(!showContent)
        }}
      >
        {question}
        <ChevronDown className="sm:ml-4 ml-3 sm:min-h-[24px] sm:min-w-[24px] group-data-[state=open]:rotate-180 group-data-[state=closed]:0 min-h-[18px] min-w-[18px] transition-transform ease-in-out" />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : '0' }}
        className="overflow-hidden rounded-b-base bg-white font-base transition-[height] ease-in-out"
      >
        <p className="p-4 md:p-5 text-sm md:text-base leading-relaxed md:leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}
