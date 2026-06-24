import type { QueryClient } from "@tanstack/react-query"
import type { AuthContext } from "@/features/auth"

export interface RouterContext {
  queryClient: QueryClient
  auth: AuthContext
}
