import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cream-2 border-t border-navy/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-4 gap-10">
        <div className="sm:col-span-1">
          <span className="font-display font-bold text-xl text-navy">
            Henerys <span className="text-coral">Custodio</span>
          </span>
          <p className="mt-3 text-sm text-navy/60 leading-[1.7]">[PLACEHOLDER] Estratega y consultor en emprendimiento institucional.</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.15em] text-navy/50">NAVEGACIÓN</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/sobre" className="text-navy/70 hover:text-coral transition-colors duration-200">Sobre Henerys</Link></li>
            <li><Link href="/consultoria" className="text-navy/70 hover:text-coral transition-colors duration-200">Consultoría</Link></li>
            <li><Link href="/speaker" className="text-navy/70 hover:text-coral transition-colors duration-200">Speaker</Link></li>
            <li><Link href="/blog" className="text-navy/70 hover:text-coral transition-colors duration-200">Blog</Link></li>
            <li><Link href="/contacto" className="text-navy/70 hover:text-coral transition-colors duration-200">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.15em] text-navy/50">SOBRE HENERYS</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="text-navy/70">[PLACEHOLDER] Director CEMPRENDE — UNAPEC</span></li>
            <li><span className="text-navy/70">[PLACEHOLDER] Tesorero RD Emprende</span></li>
            <li><span className="text-navy/70">[PLACEHOLDER] Fundador EMDES Foundation</span></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.15em] text-navy/50">CONTACTO</p>
          <p className="mt-3 text-sm text-navy/70">[PLACEHOLDER]@heneryscustodio.com</p>
          <p className="mt-2 text-sm text-navy/70">Santo Domingo, República Dominicana</p>
          <p className="mt-2 text-sm text-navy/50">Lunes–Viernes 8:00 am – 5:00 pm</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-navy/15 flex items-center justify-center text-navy/60 hover:text-coral hover:border-coral/40 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-navy/15 flex items-center justify-center text-navy/60 hover:text-coral hover:border-coral/40 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs text-navy/40">Copyright © 2026 Henerys Custodio.</p>
      </div>
    </footer>
  );
}
