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

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 max-w-[700px]">
            <p className="uppercase tracking-[0.25rem] text-xs text-accent">
              Planilha avançada para campanhas de D&D 5e
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.1]">
              Gerencie fichas de personagem com precisão, estilo e automação.
            </h1>
            <p className="text-muted leading-relaxed">
              Um grimório digital que reúne cálculo automático, subclasses completas e interface inspirada em cartas de
              aventura. Importe fichas, personalize e mantenha suas campanhas sincronizadas entre jogadores e mestre.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/DnD_Character_Sheet_Setup.exe"
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

          {/* Feature card */}
          <div className="mt-4 bg-[rgba(28,16,10,0.85)] border border-accent/40 rounded-3xl p-7 flex flex-col gap-4 max-w-[520px] backdrop-blur-md shadow-[0_25px_55px_rgba(0,0,0,0.5)]">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/15 text-accent text-xs uppercase tracking-[0.15rem] mb-3">
                Compatível com Windows
              </span>
              <h3 className="font-display text-lg mb-1">Toolkit completo</h3>
              <p className="text-muted text-sm">
                Subclasses PHB, cálculo de expertise, rolagens guiadas e exportação rápida.
              </p>
            </div>
            <ul className="flex flex-col gap-1.5 text-muted text-sm list-none">
              <li>✔️ Build + setup em menos de 5 minutos</li>
              <li>✔️ Banco de magias com cache local</li>
              <li>✔️ UI pronta para mesas presenciais</li>
            </ul>
          </div>
        </div>

        {/* Right — screenshot placeholder */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-[520px] aspect-video rounded-3xl relative overflow-hidden grid place-items-center text-center p-4 text-muted italic border border-accent/40 shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
            style={{ background: 'radial-gradient(circle at top, rgba(243,229,200,0.1), rgba(15,9,6,0.9))' }}
          >
            <div className="absolute inset-[18px] border border-accent/25 pointer-events-none rounded-2xl" aria-hidden="true" />
            <div className="absolute inset-3.5 border border-dashed border-accent/25 pointer-events-none rounded-2xl" aria-hidden="true" />
            <p>Reserve este espaço para uma captura da janela principal.<br />Recomendo 1200×720 px.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
