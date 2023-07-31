import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-[#c9dcd8] px-5 py-20 text-center font-bold">
      <h1 className="text-5xl m800:text-3xl m400:text-xl">
        Neobrutalism components
      </h1>

      <p className="my-6 text-xl m800:text-lg m400:text-base">
        A collection of type-safe components written in React and Tailwind
      </p>

      <Link
        className="rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none m800:px-8 m800:py-2.5 m800:text-lg m400:px-6 m400:py-2 m400:text-base"
        href={'/docs'}
      >
        Read the docs
      </Link>
    </main>
  )
}
