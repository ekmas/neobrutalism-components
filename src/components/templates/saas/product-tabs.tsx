"use client"

import {
  ArrowRight,
  ChartColumn,
  Map as MapIcon,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import { useEffect, useRef, useState } from "react"

import Star11 from "@/components/stars/s11"
import Star24 from "@/components/stars/s24"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

import { GRID_BACKGROUND, SectionStars } from "./decor-star"
import SectionHeading from "./section-heading"

type TabValue = "roadmap" | "analytics" | "automations"

const TABS: {
  value: TabValue
  label: string
  blurb: string
  icon: LucideIcon
  color: string
}[] = [
  {
    value: "roadmap",
    label: "Roadmap",
    blurb: "Every project on one timeline, from idea to launch.",
    icon: MapIcon,
    color: "bg-chart-3",
  },
  {
    value: "analytics",
    label: "Analytics",
    blurb: "Cycle time and throughput, no spreadsheet required.",
    icon: ChartColumn,
    color: "bg-chart-4",
  },
  {
    value: "automations",
    label: "Automations",
    blurb: "Rules that handle triage, handoffs and reminders.",
    icon: Workflow,
    color: "bg-chart-2",
  },
]

const AUTOPLAY_MS = 6000

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const ROADMAP = [
  {
    name: "Public API v2",
    start: 0,
    span: 2,
    color: "bg-chart-1",
    status: "Shipped",
    progress: 100,
    owner: "Platform",
  },
  {
    name: "Usage billing",
    start: 1,
    span: 3,
    color: "bg-chart-4",
    status: "In progress",
    progress: 64,
    owner: "Billing",
  },
  {
    name: "Mobile app",
    start: 2,
    span: 3,
    color: "bg-chart-3",
    status: "In progress",
    progress: 38,
    owner: "Mobile",
  },
  {
    name: "SSO & SCIM",
    start: 4,
    span: 2,
    color: "bg-chart-2",
    status: "Planned",
    progress: 0,
    owner: "Security",
  },
  {
    name: "Insights 2.0",
    start: 3,
    span: 3,
    color: "bg-chart-5",
    status: "In progress",
    progress: 21,
    owner: "Data",
  },
]

const STATS = [
  { label: "Issues closed", value: "1,284", delta: "+18%" },
  { label: "Avg. cycle time", value: "2.4d", delta: "−32%" },
  { label: "Sprint scope hit", value: "94%", delta: "+7%" },
]

const THROUGHPUT = [
  [40, 22],
  [52, 18],
  [46, 30],
  [61, 20],
  [58, 26],
  [72, 15],
  [66, 24],
  [80, 12],
]

const RULES = [
  {
    when: "Issue created",
    if: "label is Bug",
    then: "Assign to on-call",
    enabled: true,
  },
  {
    when: "PR merged",
    if: "linked to an issue",
    then: "Move issue to Done",
    enabled: true,
  },
  {
    when: "Issue stale",
    if: "no activity for 14 days",
    then: "Ping the owner in Slack",
    enabled: false,
  },
]

function Window({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow">
      <div className="flex items-center gap-1.5 border-b-2 border-border bg-background px-4 py-2.5">
        <span className="size-3 rounded-full border-2 border-border bg-chart-2" />
        <span className="size-3 rounded-full border-2 border-border bg-chart-3" />
        <span className="size-3 rounded-full border-2 border-border bg-chart-4" />
        <span className="ml-2 text-xs font-heading">{title}</span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-8">{children}</div>
    </div>
  )
}

function Chip({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "rounded-base border-2 border-border px-2 py-1 text-xs font-heading transition-colors",
        className,
      )}
    >
      {children}
    </span>
  )
}

