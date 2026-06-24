import { createFileRoute } from "@tanstack/react-router"
import { UsersPage, usersQueryOptions } from "@/features/users"

export const Route = createFileRoute("/_app/users")({
  loader: ({ context }) => context.queryClient.ensureQueryData(usersQueryOptions),
  component: UsersPage,
})
