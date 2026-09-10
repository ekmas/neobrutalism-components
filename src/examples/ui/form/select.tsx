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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createToastManager, Toaster } from "@/components/ui/toast"

const spokenLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
] as const

const languageItems = [{ label: "Auto", value: "auto" }, ...spokenLanguages]

const formSchema = z.object({
  language: z
    .string()
    .min(1, "Please select your spoken language.")
    .refine((val) => val !== "auto", {
      message:
        "Auto-detection is not allowed. Please select a specific language.",
    }),
})

const toastManager = createToastManager()

export default function FormSelectDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: "",
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
      <Card className="w-full sm:max-w-lg">
        <CardHeader>
          <CardTitle>Language Preferences</CardTitle>
          <CardDescription>
            Select your preferred spoken language.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="form-select"
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="grid gap-2">
                      <FormLabel>Spoken Language</FormLabel>
                      <FormDescription>
                        For best results, select the language you speak.
                      </FormDescription>
                      <FormMessage />
                    </div>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                      items={languageItems}
                    >
                      <FormControl>
                        <SelectTrigger className="min-w-[120px] sm:w-auto">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent alignItemWithTrigger>
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectSeparator />
                        {spokenLanguages.map((language) => (
                          <SelectItem
                            key={language.value}
                            value={language.value}
                          >
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
          <Button type="submit" form="form-select">
            Save
          </Button>
        </CardFooter>
      </Card>
    </Toaster>
  )
}
