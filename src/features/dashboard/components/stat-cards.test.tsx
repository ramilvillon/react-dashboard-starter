import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { StatCards } from "@/features/dashboard/components/stat-cards"
import type { Metric } from "@/data/metrics"

const metrics: Metric[] = [
  { label: "Total Revenue", value: 45231, delta: 12.5 },
  { label: "Active Users", value: 2342, delta: 4.1 },
]

describe("StatCards", () => {
  it("renders a card per metric with its label", () => {
    render(<StatCards metrics={metrics} />)
    expect(screen.getByText("Total Revenue")).toBeInTheDocument()
    expect(screen.getByText("Active Users")).toBeInTheDocument()
  })

  it("formats positive and negative deltas", () => {
    render(<StatCards metrics={metrics} />)
    expect(screen.getByText("+12.5%")).toBeInTheDocument()
    expect(screen.getByText("+4.1%")).toBeInTheDocument()
  })
})
