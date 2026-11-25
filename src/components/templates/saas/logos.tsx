import Star5 from "@/components/stars/s5"
import Star6 from "@/components/stars/s6"
import Star19 from "@/components/stars/s19"
import Star22 from "@/components/stars/s22"
import Star24 from "@/components/stars/s24"
import Star25 from "@/components/stars/s25"
import Star27 from "@/components/stars/s27"
import Star28 from "@/components/stars/s28"

import { cn } from "@/lib/utils"

import DecorStar from "./decor-star"

const LOGOS = [
  { name: "Acme", icon: Star25, color: "var(--chart-1)" },
  { name: "Globex", icon: Star5, color: "var(--chart-3)" },
  { name: "Initech", icon: Star6, color: "var(--chart-2)" },
  { name: "Umbrella", icon: Star22, color: "var(--chart-4)" },
  { name: "Hooli", icon: Star19, color: "var(--chart-1)" },
  { name: "Soylent", icon: Star27, color: "var(--chart-3)" },
  { name: "Cyberdyne", icon: Star24, color: "var(--chart-2)" },
  { name: "Pied Piper", icon: Star28, color: "var(--chart-4)" },
]

function Track({ className, hidden }: { className: string; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className={cn(
        "flex shrink-0 items-center motion-reduce:animate-none",
        className,
      )}
      style={{ animationDuration: "35s" }}
    >
      {LOGOS.map(({ name, icon, color }) => (
        <div
          key={name}
          className="mx-8 flex shrink-0 items-center gap-6 whitespace-nowrap font-heading text-3xl"
        >
          <DecorStar star={icon} color={color} className="size-9" />
          {name}
        </div>
      ))}
    </div>
  )
}

export default function Logos() {
  return (
    <section className="border-b-4 border-border bg-secondary-background py-8">
      <div className="relative flex overflow-hidden">
        <Track className="animate-marquee" />
        <Track className="absolute left-0 top-0 animate-marquee2" hidden />
      </div>
    </section>
  )
}