function RoadmapView() {
  const [selected, setSelected] = useState(ROADMAP[1].name)
  const item = ROADMAP.find((i) => i.name === selected)!

  return (
    <Window title="Roadmap · H1 2026">
      <div className="mb-6 grid grid-cols-[72px_repeat(6,minmax(0,1fr))] gap-y-3 sm:grid-cols-[140px_repeat(6,minmax(0,1fr))]">
        <span />
        {MONTHS.map((month) => (
          <span
            key={month}
            className="border-l-2 border-dashed border-border pl-1 text-[11px] font-heading sm:pl-2 sm:text-xs"
          >
            {month}
          </span>
        ))}
        {ROADMAP.map((row) => {
          const active = row.name === selected

          return (
            <div key={row.name} className="contents">
              <span className="col-start-1 self-center pr-2 text-xs leading-tight font-heading sm:truncate sm:pr-3 sm:text-sm">
                {row.name}
              </span>
              <button
                type="button"
                onClick={() => setSelected(row.name)}
                onPointerEnter={() => setSelected(row.name)}
                onFocus={() => setSelected(row.name)}
                aria-pressed={active}
                aria-label={`${row.name}: ${row.status}`}
                className={cn(
                  "relative h-9 overflow-hidden rounded-base border-2 border-border text-left transition-all",
                  row.color,
                  active
                    ? "-translate-x-0.5 -translate-y-0.5 shadow-[4px_4px_0_0_var(--border)]"
                    : "shadow-[2px_2px_0_0_var(--border)]",
                )}
                style={{
                  gridColumn: `${row.start + 2} / span ${row.span}`,
                }}
              >
                <span
                  className="absolute inset-y-0 left-0 border-r-2 border-border bg-[repeating-linear-gradient(45deg,transparent_0_6px,#00000026_6px_8px)]"
                  style={{
                    width: `${row.progress}%`,
                    borderRightWidth: row.progress % 100 === 0 ? 0 : 2,
                  }}
                />
              </button>
            </div>
          )
        })}
      </div>

      <div
        aria-live="polite"
        className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 rounded-base border-2 border-border bg-background px-4 py-3 text-sm font-base"
      >
        <span
          className={cn("size-4 rounded-sm border-2 border-border", item.color)}
        />
        <span className="font-heading">{item.name}</span>
        <Chip className="bg-secondary-background">{item.status}</Chip>
        <span>Owner: {item.owner}</span>
        <span className="flex items-center gap-2 sm:ml-auto">
          <span className="h-3 w-24 overflow-hidden rounded-full border-2 border-border bg-secondary-background">
            <span
              className="block h-full bg-foreground transition-[width] duration-500"
              style={{ width: `${item.progress}%` }}
            />
          </span>
          <span className="font-heading">{item.progress}%</span>
        </span>
      </div>
    </Window>
  )
}

function AnalyticsView() {
  const [week, setWeek] = useState(THROUGHPUT.length - 1)
  const [closed, opened] = THROUGHPUT[week]

  return (
    <Window title="Analytics · Last 8 weeks">
      <div className="grid gap-4 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-base border-2 border-border bg-background p-4"
          >
            <p className="text-xs font-base">{stat.label}</p>
            <div className="mt-1 flex items-baseline justify-between">
              <p className="font-heading text-3xl">{stat.value}</p>
              <Chip className="bg-chart-4">{stat.delta}</Chip>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-base">
        <div className="flex gap-5">
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-sm border-2 border-border bg-chart-1" />
            Closed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-sm border-2 border-border bg-chart-3" />
            Opened
          </span>
        </div>
        <p aria-live="polite" className="font-heading">
          Week {week + 1} · {closed} closed · {opened} opened
        </p>
      </div>

      <div className="mt-3 flex h-48 items-end gap-2 sm:gap-4 lg:h-auto lg:min-h-48 lg:flex-1">
        {THROUGHPUT.map(([c, o], i) => (
          <button
            key={i}
            type="button"
            onClick={() => setWeek(i)}
            onPointerEnter={() => setWeek(i)}
            onFocus={() => setWeek(i)}
            aria-pressed={week === i}
            aria-label={`Week ${i + 1}: ${c} closed, ${o} opened`}
            className={cn(
              "-mx-1 -mb-1.5 flex h-[calc(100%+0.375rem)] flex-1 flex-col justify-end rounded-base border-2 border-transparent px-1 pb-1 pt-1 transition-colors sm:-mx-1.5 sm:-mb-2 sm:h-[calc(100%+0.5rem)] sm:px-1.5 sm:pb-1.5",
              week === i && "border-dashed border-border bg-background",
            )}
          >
            <span
              className="block rounded-t-base border-2 border-b-0 border-border bg-chart-3 transition-[height] duration-500"
              style={{ height: `${o}%` }}
            />
            <span
              className="block border-2 border-border bg-chart-1 transition-[height] duration-500"
              style={{ height: `${c}%` }}
            />
          </button>
        ))}
      </div>
      <div className="mt-3.5 flex gap-2 text-center text-[11px] font-heading sm:gap-4">
        {THROUGHPUT.map((_, i) => (
          <span key={i} className="flex-1">
            W{i + 1}
          </span>
        ))}
      </div>
    </Window>
  )
}

