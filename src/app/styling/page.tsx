import { Metadata } from "next"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

import ExampleComponents from "./example-components"
import Styling from "./styling"

export const metadata: Metadata = {
  title: "Styling",
  description: "Learn how to fully customize your neobrutalism layouts.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Styling</PageHeading>

        <PageDescription>
          Choose a color scheme with other styling options and copy the styling
          to your project.
        </PageDescription>

        <Styling />

        <ExampleComponents />
      </PageHeader>
    </PageWrapper>
  )
}
