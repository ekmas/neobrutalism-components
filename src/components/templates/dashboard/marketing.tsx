"use client"

import { Badge } from "@/components/ui/badge"
import type { ChartConfig } from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Columns, RankedBars, StackedArea } from "./charts"
import {
  CAMPAIGNS,
  formatCompactMoney,
  formatMoney,
  formatNumber,
  formatPercent,
  FUNNEL,
  sessionsOf,
  SOURCES,
  sum,
  total,
  type Day,
  type Period,
} from "./data"
import { ChartCard, StatCard, StatGrid } from "./shared"

const SOURCE_CONFIG = {
  organic: { label: "Organic", color: "var(--chart-1)" },
  paid: { label: "Paid", color: "var(--chart-3)" },
  social: { label: "Social", color: "var(--chart-2)" },
  email: { label: "Email", color: "var(--chart-4)" },
} satisfies ChartConfig

const CAMPAIGN_CONFIG = {
  spend: { label: "Spend", color: "var(--chart-2)" },
  revenue: { label: "Revenue", color: "var(--chart-4)" },
} satisfies ChartConfig

function campaignsIn(days: Day[]) {
  const online = total(days, (day) => day.revenue.online)
  return CAMPAIGNS.map((campaign) => ({
    name: campaign.name,
    channel: campaign.channel,
    spend: campaign.spend * days.length,
    revenue: Math.round(online * campaign.share),
  }))
}

const sessionsIn = (days: Day[]) => total(days, sessionsOf)
const ordersIn = (days: Day[]) => total(days, (day) => day.orders.online)
const conversionIn = (days: Day[]) => (ordersIn(days) / sessionsIn(days)) * 100
const attributedIn = (days: Day[]) =>
  sum(campaignsIn(days).map((campaign) => campaign.revenue))
const roasIn = (days: Day[]) =>
  attributedIn(days) / sum(campaignsIn(days).map((campaign) => campaign.spend))

export default function Marketing({ period }: { period: Period }) {
  const { days, previous, buckets, unit } = period
  const campaigns = campaignsIn(days)
  const stat = (measure: (days: Day[]) => number) => ({
    compare: { current: measure(days), previous: measure(previous) },
    trend: buckets.map((item) => measure(item.days)),
  })

  return (
    <>
      <StatGrid>
        <StatCard
          label="Sessions"
          value={formatNumber(sessionsIn(days))}
          {...stat(sessionsIn)}
        />
        <StatCard
          label="Conversion"
          value={formatPercent(conversionIn(days))}
          color="var(--chart-5)"
          {...stat(conversionIn)}
        />
        <StatCard
          label="Campaign revenue"
          value={formatMoney(attributedIn(days))}
          color="var(--chart-4)"
          {...stat(attributedIn)}
        />
        <StatCard
          label="Return on ad spend"
          value={`${roasIn(days).toFixed(2)}×`}
          color="var(--chart-3)"
          {...stat(roasIn)}
        />
      </StatGrid>

      <ChartCard
        title="Traffic sources"
        description={`Online store sessions per ${unit}`}
      >
        <StackedArea
          config={SOURCE_CONFIG}
          className="h-80"
          data={buckets.map((item) => ({
            label: item.label,
            ...Object.fromEntries(
              SOURCES.map((key) => [
                key,
                total(item.days, (day) => day.sessions[key]),
              ]),
            ),
          }))}
        />
      </ChartCard>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="Purchase funnel" description="Online store visitors">
          <RankedBars
            label="Visitors"
            color="var(--chart-5)"
            data={[
              ...FUNNEL.map((step) => ({
                label: step.label,
                value: Math.round(sessionsIn(days) * step.share),
              })),
              { label: "Ordered", value: ordersIn(days) },
            ]}
          />
        </ChartCard>
        <ChartCard title="Spend and revenue" description="By campaign">
          <Columns
            allLabels
            config={CAMPAIGN_CONFIG}
            format={formatMoney}
            axisFormat={formatCompactMoney}
            data={campaigns.map(({ name, spend, revenue }) => ({
              label: name,
              spend,
              revenue,
            }))}
          />
        </ChartCard>
      </div>

      <ChartCard title="Campaigns" description="Spend and attributed revenue">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead className="hidden sm:table-cell">Channel</TableHead>
              <TableHead className="text-right">Spend</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">ROAS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.name} className="bg-secondary-background">
                <TableCell className="py-3 font-heading">
                  {campaign.name}
                </TableCell>
                <TableCell className="hidden py-3 sm:table-cell">
                  <Badge variant="neutral">{campaign.channel}</Badge>
                </TableCell>
                <TableCell className="py-3 text-right tabular-nums">
                  {formatMoney(campaign.spend)}
                </TableCell>
                <TableCell className="py-3 text-right tabular-nums">
                  {formatMoney(campaign.revenue)}
                </TableCell>
                <TableCell className="py-3 text-right font-heading tabular-nums">
                  {(campaign.revenue / campaign.spend).toFixed(2)}×
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ChartCard>
    </>
  )
}
