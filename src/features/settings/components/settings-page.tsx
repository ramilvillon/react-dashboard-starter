import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme/theme-provider"
import { useAuth } from "@/features/auth"

const themes = ["light", "dark", "system"] as const

export function SettingsPage() {
  const { user } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <div className="grid max-w-2xl gap-5">
      <h1 className="font-display text-3xl font-bold tracking-tight">Settings</h1>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="font-display">Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue={user?.name ?? ""} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user?.email ?? ""} />
          </div>
          <p className="text-xs text-muted-foreground">
            Profile changes are local-only in this starter.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="font-display">Appearance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Label>Theme</Label>
          <div
            role="group"
            aria-label="Theme"
            className="inline-flex w-fit rounded-full bg-secondary p-1"
          >
            {themes.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={theme === t}
                onClick={() => setTheme(t)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  theme === t
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
