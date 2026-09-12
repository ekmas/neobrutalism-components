"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { XIcon } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { createToastManager, Toaster } from "@/components/ui/toast"

const formSchema = z.object({
  emails: z
    .array(
      z.object({
        address: z.string().email("Enter a valid email address."),
      }),
    )
    .min(1, "Add at least one email address.")
    .max(5, "You can add up to 5 email addresses."),
})

const toastManager = createToastManager()

export default function FormArrayDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ address: "" }, { address: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emails",
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
        <CardHeader className="border-b-2 border-border pb-6">
          <CardTitle>Contact Emails</CardTitle>
          <CardDescription>
            Manage your contact email addresses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-array"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4"
            >
              <div className="grid gap-2">
                <FormLabel>Email Addresses</FormLabel>
                <p className="text-sm font-base text-foreground">
                  Add up to 5 email addresses where we can contact you.
                </p>
              </div>
              {fields.map((item, index) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={`emails.${index}.address`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">
                        Email {index + 1}
                      </FormLabel>
                      <InputGroup>
                        <FormControl>
                          <InputGroupInput
                            {...field}
                            placeholder="name@example.com"
                            type="email"
                            autoComplete="email"
                          />
                        </FormControl>
                        {fields.length > 1 && (
                          <InputGroupAddon align="inline-end">
                            <InputGroupButton
                              type="button"
                              size="icon-xs"
                              onClick={() => remove(index)}
                              aria-label={`Remove email ${index + 1}`}
                            >
                              <XIcon />
                            </InputGroupButton>
                          </InputGroupAddon>
                        )}
                      </InputGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="neutral"
                size="sm"
                className="justify-self-start"
                onClick={() => append({ address: "" })}
                disabled={fields.length >= 5}
              >
                Add Email Address
              </Button>
              {form.formState.errors.emails?.root && (
                <p className="text-sm font-base text-red-500">
                  {form.formState.errors.emails.root.message}
                </p>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="gap-2 border-t-2 border-border pt-6">
          <Button type="button" variant="neutral" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-array">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
