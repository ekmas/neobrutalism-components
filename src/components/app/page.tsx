import { cn } from "@/lib/utils"

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-20">
      <div className="py-16 mx-auto w-container max-w-full text-foreground text-left">
        {children}
      </div>
    </div>
  )
}

function PageHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl font-heading m800:text-3xl m500:text-2xl m400:text-xl",
        className,
      )}
      {...props}
    />
  )
}

function PageHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={cn("mb-[50px] flex flex-col gap-8", className)} {...props}>
      {children}
    </div>
  )
}

function PageDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-base text-2xl m800:text-lg m400:text-base",
        className,
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start gap-2 pt-2",
        className,
      )}
      {...props}
    />
  )
}

export { PageWrapper, PageActions, PageDescription, PageHeading, PageHeader }
