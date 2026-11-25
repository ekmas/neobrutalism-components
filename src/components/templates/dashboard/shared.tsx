"use client"

import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Area, AreaChart, YAxis } from "recharts"

import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"

import { cn } from "@/lib/utils"

import { ANIMATION, Chart } from "./charts"
import { STATUS_COLORS, type Status } from "./data"

const SPARK_CONFIG = { value: { label: "Value" } } satisfies ChartConfig

// Change against the previous period. `invert` is for figures where lower is
// better, such as refunds.
function Delta({
  current,
  previous,
  invert = false,
}: {
  current: number
  previous: number
  invert?: boolean
}) {
  const change = previous === 0 ? 0 : ((current - previous) / previous) * 100
  const up = change >= 0

  return (
    <Badge className={up !== invert ? "bg-chart-4" : "bg-chart-2"}>
      {up ? <ArrowUpRight /> : <ArrowDownRight />}
      {up ? "+" : "−"}
      {Math.abs(change).toFixed(1)}%
    </Badge>
  )
}

export function StatGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {children}
    </div>
  )
}

// `compare` adds the change badge and `trend` the sparkline.
export function StatCard({
  label,
  value,
  compare,
  invert,
  trend,
  color = "var(--chart-1)",
}: {
  label: string
  value: string
  compare?: { current: number; previous: number }
  invert?: boolean
  trend?: number[]
  color?: string
}) {
  return (
    <Card size="sm" className="min-w-0 bg-secondary-background">
      <CardContent className="flex flex-col gap-2">
        <div className="flex min-h-6 items-center justify-between gap-2">
          <p className="text-sm">{label}</p>
          {compare && <Delta {...compare} invert={invert} />}
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="font-heading text-3xl tabular-nums">{value}</p>
          {trend && (
            <Chart
              aria-hidden
              config={SPARK_CONFIG}
              className="pointer-events-none aspect-auto h-10 w-20 shrink-0"
            >
              <AreaChart
                data={trend.map((item) => ({ value: item }))}
                margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
                accessibilityLayer={false}
              >
                <YAxis hide domain={["dataMin", "dataMax"]} />
                <Area
                  dataKey="value"
                  type="linear"
                  fill={color}
                  {...ANIMATION}
                />
              </AreaChart>
            </Chart>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function ChartCard({
  title,
  description,
  action,
  className,
  children,
}: {
  title: string
  description?: string
  action?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <Card className={cn("min-w-0 bg-secondary-background", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      <CardContent className="flex min-w-0 flex-1 flex-col justify-center">
        {children}
      </CardContent>
    </Card>
  )
}

export function StatusBadge({ status }: { status: Status }) {
  return <Badge style={{ background: STATUS_COLORS[status] }}>{status}</Badge>
}

// Grid of values shaded on a single-hue scale. Missing cells stay blank.
export function Heatmap({
  corner,
  columns,
  rows,
  max,
  suffix = "",
}: {
  corner: string
  columns: string[]
  rows: { label: string; values: number[] }[]
  max: number
  suffix?: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-120 border-separate border-spacing-1 text-center text-xs tabular-nums">
        <thead>
          <tr>
            <th scope="col" className="pb-1 text-left font-base">
              {corner}
            </th>
            {columns.map((column) => (
              <th key={column} scope="col" className="pb-1 font-base">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="pr-2 text-left font-heading">
                {row.label}
              </th>
              {columns.map((column, i) => {
                const value = row.values[i]
                if (value === undefined) return <td key={column} />
                return (
                  <td
                    key={column}
                    title={`${row.label}, ${column}: ${value}${suffix}`}
                    className="h-9 rounded-base border-2 border-border"
                    style={{
                      background: `color-mix(in oklab, var(--chart-4) ${Math.round((value / max) * 100)}%, var(--secondary-background))`,
                    }}
                  >
                    {value}
                    {suffix}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
