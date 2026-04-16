import Navbar from './Navbar.jsx'

export default function Hero() {
  return (
    <header
      id="topo"
      className="relative overflow-hidden px-[clamp(1.5rem,4vw,5rem)] pt-10 pb-24"
      style={{ background: 'radial-gradient(circle at 50% 15%, rgba(198,60,48,0.14), transparent 55%)' }}
    >
      {/* Papyrus texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/papyrus.png')",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Ornament */}
      <div className="flex items-center gap-3 text-accent font-display tracking-[0.2rem] mb-6" aria-hidden="true">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <span className="text-[1.4rem]">⚔︎</span>
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      </div>

      {/* Text block — centered */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-[780px] mx-auto mb-14">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent">
          Planilha avançada para campanhas de D&D 5e
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1]">
          Gerencie fichas de personagem com precisão, estilo e automação.
        </h1>
        <p className="text-muted leading-relaxed max-w-[600px]">
          Um grimório digital com conteúdo completo do <strong className="text-parchment">Player's Handbook</strong>,
          {' '}<strong className="text-parchment">Tasha's Cauldron of Everything</strong> e{' '}
          <strong className="text-parchment">Xanathar's Guide to Everything</strong> — subclasses, magias e regras
          opcionais reunidas em uma interface inspirada em cartas de aventura.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/DnD_Companion_Setup.exe"
            download
            className="rounded-full px-7 py-3.5 font-semibold text-[#fff3e0] transition-transform hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #c63c30, #8a1f1a)',
              boxShadow: '0 20px 30px rgba(198,60,48,0.4)',
            }}
          >
            Baixar Instalador
          </a>
          <a
            href="#demo"
            className="rounded-full px-7 py-3.5 font-semibold text-parchment border border-accent/40 bg-parchment/[0.08] transition-transform hover:-translate-y-0.5"
          >
            Ver Demonstração
          </a>
        </div>
      </div>

      {/* Full-width screenshot */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-accent/40 shadow-[0_40px_80px_rgba(0,0,0,0.75)] relative">
          <div className="absolute inset-[12px] border border-accent/20 pointer-events-none rounded-2xl z-10" aria-hidden="true" />
          <img
            src="/Screenshot_1.png"
            alt="DnD Companion – Ficha principal"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </header>
  )
}
