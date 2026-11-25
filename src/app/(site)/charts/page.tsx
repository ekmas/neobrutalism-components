import { Metadata } from "next"
import Link from "next/link"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

import Examples from "./examples"

export const metadata: Metadata = {
  title: "Charts",
  description:
    "Beautiful charts. Built using Recharts. Copy and paste into your apps.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Charts</PageHeading>

        <PageDescription>
          Beautiful charts. Built using Recharts. Copy and paste into your apps.{" "}
          <br />
          Visit{" "}
          <Link className="underline" href="/docs/chart">
            charts docs
          </Link>{" "}
          for more info.
        </PageDescription>
      </PageHeader>

      <Examples />
    </PageWrapper>
  )
}
