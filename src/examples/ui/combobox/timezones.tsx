"use client"

import { CheckIcon, ChevronDownIcon, PlusCircleIcon } from "lucide-react"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
] as const

type Timezone = (typeof timezones)[number]

export default function TimezoneCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("America/New_York")

  const selectedGroup = React.useMemo(
    () =>
      timezones.find((group) =>
        group.timezones.some((tz) => tz.value === value),
      ),
    [value],
  )

  const selectedTimezoneLabel = React.useMemo(() => {
    if (!selectedGroup) return undefined
    for (const tz of selectedGroup.timezones) {
      if (tz.value === value) {
        return tz.label
      }
    }
    return undefined
  }, [value, selectedGroup])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="noShadow"
          className="h-12 w-full justify-between px-2.5 md:max-w-[200px]"
        >
          {selectedTimezoneLabel ? (
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-main-foreground text-xs font-normal">
                {selectedGroup?.label}
              </span>
              <span>{selectedTimezoneLabel}</span>
            </div>
          ) : (
            "Select timezone"
          )}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-0" align="start">
        <Command className="**:data-[slot=command-input-wrapper]:h-11">
          <CommandInput placeholder="Search timezone..." />
          <CommandList className="scroll-pb-12">
            <CommandEmpty>No timezone found.</CommandEmpty>
            {timezones.map((region) => (
              <CommandGroup
                className="p-2"
                key={region.label}
                heading={region.label}
              >
                {region.timezones.map((timezone) => (
                  <CommandItem
                    key={timezone.value}
                    value={timezone.value}
                    onSelect={(currentValue) => {
                      setValue(
                        currentValue as Timezone["timezones"][number]["value"],
                      )
                      setOpen(false)
                    }}
                  >
                    {timezone.label}
                    <CheckIcon
                      className="ml-auto opacity-0 data-[selected=true]:opacity-100"
                      data-selected={value === timezone.value}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandGroup className="bg-main border-t-2 p-2 border-t-border sticky bottom-0">
              <CommandItem>
                <PlusCircleIcon />
                Create timezone
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
