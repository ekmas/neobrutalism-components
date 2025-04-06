"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import * as React from "react"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "rounded-base! border-2 border-border bg-main p-3 font-heading shadow-shadow",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption:
          "flex justify-center pt-1 relative items-center w-full text-main-foreground",
        caption_label: "text-sm font-heading",
        nav: "gap-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-7 bg-transparent p-0",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-main-foreground rounded-base w-9 font-base text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-black/50 [&:has([aria-selected])]:text-white! [&:has([aria-selected].day-range-end)]:rounded-r-base",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-base [&:has(>.day-range-start)]:rounded-l-base [&:has([aria-selected])]:bg-black/50! first:[&:has([aria-selected])]:rounded-l-base last:[&:has([aria-selected])]:rounded-r-base"
            : "[&:has([aria-selected])]:rounded-base [&:has([aria-selected])]:bg-black/50",
        ),
        day: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-9 p-0 font-base aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-black! aria-selected:text-white rounded-base",
        day_range_end:
          "day-range-end aria-selected:bg-black! aria-selected:text-white rounded-base",
        day_selected: "bg-black! text-white! rounded-base",
        day_today: "bg-secondary-background text-foreground!",
        day_outside:
          "day-outside text-main-foreground opacity-50 aria-selected:bg-none",
        day_disabled: "text-main-foreground opacity-50 rounded-base",
        day_range_middle: "aria-selected:bg-black/50! aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
