import { describe, expect, it } from "vitest"
import { userColumns } from "@/features/users/components/columns"

describe("userColumns", () => {
  it("defines columns for name, email, role and status", () => {
    const keys = userColumns.map((c) => ("accessorKey" in c ? c.accessorKey : c.id))
    expect(keys).toContain("name")
    expect(keys).toContain("email")
    expect(keys).toContain("role")
    expect(keys).toContain("status")
  })
})
