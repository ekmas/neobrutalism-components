import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldWithErrorDemo() {
  return (
    <Field data-invalid className="max-w-sm">
      <FieldLabel htmlFor="field-username">Username</FieldLabel>
      <Input
        id="field-username"
        defaultValue="ab"
        aria-invalid
        className="border-red-500"
      />
      <FieldDescription>Pick a unique username.</FieldDescription>
      <FieldError
        errors={[
          { message: "Username must be at least 3 characters." },
          { message: "Username is already taken." },
        ]}
      />
    </Field>
  )
}
