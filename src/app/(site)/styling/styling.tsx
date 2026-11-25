"use client"

import {
  DocsTabs,
  DocsTabsContent,
  DocsTabsList,
  DocsTabsTrigger,
} from "@/components/app/docs-tabs"
import { Pre } from "@/components/app/pre"
import ShadcnCliCommand from "@/components/app/shadcn-cli-command"
import {
  getStylingInstall,
  StylingSheetContent,
  useStyling,
} from "@/components/app/styling-customizer"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

export default function Styling() {
  const customizer = useStyling()
  const {
    url: stylingUrl,
    css: styling,
    overrides: cliOverrides,
  } = getStylingInstall(customizer)

  return (
    <div className="flex items-center justify-center gap-4">
      <Sheet>
        <SheetTrigger render={<Button />}>Customize</SheetTrigger>
        <StylingSheetContent styling={customizer} />
      </Sheet>
      <Dialog>
        <DialogTrigger render={<Button variant="neutral" />}>
          Copy
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Install this theme</DialogTitle>
            <DialogDescription>
              Copy the command for your package manager, or paste the CSS into
              your project.
            </DialogDescription>
          </DialogHeader>
          <DocsTabs
            defaultValue="cli"
            className="min-w-0 shadow-none! [&_[data-slot=pre-wrapper]]:shadow-none [&_[data-slot=tabs]]:shadow-none"
          >
            <DocsTabsList className="grid w-full grid-cols-2">
              <DocsTabsTrigger value="cli">Shadcn CLI</DocsTabsTrigger>
              <DocsTabsTrigger value="manual">Manual</DocsTabsTrigger>
            </DocsTabsList>
            <DocsTabsContent value="cli">
              <div className="flex min-w-0 flex-col gap-4 pt-4 [&_[data-slot=pre-wrapper]]:mb-0">
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Scaffold a new project already themed:
                  </div>
                  <ShadcnCliCommand command="init" url={stylingUrl} multiline />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Or add to an existing project:
                  </div>
                  <ShadcnCliCommand command="add" url={stylingUrl} multiline />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Then update these in your globals.css to match your radius,
                    shadow and font weights:
                  </div>
                  <Pre
                    wrapperClassName="w-full max-w-full text-white overflow-x-auto"
                    __rawstring__={cliOverrides}
                  >
                    {cliOverrides}
                  </Pre>
                </div>
              </div>
            </DocsTabsContent>
            <DocsTabsContent value="manual">
              <div className="flex min-w-0 flex-col gap-4 pt-4 [&_[data-slot=pre-wrapper]]:mb-0">
                <div className="flex min-w-0 flex-col gap-2">
                  <div className="mx-0.5 text-sm font-base">
                    Paste into your globals.css. This includes your radius,
                    shadow and font weights:
                  </div>
                  <Pre
                    wrapperClassName="w-full max-w-full text-white overflow-x-auto"
                    __rawstring__={styling}
                  >
                    {styling}
                  </Pre>
                </div>
              </div>
            </DocsTabsContent>
          </DocsTabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}
