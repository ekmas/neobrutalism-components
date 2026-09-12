"use client"

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative z-10 flex max-w-max rounded-base font-heading border-border border-2 p-1 bg-background flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center font-heading justify-center space-x-1",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center text-foreground rounded-base border-2 border-transparent bg-background px-4 py-2 text-sm font-heading transition-colors focus:outline-none hover:bg-main hover:text-main-foreground hover:border-border focus:bg-main focus:text-main-foreground focus:border-border data-popup-open:bg-main data-popup-open:text-main-foreground data-popup-open:border-border data-active:bg-main data-active:text-main-foreground data-active:border-border disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50",
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-2 size-4 font-heading transition duration-200 group-data-popup-open:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full w-auto p-2 pr-2.5 transition-[opacity,transform,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:data-[activation-direction=left]:translate-x-[-50%] data-starting-style:data-[activation-direction=right]:translate-x-[50%] data-ending-style:data-[activation-direction=left]:translate-x-[50%] data-ending-style:data-[activation-direction=right]:translate-x-[-50%] **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block select-none space-y-1 rounded-base border-2 border-transparent p-2 leading-none no-underline outline-none transition-colors hover:bg-main hover:text-main-foreground hover:border-border focus:bg-main focus:text-main-foreground focus:border-border focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> &
  Pick<
    React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none"
      >
        <NavigationMenuPrimitive.Popup
          data-slot="navigation-menu-popup"
          className="relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) overflow-hidden rounded-base border-2 border-border bg-background text-foreground outline-none transition-[opacity,transform,width,height,scale,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150"
        >
          <NavigationMenuPrimitive.Viewport
            data-slot="navigation-menu-viewport"
            className={cn("relative size-full overflow-hidden", className)}
            {...props}
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "flex items-center justify-center transition-transform duration-200 data-popup-open:rotate-180",
        className,
      )}
      {...props}
    />
  )
}

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
