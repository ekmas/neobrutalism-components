import React from 'react'

export default function Installation() {
  return (
    <>
      <h2 className="mt-5 text-2xl font-bold m400:text-xl">Installation</h2>

      <div className="mt-8 font-bold leading-relaxed">
        These React components use
        <a
          className="mx-1 underline"
          target="_blank"
          href="https://tailwindcss.com/"
        >
          tailwind
        </a>
        for styling and
        <a
          className="mx-1 underline"
          target="_blank"
          href="https://react-icons.github.io/react-icons/"
        >
          react-icons
        </a>
        for icons, so make sure you got them installed.
        <br />
        Now choose any component you find useful, copy it to your project and
        adjust it so it fulfills your needs.
      </div>
    </>
  )
}
