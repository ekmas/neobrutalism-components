import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

/**
 * The square, full-width tabs used across the docs: previews, installation
 * blocks and package-manager commands. Kept separate from mdx-components so
 * pages outside the docs can use them without pulling in every example.
 */
export function DocsTabs({
  className,
  ...props
}: React.ComponentProps<typeof Tabs>) {
  return (
    <Tabs
      className={cn(
        "w-full shadow-shadow [p+&]:mt-5 [ul+&]:mt-5 [ol+&]:mt-5",
        className,
      )}
      {...props}
    />
  )
}

export function DocsTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      className={cn(
        "w-full overflow-x-hidden rounded-none sm:h-12 h-10 p-0 bg-secondary-background",
        className,
      )}
      {...props}
    />
  )
}

export function DocsTabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      className={cn(
        "h-full border-0 border-r-2 z-10 border-r-border rounded-none sm:text-base data-active:text-main-foreground text-foreground last:border-r-0",
        className,
      )}
      {...props}
    />
  )
}

export function DocsTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsContent>) {
  return (
    <TabsContent className={cn("mt-0 rounded-none", className)} {...props} />
  )
}
