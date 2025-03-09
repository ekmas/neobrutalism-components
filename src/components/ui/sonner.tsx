"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-bg text-text border-border border-2 font-heading font-toast shadow-shadow rounded-base text-[13px] flex items-center gap-1.5 p-4",
          description: "font-base",
          actionButton:
            "font-base border-2 text-[12px] h-6 px-2 bg-main text-mtext border-border rounded-base",
          cancelButton:
            "font-base border-2 text-[12px] h-6 px-2 bg-bw text-text border-border rounded-base",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
