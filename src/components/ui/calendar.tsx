"use client"

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import * as React from "react"

import { buttonVariants } from "@/components/ui/button"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar rounded-base border-2 border-border bg-background p-3 font-heading text-foreground shadow-shadow",
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-2 sm:flex-row",
          defaultClassNames.months,
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-7 bg-secondary-background p-0 text-foreground select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: "noShadow" }),
          "size-7 bg-secondary-background p-0 text-foreground select-none aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-7 w-full items-center justify-center px-8",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-7 w-full items-center justify-center gap-1.5 text-sm font-heading",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "relative rounded-base border-2 border-border bg-secondary-background",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "font-heading select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-7 items-center gap-1 rounded-base px-2 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "w-9 rounded-base text-[0.8rem] font-base text-foreground select-none",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-9 select-none",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "text-[0.8rem] font-base text-foreground select-none",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative size-9 p-0 text-center text-sm select-none",
          defaultClassNames.day,
        ),
        range_start: cn(
          "rounded-l-base bg-main/50",
          defaultClassNames.range_start,
        ),
        range_middle: cn("bg-main/50", defaultClassNames.range_middle),
        range_end: cn("rounded-r-base bg-main/50", defaultClassNames.range_end),
        selected: cn(
          props.mode !== "range" && "rounded-base bg-main/50",
          defaultClassNames.selected,
        ),
        today: cn(defaultClassNames.today),
        outside: cn("opacity-50", defaultClassNames.outside),
        disabled: cn("opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeft className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRight className={cn("size-4", className)} {...props} />
            )
          }

          return <ChevronDown className={cn("size-4", className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-9 items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const selectedSingle =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle

  return (
    <button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={selectedSingle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-today={modifiers.today}
      className={cn(
        buttonVariants({ variant: "noShadow" }),
        "size-9 bg-secondary-background p-0 font-base text-foreground",
        modifiers.today && "bg-transparent",
        modifiers.range_middle && "bg-main/50 text-main-foreground",
        (selectedSingle || modifiers.range_start || modifiers.range_end) &&
          "bg-main text-main-foreground",
        defaultClassNames.day_button,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
