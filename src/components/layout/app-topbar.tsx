import { Bell, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useAuth } from "@/features/auth"
import pixelAvatar from "@/assets/pixel-avatar.svg"

export function AppTopbar() {
  const { user } = useAuth()

  return (
    <header className="flex h-20 items-center gap-4 px-6">
      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search…"
          aria-label="Search"
          className="h-11 w-full rounded-full bg-card pl-10 pr-4 text-sm shadow-sm outline-none ring-ring/40 placeholder:text-muted-foreground focus-visible:ring-2"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <button
          aria-label="Notifications"
          className="relative grid size-11 place-items-center rounded-full bg-card shadow-sm transition-colors hover:bg-accent"
        >
          <Bell className="size-[18px]" />
          <span className="absolute right-3 top-3 size-2 rounded-full bg-primary ring-2 ring-card" />
        </button>
        <div className="flex items-center gap-2.5 rounded-full bg-card py-1 pl-1 pr-4 shadow-sm">
          <img
            src={pixelAvatar}
            alt=""
            className="pixelated size-9 rounded-full bg-secondary"
          />
          <span className="text-sm font-semibold">{user?.name}</span>
        </div>
      </div>
    </header>
  )
}
