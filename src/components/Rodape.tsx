export default function Rodape() {
  return (
    <footer className="bg-slate-900 p-6 text-center text-sm text-slate-300">
      <p className="font-semibold text-white">Lava Rápido Brilho Total</p>
      <p>Aberto de segunda a sábado, das 8h às 18h · Atendimento sem fila</p>
      <p className="mt-2 text-slate-400">
        &copy; {new Date().getFullYear()} Brilho Total | Projeto-CP5.
      </p>
    </footer>
  )
}
