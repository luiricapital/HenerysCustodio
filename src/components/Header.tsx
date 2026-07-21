import Link from 'next/link';

const links = [
  { href: '/sobre', label: 'Sobre Henerys' },
  { href: '/speaker', label: 'Speaker' },
  { href: '/consultoria', label: 'Consultoría' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contáctame' },
];

export default function Header({ active }: { active?: string }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-navy/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-[76px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-bold text-2xl text-navy">
            Henerys <span className="text-coral">Custodio</span>
          </span>
        </Link>
        <nav className="ml-auto hidden lg:flex items-center gap-1 text-[15px] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                active === link.href
                  ? 'px-4 py-2 rounded-full text-coral font-semibold'
                  : 'px-4 py-2 rounded-full text-navy/75 hover:text-coral hover:bg-navy/5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="ml-auto lg:ml-0 btn-press shrink-0 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-bold text-cream shadow-[0_4px_14px_-2px_rgba(194,24,32,0.45)] hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200"
        >
          Trabajemos Juntos
        </Link>
      </div>
    </header>
  );
}
