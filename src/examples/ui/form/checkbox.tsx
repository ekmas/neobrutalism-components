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
import { createToastManager, Toaster } from "@/components/ui/toast"

const tasks = [
  {
    id: "push",
    label: "Push notifications",
  },
  {
    id: "email",
    label: "Email notifications",
  },
] as const

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "Invalid notification type selected.",
      },
    ),
})

const toastManager = createToastManager()

export default function FormCheckboxDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responses: true,
      tasks: [],
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
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Manage your notification preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-checkbox"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-8"
            >
              <FormField
                control={form.control}
                name="responses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Responses</FormLabel>
                    <FormDescription>
                      Get notified for requests that take time, like research or
                      image generation.
                    </FormDescription>
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled
                        />
                      </FormControl>
                      <FormLabel className="font-base">
                        Push notifications
                      </FormLabel>
                    </FormItem>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tasks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tasks</FormLabel>
                    <FormDescription>
                      Get notified when tasks you&apos;ve created have updates.
                    </FormDescription>
                    {tasks.map((task) => (
                      <FormItem
                        key={task.id}
                        className="flex items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            name={field.name}
                            checked={field.value.includes(task.id)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, task.id]
                                : field.value.filter(
                                    (value) => value !== task.id,
                                  )
                              field.onChange(newValue)
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-base">
                          {task.label}
                        </FormLabel>
                      </FormItem>
                    ))}
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
          <Button type="submit" form="form-checkbox">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
