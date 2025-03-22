import { ShieldAlertIcon } from "lucide-react"

import { Alert, AlertTitle } from "@/components/ui/alert"

export default function AlertLongTitleDemo() {
  return (
    <Alert>
      <ShieldAlertIcon />
      <AlertTitle>
        This is a very long alert title that demonstrates how the component
        handles extended text content and potentially wraps across multiple
        lines
      </AlertTitle>
    </Alert>
  )
}
