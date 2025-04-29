import { ChartExample, charts } from "@/data/charts"

import { Pre } from "@/components/app/pre"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Examples() {
  return (
    <div>
      <div className="grid flex-1 gap-12">
        <h2 className="sr-only">Examples</h2>
        <div
          id="examples"
          className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartAreaStacked"),
            charts.find((chart) => chart.name === "ChartBarMultiple"),
            charts.find((chart) => chart.name === "ChartPieDonutText"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
        </div>
        <div
          id="area-chart"
          className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartAreaDefault"),
            charts.find((chart) => chart.name === "ChartAreaLinear"),
            charts.find((chart) => chart.name === "ChartAreaStep"),
            charts.find((chart) => chart.name === "ChartAreaStackedExpand"),
            charts.find((chart) => chart.name === "ChartAreaLegend"),
            charts.find((chart) => chart.name === "ChartAreaIcons"),
            charts.find((chart) => chart.name === "ChartAreaAxes"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
          <div className="md:col-span-2 lg:col-span-3">
            {(() => {
              const chart = charts.find(
                (chart) => chart.name === "ChartAreaInteractive",
              )
              if (!chart) return null
              return (
                <ChartComponent chart={chart} key={chart.name}>
                  <chart.component />
                </ChartComponent>
              )
            })()}
          </div>
        </div>
        <div
          id="bar-chart"
          className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartBarDefault"),
            charts.find((chart) => chart.name === "ChartBarHorizontal"),
            charts.find((chart) => chart.name === "ChartBarMultiple"),
            charts.find((chart) => chart.name === "ChartBarLabel"),
            charts.find((chart) => chart.name === "ChartBarLabelCustom"),
            charts.find((chart) => chart.name === "ChartBarMixed"),
            charts.find((chart) => chart.name === "ChartBarStacked"),
            charts.find((chart) => chart.name === "ChartBarActive"),
            charts.find((chart) => chart.name === "ChartBarNegative"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
          <div className="md:col-span-2 lg:col-span-3">
            {(() => {
              const chart = charts.find(
                (chart) => chart.name === "ChartBarInteractive",
              )
              if (!chart) return null
              return (
                <ChartComponent chart={chart} key={chart.name}>
                  <chart.component />
                </ChartComponent>
              )
            })()}
          </div>
        </div>
        <div
          id="line-chart"
          className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartLineDefault"),
            charts.find((chart) => chart.name === "ChartLineLinear"),
            charts.find((chart) => chart.name === "ChartLineStep"),
            charts.find((chart) => chart.name === "ChartLineMultiple"),
            charts.find((chart) => chart.name === "ChartLineDots"),
            charts.find((chart) => chart.name === "ChartLineDotsCustom"),
            charts.find((chart) => chart.name === "ChartLineDotsColors"),
            charts.find((chart) => chart.name === "ChartLineLabel"),
            charts.find((chart) => chart.name === "ChartLineLabelCustom"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
          <div className="md:col-span-2 lg:col-span-3">
            {(() => {
              const chart = charts.find(
                (chart) => chart.name === "ChartLineInteractive",
              )
              if (!chart) return null
              return (
                <ChartComponent chart={chart} key={chart.name}>
                  <chart.component />
                </ChartComponent>
              )
            })()}
          </div>
        </div>
        <div
          id="pie-chart"
          className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartPieSimple"),
            charts.find((chart) => chart.name === "ChartPieLabel"),
            charts.find((chart) => chart.name === "ChartPieLabelCustom"),
            charts.find((chart) => chart.name === "ChartPieLabelList"),
            charts.find((chart) => chart.name === "ChartPieLegend"),
            charts.find((chart) => chart.name === "ChartPieDonut"),
            charts.find((chart) => chart.name === "ChartPieDonutActive"),
            charts.find((chart) => chart.name === "ChartPieDonutText"),
            charts.find((chart) => chart.name === "ChartPieStacked"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
        </div>
        <div
          id="tooltip"
          className="chart-wrapper grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
        >
          {[
            charts.find((chart) => chart.name === "ChartTooltipDefault"),
            charts.find((chart) => chart.name === "ChartTooltipIndicatorLine"),
            charts.find((chart) => chart.name === "ChartTooltipIndicatorNone"),
            charts.find((chart) => chart.name === "ChartTooltipLabelCustom"),
            charts.find((chart) => chart.name === "ChartTooltipLabelFormatter"),
            charts.find((chart) => chart.name === "ChartTooltipLabelNone"),
            charts.find((chart) => chart.name === "ChartTooltipFormatter"),
            charts.find((chart) => chart.name === "ChartTooltipIcons"),
            charts.find((chart) => chart.name === "ChartTooltipAdvanced"),
          ].map((chart) => {
            if (!chart) return null
            return (
              <ChartComponent chart={chart} key={chart.name}>
                <chart.component />
              </ChartComponent>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const ChartComponent = ({
  children,
  chart,
}: {
  children: React.ReactNode
  chart: ChartExample
}) => {
  const { code, name } = chart
  return (
    <div>
      {children}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-5 w-full">Copy</Button>
        </DialogTrigger>
        <DialogContent className="max-w-full">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <Pre
            wrapperClassName="w-full max-w-full text-white overflow-x-auto"
            __rawstring__={code}
          >
            {code}
          </Pre>
        </DialogContent>
      </Dialog>
    </div>
  )
}
