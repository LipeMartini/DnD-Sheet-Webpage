export default function Download() {
  return (
    <section id="download" className="py-18 border-b border-white/5 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Download</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Escolha como quer instalar</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <article className="flex flex-col gap-4 items-center text-center bg-gradient-to-b from-[rgba(39,22,15,0.95)] to-[rgba(15,9,6,0.95)] border border-accent/20 rounded-[20px] p-7 shadow-[0_25px_45px_rgba(0,0,0,0.65)]">
          <h3 className="font-display text-lg">Instalador Windows</h3>
          <p className="text-muted text-sm">Setup oficial (.exe) com atalho, desinstalação e assets embutidos.</p>
          <a
            href="/DnD_Character_Sheet_Setup.exe"
            download
            className="rounded-full px-7 py-3.5 font-semibold text-[#fff3e0] transition-transform hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #c63c30, #8a1f1a)',
              boxShadow: '0 20px 30px rgba(198,60,48,0.4)',
            }}
          >
            Baixar instalador
          </a>
          <small className="text-muted text-xs">~40 MB • Requer Windows 10/11</small>
        </article>
        <article className="flex flex-col gap-4 items-center text-center bg-gradient-to-b from-[rgba(38,23,16,0.95)] to-[rgba(23,13,9,0.95)] border border-accent/20 rounded-[20px] p-7 shadow-[0_25px_45px_rgba(0,0,0,0.65)]">
          <h3 className="font-display text-lg">Pacote ZIP / Código-fonte</h3>
          <p className="text-muted text-sm">Versão completa no GitHub para quem prefere clonar ou compilar.</p>
          <a
            href="https://github.com/LipeMartini/DnD-5e-Character-Sheet"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full px-7 py-3.5 font-semibold text-parchment border border-accent/40 bg-parchment/[0.08] transition-transform hover:-translate-y-0.5"
          >
            Ver repositório
          </a>
        </article>
      </div>
      <p className="mt-6 text-muted text-center text-sm">Precisa de suporte? Envie uma mensagem pelos contatos abaixo.</p>
    </section>
  )
}
