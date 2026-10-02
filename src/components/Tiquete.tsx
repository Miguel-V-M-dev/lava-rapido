import { FaCarSide, FaTrashAlt, FaUser } from "react-icons/fa"
import type { Agendamento } from "../types"

type Props = {
  agendamento: Agendamento
  remover: (id: string) => void
}

const cores = {
  Simples: "border-sky-400 bg-sky-50",
  Completa: "border-emerald-400 bg-emerald-50",
  Premium: "border-amber-400 bg-amber-50",
}

export default function Tiquete({ agendamento, remover }: Props) {
  const { id, cliente, modelo, placa, tipoLavagem } = agendamento

  return (
    <article className={`flex flex-col gap-2 rounded-xl border-2 border-dashed p-4 shadow-md ${cores[tipoLavagem]}`}>
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-slate-800 px-3 py-0.5 text-xs font-bold uppercase text-white">
          {tipoLavagem}
        </span>
        <span className="rounded border-2 border-slate-800 bg-white px-2 py-0.5 font-mono text-sm font-bold tracking-widest">
          {placa}
        </span>
      </div>
      <p className="flex items-center gap-2 font-semibold">
        <FaUser aria-hidden="true" className="text-slate-500" /> {cliente}
      </p>
      <p className="flex items-center gap-2 text-slate-700">
        <FaCarSide aria-hidden="true" className="text-slate-500" /> {modelo}
      </p>
      <button
        type="button"
        onClick={() => remover(id)}
        className="mt-2 flex items-center justify-center gap-2 self-end rounded-lg bg-red-600 px-3 py-1.5 text-sm font-bold text-white transition hover:bg-red-700"
        aria-label={`Excluir tíquete de ${cliente}`}
      >
        <FaTrashAlt aria-hidden="true" /> Excluir
      </button>
    </article>
  )
}
