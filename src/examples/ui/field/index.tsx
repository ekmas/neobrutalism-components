"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FieldDemo() {
  return (
    <form
      className="w-full max-w-md"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <FieldSet>
        <FieldLegend>Contact us</FieldLegend>
        <FieldDescription>
          Fill in the form and we will get back to you.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">Name</FieldLabel>
            <Input id="field-name" placeholder="John Doe" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input
              id="field-email"
              type="email"
              placeholder="john@example.com"
            />
            <FieldDescription>
              We will never share your email with anyone.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-message">Message</FieldLabel>
            <Textarea id="field-message" placeholder="Your message..." />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Send message</Button>
            <Button type="button" variant="neutral">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
