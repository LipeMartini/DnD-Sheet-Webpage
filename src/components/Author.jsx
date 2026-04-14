export default function Author() {
  return (
    <section id="author" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <article className="bg-gradient-to-br from-[rgba(44,26,18,0.9)] to-[rgba(18,11,7,0.92)] border border-accent/20 rounded-[20px] p-7 shadow-[0_25px_45px_rgba(0,0,0,0.65)] relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Sobre o Autor</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] mb-4">Luís Filipe Martini</h2>
        <p className="text-muted mb-3">
          Desenvolvedor, estudante de Ciência da Computação na Universidade Federal do Rio Grande do Sul e mestre de D&D.
        </p>
        <p className="text-muted">
          Este projeto nasceu da necessidade de uma ferramenta grátis capaz de integrar fichas de D&D 5e de forma
          simples e intuitiva com rolagens automáticas, janelas de rolagem de dados e de anotações em um só lugar e com
          o máximo de cálculos automáticos sendo feitos por trás das cortinas para facilitar a vida dos jogadores. Tudo
          sendo salvo na sua própria máquina sem depender de servidores ou conexão.
        </p>
      </article>
    </section>
  )
}
