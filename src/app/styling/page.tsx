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
          Choose a color scheme and copy the init command to initialize your
          project. After you initialized you project, you can customize the rest
          of the styling if you want.
        </PageDescription>

        <Styling />

        <ExampleComponents />
      </PageHeader>
    </PageWrapper>
  )
}
