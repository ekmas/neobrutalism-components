import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export default function CheckboxDisabledDemo() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal" data-disabled>
        <Checkbox
          id="toggle-checkbox-disabled"
          name="toggle-checkbox-disabled"
          disabled
        />
        <FieldLabel htmlFor="toggle-checkbox-disabled">
          Enable notifications
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
