import { Toc } from "@stefanprobst/rehype-extract-toc"
import { CircleAlert } from "lucide-react"

import * as runtime from "react/jsx-runtime"
import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

import ComponentPreview from "./component-preview"
import { Pre } from "./pre"
import ShadcnCliCommand from "./shadcn-cli-command"

export const sharedComponents = {
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("w-full shadow-shadow", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full overflow-x-hidden rounded-none sm:h-12 h-10 p-0 bg-secondary-background",
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "h-full border-0 border-r-2 z-10 border-r-border rounded-none sm:text-base data-[state=active]:text-main-foreground text-foreground last:border-r-0",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent className="mt-0 rounded-none" {...props} />
  ),
  Warning: ({
    description,
    className,
    ...props
  }: React.ComponentProps<typeof Alert> & { description: string }) => (
    <Alert
      className={cn(
        "not-prose sm:has-[>svg]:gap-x-4 has-[>svg]:gap-x-3 sm:gap-y-2.5 gap-y-1.5 sm:[&>svg]:size-5 [&>svg]:size-4",
        className,
      )}
      {...props}
    >
      <CircleAlert />
      <AlertTitle className="sm:text-lg sm:leading-5">Warning</AlertTitle>
      <AlertDescription className="sm:text-base">
        {description}
      </AlertDescription>
    </Alert>
  ),
  Link: ({ ...props }: React.ComponentProps<typeof Link>) => (
    <Link {...props} />
  ),
  pre: Pre,
  ShadcnCliCommand,
  ComponentPreview,
  Installation: ({
    children,
    component,
  }: {
    children: React.ReactNode
    component: string
  }) => (
    <sharedComponents.Tabs defaultValue="cli" className="w-full">
      <sharedComponents.TabsList className="grid w-full grid-cols-2 border-b-0">
        <sharedComponents.TabsTrigger value="cli">
          Shadcn CLI
        </sharedComponents.TabsTrigger>
        <sharedComponents.TabsTrigger value="manual">
          Manual
        </sharedComponents.TabsTrigger>
      </sharedComponents.TabsList>
      <sharedComponents.TabsContent value="cli">
        <ShadcnCliCommand component={component} />
      </sharedComponents.TabsContent>
      <sharedComponents.TabsContent value="manual">
        {children}
      </sharedComponents.TabsContent>
    </sharedComponents.Tabs>
  ),
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return {
    Component: fn({ ...runtime }).default,
    TableOfContents: fn({ ...runtime }).toc as Toc,
  }
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const { Component } = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}

export function MDXTableOfContents({ code }: { code: string }) {
  const { TableOfContents } = useMDXComponent(code)

  return TableOfContents
}
