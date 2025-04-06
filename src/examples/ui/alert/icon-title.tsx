import { PopcornIcon } from "lucide-react"

import { Alert, AlertTitle } from "@/components/ui/alert"

export default function AlertIconTitleDemo() {
  return (
    <Alert>
      <PopcornIcon />
      <AlertTitle>Let&apos;s try one with icon and title.</AlertTitle>
    </Alert>
  )
}