function AutomationsView() {
  const [enabled, setEnabled] = useState(RULES.map((rule) => rule.enabled))
  const activeCount = enabled.filter(Boolean).length

  return (
    <Window title={`Automations · ${activeCount} of ${RULES.length} active`}>
      <div className="space-y-4">
        {RULES.map((rule, i) => {
          const on = enabled[i]

          return (
            <div
              key={rule.when}
              className={cn(
                "flex flex-col gap-4 rounded-base border-2 border-border p-4 transition-all sm:flex-row sm:items-center sm:justify-between",
                on
                  ? "bg-background shadow-[2px_2px_0_0_var(--border)]"
                  : "border-dashed bg-secondary-background",
              )}
            >
              <div className="flex flex-wrap items-center gap-2 text-sm font-base">
                <span className="font-heading">When</span>
                <Chip className={on ? "bg-chart-1" : "bg-background"}>
                  {rule.when}
                </Chip>
                <span className="font-heading">and</span>
                <Chip className={on ? "bg-chart-3" : "bg-background"}>
                  {rule.if}
                </Chip>
                <ArrowRight className="size-4" />
                <Chip className={on ? "bg-chart-4" : "bg-background"}>
                  {rule.then}
                </Chip>
              </div>
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <span className="w-8 text-right text-xs font-heading">
                  {on ? "On" : "Off"}
                </span>
                <Switch
                  checked={on}
                  onCheckedChange={(checked) =>
                    setEnabled((current) =>
                      current.map((value, j) => (j === i ? checked : value)),
                    )
                  }
                  aria-label={`Toggle rule: ${rule.when}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </Window>
  )
}

export default function ProductTabs() {
  const [tab, setTab] = useState<TabValue>("roadmap")
  // Tabs rotate on their own until someone picks one.
  const [autoplay, setAutoplay] = useState(true)
  const [inView, setInView] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const animationRef = useRef<Animation | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAutoplay(false)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    )
    if (rootRef.current) observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const bar = barRef.current
    if (!autoplay || !bar) return

    const animation = bar.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: AUTOPLAY_MS, fill: "both" },
    )
    animation.pause()
    animation.onfinish = () => {
      const index = TABS.findIndex((t) => t.value === tab)
      setTab(TABS[(index + 1) % TABS.length].value)
    }
    animationRef.current = animation

    return () => animation.cancel()
  }, [tab, autoplay])

  useEffect(() => {
    const animation = animationRef.current
    if (!animation || animation.playState === "finished") return
    if (inView) animation.play()
    else animation.pause()
  }, [tab, autoplay, inView])

  return (
    <section
      id="product"
      className={cn(
        "relative isolate scroll-mt-16 overflow-hidden border-b-4 border-border bg-secondary-background px-5 py-24",
        GRID_BACKGROUND,
      )}
    >
      <SectionStars
        stars={[
          {
            star: Star24,
            color: "var(--chart-4)",
            className:
              "-right-16 lg:-right-12 bottom-6 size-24 rotate-[35deg] lg:size-40",
          },
          {
            star: Star11,
            color: "var(--chart-5)",
            className:
              "-left-16 lg:-left-8 top-[18%] size-24 -rotate-6 lg:size-40",
          },
        ]}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Product"
          title="One workspace. Every view."
          description="Switch between roadmap, analytics and automations without losing context."
        />

        <Tabs
          className="lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:min-h-120 lg:items-stretch lg:gap-8"
          ref={rootRef}
          value={tab}
          onValueChange={(value) => {
            setTab(value as TabValue)
            setAutoplay(false)
          }}
        >
          <TabsList className="mb-8 grid h-auto w-full grid-cols-1 gap-3 sm:grid-cols-3 border-0 bg-transparent p-0 sm:gap-5 lg:mb-0 lg:h-full lg:grid-cols-1 lg:grid-rows-3">
            {TABS.map((t) => {
              const active = t.value === tab
              const Icon = t.icon

              return (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="relative h-full flex-col items-start justify-start gap-2 overflow-hidden whitespace-normal border-border bg-background p-2.5 pb-4 text-left shadow-shadow sm:gap-3 sm:p-5 sm:pb-6 lg:justify-center lg:gap-2 lg:p-4 lg:pb-5 not-data-active:hover:-translate-x-0.5 not-data-active:hover:-translate-y-0.5 not-data-active:hover:shadow-[6px_6px_0_0_var(--border)]"
                >
                  <span className="flex w-full min-w-0 flex-row items-center gap-3 sm:flex-col sm:items-start lg:flex-row lg:items-center">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-base border-2 border-border text-foreground sm:size-10 lg:size-9",
                        t.color,
                      )}
                    >
                      <Icon className="size-4 sm:size-5 lg:size-4" />
                    </span>
                    <span className="max-w-full hyphens-auto wrap-anywhere text-base sm:text-xl lg:text-lg">
                      {t.label}
                    </span>
                  </span>
                  <span className="hidden text-sm font-base sm:block">
                    {t.blurb}
                  </span>
                  {active && autoplay && (
                    <span className="absolute inset-x-0 bottom-0 h-2 border-t-2 border-border bg-secondary-background">
                      <span
                        ref={barRef}
                        className="block h-full origin-left bg-foreground"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </span>
                  )}
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent
            value="roadmap"
            className="mt-0 animate-in fade-in-0 slide-in-from-bottom-3 duration-300 lg:col-start-2 lg:h-full"
          >
            <RoadmapView />
          </TabsContent>
          <TabsContent
            value="analytics"
            className="mt-0 animate-in fade-in-0 slide-in-from-bottom-3 duration-300 lg:col-start-2 lg:h-full"
          >
            <AnalyticsView />
          </TabsContent>
          <TabsContent
            value="automations"
            className="mt-0 animate-in fade-in-0 slide-in-from-bottom-3 duration-300 lg:col-start-2 lg:h-full"
          >
            <AutomationsView />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
