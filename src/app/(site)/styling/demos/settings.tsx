import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SettingsDemo() {
  return (
    <FieldGroup className="w-full rounded-base border-2 border-border bg-secondary-background p-4 text-foreground">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="styling-notifications">Notifications</FieldLabel>
          <FieldDescription>
            Get notified when someone mentions you.
          </FieldDescription>
        </FieldContent>
        <Switch id="styling-notifications" defaultChecked />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="styling-sounds">Sounds</FieldLabel>
          <FieldDescription>Play a sound for new messages.</FieldDescription>
        </FieldContent>
        <Switch id="styling-sounds" />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="styling-newsletter" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="styling-newsletter">
            Subscribe to newsletter
          </FieldLabel>
          <FieldDescription>
            Receive weekly updates about new components.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
