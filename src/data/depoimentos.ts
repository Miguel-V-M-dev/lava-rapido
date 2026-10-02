import type { Depoimento } from "../types"

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    cliente: "Mariana Costa",
    carro: "Honda Civic",
    foto: "/carros/carro-azul.svg",
    opiniao: "Deixei o carro de manhã e ele voltou parecendo zero km. Atendimento rápido e preço justo!",
    nota: 5,
  },
  {
    id: 2,
    cliente: "Rafael Almeida",
    carro: "Toyota Corolla",
    foto: "/carros/carro-vermelho.svg",
    opiniao: "A lavagem premium com cera é sensacional. O brilho dura semanas. Recomendo demais.",
    nota: 5,
  },
  {
    id: 3,
    cliente: "Juliana Ferreira",
    carro: "Volkswagen T-Cross",
    foto: "/carros/carro-verde.svg",
    opiniao: "Agendei pelo site, cheguei e já estava tudo pronto. Sem fila e sem espera. Nota dez!",
    nota: 4,
  },
]
