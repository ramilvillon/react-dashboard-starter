import { useSuspenseQuery } from "@tanstack/react-query"
import { metricsQueryOptions, revenueSeriesQueryOptions } from "@/features/dashboard/api/queries"
import { StatCards } from "@/features/dashboard/components/stat-cards"
import { RevenueChart } from "@/features/dashboard/components/revenue-chart"
import { useAuth } from "@/features/auth"
import pixelAvatar from "@/assets/pixel-avatar.svg"

export function OverviewPage() {
  const { user } = useAuth()
  const { data: metrics } = useSuspenseQuery(metricsQueryOptions)
  const { data: series } = useSuspenseQuery(revenueSeriesQueryOptions)
  const firstName = user?.name?.split(" ")[0] ?? "there"

  return (
    <div className="grid gap-5">
      <section className="flex items-center justify-between gap-4 overflow-hidden rounded-3xl bg-card p-7 shadow-sm">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">
            Hello {firstName}!
          </h1>
          <p className="mt-1.5 text-muted-foreground">
            It's good to see you again. Here's your overview.
          </p>
        </div>
        <img
          src={pixelAvatar}
          alt=""
          className="pixelated hidden size-28 shrink-0 sm:block"
        />
      </section>

      <StatCards metrics={metrics} />
      <RevenueChart data={series} />
    </div>
  )
}
