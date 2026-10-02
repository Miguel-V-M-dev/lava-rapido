import { Outlet } from "react-router"
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"
import { AgendamentoContextProvider } from "./context/AgendamentoContext"

function App() {
  return (
    <AgendamentoContextProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Cabecalho />
        <main className="grow">
          <Outlet />
        </main>
        <Rodape />
      </div>
    </AgendamentoContextProvider>
  )
}

export default App
