"use client"

import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarDropdownDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      fromYear={2000}
      toYear={2030}
    />
  )
}
