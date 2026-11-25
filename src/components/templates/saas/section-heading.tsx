import { cn } from "@/lib/utils"

// Stroke is painted under the fill, so only half of it shows as an outline.
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-lg font-heading uppercase tracking-[0.12em] text-chart-3 [paint-order:stroke_fill] [-webkit-text-stroke:2.5px_var(--border)]",
        className,
      )}
    >
      {children}
    </p>
  )
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-14 flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance font-heading text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      {description && <p className="text-lg font-base">{description}</p>}
    </div>
  )
}
