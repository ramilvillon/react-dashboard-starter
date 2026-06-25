import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { AuthProvider } from "@/features/auth"
import { SettingsPage } from "@/features/settings/components/settings-page"

function renderPage() {
  return render(
    <ThemeProvider>
      <AuthProvider>
        <SettingsPage />
      </AuthProvider>
    </ThemeProvider>,
  )
}

describe("SettingsPage", () => {
  it("renders profile and appearance sections", () => {
    renderPage()
    expect(screen.getByText("Profile")).toBeInTheDocument()
    expect(screen.getByText("Appearance")).toBeInTheDocument()
  })

  it("renders a theme selector with light/dark/system options", () => {
    renderPage()
    expect(screen.getByRole("group", { name: "Theme" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Light" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Dark" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "System" })).toBeInTheDocument()
  })
})
