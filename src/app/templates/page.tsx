import { Metadata } from "next"

import TEMPLATES from "@/data/templates"

import ShowcaseContainer from "@/components/app/ShowcaseContainer"

export const metadata: Metadata = {
  title: "Templates",
  description: "Get started with neobrutalism templates.",
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[#272933] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[88px] m500:pt-16">
      <div className="pt-16 pb-16 mx-auto w-container max-w-full text-text dark:text-darkText m400:pb-10 text-left">
        <h1 className="text-4xl font-heading m800:text-3xl m500:text-2xl m400:text-xl">
          Templates
        </h1>

        <div className="mb-[50px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          <p>
            These are free and open source neobrutalism styled taliwind
            templates you can use for your next project. All these templates are
            customizable. Check the template repo for more info.
          </p>
        </div>

        <ShowcaseContainer items={TEMPLATES} />
      </div>
    </div>
  )
}
