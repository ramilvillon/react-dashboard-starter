import { createFileRoute } from "@tanstack/react-router"
import {
  OverviewPage,
  metricsQueryOptions,
  revenueSeriesQueryOptions,
} from "@/features/dashboard"

export const Route = createFileRoute("/_app/")({
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(metricsQueryOptions)
    void context.queryClient.ensureQueryData(revenueSeriesQueryOptions)
  },
  component: OverviewPage,
})
