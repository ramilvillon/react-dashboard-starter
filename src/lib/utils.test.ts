import { describe, expect, it } from "vitest"
import { greeting } from "@/lib/utils"

describe("greeting", () => {
  it("returns the starter name", () => {
    expect(greeting()).toBe("dashboard starter")
  })
})
