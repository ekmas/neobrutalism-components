import { Metadata } from "next"

import TEMPLATES from "@/data/templates"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"
import ShowcaseContainer from "@/components/app/showcase-container"

export const metadata: Metadata = {
  title: "Templates",
  description: "Get started with neobrutalism templates.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Templates</PageHeading>

        <PageDescription>
          These are free and open source neobrutalism styled taliwind templates
          you can use for your next project. All these templates are
          customizable. Check the template repo for more info.
        </PageDescription>
      </PageHeader>

      <ShowcaseContainer items={TEMPLATES} />
    </PageWrapper>
  )
}
