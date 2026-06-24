import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Metric } from "@/data/metrics"

function formatDelta(delta: number): string {
  const sign = delta > 0 ? "+" : ""
  return `${sign}${delta}%`
}

export function StatCards({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <Card key={m.label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {m.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{m.value.toLocaleString()}</div>
            <p className={cn("text-xs", m.delta >= 0 ? "text-emerald-600" : "text-destructive")}>
              <span>{formatDelta(m.delta)}</span>
              {" from last month"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
