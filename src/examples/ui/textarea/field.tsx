import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaFieldDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}
