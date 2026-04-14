const steps = [
  {
    n: '1',
    title: 'Receba o tomo',
    body: 'Baixe o pacote, extraia o conteúdo e execute o instalador — pergaminhos incluídos.',
  },
  {
    n: '2',
    title: 'Crie o herói',
    body: 'Assistente guiado para raça, classe e magias com prévia dos bônus qualificados.',
  },
  {
    n: '3',
    title: 'Encante seu grimório',
    body: 'Adicione notas, talentos e itens mágicos que reflitam cada decisão de roleplay.',
  },
  {
    n: '4',
    title: 'Jogue e evolua',
    body: 'Use rolagens integradas, acompanhe progressão e atualize subclasses como se consultasse o mestre.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Como Funciona</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Da invocação ao campo de batalha</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-[rgba(32,20,13,0.9)] rounded-[18px] p-6 border border-accent/25 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.3)]"
          >
            <span className="w-[42px] h-[42px] rounded-xl bg-primary/20 border border-primary/40 text-primary font-bold flex items-center justify-center mb-4 text-base">
              {s.n}
            </span>
            <h3 className="font-display text-base mb-2">{s.title}</h3>
            <p className="text-muted text-sm">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
