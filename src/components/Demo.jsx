export default function Demo() {
  return (
    <section id="demo" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Demonstração</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Veja a interface antes de instalar</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="bg-parchment/[0.07] border border-dashed border-accent/50 rounded-3xl p-8 min-h-[280px] grid place-items-center text-center text-accent italic">
          <p>
            Espaço reservado para screenshots ou vídeo de gameplay.
            <br />
            Substitua por capturas reais assim que desejar.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl mb-4">Destaques</h3>
          <ul className="list-disc pl-5 text-muted space-y-2 text-sm">
            <li>Checklist de features desbloqueadas por nível.</li>
            <li>Gerenciador de magias com grimório + preparações.</li>
            <li>Alertas contextuais para escolhas obrigatórias (expertise, magias novas, etc.).</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
