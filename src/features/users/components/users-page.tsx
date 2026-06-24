import { useSuspenseQuery } from "@tanstack/react-query"
import { usersQueryOptions } from "@/features/users/api/queries"
import { userColumns } from "@/features/users/components/columns"
import { UsersTable } from "@/features/users/components/users-table"

export function UsersPage() {
  const { data } = useSuspenseQuery(usersQueryOptions)
  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Users</h1>
      <UsersTable columns={userColumns} data={data} />
    </div>
  )
}
