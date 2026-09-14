"use client"

import { MaximizeIcon, MinimizeIcon } from "lucide-react"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function CollapsibleSettingsPanelDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-top-left" className="sr-only">
                Radius top left
              </FieldLabel>
              <Input id="radius-top-left" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-top-right" className="sr-only">
                Radius top right
              </FieldLabel>
              <Input id="radius-top-right" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel htmlFor="radius-bottom-left" className="sr-only">
                  Radius bottom left
                </FieldLabel>
                <Input
                  id="radius-bottom-left"
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-bottom-right" className="sr-only">
                  Radius bottom right
                </FieldLabel>
                <Input
                  id="radius-bottom-right"
                  placeholder="0"
                  defaultValue={0}
                />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger
            render={
              <Button
                variant="noShadow"
                size="icon"
                className="bg-secondary-background text-foreground"
              />
            }
          >
            {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
