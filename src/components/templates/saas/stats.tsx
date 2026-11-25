import { cn } from "@/lib/utils"

const STATS = [
  {
    value: "2,000+",
    label: "teams shipping with Planly",
  },
  {
    value: "14M",
    label: "issues closed last year",
  },
  {
    value: "99.99%",
    label: "uptime over 12 months",
  },
  {
    value: "4.9/5",
    label: "average review rating",
  },
]

export default function Stats() {
  return (
    <section className="border-b-4 border-border bg-chart-3 text-foreground">
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col-reverse justify-end gap-1 border-border px-5 py-10 text-center",
              // 1 column below sm, 2×2 from sm, one row from md.
              i < 3 && "border-b-4 md:border-b-0",
              i === 2 && "sm:border-b-0",
              i % 2 === 1 && "sm:border-l-4",
              (i === 0 || i === 2) && "md:border-l-4",
              i === STATS.length - 1 && "md:border-r-4",
            )}
          >
            <dt className="text-sm font-base">{stat.label}</dt>
            <dd className="font-heading text-4xl sm:text-5xl md:text-4xl lg:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
