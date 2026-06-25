import { Link, useNavigate } from "@tanstack/react-router"
import { LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/features/auth"

const nav = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
] as const

export function AppSidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function onLogout() {
    logout()
    void navigate({ to: "/login" })
  }

  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 p-3 md:block">
      <div className="flex h-full w-56 flex-col rounded-3xl bg-sidebar p-4 text-sidebar-foreground">
        <div className="flex items-center gap-2.5 px-2 py-2">
          <span className="grid size-9 place-items-center rounded-xl bg-sidebar-primary font-display text-lg font-extrabold text-sidebar-primary-foreground">
            D
          </span>
          <span className="font-display text-lg font-bold">Dashboard</span>
        </div>

        <nav className="mt-6 grid gap-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/60 transition-colors hover:bg-white/10 hover:text-sidebar-foreground",
              )}
              activeProps={{
                className: "bg-sidebar-accent text-sidebar-accent-foreground",
              }}
            >
              <Icon className="size-[18px]" />
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={onLogout}
          aria-label="Log out"
          className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/60 transition-colors hover:bg-white/10 hover:text-sidebar-foreground"
        >
          <LogOut className="size-[18px]" />
          Log out
        </button>
      </div>
    </aside>
  )
}
