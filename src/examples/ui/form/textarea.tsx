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
import { Textarea } from "@/components/ui/textarea"
import { createToastManager, Toaster } from "@/components/ui/toast"

const formSchema = z.object({
  about: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(200, "Please keep it under 200 characters."),
})

const toastManager = createToastManager()

export default function FormTextareaDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: "",
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
          <CardTitle>Personalization</CardTitle>
          <CardDescription>
            Customize your experience by telling us more about yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-textarea"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>More about you</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="I'm a software engineer..."
                        className="min-h-[120px]"
                      />
                    </FormControl>
                    <FormDescription>
                      Tell us more about yourself. This will be used to help us
                      personalize your experience.
                    </FormDescription>
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
          <Button type="submit" form="form-textarea">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
