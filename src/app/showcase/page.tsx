import { Metadata } from "next"

import SHOWCASE from "@/data/showcase"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"
import ShowcaseContainer from "@/components/app/showcase-container"

export const metadata: Metadata = {
  title: "Showcase",
  description: "Showcase of websites built with neobrutalism components.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Showcase</PageHeading>

        <PageDescription>
          Showcase of websites built with neobrutalism components.
          <br />
          If you&apos;ve built something and want to get it featured here,{" "}
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
        </PageDescription>
      </PageHeader>

      <ShowcaseContainer items={SHOWCASE} />
    </PageWrapper>
  )
}
