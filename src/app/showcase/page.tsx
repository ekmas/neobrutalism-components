import { Metadata } from "next"

import SHOWCASE from "@/data/showcase"

import ShowcaseContainer from "@/components/app/ShowcaseContainer"

export const metadata: Metadata = {
  title: "Showcase",
  description: "Showcase of websites built with neobrutalism components.",
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white dark:bg-[#272933] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[88px] m500:pt-16">
      <div className="pt-16 pb-16 mx-auto w-container max-w-full text-text dark:text-darkText m400:pb-10 text-left">
        <h1 className="text-4xl font-heading m800:text-3xl m500:text-2xl m400:text-xl">
          Showcase
        </h1>

        <div className="mb-[50px] mt-[30px] font-base text-2xl m800:text-lg m400:text-base">
          <p>
            Showcase of websites built with neobrutalism components. If
            you&apos;ve built something and want to get it featured here,{" "}
            <a
              className="underline"
              target="_blank"
              href="https://x.com/samuelbreznjak"
            >
              dm me
            </a>{" "}
            or{" "}
            <a className="underline" href="mailto:samuelbreznjak35@gmail.com">
              email me
            </a>
            .{" "}
          </p>
        </div>

        <ShowcaseContainer items={SHOWCASE} />
      </div>
    </div>
  )
}
