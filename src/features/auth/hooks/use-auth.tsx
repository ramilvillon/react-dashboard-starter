import { createContext, useCallback, useContext, useMemo, useState } from "react"
import {
  getStoredUser,
  isAuthenticated as readIsAuthenticated,
  login as mockLogin,
  logout as mockLogout,
  type AuthUser,
} from "@/features/auth/api/mock-auth"

export type AuthContext = {
  isAuthenticated: boolean
  user: AuthUser | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const Context = createContext<AuthContext | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => getStoredUser())

  const login = useCallback(async (email: string, password: string) => {
    const result = await mockLogin(email, password)
    setUser(result.user)
  }, [])

  const logout = useCallback(() => {
    mockLogout()
    setUser(null)
  }, [])

  const value = useMemo<AuthContext>(
    () => ({ isAuthenticated: user !== null, user, login, logout }),
    [user, login, logout],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useAuth(): AuthContext {
  const ctx = useContext(Context)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}

// Router-context snapshot: reads localStorage directly (no React needed),
// used by beforeLoad guards which run outside the component tree.
export const authStore = {
  getSnapshot(): AuthContext {
    return {
      isAuthenticated: readIsAuthenticated(),
      user: getStoredUser(),
      login: async () => {},
      logout: () => {},
    }
  },
}
