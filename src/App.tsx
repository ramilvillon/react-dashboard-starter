import { greeting } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"

function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900">{greeting()}</h1>
      <ThemeToggle />
    </div>
  )
}

export default App
