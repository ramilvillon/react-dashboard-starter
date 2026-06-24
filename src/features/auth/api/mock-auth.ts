import { delay } from "@/data/mock-delay"

export type AuthUser = { id: string; name: string; email: string }

const TOKEN_KEY = "auth-token"
const USER_KEY = "auth-user"

const DEMO = { email: "demo@example.com", password: "password" }

export async function login(
  email: string,
  password: string,
): Promise<{ token: string; user: AuthUser }> {
  await delay(null, 500)
  if (email !== DEMO.email || password !== DEMO.password) {
    throw new Error("Invalid credentials")
  }
  const user: AuthUser = { id: "1", name: "Demo User", email }
  const token = `mock-token-${Date.now()}`
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  return { token, user }
}

export function logout(): void {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function isAuthenticated(): boolean {
  return getToken() !== null
}

export function getStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? (JSON.parse(raw) as AuthUser) : null
}
