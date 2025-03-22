import { AlertCircleIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertLongTitleAndDescriptionDemo() {
  return (
    <Alert>
      <AlertCircleIcon />
      <AlertTitle>
        This is an extremely long alert title that spans multiple lines to
        demonstrate how the component handles very lengthy headings while
        maintaining readability and proper text wrapping behavior
      </AlertTitle>
      <AlertDescription>
        This is an equally long description that contains detailed information
        about the alert. It shows how the component can accommodate extensive
        content while preserving proper spacing, alignment, and readability
        across different screen sizes and viewport widths. This helps ensure the
        user experience remains consistent regardless of the content length.
      </AlertDescription>
    </Alert>
  )
}
