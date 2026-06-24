import { delay } from "@/data/mock-delay"

export type Metric = { label: string; value: number; delta: number }
export type SeriesPoint = { month: string; desktop: number; mobile: number }

const metrics: Metric[] = [
  { label: "Total Revenue", value: 45231, delta: 12.5 },
  { label: "Active Users", value: 2342, delta: 4.1 },
  { label: "New Signups", value: 312, delta: -2.3 },
  { label: "Churn Rate", value: 3, delta: -0.4 },
]

const revenueSeries: SeriesPoint[] = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 314, mobile: 240 },
]

export function fetchMetrics(): Promise<Metric[]> {
  return delay(metrics)
}

export function fetchRevenueSeries(): Promise<SeriesPoint[]> {
  return delay(revenueSeries)
}
