# Lava Rápido Brilho Total

Aplicação de um lava-rápido de automóveis feita com **React + Vite + TypeScript + Tailwind CSS**,
usando **react-router** para o roteamento de páginas e o hook **useContext** para compartilhar
os agendamentos entre as páginas e o cabeçalho.

## 👨‍💻 Autores e Créditos

Projeto desenvolvido pela turma **1-TDSPI | Paulista — FIAP**

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|---|
| <img src="public/integrantes/Miguel.jpeg" width="64" height="64" style="border-radius:50%"> | Miguel Vieira Martins | 571978 | 1-TDSPI | [Miguel-V-M-dev](https://github.com/Miguel-V-M-dev) | [perfil](https://www.linkedin.com/in/miguel-vieira-martins-598964406) |
| <img src="public/integrantes/Gustavo.jpeg" width="64" height="64" style="border-radius:50%"> | Gustavo Neri Andrade | 572722 | 1-TDSPI | [GustavoNeriAndrade](https://github.com/GustavoNeriAndrade) | [perfil](https://www.linkedin.com/in/gustavo-neri-andrade-163795337) |
| <img src="public/integrantes/Thiago.jpeg" width="64" height="64" style="border-radius:50%"> | Thiago Vendrami Luca | 572942 | 1-TDSPI | [Thiagovluca](https://github.com/Thiagovluca) | [perfil](https://br.linkedin.com/in/thiago-vendrami-luca-4892a6409) |
| <img src="public/integrantes/Carlos.jpeg" width="64" height="64" style="border-radius:50%"> | Carlos Americo Machado Brambilla | 571250 | 1-TDSPI | [CarlosAmericoMachado](https://github.com/CarlosAmericoMachado) | [perfil](https://www.linkedin.com/in/carlos-brambilla-b5b971407) |
| <img src="public/integrantes/Murilo.jpeg" width="64" height="64" style="border-radius:50%"> | Murilo da Silva Lourenço | 573959 | 1-TDSPI | [murilojosh](https://github.com/murilojosh) | [perfil](https://www.linkedin.com/in/murilo-lourenço-35250b411) |

---

## Link do projeto no GitHub

https://github.com/Miguel-V-M-dev/lava-rapido.git

## Tecnologias

| Tecnologia | Uso no projeto |
| ---------- | -------------- |
| React + Vite + TypeScript | Base da aplicação |
| Tailwind CSS | Estilização de todas as páginas (somente Tailwind) |
| react-router | Rotas com `createBrowserRouter`, `RouterProvider`, `Outlet` e `Link` |
| useContext | `AgendamentoContext` compartilha os tíquetes entre as páginas e o cabeçalho |
| react-hook-form + yup | Formulário de agendamento com validação dos campos |
| react-icons | Ícones das páginas e dos tíquetes |

## Páginas

| Rota | Página | Descrição |
| ---- | ------ | --------- |
| `/` | Home | Apresentação do lava-rápido, serviços e depoimentos com fotos dos carros lavados |
| `/agendamentos` | Agendamentos | Formulário (nome do cliente, modelo, placa e tipo de lavagem) que gera tíquetes, cada um com botão de exclusão |
| `/sobre` | Sobre | Integrantes do grupo com RM e foto |

O cabeçalho e o rodapé aparecem em todas as páginas. O cabeçalho mostra, via contexto, o número de
carros aguardando lavagem.

## Estrutura

```
src/
  components/   Cabecalho, Rodape, CardDepoimento, FormAgendamento, Tiquete, CardIntegrante
  context/      AgendamentoContext.ts (createContext + Provider)
  data/         depoimentos.ts, integrantes.ts
  types.ts      Tipos TypeScript (Agendamento, Depoimento, Integrante)
  pages/        Home, Agendamentos, Sobre
  App.tsx       Provider + Cabecalho + Outlet + Rodape
  main.tsx      createBrowserRouter / RouterProvider
```

## Como rodar

```bash
npm install
npm run dev
```