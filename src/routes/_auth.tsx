import { Outlet, createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: "/" })
    }
  },
  component: () => (
    <div className="grid min-h-screen place-items-center bg-muted/40 p-4">
      <Outlet />
    </div>
  ),
})
