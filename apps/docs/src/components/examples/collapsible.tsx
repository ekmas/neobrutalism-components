"use client"

import { ChevronsUpDown } from "lucide-react"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="rounded-base flex items-center justify-between space-x-4 border-2 border-border dark:border-darkBorder text-text bg-main px-4 py-2">
        <h4 className="text-sm font-heading">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button
            variant="noShadow"
            size="sm"
            className="w-9 bg-white dark:bg-secondaryBlack text-text dark:text-darkText p-0"
          >
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-3 font-mono font-base text-text text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2 text-text font-base">
        <div className="rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
