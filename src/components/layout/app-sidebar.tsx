import { Link } from "@tanstack/react-router"
import { LayoutDashboard, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const nav = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
] as const

export function AppSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 border-r bg-sidebar md:block">
      <div className="flex h-14 items-center border-b px-6 font-semibold">
        Dashboard
      </div>
      <nav className="grid gap-1 p-4">
        {nav.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
            activeProps={{ className: "bg-accent text-accent-foreground font-medium" }}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
