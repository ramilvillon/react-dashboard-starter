import { beforeEach, describe, expect, it } from "vitest"
import { getToken, isAuthenticated, login, logout } from "@/features/auth/api/mock-auth"

describe("mock-auth", () => {
  beforeEach(() => localStorage.clear())

  it("rejects invalid credentials", async () => {
    await expect(login("nobody@example.com", "wrong")).rejects.toThrow("Invalid credentials")
    expect(isAuthenticated()).toBe(false)
  })

  it("logs in with the demo credentials and stores a token", async () => {
    const result = await login("demo@example.com", "password")
    expect(result.user.email).toBe("demo@example.com")
    expect(getToken()).not.toBeNull()
    expect(isAuthenticated()).toBe(true)
  })

  it("clears the token on logout", async () => {
    await login("demo@example.com", "password")
    logout()
    expect(isAuthenticated()).toBe(false)
    expect(getToken()).toBeNull()
  })
})
