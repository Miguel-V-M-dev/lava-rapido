import { FaGithub, FaLinkedin } from "react-icons/fa"
import type { Integrante } from "../types"

type Props = {
  integrante: Integrante
}

export default function CardIntegrante({ integrante }: Props) {
  const { nome, rm, foto, github, linkedin } = integrante

  return (
    <article className="flex w-60 flex-col items-center rounded-2xl border border-sky-100 bg-white p-5 text-center shadow-lg">
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        className="h-32 w-32 rounded-full border-4 border-cyan-300 object-cover"
      />
      <h3 className="mt-4 grow font-bold text-sky-900">{nome}</h3>
      <p className="text-sm font-medium text-slate-500">{rm}</p>
      <p className="text-xs text-slate-400">1TDSPI</p>

      {(github || linkedin) && (
        <div className="mt-3 flex gap-4 text-2xl text-sky-700">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${nome}`}
              className="hover:text-sky-900"
            >
              <FaGithub aria-hidden="true" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${nome}`}
              className="hover:text-sky-900"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
