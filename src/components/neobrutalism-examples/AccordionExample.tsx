'use client'
import { useEffect, useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

export default function AccordionExample() {
  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [showContent])

  return (
    <div className="w-[500px] rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        style={{ borderBottom: showContent ? 'solid 2px' : '0px' }}
        className="flex w-full items-center justify-between rounded-[5px] border-black bg-[#bc95d4] p-5 font-bold"
        onClick={() => {
          setShowContent(!showContent)
        }}
      >
        Lorem ipsum dolor sit amet
        <FiPlus
          style={{ transform: `rotate(${showContent ? '45deg' : '0'})` }}
          className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : '0' }}
        className="overflow-hidden bg-white font-bold transition-[height] ease-in-out"
      >
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores delectus totam repellat provident minima, veniam sunt ullam
          voluptates, aliquid tempore consequatur, blanditiis laborum!
          Consequuntur hic veritatis deserunt! Iusto, nisi!
        </p>
      </div>
    </div>
  )
}
