const cards = [
  {
    title: 'Automação arcana',
    body: 'Aplica bônus de proficiência, expertise e slots como se um escriba arcano acompanhasse cada nível.',
  },
  {
    title: 'Três livros, um grimório',
    body: 'Subclasses, magias e conteúdo completo do Player’s Handbook, Tasha’s Cauldron of Everything e Xanathar’s Guide to Everything.',
  },
  {
    title: 'Regras opcionais (Tasha’s)',
    body: 'Suporte a Custom Lineage, habilidades opcionais de classe e feat de origem — tudo dentro do fluxo de criação guiada.',
  },
  {
    title: 'Mesa preparada',
    body: 'Rolagens rápidas, tooltips dedicadas e separação clara de guias para combate, perícias e magias.',
  },
]

export default function Overview() {
  return (
    <section id="overview" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Visão Geral</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] mb-3">Por que usar o DnD Sheet Companion?</h2>
        <p className="text-muted">
          Uma forja digital que cobre o conteúdo de <span className="text-parchment">PHB</span>,{' '}
          <span className="text-parchment">Tasha’s Cauldron of Everything</span> e{' '}
          <span className="text-parchment">Xanathar’s Guide to Everything</span> para montar fichas vivas e dignas dos salões de Waterdeep.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {cards.map((c) => (
          <article
            key={c.title}
            className="bg-gradient-to-b from-[rgba(38,23,16,0.95)] to-[rgba(23,13,9,0.95)] border border-accent/20 rounded-[20px] p-7 shadow-[0_25px_45px_rgba(0,0,0,0.65)]"
          >
            <h3 className="font-display text-lg mb-3">{c.title}</h3>
            <p className="text-muted text-sm">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
