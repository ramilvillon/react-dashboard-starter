import { createFileRoute } from "@tanstack/react-router"
import { UsersPage, UsersSkeleton, usersQueryOptions } from "@/features/users"
import { ErrorState } from "@/components/error-state"

export const Route = createFileRoute("/_app/users")({
  loader: ({ context }) => context.queryClient.ensureQueryData(usersQueryOptions),
  component: UsersPage,
  pendingComponent: UsersSkeleton,
  errorComponent: ({ reset }) => <ErrorState onRetry={reset} />,
})
