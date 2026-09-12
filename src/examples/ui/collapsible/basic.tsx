import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleBasicDemo() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger
            render={
              <Button
                variant="noShadow"
                className="group w-full bg-secondary-background text-foreground"
              />
            }
          >
            Product details
            <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 flex flex-col items-start gap-2 rounded-base border-2 border-border bg-secondary-background p-4 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="sm">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
