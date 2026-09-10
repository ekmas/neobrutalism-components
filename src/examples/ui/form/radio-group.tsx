"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { createToastManager, Toaster } from "@/components/ui/toast"

const plans = [
  {
    id: "starter",
    title: "Starter (100K tokens/month)",
    description: "For everyday use with basic features.",
  },
  {
    id: "pro",
    title: "Pro (1M tokens/month)",
    description: "For advanced AI usage with more features.",
  },
  {
    id: "enterprise",
    title: "Enterprise (Unlimited tokens)",
    description: "For large teams and heavy usage.",
  },
] as const

const formSchema = z.object({
  plan: z.string().min(1, "You must select a subscription plan to continue."),
})

const toastManager = createToastManager()

export default function FormRadioGroupDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toastManager.add({
      title: "You submitted the following values:",
      description: (
        <code className="mt-2 block w-full overflow-x-auto rounded-base border-2 border-border bg-secondary-background p-3 text-xs whitespace-pre">
          {JSON.stringify(data, null, 2)}
        </code>
      ),
    })
  }

  return (
    <Toaster toastManager={toastManager}>
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            See pricing and features for each plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-radio-group"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan</FormLabel>
                    <FormDescription>
                      You can upgrade or downgrade your plan at any time.
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        className="gap-3"
                      >
                        {plans.map((plan) => (
                          <FormItem
                            key={plan.id}
                            className="flex items-start justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-4"
                          >
                            <div className="grid gap-1.5">
                              <FormLabel>{plan.title}</FormLabel>
                              <FormDescription>
                                {plan.description}
                              </FormDescription>
                            </div>
                            <FormControl>
                              <RadioGroupItem value={plan.id} />
                            </FormControl>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="gap-2">
          <Button type="button" variant="neutral" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-radio-group">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
