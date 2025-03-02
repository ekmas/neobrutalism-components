import Stars from "@/markdown/docs/stars/page.mdx"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stars installation",
  description: "Get started with adding neobrutalism stars to your project.",
}

export default function Page() {
  return <Stars />
}
