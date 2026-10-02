import CardIntegrante from "../../components/CardIntegrante"
import { integrantes } from "../../data/integrantes"

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-sky-900">Sobre o projeto</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        Aplicação desenvolvida para o Checkpoint 5 de Front-End Design Engineering (FIAP),
        praticando roteamento de páginas com React Router e compartilhamento de dados com o
        hook useContext.
      </p>

      <h2 className="mt-12 text-center text-2xl font-bold text-sky-900">Integrantes</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {integrantes.map((integrante) => (
          <CardIntegrante key={integrante.rm} integrante={integrante} />
        ))}
      </div>
    </div>
  )
}
