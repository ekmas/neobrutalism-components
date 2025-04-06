import { cn } from "@/lib/utils"

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] px-5 pt-[70px] prose-h4:xl:text-2xl prose-h4:lg:text-xl prose-h4:text-lg">
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
        "font-heading text-center 2xl:text-4xl xl:text-3xl text-2xl",
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
        "font-base 2xl:text-2xl xl:text-xl md:text-lg sm:text-lg text-base text-center",
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
        "flex w-full items-center justify-center gap-2 pt-2",
        className,
      )}
      {...props}
    />
  )
}

export { PageWrapper, PageActions, PageDescription, PageHeading, PageHeader }
