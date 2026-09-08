import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
  {
    id: "free",
    title: "Free",
    description: "For hobby projects and experiments.",
  },
  {
    id: "pro",
    title: "Pro",
    description: "For professionals and small teams.",
  },
  {
    id: "team",
    title: "Team",
    description: "For growing organizations.",
  },
]

export default function FieldChoiceCardDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Subscription plan</FieldLegend>
      <RadioGroup defaultValue="pro">
        {plans.map((plan) => (
          <FieldLabel key={plan.id} htmlFor={`plan-${plan.id}`}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{plan.title}</FieldTitle>
                <FieldDescription>{plan.description}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={plan.id} id={`plan-${plan.id}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
