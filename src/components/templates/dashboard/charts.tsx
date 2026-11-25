"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts"

import { useLayoutEffect, useRef, useState, type ComponentProps } from "react"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

import { cn } from "@/lib/utils"

import { formatCompact, formatNumber, sum } from "./data"

type Row = Record<string, string | number>
type Format = (value: number) => string

type SeriesProps = {
  data: Row[]
  config: ChartConfig
  format?: Format
  axisFormat?: Format
  className?: string
}

const AXIS = {
  tickLine: false,
  axisLine: false,
  tickMargin: 8,
  tick: { fill: "var(--foreground)" },
}
const MARGIN = { top: 8, right: 8, left: 0 }
const BAR_CURSOR = { fill: "#80808033" }
const ACTIVE_DOT = { fill: "var(--chart-active-dot)" }

// Recharts skips these for people who prefer reduced motion.
export const ANIMATION = { animationBegin: 0, animationDuration: 700 }

// Measures its box before drawing, so a chart starts at its final size and
// animates in instead of jumping there from a placeholder size.
export function Chart({
  config,
  children,
  ...props
}: ComponentProps<typeof ChartContainer>) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ width: number; height: number }>()

  useLayoutEffect(() => {
    if (!ref.current) return
    const { width, height } = ref.current.getBoundingClientRect()
    setSize({ width, height })
  }, [])

  if (!size) return <div ref={ref} {...props} />

  return (
    <ChartContainer config={config} initialDimension={size} {...props}>
      {children}
    </ChartContainer>
  )
}

const chartClass = (className?: string) =>
  cn("aspect-auto h-72 w-full", className)

// Tooltip rows with formatted values.
function tooltipRow(config: ChartConfig, format: Format) {
  return function TooltipRow(
    value: unknown,
    name: unknown,
    item: { color?: string; payload?: { fill?: string } },
  ) {
    return (
      <div className="flex w-full items-center gap-2">
        <span
          className="size-3 shrink-0 rounded-[2px] border border-border"
          style={{ background: item.payload?.fill ?? item.color }}
        />
        <span>{config[String(name)]?.label ?? String(name)}</span>
        <span className="ml-auto pl-3 font-heading tabular-nums">
          {format(Number(value))}
        </span>
      </div>
    )
  }
}

// One stacked layer per config entry, in config order.
export function StackedArea({
  data,
  config,
  format = formatNumber,
  axisFormat = formatCompact,
  className,
}: SeriesProps) {
  return (
    <Chart config={config} className={chartClass(className)}>
      <AreaChart data={data} margin={MARGIN}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" minTickGap={32} {...AXIS} />
        <YAxis width={52} tickFormatter={axisFormat} {...AXIS} />
        <ChartTooltip
          content={
            <ChartTooltipContent formatter={tooltipRow(config, format)} />
          }
        />
        <ChartLegend itemSorter={null} content={<ChartLegendContent />} />
        {Object.keys(config).map((key) => (
          <Area
            key={key}
            dataKey={key}
            type="linear"
            stackId="a"
            {...ANIMATION}
            fill={`var(--color-${key})`}
            stroke={`var(--color-${key})`}
            activeDot={ACTIVE_DOT}
          />
        ))}
      </AreaChart>
    </Chart>
  )
}

const COMPARISON_CONFIG = {
  current: { label: "This period", color: "var(--chart-1)" },
  previous: { label: "Previous period", color: "var(--chart-3)" },
} satisfies ChartConfig

// Filled current period with the previous one as a dashed line. Rows need
// `label`, `current` and `previous`.
export function Comparison({
  data,
  format = formatNumber,
  axisFormat = formatCompact,
  className,
}: Omit<SeriesProps, "config">) {
  return (
    <Chart config={COMPARISON_CONFIG} className={chartClass(className)}>
      <ComposedChart data={data} margin={MARGIN}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" minTickGap={32} {...AXIS} />
        <YAxis width={52} tickFormatter={axisFormat} {...AXIS} />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={tooltipRow(COMPARISON_CONFIG, format)}
            />
          }
        />
        <ChartLegend itemSorter={null} content={<ChartLegendContent />} />
        <Area
          dataKey="current"
          type="linear"
          {...ANIMATION}
          fill="var(--color-current)"
          stroke="var(--color-current)"
          activeDot={ACTIVE_DOT}
        />
        <Line
          dataKey="previous"
          type="linear"
          stroke="var(--color-previous)"
          strokeDasharray="6 4"
          {...ANIMATION}
          dot={{
            r: 4,
            fill: "var(--color-previous)",
            stroke: "var(--border)",
            strokeDasharray: "0",
          }}
        />
      </ComposedChart>
    </Chart>
  )
}

