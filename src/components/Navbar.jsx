import { useState } from 'react'

const links = [
  { href: '#overview', label: 'Visão Geral' },
  { href: '#workflow', label: 'Como Funciona' },
  { href: '#download', label: 'Download' },
  { href: '#author', label: 'Autor' },
  { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between mb-12 relative">
      <span className="font-display text-[1.4rem] text-primary">DnD Sheet Companion</span>

      <div className="hidden md:flex gap-6 text-sm text-muted uppercase tracking-[0.08rem]">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-parchment transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <button
        className="md:hidden border border-white/20 text-parchment px-4 py-2 rounded-full text-base"
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-14 right-0 flex flex-col gap-4 bg-surface/95 border border-white/20 rounded-2xl px-6 py-4 text-sm text-muted uppercase tracking-wider z-50 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-parchment transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
