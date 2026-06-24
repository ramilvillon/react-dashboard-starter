import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { queryClient } from "@/lib/query-client"
import { routeTree } from "./routeTree.gen"
import "./index.css"

const router = createRouter({
  routeTree,
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
    auth: undefined!, // replaced by real auth in Task 8
  },
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
