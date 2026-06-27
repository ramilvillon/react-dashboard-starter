import { Button } from "@/components/ui/button"

/** Shared error UI for route errorComponents — styled to match the dashboard. */
export function ErrorState({
  title = "Couldn't load this page",
  onRetry,
}: {
  title?: string
  onRetry?: () => void
}) {
  return (
    <div className="grid place-items-center gap-3 rounded-3xl bg-card p-12 text-center shadow-sm">
      <p className="font-display text-lg font-bold">{title}</p>
      <p className="text-sm text-muted-foreground">
        Something went wrong while fetching data.
      </p>
      {onRetry && (
        <Button onClick={onRetry} className="mt-1 rounded-full">
          Try again
        </Button>
      )}
    </div>
  )
}
