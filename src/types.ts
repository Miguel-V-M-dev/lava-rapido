export type TipoLavagem = "Simples" | "Completa" | "Premium"

export type Agendamento = {
  id: string
  cliente: string
  modelo: string
  placa: string
  tipoLavagem: TipoLavagem
}

export type NovoAgendamento = Omit<Agendamento, "id">

export type Depoimento = {
  id: number
  cliente: string
  carro: string
  foto: string
  opiniao: string
  nota: number
}

export type Integrante = {
  nome: string
  rm: string
  foto: string
  github?: string
  linkedin?: string
}
