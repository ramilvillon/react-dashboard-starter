import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/$")({
  component: () => (
    <div className="grid min-h-screen place-items-center gap-4 text-center">
      <div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">Page not found.</p>
        <Link to="/" className="text-primary underline">
          Go home
        </Link>
      </div>
    </div>
  ),
})
