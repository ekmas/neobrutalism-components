import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

export default function CheckboxGroupDemo() {
  return (
    <FieldSet>
      <FieldLegend variant="label">
        Show these items on the desktop:
      </FieldLegend>
      <FieldDescription>
        Select the items you want to show on the desktop.
      </FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-hard-disks-checkbox"
            name="finder-pref-hard-disks-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-hard-disks-checkbox"
            className="font-base"
          >
            Hard disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-external-disks-checkbox"
            name="finder-pref-external-disks-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-external-disks-checkbox"
            className="font-base"
          >
            External disks
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-cds-dvds-checkbox"
            name="finder-pref-cds-dvds-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-cds-dvds-checkbox"
            className="font-base"
          >
            CDs, DVDs, and iPods
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-connected-servers-checkbox"
            name="finder-pref-connected-servers-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-connected-servers-checkbox"
            className="font-base"
          >
            Connected servers
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
