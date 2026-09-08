import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function FieldHorizontalDemo() {
  return (
    <FieldGroup className="max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="field-airplane">Airplane Mode</FieldLabel>
          <FieldDescription>
            Turn on airplane mode to disable all connections.
          </FieldDescription>
        </FieldContent>
        <Switch id="field-airplane" />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="field-newsletter" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="field-newsletter">
            Subscribe to newsletter
          </FieldLabel>
          <FieldDescription>
            Receive weekly updates about new features and promotions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
