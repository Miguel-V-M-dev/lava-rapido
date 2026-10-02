import { FaQuoteLeft, FaStar } from "react-icons/fa"
import type { Depoimento } from "../types"

type Props = {
  depoimento: Depoimento
}

export default function CardDepoimento({ depoimento }: Props) {
  const { cliente, carro, foto, opiniao, nota } = depoimento

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-lg">
      <img src={foto} alt={`${carro} lavado no Brilho Total`} className="h-52 w-full object-cover" />
      <div className="flex grow flex-col gap-3 p-5">
        <FaQuoteLeft aria-hidden="true" className="text-2xl text-cyan-500" />
        <p className="grow text-slate-700">{opiniao}</p>
        <div className="flex gap-1 text-amber-400" aria-label={`Nota ${nota} de 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < nota ? "" : "text-slate-300"} aria-hidden="true" />
          ))}
        </div>
        <div>
          <p className="font-bold text-sky-900">{cliente}</p>
          <p className="text-sm text-slate-500">{carro}</p>
        </div>
      </div>
    </article>
  )
}
