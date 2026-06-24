import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { AuthProvider, useAuth } from "@/features/auth"

function wrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

describe("useAuth", () => {
  beforeEach(() => localStorage.clear())

  it("starts unauthenticated", () => {
    const { result } = renderHook(() => useAuth(), { wrapper })
    expect(result.current.isAuthenticated).toBe(false)
  })

  it("becomes authenticated after login", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })
    await act(async () => {
      await result.current.login("demo@example.com", "password")
    })
    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.user?.email).toBe("demo@example.com")
  })
})
