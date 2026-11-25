"use client"

import { Button } from "@/components/ui/button"

import { Comparison, Donut, RankedBars } from "./charts"
import {
  CHANNELS,
  formatCompactMoney,
  formatMoney,
  formatNumber,
  formatPercent,
  ORDERS,
  ordersOf,
  PRODUCTS,
  revenueOf,
  sessionsOf,
  total,
  type Day,
  type Period,
} from "./data"
import { OrderTable } from "./order-table"
import { CHANNEL_CONFIG } from "./revenue"
import { ChartCard, StatCard, StatGrid } from "./shared"

const revenueIn = (days: Day[]) => total(days, revenueOf)
const ordersIn = (days: Day[]) => total(days, ordersOf)
const averageIn = (days: Day[]) => revenueIn(days) / ordersIn(days)
const conversionIn = (days: Day[]) =>
  (total(days, (day) => day.orders.online) / total(days, sessionsOf)) * 100

export default function Overview({ period }: { period: Period }) {
  const { days, previous, buckets, previousBuckets, unit } = period
  const stat = (measure: (days: Day[]) => number) => ({
    compare: { current: measure(days), previous: measure(previous) },
    trend: buckets.map((item) => measure(item.days)),
  })

  return (
    <>
      <StatGrid>
        <StatCard
          label="Revenue"
          value={formatMoney(revenueIn(days))}
          {...stat(revenueIn)}
        />
        <StatCard
          label="Orders"
          value={formatNumber(ordersIn(days))}
          color="var(--chart-3)"
          {...stat(ordersIn)}
        />
        <StatCard
          label="Average order"
          value={`$${averageIn(days).toFixed(2)}`}
          color="var(--chart-4)"
          {...stat(averageIn)}
        />
        <StatCard
          label="Online conversion"
          value={formatPercent(conversionIn(days))}
          color="var(--chart-5)"
          {...stat(conversionIn)}
        />
      </StatGrid>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard
          title="Revenue trend"
          description={`Per ${unit}, against the previous period`}
          className="xl:col-span-2"
        >
          <Comparison
            className="h-80"
            format={formatMoney}
            axisFormat={formatCompactMoney}
            data={buckets.map((item, i) => ({
              label: item.label,
              current: revenueIn(item.days),
              previous: revenueIn(previousBuckets[i].days),
            }))}
          />
        </ChartCard>
        <ChartCard title="Sales channels" description="Share of revenue">
          <Donut
            caption="revenue"
            format={formatMoney}
            data={CHANNELS.map((key) => ({
              key,
              ...CHANNEL_CONFIG[key],
              value: total(days, (day) => day.revenue[key]),
            }))}
          />
        </ChartCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard title="Top products" description="By revenue">
          <RankedBars
            label="Revenue"
            color="var(--chart-3)"
            format={formatMoney}
            data={PRODUCTS.slice(0, 6).map((product) => ({
              label: product.name,
              value: revenueIn(days) * product.share,
            }))}
          />
        </ChartCard>
        <ChartCard
          title="Recent orders"
          className="xl:col-span-2"
          action={
            <Button
              size="sm"
              variant="neutral"
              nativeButton={false}
              render={<a href="#orders" />}
            >
              View all
            </Button>
          }
        >
          <OrderTable orders={ORDERS.slice(0, 5)} />
        </ChartCard>
      </div>
    </>
  )
}
