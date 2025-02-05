import { CircleAlert } from "lucide-react"
import type { MDXComponents } from "mdx/types"

import Link from "next/link"

import EditThisPage from "@/components/app/EditThisPage"
import Pagination from "@/components/app/Pagination"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn(className, "w-full")} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          className,
          "w-full overflow-x-hidden rounded-none m750:h-10 shadow-light bg-white p-0 dark:bg-secondaryBlack",
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
          className,
          "h-full border-0 border-r-2 z-10 m400:text-xs border-r-border rounded-none sm:text-base dark:data-[state=active]:text-text text-text dark:text-darkText last:border-r-0",
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
        className={cn("not-prose sm:[&>svg~*]:pl-9", className)}
        {...props}
      >
        <CircleAlert className="sm:h-6 sm:w-6 w-4 h-4" />
        <AlertTitle className="sm:text-lg sm:leading-6">Warning</AlertTitle>
        <AlertDescription className="sm:text-base">
          {description}
        </AlertDescription>
      </Alert>
    ),
    EditThisPage: ({ ...props }) => <EditThisPage {...props} />,
    Pagination: ({ ...props }) => <Pagination {...props} />,
    Link: ({ ...props }) => <Link {...props} />,
    ...components,
  }
}
