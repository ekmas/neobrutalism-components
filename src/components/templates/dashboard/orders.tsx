"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import type { ChartConfig } from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Columns, Donut } from "./charts"
import {
  DISPATCH,
  formatNumber,
  getOrderHeatmap,
  HOURS,
  ORDERS,
  ordersOf,
  split,
  STATUS_COLORS,
  STATUS_SHARE,
  STATUSES,
  total,
  type Channel,
  type Day,
  type Period,
} from "./data"
import { OrderTable } from "./order-table"
import { ChartCard, Heatmap, StatCard, StatGrid } from "./shared"

const VOLUME_CONFIG = {
  orders: { label: "Orders", color: "var(--chart-1)" },
} satisfies ChartConfig

const DISPATCH_CONFIG = {
  orders: { label: "Orders", color: "var(--chart-5)" },
} satisfies ChartConfig

const STATUS_FILTERS = [
  { value: "All", label: "All statuses" },
  ...STATUSES.map((status) => ({ value: status, label: status })),
]

const PAGE_SIZE = 8

function LatestOrders() {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("All")
  const [page, setPage] = useState(0)

  const needle = query.trim().toLowerCase()
  const matching = ORDERS.filter(
    (order) =>
      (status === "All" || order.status === status) &&
      [order.id, order.customer, order.product].some((text) =>
        text.toLowerCase().includes(needle),
      ),
  )
  const pages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE))
  const visible = matching.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  return (
    <ChartCard
      title="Latest orders"
      description={`The ${ORDERS.length} most recent orders`}
    >
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <Input
          aria-label="Search orders"
          placeholder="Search orders"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setPage(0)
          }}
          className="sm:max-w-xs"
        />
        <Select
          items={STATUS_FILTERS}
          value={status}
          onValueChange={(value) => {
            setStatus(value ?? "All")
            setPage(0)
          }}
        >
          <SelectTrigger aria-label="Filter by status" className="sm:w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {STATUS_FILTERS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {visible.length > 0 ? (
        <OrderTable orders={visible} />
      ) : (
        <p className="rounded-base border-2 border-border p-8 text-center text-sm">
          No orders match these filters.
        </p>
      )}
      <div className="mt-4 flex items-center justify-between text-sm">
        <p aria-live="polite">
          {matching.length} {matching.length === 1 ? "order" : "orders"}, page{" "}
          {page + 1} of {pages}
        </p>
        <div className="flex gap-3">
          <Button
            size="icon-sm"
            variant="neutral"
            aria-label="Previous page"
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            size="icon-sm"
            variant="neutral"
            aria-label="Next page"
            disabled={page + 1 >= pages}
            onClick={() => setPage(page + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </ChartCard>
  )
}

export default function Orders({ period }: { period: Period }) {
  const { days, previous, buckets, unit } = period
  const orders = total(days, ordersOf)
  const byStatus = split(
    orders,
    STATUSES.map((status) => STATUS_SHARE[status]),
  )
  const byDispatch = split(
    orders,
    DISPATCH.map((item) => item.share),
  )
  const heatmap = getOrderHeatmap(days)

  const stat = (pick: (day: Day) => number) => ({
    value: formatNumber(total(days, pick)),
    compare: { current: total(days, pick), previous: total(previous, pick) },
    trend: buckets.map((item) => total(item.days, pick)),
  })
  const channel = (key: Channel) => stat((day) => day.orders[key])

  return (
    <>
      <StatGrid>
        <StatCard
          label="All orders"
          color="var(--chart-4)"
          {...stat(ordersOf)}
        />
        <StatCard label="Online store" {...channel("online")} />
        <StatCard
          label="Marketplace"
          color="var(--chart-3)"
          {...channel("marketplace")}
        />
        <StatCard
          label="Retail"
          color="var(--chart-2)"
          {...channel("retail")}
        />
      </StatGrid>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard
          title="Order volume"
          description={`Orders per ${unit}`}
          className="xl:col-span-2"
        >
          <Columns
            config={VOLUME_CONFIG}
            className="h-80"
            data={buckets.map((item) => ({
              label: item.label,
              orders: total(item.days, ordersOf),
            }))}
          />
        </ChartCard>
        <ChartCard title="Order status" description="Orders in this period">
          <Donut
            caption="orders"
            data={STATUSES.map((status, i) => ({
              key: status,
              label: status,
              color: STATUS_COLORS[status],
              value: byStatus[i],
            }))}
          />
        </ChartCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <ChartCard
          title="When people buy"
          description="Orders by weekday and time of day"
          className="xl:col-span-2"
        >
          <Heatmap
            corner="Day"
            columns={HOURS.map((hour) => `${String(hour).padStart(2, "0")}h`)}
            rows={heatmap.map((row) => ({
              label: row.weekday,
              values: row.values,
            }))}
            max={Math.max(...heatmap.flatMap((row) => row.values))}
          />
        </ChartCard>
        <ChartCard title="Time to dispatch" description="Payment to pickup">
          <Columns
            config={DISPATCH_CONFIG}
            data={DISPATCH.map((item, i) => ({
              label: item.label,
              orders: byDispatch[i],
            }))}
          />
        </ChartCard>
      </div>

      <LatestOrders />
    </>
  )
}
