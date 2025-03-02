import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-base bg-white dark:bg-secondaryBlack border-2 border-border dark:border-darkBorder",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
