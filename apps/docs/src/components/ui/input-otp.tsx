"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}
InputOTP.displayName = "InputOTP"

function InputOTPGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex items-center", className)} {...props} />
}
InputOTPGroup.displayName = "InputOTPGroup"

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      className={cn(
        "relative bg-white dark:bg-secondaryBlack flex h-10 w-10 items-center justify-center border-y-2 border-r-2 border-border dark:border-darkBorder text-sm font-base transition-all first:rounded-l-base first:border-l-2 last:rounded-r-base",
        isActive &&
          "z-10 ring-1 ring-black dark:ring-white ring-offset-white dark:ring-offset-black",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-black dark:bg-white duration-1000" />
        </div>
      )}
    </div>
  )
}
InputOTPSlot.displayName = "InputOTPSlot"

function InputOTPSeparator({
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div role="separator" {...props}>
      <Dot />
    </div>
  )
}
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
