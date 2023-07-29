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
    >
      <input
        className="w-[30ch] rounded-md p-[10px] outline-none"
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
        className="rounded-e-[5px] border-l-2 border-black bg-[#bc95d4] p-[10px] px-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
