"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupCustomDemo() {
  const [fontWeight, setFontWeight] = React.useState("normal")

  return (
    <Field className="max-w-xs">
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0])}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          className="flex size-16 flex-col items-center justify-center rounded-base"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-foreground">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          className="flex size-16 flex-col items-center justify-center rounded-base"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-foreground">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          className="flex size-16 flex-col items-center justify-center rounded-base"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-foreground">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          className="flex size-16 flex-col items-center justify-center rounded-base"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-foreground">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Use{" "}
        <code className="rounded-base bg-secondary-background px-1 py-0.5 font-mono">
          font-{fontWeight}
        </code>{" "}
        to set the font weight.
      </FieldDescription>
    </Field>
  )
}
