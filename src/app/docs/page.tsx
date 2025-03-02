import Introduction from "@/markdown/docs/page.mdx"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction",
  description: "Get started with creating neobrutalism layouts.",
}

export default function Page() {
  return <Introduction />
}
