import { useContext } from "react"
import { Link } from "react-router"
import { FaCarSide, FaHourglassHalf } from "react-icons/fa"
import { AgendamentoContext } from "../context/AgendamentoContext"

export default function Cabecalho() {
  const { agendamentos } = useContext(AgendamentoContext)
  const total = agendamentos.length

  return (
    <header className="bg-sky-800 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold">
          <FaCarSide aria-hidden="true" className="text-cyan-300" />
          Brilho Total
        </Link>

        <nav aria-label="Menu principal" className="flex items-center gap-6 font-medium">
          <Link className="hover:text-cyan-300" to="/">Home</Link>
          <Link className="hover:text-cyan-300" to="/agendamentos">Agendamentos</Link>
          <Link className="hover:text-cyan-300" to="/sobre">Sobre</Link>
        </nav>

        <p
          className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-1.5 text-sm font-bold text-sky-950"
          aria-live="polite"
        >
          <FaHourglassHalf aria-hidden="true" />
          {total} {total === 1 ? "carro aguardando" : "carros aguardando"} lavagem
        </p>
      </div>
    </header>
  )
}
