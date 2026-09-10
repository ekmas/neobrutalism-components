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
import { Checkbox } from "@/components/ui/checkbox"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { createToastManager, Toaster } from "@/components/ui/toast"

const addons = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Advanced analytics and reporting",
  },
  {
    id: "backup",
    title: "Backup",
    description: "Automated daily backups",
  },
  {
    id: "support",
    title: "Priority Support",
    description: "24/7 premium customer support",
  },
] as const

const billingPeriods = {
  monthly: "Monthly",
  yearly: "Yearly",
}

const formSchema = z.object({
  plan: z.enum(["basic", "pro"], {
    message: "Invalid plan selection. Please choose Basic or Pro",
  }),
  billingPeriod: z.string().min(1, "Please select a billing period"),
  addons: z
    .array(z.string())
    .min(1, "Please select at least one add-on")
    .max(3, "You can select up to 3 add-ons")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "You selected an invalid add-on",
      },
    ),
  emailNotifications: z.boolean(),
})

const toastManager = createToastManager()

export default function FormComplexDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "basic",
      billingPeriod: "",
      addons: [],
      emailNotifications: false,
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
      <Card className="w-full max-w-sm">
        <CardHeader className="border-b-2 border-border pb-6">
          <CardTitle>You&apos;re almost there!</CardTitle>
          <CardDescription>
            Choose your subscription plan and billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-complex"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-8"
            >
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subscription Plan</FormLabel>
                    <FormDescription>
                      Choose your subscription plan.
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        className="gap-3"
                      >
                        <FormItem className="flex items-start justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-4">
                          <div className="grid gap-1.5">
                            <FormLabel>Basic</FormLabel>
                            <FormDescription>
                              For individuals and small teams
                            </FormDescription>
                          </div>
                          <FormControl>
                            <RadioGroupItem value="basic" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex items-start justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-4">
                          <div className="grid gap-1.5">
                            <FormLabel>Pro</FormLabel>
                            <FormDescription>
                              For businesses with higher demands
                            </FormDescription>
                          </div>
                          <FormControl>
                            <RadioGroupItem value="pro" />
                          </FormControl>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="billingPeriod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Billing Period</FormLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      items={billingPeriods}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose how often you want to be billed.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addons"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add-ons</FormLabel>
                    <FormDescription>
                      Select additional features you&apos;d like to include.
                    </FormDescription>
                    {addons.map((addon) => (
                      <FormItem
                        key={addon.id}
                        className="flex items-start gap-3"
                      >
                        <FormControl>
                          <Checkbox
                            name={field.name}
                            checked={field.value.includes(addon.id)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, addon.id]
                                : field.value.filter(
                                    (value) => value !== addon.id,
                                  )
                              field.onChange(newValue)
                              field.onBlur()
                            }}
                          />
                        </FormControl>
                        <div className="grid gap-1.5">
                          <FormLabel>{addon.title}</FormLabel>
                          <FormDescription>{addon.description}</FormDescription>
                        </div>
                      </FormItem>
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailNotifications"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between gap-4">
                    <div className="grid gap-2">
                      <FormLabel>Email Notifications</FormLabel>
                      <FormDescription>
                        Receive email updates about your subscription
                      </FormDescription>
                      <FormMessage />
                    </div>
                    <FormControl>
                      <Switch
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="border-t-2 border-border pt-6">
          <div className="grid w-full gap-2">
            <Button type="submit" form="form-complex">
              Save Preferences
            </Button>
            <Button
              type="button"
              variant="neutral"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
