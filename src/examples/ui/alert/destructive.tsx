import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDestructiveDemo() {
  return (
    <Alert variant="destructive">
      <Terminal />
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}
