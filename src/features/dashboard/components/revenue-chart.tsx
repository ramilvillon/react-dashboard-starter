import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { SeriesPoint } from "@/data/metrics"

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-3)" },
} satisfies ChartConfig

export function RevenueChart({ data }: { data: SeriesPoint[] }) {
  return (
    <div className="min-w-0 rounded-3xl bg-card p-6 shadow-sm">
      <h2 className="font-display text-lg font-bold">Revenue</h2>
      <p className="mb-4 text-sm text-muted-foreground">Desktop vs. mobile, last 6 months</p>
      <ChartContainer config={chartConfig} className="min-h-[260px] w-full">
        <LineChart accessibilityLayer data={data} margin={{ top: 16, left: 8, right: 8 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "var(--color-desktop)" }}
            activeDot={{ r: 5 }}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 3, fill: "var(--color-mobile)" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}
