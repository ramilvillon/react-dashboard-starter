import { Link, useNavigate } from "@tanstack/react-router"
import { LayoutDashboard, LogOut, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/features/auth"

const nav = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
] as const

/** The black panel's contents — shared by the desktop sidebar and the mobile drawer. */
export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  function onLogout() {
    logout()
    onNavigate?.()
    void navigate({ to: "/login" })
  }

  return (
    <div className="flex h-full w-full flex-col p-4 text-sidebar-foreground">
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
            onClick={onNavigate}
            activeOptions={{ exact: to === "/" }}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/60 transition-all hover:bg-white/10 hover:text-sidebar-foreground active:scale-[0.98]",
            )}
            activeProps={{
              className: "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
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
        className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-sidebar-foreground/60 transition-all hover:bg-white/10 hover:text-sidebar-foreground active:scale-[0.98]"
      >
        <LogOut className="size-[18px]" />
        Log out
      </button>
    </div>
  )
}

export function AppSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen shrink-0 p-3 md:block">
      <div className="h-full w-56 rounded-3xl bg-sidebar">
        <SidebarContent />
      </div>
    </aside>
  )
}
