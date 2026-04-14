const contacts = [
  {
    href: 'mailto:lipe.martini@hotmail.com',
    icon: '✉️',
    title: 'E-mail',
    label: 'lipe.martini@hotmail.com',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/luís-filipe-martini-gastmann-599149208/',
    icon: '💼',
    title: 'LinkedIn',
    label: '/in/luís-filipe-martini-gastmann',
    external: true,
  },
  {
    href: 'https://github.com/LipeMartini',
    icon: '🐙',
    title: 'GitHub',
    label: '@LipeMartini',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-18 relative">
      <div className="absolute inset-4 border border-accent/[0.08] pointer-events-none" aria-hidden="true" />
      <div className="max-w-3xl mb-10 relative z-10">
        <p className="uppercase tracking-[0.25rem] text-xs text-accent mb-2">Contato</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] mb-2">Fale comigo</h2>
        <p className="text-muted">Feedbacks, ideias de features ou convites para mesas são sempre bem-vindos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        {contacts.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noreferrer noopener' : undefined}
            className="flex gap-4 items-center bg-gradient-to-b from-[rgba(38,23,16,0.95)] to-[rgba(23,13,9,0.95)] border border-accent/20 rounded-[20px] p-7 shadow-[0_25px_45px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50"
          >
            <span className="text-[1.8rem]">{c.icon}</span>
            <div>
              <h3 className="font-display text-base mb-0.5">{c.title}</h3>
              <p className="text-muted text-sm">{c.label}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
