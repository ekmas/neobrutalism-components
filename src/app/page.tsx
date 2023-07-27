import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100svh-80px)] flex-col items-center justify-center bg-[#c9dcd8] px-5 py-20 font-bold">
      <h1 className="text-5xl">Neobrutalism components</h1>

      <p className="my-6 text-xl">
        A collection of type-safe components written in React and Tailwind
      </p>

      <Link
        className="rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        href={'/docs'}
      >
        Read the docs
      </Link>
    </main>
  )
}
