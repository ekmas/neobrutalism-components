import { GiftIcon } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertLongDescriptionDemo() {
  return (
    <Alert>
      <GiftIcon />
      <AlertDescription>
        This is a very long alert description that demonstrates how the
        component handles extended text content and potentially wraps across
        multiple lines
      </AlertDescription>
    </Alert>
  )
}
