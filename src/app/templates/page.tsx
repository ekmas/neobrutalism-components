import { Metadata } from "next"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

export const metadata: Metadata = {
  title: "Templates",
  description: "Neobrutalism templates are coming soon.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Templates</PageHeading>

        <PageDescription>Templates are coming soon.</PageDescription>
      </PageHeader>
    </PageWrapper>
  )
}
