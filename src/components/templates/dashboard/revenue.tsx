"use client"

import type { ChartConfig } from "@/components/ui/chart"

import { Columns, RankedBars, Trend } from "./charts"
import {
  CHANNELS,
  COUNTRIES,
  formatCompactMoney,
  formatMoney,
  formatPercent,
  ordersOf,
  revenueOf,
  total,
  type Day,
  type Period,
} from "./data"
import { ChartCard, StatCard, StatGrid } from "./shared"

export const CHANNEL_CONFIG = {
  online: { label: "Online store", color: "var(--chart-1)" },
  marketplace: { label: "Marketplace", color: "var(--chart-3)" },
  retail: { label: "Retail", color: "var(--chart-2)" },
} satisfies ChartConfig

const REFUND_CONFIG = {
  refunds: { label: "Refunds", color: "var(--chart-2)" },
} satisfies ChartConfig

const grossIn = (days: Day[]) => total(days, revenueOf)
const refundsIn = (days: Day[]) => total(days, (day) => day.refunds)
const netIn = (days: Day[]) => grossIn(days) - refundsIn(days)
const refundRateIn = (days: Day[]) => (refundsIn(days) / grossIn(days)) * 100

export default function Revenue({ period }: { period: Period }) {
  const { days, previous, buckets, unit } = period
  const stat = (measure: (days: Day[]) => number) => ({
    compare: { current: measure(days), previous: measure(previous) },
    trend: buckets.map((item) => measure(item.days)),
  })

  return (
    <>
      <StatGrid>
        <StatCard
          label="Gross revenue"
          value={formatMoney(grossIn(days))}
          {...stat(grossIn)}
        />
        <StatCard
          label="Net revenue"
          value={formatMoney(netIn(days))}
          color="var(--chart-4)"
          {...stat(netIn)}
        />
        <StatCard
          label="Refunds"
          value={formatMoney(refundsIn(days))}
          color="var(--chart-2)"
          invert
          {...stat(refundsIn)}
        />
        <StatCard
          label="Refund rate"
          value={formatPercent(refundRateIn(days))}
          color="var(--chart-3)"
          invert
          {...stat(refundRateIn)}
        />
      </StatGrid>

      <ChartCard
        title="Revenue by channel"
        description={`Gross revenue per ${unit}`}
      >
        <Columns
          stacked
          config={CHANNEL_CONFIG}
          format={formatMoney}
          axisFormat={formatCompactMoney}
          className="h-80"
          data={buckets.map((item) => ({
            label: item.label,
            ...Object.fromEntries(
              CHANNELS.map((key) => [
                key,
                total(item.days, (day) => day.revenue[key]),
              ]),
            ),
          }))}
        />
      </ChartCard>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <ChartCard title="Average order value" description={`Per ${unit}`}>
          <Trend
            label="Average order"
            color="var(--chart-4)"
            format={(value) => `$${value.toFixed(2)}`}
            axisFormat={formatCompactMoney}
            data={buckets.map((item) => ({
              label: item.label,
              value: grossIn(item.days) / total(item.days, ordersOf),
            }))}
          />
        </ChartCard>
        <ChartCard title="Refunds" description={`Amount per ${unit}`}>
          <Columns
            config={REFUND_CONFIG}
            format={formatMoney}
            axisFormat={formatCompactMoney}
            data={buckets.map((item) => ({
              label: item.label,
              refunds: refundsIn(item.days),
            }))}
          />
        </ChartCard>
        <ChartCard
          title="Revenue by country"
          description="Where orders ship to"
          className="lg:col-span-2 xl:col-span-1"
        >
          <RankedBars
            label="Revenue"
            color="var(--chart-5)"
            format={formatMoney}
            data={COUNTRIES.map((country) => ({
              label: country.name,
              value: grossIn(days) * country.share,
            }))}
          />
        </ChartCard>
      </div>
    </>
  )
}
