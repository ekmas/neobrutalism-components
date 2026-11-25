"use client"

import { Pre } from "@/components/app/pre"
import ShadcnCliCommand from "@/components/app/shadcn-cli-command"
import {
  getStylingInstall,
  type Styling,
} from "@/components/app/styling-customizer"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Step({
  label,
  children,
}: {
  label: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div className="mx-0.5 text-sm font-base">{label}</div>
      {children}
    </div>
  )
}

// Install instructions for a template registry item with the given styling.
export default function TemplateInstallContent({
  item,
  styling,
}: {
  item: string
  styling: Styling
}) {
  const install = getStylingInstall(styling)

  return (
    <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>Install this template</DialogTitle>
        <DialogDescription>
          Set up a new project with this template using the shadcn CLI.
        </DialogDescription>
      </DialogHeader>
      <div className="flex min-w-0 flex-col gap-5 [&_[data-slot=pre-wrapper]]:mb-0">
        <Step
          label={`1. Create a project with the ${styling.palette.name}${styling.mode === "duotone" ? " duotone" : ""} styling:`}
        >
          <ShadcnCliCommand url={install.url} command="init" multiline />
        </Step>

        <Step label="2. Add the template. Run this inside your new project:">
          <ShadcnCliCommand url={item} multiline />
        </Step>

        {install.hasOverrides && (
          <Step label="3. Update these in your globals.css to match your radius, shadow and font weights:">
            <Pre
              wrapperClassName="w-full max-w-full text-white overflow-x-auto"
              __rawstring__={install.overrides}
            >
              {install.overrides}
            </Pre>
          </Step>
        )}
      </div>
    </DialogContent>
  )
}
