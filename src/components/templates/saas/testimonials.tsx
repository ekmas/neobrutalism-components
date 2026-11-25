import Star4 from "@/components/stars/s4"
import Star22 from "@/components/stars/s22"
import Star30 from "@/components/stars/s30"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { cn } from "@/lib/utils"

import DecorStar, { SectionStars } from "./decor-star"
import SectionHeading from "./section-heading"

const TESTIMONIALS = [
  {
    quote:
      "We moved 40 engineers over from Jira in a single afternoon. Nobody has asked to go back.",
    name: "Alex Rivera",
    role: "VP Engineering, Acme",
    color: "bg-chart-3",
  },
  {
    quote:
      "The triage agent closes a third of our inbound bugs as duplicates before a human ever sees them.",
    name: "Sam Chen",
    role: "CTO, Globex",
    color: "bg-chart-1",
  },
  {
    quote:
      "It's the first tool where the keyboard shortcuts are so good that I stopped touching my mouse.",
    name: "Jordan Mills",
    role: "Staff Engineer, Hooli",
    color: "bg-chart-4",
  },
  {
    quote:
      "Roadmaps finally reflect reality. Leadership checks Planly instead of pinging me for updates.",
    name: "Taylor Brooks",
    role: "Head of Product, Initech",
    color: "bg-chart-5",
  },
  {
    quote:
      "Our cycle time dropped by a third in two months. The analytics made the bottlenecks obvious.",
    name: "Morgan Lee",
    role: "Engineering Manager, Umbrella",
    color: "bg-chart-2",
  },
  {
    quote:
      "SSO, SCIM and audit logs passed our security review on the first try. That never happens.",
    name: "Casey Walsh",
    role: "Security Lead, Cyberdyne",
    color: "bg-chart-3",
  },
  {
    quote:
      "Automations replaced three Zapier flows and a bot we maintained ourselves. Less glue, fewer pages.",
    name: "Riley Patel",
    role: "Platform Lead, Soylent",
    color: "bg-chart-1",
  },
  {
    quote:
      "Fast, clear and opinionated in the best way. Our designers actually enjoy filing issues now.",
    name: "Jamie Novak",
    role: "Design Director, Pied Piper",
    color: "bg-chart-4",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

function Track({
  items,
  className,
  reverse,
  hidden,
}: {
  items: typeof TESTIMONIALS
  className: string
  reverse?: boolean
  hidden?: boolean
}) {
  return (
    <div
      aria-hidden={hidden}
      className={cn(
        "flex shrink-0 py-3 group-hover:paused motion-reduce:animate-none",
        className,
      )}
      style={{
        animationDuration: "70s",
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((t) => (
        <figure
          key={t.name}
          className="mx-1.5 flex w-64 shrink-0 flex-col justify-between gap-4 rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow sm:mx-2.5 sm:w-85 sm:gap-6 sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div
              className="flex gap-1"
              role="img"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <DecorStar
                  key={i}
                  star={Star4}
                  strokeWidth={1.25}
                  className="size-4 sm:size-5"
                />
              ))}
            </div>
            <blockquote className="text-sm font-base leading-relaxed sm:text-base">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
          <figcaption className="flex items-center gap-3">
            <Avatar className="size-8 sm:size-10">
              <AvatarFallback
                className={cn(t.color, "text-xs font-heading sm:text-sm")}
              >
                {initials(t.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-heading">{t.name}</p>
              <p className="text-xs font-base">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function Row({
  items,
  reverse,
}: {
  items: typeof TESTIMONIALS
  reverse?: boolean
}) {
  return (
    <div className="group relative flex overflow-hidden">
      <Track items={items} reverse={reverse} className="animate-marquee" />
      <Track
        items={items}
        reverse={reverse}
        className="absolute left-0 top-0 animate-marquee2"
        hidden
      />
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-border bg-background py-24">
      <SectionStars
        stars={[
          {
            star: Star30,
            color: "var(--chart-2)",
            className:
              "-right-16 lg:-right-12 top-6 size-24 rotate-[40deg] lg:size-40",
          },
          {
            star: Star22,
            color: "var(--chart-3)",
            className:
              "-left-16 lg:-left-12 bottom-10 size-24 -rotate-[10deg] lg:size-40",
          },
        ]}
      />
      <SectionHeading
        eyebrow="Testimonials"
        title={<>Teams can&apos;t stop talking about it</>}
        description="Rated 4.9/5 by 2,000+ teams."
        className="px-5"
      />

      <div className="space-y-2">
        <Row items={TESTIMONIALS} />
        <Row items={[...TESTIMONIALS].reverse()} reverse />
      </div>
    </section>
  )
}
