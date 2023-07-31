import React from 'react'

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full items-center justify-center rounded-md border-2 border-black bg-white px-10 py-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {children}
    </div>
  )
}
