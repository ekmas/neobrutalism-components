import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchDisabledDemo() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  )
}
