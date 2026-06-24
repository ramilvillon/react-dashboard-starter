import { greeting } from "@/lib/utils"

function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900">{greeting()}</h1>
    </div>
  )
}

export default App
