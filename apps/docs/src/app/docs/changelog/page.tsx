import Changelog from "@/markdown/docs/changelog/page.mdx"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog",
  description: "List of all important updates and announcements.",
}

export default function Page() {
  return <Changelog />
}
