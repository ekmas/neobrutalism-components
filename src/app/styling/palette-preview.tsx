import type { ColorPalette } from "@/data/colors"

import { cn } from "@/lib/utils"

export default function PalettePreview({
  palette,
  className,
}: {
  palette: ColorPalette
  className?: string
}) {
  const charts = [
    palette.chart1,
    palette.chart2,
    palette.chart3,
    palette.chart4,
    palette.chart5,
  ]

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow",
        className,
      )}
    >
      <div className="grid grid-cols-2">
        <div
          className="flex flex-col items-center justify-center gap-1 border-r-2 border-border px-2 py-4 text-center"
          style={{ backgroundColor: palette.main }}
        >
          <span className="font-heading text-sm">main</span>
          <span className="font-base text-xs">{palette.main}</span>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-1 px-2 py-4 text-center"
          style={{ backgroundColor: palette.bg }}
        >
          <span className="font-heading text-sm">background</span>
          <span className="font-base text-xs">{palette.bg}</span>
        </div>
      </div>
      <div className="grid h-5 grid-cols-5 border-t-2 border-border">
        {charts.map((color, index) => (
          <div
            key={index}
            title={`chart-${index + 1}: ${color}`}
            className={cn(
              "h-full",
              index < charts.length - 1 && "border-r-2 border-border",
            )}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}
