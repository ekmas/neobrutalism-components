"use client"

import { Check, CreditCard, Download } from "lucide-react"

import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress, ProgressLabel } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  CARD,
  downloadCsv,
  formatMoney,
  formatNumber,
  getPeriod,
  INVOICES,
  NEXT_INVOICE,
  ordersOf,
  PLANS,
  PRODUCTS,
  SEATS_USED,
  total,
  USER,
} from "./data"
import { ChartCard } from "./shared"

const ORDERS_USED = total(getPeriod(28).days, ordersOf)

export default function Billing() {
  const [planName, setPlanName] = useState("Growth")
  const plan = PLANS.find((item) => item.name === planName) ?? PLANS[0]
  const usage = [
    { label: "Orders, last 4 weeks", used: ORDERS_USED, limit: plan.orders },
    { label: "Products", used: PRODUCTS.length, limit: plan.products },
    { label: "Team seats", used: SEATS_USED, limit: plan.seats },
  ]

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {PLANS.map((item) => {
          const current = item.name === plan.name
          return (
            <ChartCard
              key={item.name}
              title={item.name}
              description={item.description}
              action={current && <Badge className="bg-chart-3">Current</Badge>}
            >
              <p className="text-sm">
                <span className="font-heading text-3xl tabular-nums">
                  {formatMoney(item.price)}
                </span>{" "}
                per month
              </p>
              <ul className="my-5 flex flex-1 flex-col gap-2 text-sm">
                {[
                  `${formatNumber(item.orders)} orders per month`,
                  `${formatNumber(item.products)} products`,
                  `${item.seats} team seats`,
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={current ? "neutral" : "default"}
                className="disabled:opacity-100 disabled:shadow-none data-disabled:opacity-100 data-disabled:shadow-none"
                disabled={current}
                onClick={() => setPlanName(item.name)}
              >
                {current ? "Your plan" : `Switch to ${item.name}`}
              </Button>
            </ChartCard>
          )
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard
          title="Usage"
          description={`Against your ${plan.name} limits`}
          className="xl:col-span-2"
        >
          <div className="flex flex-col gap-5">
            {usage.map((item) => (
              <Progress
                key={item.label}
                value={Math.min(100, (item.used / item.limit) * 100)}
                className={
                  item.used > item.limit * 0.9
                    ? "**:data-[slot=progress-indicator]:bg-chart-2"
                    : "**:data-[slot=progress-indicator]:bg-chart-4"
                }
              >
                <ProgressLabel>{item.label}</ProgressLabel>
                <span className="ml-auto text-sm tabular-nums">
                  {formatNumber(item.used)} of {formatNumber(item.limit)}
                </span>
              </Progress>
            ))}
          </div>
        </ChartCard>
        <ChartCard title="Payment method" description="Charged every month">
          <div className="flex min-h-36 flex-1 flex-col justify-between rounded-base border-2 border-border bg-chart-3 p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-heading">{USER.store}</span>
              <CreditCard className="size-6 shrink-0" />
            </div>
            <p className="font-heading text-lg tracking-wider whitespace-nowrap tabular-nums">
              <span aria-hidden>**** **** **** </span>
              <span className="sr-only">Card ending in </span>
              {CARD.last4}
            </p>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span>{USER.name}</span>
              <span className="tabular-nums">Expires {CARD.expires}</span>
            </div>
          </div>
          <p
            className="mt-4 flex items-center justify-between gap-4 text-sm"
            aria-live="polite"
          >
            <span>Next invoice on {NEXT_INVOICE}</span>
            <span className="font-heading tabular-nums">
              {formatMoney(plan.price)}
            </span>
          </p>
        </ChartCard>
      </div>

      <ChartCard title="Invoices" description="Your past payments">
        <Table className="max-sm:[&_td]:px-2 max-sm:[&_th]:px-2">
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden sm:table-cell">Plan</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="w-12 sm:w-16">
                <span className="sr-only">Download</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {INVOICES.map((invoice) => (
              <TableRow key={invoice.id} className="bg-secondary-background">
                <TableCell className="py-3 font-heading whitespace-nowrap">
                  {invoice.id}
                </TableCell>
                <TableCell className="py-3 whitespace-nowrap">
                  {invoice.date}
                </TableCell>
                <TableCell className="hidden py-3 sm:table-cell">
                  {invoice.plan}
                </TableCell>
                <TableCell className="hidden py-3 sm:table-cell">
                  <Badge className="bg-chart-4">Paid</Badge>
                </TableCell>
                <TableCell className="py-3 text-right font-heading tabular-nums">
                  {formatMoney(invoice.total)}
                </TableCell>
                <TableCell className="py-3">
                  <Button
                    size="icon-xs"
                    variant="noShadow"
                    aria-label={`Download ${invoice.id}`}
                    onClick={() =>
                      downloadCsv(`${invoice.id}.csv`, [
                        ["invoice", "date", "plan", "total"],
                        [
                          invoice.id,
                          `"${invoice.date}"`,
                          invoice.plan,
                          invoice.total,
                        ],
                      ])
                    }
                  >
                    <Download />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ChartCard>
    </>
  )
}
