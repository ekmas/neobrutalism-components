"use client"

import { CheckCircle2Icon } from "lucide-react"

import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const previewStyling = [
  {
    name: "blue",
    main: "bg-[#5294FF] dark:bg-[#5294FF]",
    bg: "bg-[#DCEBFE] dark:bg-[#20294B]",
    rounded: "rounded-[5px]!",
    shadow: "shadow-[4px_4px_0_0_rgba(0,0,0,1)]!",
    boxShadow: "4px 4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "green",
    main: "bg-[#05E17A] dark:bg-[#1EFA94]",
    bg: "bg-[#DEFCE9] dark:bg-[#0E2016]",
    rounded: "rounded-[15px]!",
    shadow: "shadow-[0_4px_0_0_rgba(0,0,0,1)]!",
    boxShadow: "0 4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "orange",
    main: "bg-[#FF7A05] dark:bg-[#FF871F]",
    bg: "bg-[#FFEDD6] dark:bg-[#322215]",
    rounded: "rounded-[10px]!",
    shadow: "shadow-[-4px_-4px_0_0_rgba(0,0,0,1)]!",
    boxShadow: "-4px -4px 0 0 rgba(0,0,0,1)",
  },
  {
    name: "violet",
    main: "bg-[#A985FF] dark:bg-[#A985FF]",
    bg: "bg-[#EEE6FE] dark:bg-[#332352]",
    rounded: "rounded-none!",
    shadow: "shadow-[4px_-4px_0_0_rgba(0,0,0,1)]!",
    boxShadow: "4px -4px 0 0 rgba(0,0,0,1)",
  },
]

export default function StylingCustomizer() {
  const [{ main, bg, rounded, boxShadow }, setStyling] = useState(
    previewStyling[0],
  )

  return (
    <div className="mx-auto w-[800px] max-w-full mt-20 m500:py-14">
      <div className="grid gap-10">
        <div className="grid grid-cols-4 gap-4">
          {previewStyling.map((color) => (
            <Button
              key={color.name}
              className={`h-full border-2 border-border text-xl ${color.main}`}
              onClick={() => setStyling(color)}
            >
              {color.name}
            </Button>
          ))}
        </div>
        <div
          className={`${bg} border-2 shadow-shadow flex flex-col justify-between p-8 border-border h-[350px] bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px] ${bg}`}
        >
          <Alert
            style={{
              boxShadow,
            }}
            className={`${main} ${rounded} transition-all duration-200`}
          >
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>

          <Accordion type="single" defaultValue="item-1">
            <AccordionItem
              style={{
                boxShadow,
              }}
              className={`${rounded} transition-all duration-200`}
              value="item-1"
            >
              <AccordionTrigger className={`${main}`}>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between gap-2">
            <Button
              style={{
                boxShadow,
              }}
              className={`${main} ${rounded} transition-all duration-200 pointer-events-none`}
              size="sm"
            >
              Button
            </Button>
            <Button
              variant="noShadow"
              className={`${main} ${rounded} transition-all duration-200`}
              size="sm"
            >
              Button
            </Button>
            <Badge className={`${main} ${rounded} transition-all duration-200`}>
              Badge
            </Badge>

            <Select>
              <SelectTrigger
                className={`${main} ${rounded} w-[180px] transition-all duration-200`}
              >
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent
                className={`${main} ${rounded} transition-all duration-200`}
              >
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem className={`${rounded}`} value="apple">
                    Apple
                  </SelectItem>
                  <SelectItem className={`${rounded}`} value="banana">
                    Banana
                  </SelectItem>
                  <SelectItem className={`${rounded}`} value="blueberry">
                    Blueberry
                  </SelectItem>
                  <SelectItem className={`${rounded}`} value="grapes">
                    Grapes
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
