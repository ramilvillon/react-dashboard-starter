import { useSuspenseQuery } from "@tanstack/react-query"
import { metricsQueryOptions, revenueSeriesQueryOptions } from "@/features/dashboard/api/queries"
import { StatCards } from "@/features/dashboard/components/stat-cards"
import { RevenueChart } from "@/features/dashboard/components/revenue-chart"

export function OverviewPage() {
  const { data: metrics } = useSuspenseQuery(metricsQueryOptions)
  const { data: series } = useSuspenseQuery(revenueSeriesQueryOptions)

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <StatCards metrics={metrics} />
      <RevenueChart data={series} />
    </div>
  )
}
