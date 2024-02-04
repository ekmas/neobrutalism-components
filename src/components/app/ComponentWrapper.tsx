import React from 'react'

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full items-center justify-center rounded-md border-2 border-black bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] px-10 py-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [background-size:16px_16px] m750:px-5 m750:py-10">
      {children}
    </div>
  )
}
