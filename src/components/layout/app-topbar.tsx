import { useNavigate } from "@tanstack/react-router"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useAuth } from "@/features/auth"

export function AppTopbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function onLogout() {
    logout()
    void navigate({ to: "/login" })
  }

  return (
    <header className="flex h-14 items-center justify-end gap-4 border-b px-6">
      <span className="text-sm text-muted-foreground">{user?.name}</span>
      <ThemeToggle />
      <Button variant="ghost" size="icon" onClick={onLogout} aria-label="Log out">
        <LogOut className="h-4 w-4" />
      </Button>
    </header>
  )
}
