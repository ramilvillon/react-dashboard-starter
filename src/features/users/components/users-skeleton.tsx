import { Skeleton } from "@/components/ui/skeleton"

export function UsersSkeleton() {
  return (
    <div className="grid gap-5">
      <Skeleton className="h-9 w-40" />
      <Skeleton className="h-11 w-full max-w-sm rounded-full" />
      <Skeleton className="h-72 rounded-3xl" />
    </div>
  )
}
