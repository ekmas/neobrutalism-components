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
          layouts you can use in your next project. Check the{" "}
          <Link className="underline" href="/docs/stars">
            installation guide
          </Link>{" "}
          for more info.
        </PageDescription>
      </PageHeader>
      <StarsGrid />
    </PageWrapper>
  )
}
