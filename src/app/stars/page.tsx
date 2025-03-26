import { Metadata } from "next"
import Link from "next/link"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

import StarsGrid from "./stars-grid"

export const metadata: Metadata = {
  title: "Stars",
  description: "Get started with neobrutalism stars.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Stars</PageHeading>

        <PageDescription>
          40 geometrical shapes (as React components) often used in neobrutalism
          layouts you can use in your next project.
        </PageDescription>
      </PageHeader>

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
    </PageWrapper>
  )
}
