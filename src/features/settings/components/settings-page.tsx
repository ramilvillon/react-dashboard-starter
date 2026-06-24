import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTheme } from "@/components/theme/theme-provider"
import { useAuth } from "@/features/auth"

export function SettingsPage() {
  const { user } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <div className="grid max-w-2xl gap-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
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

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Label htmlFor="theme">Theme</Label>
          <select
            id="theme"
            aria-label="Theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
            className="h-9 w-48 rounded-md border bg-background px-3 text-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </CardContent>
      </Card>
    </div>
  )
}
