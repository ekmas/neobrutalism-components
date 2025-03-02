"use client"

import { type DialogProps } from "@radix-ui/react-dialog"
import clsx from "clsx"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import * as React from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import { cn } from "@/lib/utils"

function Command({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-main font-base text-text",
        className,
      )}
      {...props}
    />
  )
}
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-text [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>) {
  return (
    <div
      className="flex items-center border-b-2 border-border dark:border-darkBorder px-3"
      cmdk-input-wrapper=""
    >
      <Search className="mr-2 h-4 w-4 shrink-0" />
      <CommandPrimitive.Input
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-text placeholder:opacity-50 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  )
}
CommandInput.displayName = CommandPrimitive.Input.displayName

function CommandList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      className={cn(
        "max-h-[300px] overflow-y-auto overflow-x-hidden",
        className,
      )}
      {...props}
    />
  )
}
CommandList.displayName = CommandPrimitive.List.displayName

function CommandEmpty(
  props: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>,
) {
  return (
    <CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />
  )
}
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

function CommandGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden rounded-base p-2 text-text/80 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-base [&_[cmdk-group-heading]]:font-heading [&_[cmdk-group-heading]]:text-text/80",
        className,
      )}
      {...props}
    />
  )
}
CommandGroup.displayName = CommandPrimitive.Group.displayName

function CommandSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      className={cn("-mx-1 h-0.5 bg-border", className)}
      {...props}
    />
  )
}
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

function CommandItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={clsx(
        cn(
          "relative flex cursor-default select-none items-center rounded-base px-2 py-1.5 text-sm text-text outline-border dark:outline-darkBorder",
          className,
        ),
        "outline-0 outline aria-selected:outline-2",
      )}
      {...props}
    />
  )
}
CommandItem.displayName = CommandPrimitive.Item.displayName

function CommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-text", className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
