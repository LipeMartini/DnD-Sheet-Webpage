const features = [
  {
    src: '/Screenshot_2.png',
    title: 'Gerenciamento de Magias',
    caption: 'Browse e prepare magias por nível dos três livros. CD e bônus de ataque calculados automaticamente.',
  },
  {
    src: '/Screenshot_3.png',
    title: 'Inventário Completo',
    caption: 'Armas customizadas, armaduras e itens com rastreamento de peso e capacidade de carga.',
  },
  {
    src: '/Screenshot_4.png',
    title: 'Feats & Ability Score Improvements',
    caption: 'Seleção guiada de talentos com pré-requisitos verificados e descrições mecânicas detalhadas.',
  },
]

export default function Demo() {
  return (
    <section id="demo" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Demonstração</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Veja a interface antes de instalar</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {features.map((f) => (
          <figure
            key={f.title}
            className="group flex flex-col bg-gradient-to-b from-[rgba(38,23,16,0.95)] to-[rgba(23,13,9,0.95)] border border-accent/20 rounded-[20px] overflow-hidden shadow-[0_25px_45px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden border-b border-accent/10">
              <img
                src={f.src}
                alt={f.title}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="p-5 flex flex-col gap-2">
              <h3 className="font-display text-base">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
