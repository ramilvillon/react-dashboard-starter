import { queryOptions } from "@tanstack/react-query"
import { fetchUsers } from "@/data/users"

export const usersQueryOptions = queryOptions({
  queryKey: ["users"],
  queryFn: fetchUsers,
})
