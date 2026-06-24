import { queryOptions } from "@tanstack/react-query"
import { fetchMetrics, fetchRevenueSeries } from "@/data/metrics"

export const metricsQueryOptions = queryOptions({
  queryKey: ["metrics"],
  queryFn: fetchMetrics,
})

export const revenueSeriesQueryOptions = queryOptions({
  queryKey: ["revenue-series"],
  queryFn: fetchRevenueSeries,
})
