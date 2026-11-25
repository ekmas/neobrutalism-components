import type { ComponentType, SVGProps } from "react"

import Star14 from "@/components/stars/s14"

import { cn } from "@/lib/utils"

type StarComponent = ComponentType<
  SVGProps<SVGSVGElement> & {
    color?: string
    stroke?: string
    strokeWidth?: number
    pathClassName?: string
  }
>

// Faint 56px grid used as the background of every white section.
export const GRID_BACKGROUND =
  "bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[56px_56px]"

// Non-scaling stroke keeps every star outline at 2px, matching card borders.
// Avoid chart-1 for decoration: it reads as the interactive main colour.
export default function DecorStar({
  star: Star,
  color = "var(--chart-3)",
  spin = false,
  strokeWidth = 2,
  className,
  style,
}: {
  star: StarComponent
  color?: string
  spin?: boolean
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <Star
      aria-hidden
      color={color}
      stroke="var(--border)"
      strokeWidth={strokeWidth}
      pathClassName="[vector-effect:non-scaling-stroke]"
      className={cn(
        "pointer-events-none shrink-0 overflow-visible",
        spin && "animate-[spin_40s_linear_infinite] motion-reduce:animate-none",
        className,
      )}
      style={style}
    />
  )
}

// A pair of big background stars for a section. The section needs
// `relative isolate overflow-hidden`: isolate makes it a stacking context, so
// the -z-10 stars paint above its background but below all of its content.
export function SectionStars({
  stars,
}: {
  stars: { star: StarComponent; color: string; className: string }[]
}) {
  return stars.map(({ star, color, className }, i) => (
    <DecorStar
      key={i}
      star={star}
      color={color}
      className={cn("absolute -z-10", className)}
    />
  ))
}

export function StarSticker({
  star = Star14,
  color = "var(--chart-3)",
  children,
  className,
}: {
  star?: StarComponent
  color?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group absolute z-10 flex size-24 rotate-6 items-center justify-center text-center font-heading leading-tight text-foreground",
        className,
      )}
    >
      <DecorStar
        star={star}
        color={color}
        className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:rotate-45 motion-reduce:transition-none"
      />
      <span className="relative">{children}</span>
    </div>
  )
}
