import { Metadata } from "next"
import Link from "next/link"

import StarsGrid from "./StarsGrid"

export const metadata: Metadata = {
  title: "Stars",
  description: "Get started with neobrutalism stars.",
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[#272933] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[88px] m500:pt-16">
      <div className="pt-16 pb-16 mx-auto w-container max-w-full text-text dark:text-darkText m400:pb-10 text-left">
        <h1 className="text-4xl font-heading m800:text-3xl m500:text-2xl m400:text-xl">
          Stars
        </h1>

        <p className="mb-[40px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          40 geometrical shapes (as React components) often used in neobrutalism
          layouts you can use in your next project.
        </p>

        <h2 className="text-3xl font-heading m800:text-2xl m500:text-xl m400:text-lg">
          Installation
        </h2>

        <p className="mb-[40px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          Check the{" "}
          <Link className="underline" href="/docs/stars">
            installation guide
          </Link>
          .
        </p>

        <StarsGrid />
      </div>
    </div>
  )
}
