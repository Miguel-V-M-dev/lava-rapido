import { useContext } from "react"
import FormAgendamento from "../../components/FormAgendamento"
import Tiquete from "../../components/Tiquete"
import { AgendamentoContext } from "../../context/AgendamentoContext"

export default function AgendamentosPage() {
  const { agendamentos, remover } = useContext(AgendamentoContext)

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,26rem)_1fr]">
      <section aria-labelledby="titulo-form">
        <h1 id="titulo-form" className="mb-6 text-3xl font-bold text-sky-900">Agendamentos</h1>
        <FormAgendamento />
      </section>

      <section aria-labelledby="titulo-tiquetes">
        <h2 id="titulo-tiquetes" className="mb-6 text-2xl font-bold text-sky-900">
          Tíquetes de lavagem
        </h2>
        {agendamentos.length === 0 ? (
          <p className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            Nenhum carro aguardando. Crie um tíquete ao lado.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {agendamentos.map((agendamento) => (
              <Tiquete key={agendamento.id} agendamento={agendamento} remover={remover} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
