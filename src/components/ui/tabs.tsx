"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "w-full data-[orientation=vertical]:flex data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-2",
        className,
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex items-center justify-center text-foreground data-[orientation=vertical]:h-fit data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  {
    variants: {
      variant: {
        default: "h-12 rounded-base border-2 border-border bg-background p-1",
        line: "gap-1 border-b-2 border-border bg-transparent data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-b-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-base border-2 border-transparent px-2 py-1 gap-1.5 text-sm font-heading ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 data-active:bg-main data-active:text-main-foreground data-active:border-border data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "after:pointer-events-none after:absolute after:bg-main after:opacity-0 after:transition-opacity after:hidden group-data-[variant=line]/tabs-list:after:block data-[orientation=horizontal]:after:inset-x-0 data-[orientation=horizontal]:after:-bottom-0.5 data-[orientation=horizontal]:after:h-1 data-[orientation=vertical]:after:inset-y-0 data-[orientation=vertical]:after:-right-0.5 data-[orientation=vertical]:after:w-1",
        "group-data-[variant=line]/tabs-list:data-active:border-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:text-foreground group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[orientation=vertical]:mt-0 data-[orientation=vertical]:flex-1",
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
