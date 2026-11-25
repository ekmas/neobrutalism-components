import { Metadata } from "next"

import Dashboard from "@/components/templates/dashboard/dashboard"

export const metadata: Metadata = {
  title: "Tally - Store dashboard",
  description:
    "Revenue, orders, customers, marketing and inventory at a glance.",
}

export default function Page() {
  return <Dashboard />
}
