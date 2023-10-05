'use client'
import { useState } from 'react'

export default function NewsletterExample() {
  const [email, setEmail] = useState('')

  const signUpForNewsletter = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={signUpForNewsletter}
      className="flex w-min items-center rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      role="form"
    >
      <input
        className="w-[30ch] rounded-md p-[10px] outline-none m750:w-[20ch] m400:w-[14ch]"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <button
        className="rounded-e-[5px] border-l-2 border-black bg-[#bc95d4] p-[10px] px-5 m400:px-3"
        type="submit"
        aria-label="Submit Newsletter"
      >
        Submit
      </button>
    </form>
  )
}
