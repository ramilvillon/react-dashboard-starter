import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/")({
  component: () => <div className="p-8 text-2xl font-bold">Overview</div>,
})
