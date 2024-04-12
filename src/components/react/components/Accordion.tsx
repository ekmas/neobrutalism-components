'use client'

import { FiPlus } from 'react-icons/fi'

import { useEffect, useRef, useState } from 'react'

type Props = {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: Props) {
  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [showContent])

  return (
    <div className="w-[500px] rounded-base border-2 border-black shadow-base">
      <button
        role="button"
        aria-expanded={showContent}
        style={{ borderBottom: showContent ? 'solid 2px' : '0px' }}
        className="flex w-full items-center justify-between rounded-base border-black bg-main p-5 font-bold"
        onClick={() => {
          setShowContent(!showContent)
        }}
      >
        {question}
        <FiPlus
          style={{ transform: `rotate(${showContent ? '45deg' : '0'})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : '0' }}
        className="overflow-hidden rounded-base bg-white font-bold transition-[height] ease-in-out"
      >
        <p className="p-5">{answer}</p>
      </div>
    </div>
  )
}
