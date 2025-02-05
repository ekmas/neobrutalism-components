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
        "!rounded-base border-2 border-border bg-main p-3 font-heading shadow-shadow",
        className,
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center text-mtext pt-1 relative items-center",
        caption_label: "text-sm",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "noShadow" }),
          "h-7 w-7 bg-transparent p-0",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-mtext rounded-base w-9 font-base text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-base rounded-base [&:has([aria-selected].day-outside)]:bg-white [&:has([aria-selected])]:bg-white first:[&:has([aria-selected])]:rounded-l-base last:[&:has([aria-selected])]:rounded-r-base focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "noShadow" }),
          "h-9 w-9 p-0 font-base aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected: "!bg-black text-white rounded-base",
        day_today: "bg-white dark:bg-secondaryBlack text-text",
        day_outside: "day-outside text-mtext opacity-50 aria-selected:bg-none",
        day_disabled: "text-mtext opacity-50 rounded-base",
        day_range_middle: "aria-selected:bg-white aria-selected:text-mtext",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
