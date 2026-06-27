import { createFileRoute } from "@tanstack/react-router"
import {
  OverviewPage,
  OverviewSkeleton,
  metricsQueryOptions,
  revenueSeriesQueryOptions,
} from "@/features/dashboard"
import { ErrorState } from "@/components/error-state"

export const Route = createFileRoute("/_app/")({
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(metricsQueryOptions)
    void context.queryClient.ensureQueryData(revenueSeriesQueryOptions)
  },
  component: OverviewPage,
  pendingComponent: OverviewSkeleton,
  errorComponent: ({ reset }) => <ErrorState onRetry={reset} />,
})
