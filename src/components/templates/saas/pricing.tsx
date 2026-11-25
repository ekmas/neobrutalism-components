"use client"

import { Check } from "lucide-react"

import { useState } from "react"

import Star6 from "@/components/stars/s6"
import Star15 from "@/components/stars/s15"
import Star16 from "@/components/stars/s16"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import { cn } from "@/lib/utils"

import { GRID_BACKGROUND, SectionStars, StarSticker } from "./decor-star"
import SectionHeading from "./section-heading"

const PLANS = [
  {
    name: "Starter",
    description: "For small teams getting organised.",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    features: [
      "Up to 10 members",
      "Unlimited issues",
      "2 active cycles",
      "GitHub & Slack integrations",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that ship every week.",
    monthly: 12,
    yearly: 10,
    cta: "Start 14-day trial",
    popular: true,
    features: [
      "Unlimited members",
      "AI triage agents",
      "Roadmaps & cycle analytics",
      "Automations (100 rules)",
      "Priority support",
    ],
  },
  {
    name: "Business",
    description: "For companies with security and scale needs.",
    monthly: 24,
    yearly: 19,
    cta: "Contact sales",
    features: [
      "Everything in Pro",
      "SAML SSO & SCIM",
      "Audit logs & data residency",
      "Unlimited automations",
      "Dedicated success manager",
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section
      id="pricing"
      className={cn(
        "relative isolate scroll-mt-16 overflow-hidden border-b-4 border-border bg-secondary-background px-5 py-24",
        GRID_BACKGROUND,
      )}
    >
      <SectionStars
        stars={[
          {
            star: Star15,
            color: "var(--chart-5)",
            className:
              "-left-16 lg:-left-10 bottom-8 size-24 -rotate-[15deg] lg:size-40",
          },
          {
            star: Star6,
            color: "var(--chart-4)",
            className: "-right-16 top-[35%] size-24 rotate-[22deg] lg:size-40",
          },
        ]}
      />
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Pricing that scales with you"
          description="Start free. Upgrade when your team does."
          className="mb-8"
        />

        <div className="mb-14 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-base border-2 border-border bg-background px-4 py-2 text-sm shadow-shadow">
            <span className={yearly ? "font-base" : "font-heading"}>
              Monthly
            </span>
            <Switch
              checked={yearly}
              onCheckedChange={(checked) => setYearly(checked)}
              aria-label="Bill yearly"
            />
            <span className={yearly ? "font-heading" : "font-base"}>
              Yearly
            </span>
            <Badge className="bg-chart-4 font-heading">Save 20%</Badge>
          </div>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
          {PLANS.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly

            return (
              <Card key={plan.name} className="relative">
                {plan.popular && (
                  <StarSticker
                    star={Star16}
                    color="var(--chart-4)"
                    className="-right-4 -top-10 text-xs"
                  >
                    Most
                    <br />
                    popular
                  </StarSticker>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-heading text-5xl">${price}</span>
                    <span className="text-sm font-base">/user/mo</span>
                  </div>
                  <p className="text-xs font-base">
                    {price === 0
                      ? "Free forever"
                      : yearly
                        ? `$${price * 12} billed yearly`
                        : "Billed monthly"}
                  </p>
                </CardHeader>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "neutral"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>

                <CardContent className="border-t-2 border-border pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm font-base"
                      >
                        <span
                          className={cn(
                            "flex size-5 shrink-0 items-center justify-center rounded-base border-2 border-border",
                            plan.popular
                              ? "bg-chart-3"
                              : "bg-secondary-background",
                          )}
                        >
                          <Check className="size-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
