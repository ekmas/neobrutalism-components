import { CheckCircle2Icon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <Alert className="bg-secondary-background">
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  )
}
