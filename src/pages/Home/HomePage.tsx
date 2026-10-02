import { Link } from "react-router"
import { FaCarSide, FaSprayCan, FaGem } from "react-icons/fa"
import CardDepoimento from "../../components/CardDepoimento"
import { depoimentos } from "../../data/depoimentos"

const servicos = [
  {
    titulo: "Lavagem Simples",
    icone: <FaCarSide aria-hidden="true" />,
    descricao: "Lavagem externa completa com shampoo neutro, secagem e pretinho nos pneus.",
  },
  {
    titulo: "Lavagem Completa",
    icone: <FaSprayCan aria-hidden="true" />,
    descricao: "Externa + interna: aspiração, limpeza do painel, vidros e tapetes.",
  },
  {
    titulo: "Lavagem Premium",
    icone: <FaGem aria-hidden="true" />,
    descricao: "Tudo da completa com cera de carnaúba e hidratação dos bancos e plásticos.",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="bg-linear-to-br from-sky-700 via-sky-600 to-cyan-400 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Seu carro brilhando em minutos
          </h1>
          <p className="mt-6 text-lg text-sky-50 md:text-xl">
            No Lava Rápido Brilho Total você agenda pelo site, chega e o seu carro já tem
            hora marcada. Sem fila, sem espera e com acabamento de quem ama automóveis.
          </p>
          <Link
            to="/agendamentos"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-lg font-bold text-sky-800 shadow-lg transition hover:scale-105 hover:bg-cyan-50"
          >
            Agendar minha lavagem
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="titulo-servicos">
        <h2 id="titulo-servicos" className="text-center text-3xl font-bold text-sky-900">
          Nossos serviços
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-2xl text-sky-700">
                {servico.icone}
              </div>
              <h3 className="text-xl font-bold text-sky-900">{servico.titulo}</h3>
              <p className="mt-2 text-slate-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 px-4 py-16" aria-labelledby="titulo-depoimentos">
        <div className="mx-auto max-w-6xl">
          <h2 id="titulo-depoimentos" className="text-center text-3xl font-bold text-sky-900">
            O que os clientes dizem
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Carros lavados e clientes satisfeitos.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((depoimento) => (
              <CardDepoimento key={depoimento.id} depoimento={depoimento} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
