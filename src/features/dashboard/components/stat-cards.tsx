import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Metric } from "@/data/metrics"

function formatDelta(delta: number): string {
  const sign = delta > 0 ? "+" : ""
  return `${sign}${delta}%`
}

export function StatCards({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => {
        const positive = m.delta >= 0
        const Arrow = positive ? ArrowUpRight : ArrowDownRight
        return (
          <div key={m.label} className="rounded-3xl bg-card p-5 shadow-sm">
            <p className="text-sm font-medium text-muted-foreground">{m.label}</p>
            <div className="mt-3 flex items-end justify-between gap-2">
              <span className="font-display text-3xl font-bold tracking-tight">
                {m.value.toLocaleString()}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold",
                  positive
                    ? "bg-secondary text-foreground"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                <Arrow className="size-3.5" />
                <span>{formatDelta(m.delta)}</span>
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">vs. last month</p>
          </div>
        )
      })}
    </div>
  )
}
