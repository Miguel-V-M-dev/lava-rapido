import { createContext, createElement, useState } from "react"
import type { Agendamento, NovoAgendamento } from "../types"

//declara os tipos das informações (Tipos Contexto)
type AgendamentoContextValue = {
  agendamentos: Agendamento[]
  adicionar: (novo: NovoAgendamento) => void
  remover: (id: string) => void
}

//declara as informações (Criando Contexto)
export const AgendamentoContext = createContext<AgendamentoContextValue>({
  agendamentos: [],
  adicionar: () => {},
  remover: () => {},
})

//configura e provê as informações (Provendo Contexto)
export function AgendamentoContextProvider({ children }: { children: React.ReactNode }) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([])

  const adicionar = (novo: NovoAgendamento) => {
    const agendamento: Agendamento = { id: crypto.randomUUID(), ...novo }
    setAgendamentos((atual) => [...atual, agendamento])
  }

  const remover = (id: string) => {
    setAgendamentos((atual) => atual.filter((item) => item.id !== id))
  }

  return createElement(
    AgendamentoContext.Provider,
    { value: { agendamentos, adicionar, remover } },
    children,
  )
}