// A single line with a dot per point. The axis fits the data instead of
// starting at zero.
export function Trend({
  data,
  label,
  color,
  format = formatNumber,
  axisFormat = formatCompact,
  className,
}: {
  data: { label: string; value: number }[]
  label: string
  color: string
  format?: Format
  axisFormat?: Format
  className?: string
}) {
  const config = { value: { label, color } } satisfies ChartConfig
  return (
    <Chart config={config} className={chartClass(className)}>
      <LineChart data={data} margin={MARGIN}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" minTickGap={32} {...AXIS} />
        <YAxis
          width={52}
          domain={[
            (min: number) => Math.floor(min) - 1,
            (max: number) => Math.ceil(max) + 1,
          ]}
          allowDecimals={false}
          tickFormatter={axisFormat}
          {...AXIS}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent formatter={tooltipRow(config, format)} />
          }
        />
        <Line
          dataKey="value"
          type="linear"
          stroke="var(--color-value)"
          {...ANIMATION}
          dot={{ r: 5, fill: "var(--color-value)", stroke: "var(--border)" }}
          activeDot={{ ...ACTIVE_DOT, r: 6 }}
        />
      </LineChart>
    </Chart>
  )
}

export function Columns({
  data,
  config,
  format = formatNumber,
  axisFormat = formatCompact,
  stacked = false,
  allLabels = false,
  className,
}: SeriesProps & { stacked?: boolean; allLabels?: boolean }) {
  const keys = Object.keys(config)
  const chart = (
    <Chart
      config={config}
      className={chartClass(className)}
      style={allLabels ? { minWidth: data.length * 84 } : undefined}
    >
      <BarChart data={data} margin={MARGIN}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          minTickGap={12}
          interval={allLabels ? 0 : "preserveEnd"}
          {...AXIS}
        />
        <YAxis width={52} tickFormatter={axisFormat} {...AXIS} />
        <ChartTooltip
          cursor={BAR_CURSOR}
          content={
            <ChartTooltipContent formatter={tooltipRow(config, format)} />
          }
        />
        {keys.length > 1 && (
          <ChartLegend itemSorter={null} content={<ChartLegendContent />} />
        )}
        {keys.map((key, i) => (
          <Bar
            key={key}
            dataKey={key}
            stackId={stacked ? "a" : undefined}
            fill={`var(--color-${key})`}
            {...ANIMATION}
            maxBarSize={48}
            radius={!stacked || i === keys.length - 1 ? [4, 4, 0, 0] : 0}
          />
        ))}
      </BarChart>
    </Chart>
  )

  // Every label is kept, so narrow screens scroll instead.
  return allLabels ? <div className="overflow-x-auto">{chart}</div> : chart
}

// Horizontal bars with the value printed at the end of each one.
export function RankedBars({
  data,
  label,
  color,
  format = formatNumber,
  className,
}: {
  data: { label: string; value: number }[]
  label: string
  color: string
  format?: Format
  className?: string
}) {
  const config = { value: { label, color } } satisfies ChartConfig
  return (
    <Chart config={config} className={chartClass(className)}>
      <BarChart data={data} layout="vertical" margin={{ right: 64, left: 0 }}>
        <XAxis type="number" hide domain={[0, "dataMax"]} />
        <YAxis
          type="category"
          dataKey="label"
          width={100}
          interval={0}
          {...AXIS}
        />
        <ChartTooltip
          cursor={BAR_CURSOR}
          content={
            <ChartTooltipContent formatter={tooltipRow(config, format)} />
          }
        />
        <Bar
          dataKey="value"
          fill="var(--color-value)"
          {...ANIMATION}
          radius={[0, 4, 4, 0]}
          maxBarSize={28}
        >
          <LabelList
            dataKey="value"
            position="right"
            offset={8}
            fill="var(--foreground)"
            className="font-heading"
            formatter={(value: unknown) => format(Number(value))}
          />
        </Bar>
      </BarChart>
    </Chart>
  )
}

// Donut with its total in the middle and a legend that lists every value.
export function Donut({
  data,
  caption,
  format = formatNumber,
}: {
  data: { key: string; label: string; value: number; color: string }[]
  caption: string
  format?: Format
}) {
  const all = sum(data.map((item) => item.value))
  const config: ChartConfig = Object.fromEntries(
    data.map((item) => [item.key, { label: item.label, color: item.color }]),
  )
  return (
    <div>
      <div className="relative mx-auto h-52 max-w-52">
        {/* Behind the tooltip, which is part of the chart. */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading text-xl tabular-nums">
            {format(all)}
          </span>
          <span className="text-xs">{caption}</span>
        </div>
        <Chart config={config} className="relative aspect-auto size-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={tooltipRow(config, format)}
                />
              }
            />
            <Pie
              data={data.map((item) => ({ ...item, fill: item.color }))}
              dataKey="value"
              nameKey="key"
              {...ANIMATION}
              innerRadius={62}
              outerRadius={98}
            />
          </PieChart>
        </Chart>
      </div>
      <ul className="mt-5 space-y-2 text-sm">
        {data.map((item) => (
          <li key={item.key} className="flex items-center gap-2">
            <span
              className="size-3.5 shrink-0 rounded-[2px] border-2 border-border"
              style={{ background: item.color }}
            />
            {item.label}
            <span className="ml-auto tabular-nums">{format(item.value)}</span>
            <span className="w-10 text-right font-heading tabular-nums">
              {Math.round((item.value / all) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
