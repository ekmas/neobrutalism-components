"use client"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePickerTimePickerDemo() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="noShadow"
                id="date-picker-optional"
                className="w-32 justify-between font-base"
              />
            }
          >
            {date ? format(date, "PPP") : "Select date"}
            <ChevronDownIcon />
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden border-0! p-0"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="10:30:00"
          className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>
  )
}
