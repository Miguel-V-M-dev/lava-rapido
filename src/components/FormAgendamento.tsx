import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AgendamentoContext } from "../context/AgendamentoContext"

const schema = yup.object({
  cliente: yup.string().trim().min(3, "Informe o nome completo").required("O nome é obrigatório"),
  modelo: yup.string().trim().min(2, "Informe o modelo").required("O modelo é obrigatório"),
  placa: yup
    .string()
    .transform((valor: string) => valor.toUpperCase().replace(/[^A-Z0-9]/g, ""))
    .matches(/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/, "Placa inválida (ex.: ABC1D23 ou ABC-1234)")
    .required("A placa é obrigatória"),
  tipoLavagem: yup
    .string()
    .oneOf(["Simples", "Completa", "Premium"] as const, "Escolha o tipo de lavagem")
    .required("Escolha o tipo de lavagem"),
})

type FormDados = yup.InferType<typeof schema>

const campo =
  "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
const erro = "mt-1 block text-sm font-normal text-red-600"

export default function FormAgendamento() {
  const { adicionar } = useContext(AgendamentoContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDados>({ resolver: yupResolver(schema) })

  const onSubmit = (dados: FormDados) => {
    adicionar(dados)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
    >
      <fieldset className="space-y-5">
        <legend className="mb-6 text-lg font-semibold text-slate-950">Novo agendamento</legend>

        <label className="block text-sm font-medium text-slate-700">
          Nome do cliente
          <input className={campo} type="text" placeholder="Digite o nome completo" {...register("cliente")} />
          {errors.cliente && <span className={erro} role="alert">{errors.cliente.message}</span>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Modelo
          <input className={campo} type="text" placeholder="Ex.: Honda Civic" {...register("modelo")} />
          {errors.modelo && <span className={erro} role="alert">{errors.modelo.message}</span>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Placa
          <input className={`${campo} uppercase`} type="text" placeholder="ABC1D23" maxLength={8} {...register("placa")} />
          {errors.placa && <span className={erro} role="alert">{errors.placa.message}</span>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Tipo de lavagem
          <select className={campo} defaultValue="" {...register("tipoLavagem")}>
            <option value="" disabled>Selecione uma opção</option>
            <option value="Simples">Simples</option>
            <option value="Completa">Completa</option>
            <option value="Premium">Premium</option>
          </select>
          {errors.tipoLavagem && <span className={erro} role="alert">{errors.tipoLavagem.message}</span>}
        </label>

        <button
          className="w-full rounded-lg bg-sky-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800"
          type="submit"
        >
          Criar tíquete
        </button>
      </fieldset>
    </form>
  )
}
