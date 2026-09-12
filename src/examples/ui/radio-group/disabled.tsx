import { Field, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabledDemo() {
  return (
    <RadioGroup defaultValue="option2" className="w-fit">
      <Field orientation="horizontal" data-disabled>
        <RadioGroupItem value="option1" id="disabled-1" disabled />
        <FieldLabel htmlFor="disabled-1" className="font-base">
          Disabled
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option2" id="disabled-2" />
        <FieldLabel htmlFor="disabled-2" className="font-base">
          Option 2
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="option3" id="disabled-3" />
        <FieldLabel htmlFor="disabled-3" className="font-base">
          Option 3
        </FieldLabel>
      </Field>
    </RadioGroup>
  )
}
