import {
  CreditCard,
  GitBranch,
  KeyRound,
  Mail,
  MessageSquare,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Webhook,
  Zap,
} from "lucide-react"

import Star19 from "@/components/stars/s19"
import Star25 from "@/components/stars/s25"
import Star35 from "@/components/stars/s35"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

import { cn } from "@/lib/utils"

import DecorStar, { SectionStars } from "./decor-star"
import SectionHeading from "./section-heading"

const ISSUES = [
  {
    title: "Checkout fails on Safari 17",
    label: "Bug · P1",
    priority: "bg-chart-2",
    owner: "SC",
  },
  {
    title: "Add CSV export to reports",
    label: "Feature",
    priority: "bg-chart-3",
    owner: "JM",
  },
  {
    title: "Duplicate of PLN-88",
    label: "Duplicate",
    priority: "bg-secondary-background",
    owner: "AR",
  },
  {
    title: "Webhook retries time out",
    label: "Bug · P2",
    priority: "bg-chart-3",
    owner: "TB",
  },
]

const TRIAGE_STATS = [
  { value: "24", label: "triaged today" },
  { value: "6", label: "duplicates closed" },
  { value: "0", label: "left in inbox" },
]

const SHORTCUTS = [
  { keys: ["⌘", "K"], label: "Command menu" },
  { keys: ["C"], label: "Create issue" },
  { keys: ["G", "I"], label: "Go to inbox" },
]

const INTEGRATIONS = [
  { name: "GitHub", icon: GitBranch, color: "bg-chart-5" },
  { name: "Slack", icon: MessageSquare, color: "bg-chart-4" },
  { name: "Stripe", icon: CreditCard, color: "bg-chart-1" },
  { name: "Email", icon: Mail, color: "bg-chart-3" },
  { name: "Zapier", icon: Zap, color: "bg-chart-2" },
  { name: "Webhooks", icon: Webhook, color: "bg-chart-4" },
]

const SECURITY = [
  { label: "SOC 2 Type II", icon: ShieldCheck },
  { label: "SAML SSO & SCIM", icon: KeyRound },
  { label: "Audit logs", icon: ScrollText },
]

const BARS = [62, 48, 70, 41, 55, 36, 44, 30, 38, 26]

function Cell({
  title,
  description,
  className,
  decoration,
  children,
}: {
  title: string
  description: string
  className?: string
  decoration?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-base border-2 border-border bg-secondary-background shadow-shadow",
        className,
      )}
    >
      {decoration}
      <div className="relative p-6 pb-0">
        <h3 className="font-heading text-xl">{title}</h3>
        <p className="mt-2 text-sm font-base">{description}</p>
      </div>
      <div className="relative flex flex-1 items-end p-6">{children}</div>
    </div>
  )
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative isolate scroll-mt-16 overflow-hidden border-b-4 border-border bg-background px-5 py-24"
    >
      <SectionStars
        stars={[
          {
            star: Star35,
            color: "var(--chart-2)",
            className: "-left-16 top-[62%] size-24 rotate-[10deg] lg:size-40",
          },
          {
            star: Star19,
            color: "var(--chart-3)",
            className:
              "-right-16 lg:-right-10 top-10 size-24 -rotate-[25deg] lg:size-40",
          },
        ]}
      />
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything your team needs. Nothing it doesn&apos;t.</>}
          description="From triage to release, Planly covers the whole loop."
        />

        <div className="grid gap-5 md:grid-cols-6">
          <Cell
            title="AI triage that actually helps"
            description="Agents label, prioritise, dedupe and assign every incoming issue, so your inbox stays at zero."
            className="md:col-span-6 lg:col-span-4 lg:row-span-2"
            decoration={
              <DecorStar
                star={Star25}
                color="var(--chart-5)"
                className="absolute -right-12 -top-12 hidden size-40 rotate-12 sm:block lg:hidden xl:block"
              />
            }
          >
            <div className="w-full space-y-3">
              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {TRIAGE_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-base border-2 border-border bg-chart-3 p-2 shadow-shadow min-[375px]:p-3"
                  >
                    <p className="font-heading text-2xl sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="hyphens-auto text-xs font-base wrap-anywhere">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              {ISSUES.map((issue) => (
                <div
                  key={issue.title}
                  className="flex items-center gap-3 rounded-base border-2 border-border bg-background p-3"
                >
                  <span
                    className={cn(
                      "size-3 shrink-0 rounded-full border-2 border-border",
                      issue.priority,
                    )}
                  />
                  <p className="flex-1 truncate text-sm font-heading">
                    {issue.title}
                  </p>
                  <span className="hidden items-center gap-1 rounded-base border-2 border-border bg-chart-3 px-1.5 text-[11px] font-heading sm:inline-flex">
                    <Sparkles className="size-3" />
                    {issue.label}
                  </span>
                  <Avatar size="sm" className="size-7">
                    <AvatarFallback className="text-[10px] font-heading">
                      {issue.owner}
                    </AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          </Cell>

          <Cell
            title="Keyboard first"
            description="Every action is one shortcut away."
            className="md:col-span-3 lg:col-span-2"
          >
            <div className="w-full space-y-2.5">
              {SHORTCUTS.map((shortcut) => (
                <div
                  key={shortcut.label}
                  className="flex items-center justify-between rounded-base border-2 border-border bg-background px-3 py-2 text-sm font-base"
                >
                  {shortcut.label}
                  <KbdGroup>
                    {shortcut.keys.map((key) => (
                      <Kbd key={key}>{key}</Kbd>
                    ))}
                  </KbdGroup>
                </div>
              ))}
            </div>
          </Cell>

          <Cell
            title="Cycle analytics"
            description="See where work gets stuck before it slips."
            className="md:col-span-3 lg:col-span-2"
          >
            <div className="w-full">
              <p className="font-heading text-4xl">−32%</p>
              <p className="text-xs font-base">
                median cycle time, last 10 sprints
              </p>
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {BARS.map((height, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 rounded-t-sm border-2 border-border",
                      i === BARS.length - 1 ? "bg-chart-4" : "bg-chart-1",
                    )}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </Cell>

          <Cell
            title="Plays well with your stack"
            description="Two-way sync with the tools you already use, plus an open API."
            className="md:col-span-3"
          >
            <div className="grid w-full grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {INTEGRATIONS.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-base border-2 border-border bg-background p-2.5 text-sm font-heading"
                >
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-base border-2 border-border",
                      color,
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </Cell>

          <Cell
            title="Enterprise-grade security"
            description="Your data is encrypted at rest and in transit, with controls your security team will love."
            className="bg-chart-3 md:col-span-3"
          >
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <ul className="space-y-2">
                {SECURITY.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-sm font-heading"
                  >
                    <Icon className="size-4" /> {label}
                  </li>
                ))}
              </ul>
              <div className="rounded-base border-2 border-border bg-secondary-background px-4 py-3 shadow-shadow">
                <p className="font-heading text-3xl">99.99%</p>
                <p className="text-xs font-base">uptime SLA</p>
              </div>
            </div>
          </Cell>
        </div>
      </div>
    </section>
  )
}
