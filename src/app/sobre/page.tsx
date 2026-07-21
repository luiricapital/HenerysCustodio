import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreMore from '@/components/ExploreMore';

export const metadata = {
  title: 'Sobre Henerys Custodio',
  description: '[PLACEHOLDER] Trayectoria, historia y propósito de Henerys Custodio.',
};

export default function SobrePage() {
  return (
    <>
      <Header active="/sobre" />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end overflow-hidden bg-navy-deep pt-32">
        <Image src="/images/henerys-portrait.png" alt="Henerys Custodio" fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <h1 className="max-w-2xl font-sans font-extrabold text-cream text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Liderazgo, formación y rigor al servicio de la transformación institucional.
          </h1>
          <p className="mt-5 max-w-xl text-cream/75 leading-[1.7]">[PLACEHOLDER] Una trayectoria de más de 15 años transformando el ecosistema emprendedor a través de la formación, la estrategia y el acompañamiento institucional.</p>
        </div>
      </section>

      {/* Roles actuales */}
      <section className="py-14 bg-cream-2 border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-navy/50 text-center">DÓNDE ME PUEDES VER TRABAJAR</p>
          <h2 className="mt-3 text-center font-sans font-bold text-2xl text-navy">Roles actuales</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl bg-white border border-navy/10 p-5 text-center">
              <p className="font-bold text-navy">CEMPRENDE</p>
              <p className="mt-1 text-xs text-navy/60">Director — UNAPEC</p>
            </div>
            <div className="rounded-xl bg-white border border-navy/10 p-5 text-center">
              <p className="font-bold text-navy">RD Emprende</p>
              <p className="mt-1 text-xs text-navy/60">Tesorero 2026–2027</p>
            </div>
            <div className="rounded-xl bg-white border border-navy/10 p-5 text-center">
              <p className="font-bold text-navy">EMDES Foundation</p>
              <p className="mt-1 text-xs text-navy/60">Fundador</p>
            </div>
            <div className="rounded-xl bg-white border border-navy/10 p-5 text-center">
              <p className="font-bold text-navy">[PLACEHOLDER]</p>
              <p className="mt-1 text-xs text-navy/60">[Rol / Institución]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">HISTORIA</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">15 años de campo. Cero teoría vacía.</h2>

          <div className="mt-8 space-y-5 text-navy/70 leading-[1.8]">
            <p>[PLACEHOLDER] La historia de Henerys Custodio no se define por dónde comenzó, sino por cómo aprendió a acompañar, formar y medir resultados donde otros solo inspiraban.</p>
            <blockquote className="border-l-4 border-coral pl-5 italic font-display text-xl text-navy py-2">
              &ldquo;[PLACEHOLDER] Frase o cita representativa de Henerys.&rdquo;
            </blockquote>
            <p>[PLACEHOLDER] Su trayectoria se ha desarrollado a lo largo de todo el ciclo del emprendimiento — desde la formación hasta la certificación institucional — lo que le permitió desarrollar una visión integral poco común.</p>
            <p>Con el tiempo, identificó un patrón constante: <span className="font-semibold text-navy">los ecosistemas no fallan por falta de ideas, sino por falta de estructura, formación y rigor.</span></p>
          </div>
        </div>
      </section>

      {/* Lo que hago hoy */}
      <section className="py-20 sm:py-28 bg-cream-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">LO QUE HAGO HOY</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Muchos roles, una misma misión.</h2>
          <p className="mt-3 max-w-xl text-navy/60">Cada camino es un capítulo de la misma historia. Abre el que viniste a buscar.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">CONFERENCISTA</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">Keynotes y paneles</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Charlas que convierten la formación en emprendimiento en acción institucional real.</p>
              <Link href="/speaker" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Ver keynotes →</Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">ESTRATEGA</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">[PLACEHOLDER] Rol / Cargo</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">[PLACEHOLDER] Descripción breve del rol.</p>
              <Link href="/consultoria" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Ver enfoque →</Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">CONSULTOR INSTITUCIONAL</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">EMDES Foundation</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Fundador: estructura real detrás del discurso del emprendimiento.</p>
              <Link href="/consultoria" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Ver servicios →</Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">PROFESOR & MENTOR</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">CEMPRENDE · UNAPEC</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Formo instituciones que saben certificar, no solo enseñar.</p>
              <Link href="/sobre" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Ver formación →</Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">ALIANZAS</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">Colaboraciones institucionales</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Trabajo con instituciones que construyen ecosistema real, no solo visibilidad.</p>
              <Link href="/contacto" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Cómo trabajar juntos →</Link>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
              <p className="text-xs font-bold tracking-wide text-coral">MEDIA</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">Prensa y cobertura</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">[PLACEHOLDER] Medios, podcasts y escenarios donde ha participado.</p>
              <Link href="/contacto" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coral hover:underline">Ver media →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">RECONOCIMIENTOS</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Autoridad construida con impacto real.</h2>
          <p className="mt-3 max-w-2xl text-navy/60 leading-[1.7]">[PLACEHOLDER] La credibilidad de Henerys se sustenta en una trayectoria sólida de más de 15 años liderando proyectos y formación en el ecosistema emprendedor.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['Premio Nacional de la Juventud', 'República Dominicana, 2020'],
              ['Certificación LEGO® SERIOUS PLAY®', '2022'],
              ['Jurado internacional — Enactus Colombia', '2025'],
              ['Tesorero — Consejo Directivo RD Emprende', '2026–2027'],
              ['[PLACEHOLDER] Reconocimiento', '[Entidad, año]'],
              ['[PLACEHOLDER] Reconocimiento', '[Entidad, año]'],
            ].map(([title, sub]) => (
              <div key={title} className="rounded-xl bg-cream-2 p-5 flex items-start gap-3">
                <svg className="w-8 h-8 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.6-6.3 4.6 2.3-7.2-6-4.6h7.6z" /></svg>
                <div>
                  <p className="font-semibold text-navy text-sm">{title}</p>
                  <p className="text-xs text-navy/50 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre este blog */}
      <section className="py-16 md:py-20 bg-navy text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">SOBRE ESTE BLOG</p>
          <h2 className="mt-4 font-sans font-extrabold text-[26px] sm:text-[34px] leading-[1.15] tracking-[-0.02em]">Notas del doctorado</h2>
          <p className="mt-4 text-cream/70 leading-[1.7]">[PLACEHOLDER] Este espacio documenta el proceso doctoral de Henerys Custodio — avances, lecturas y reflexiones sobre emprendimiento institucional y desarrollo de ecosistemas, publicados semanalmente.</p>
          <Link href="/blog" className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">
            Ver el Blog
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream-2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">PREGUNTAS FRECUENTES</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[36px] leading-[1.15] tracking-[-0.02em] text-navy">Sobre Henerys — Preguntas Frecuentes</h2>

          <div className="mt-10 space-y-3">
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Cuál es la trayectoria profesional de Henerys?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta.</p>
            </details>
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Qué instituciones ha fundado?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta.</p>
            </details>
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Dónde enseña actualmente?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta.</p>
            </details>
          </div>
        </div>
      </section>

      <ExploreMore
        items={[
          { href: '/speaker', title: 'Charlas & Keynotes', desc: 'Temas, formatos y eventos.' },
          { href: '/consultoria', title: 'Consultoría', desc: 'Servicios estratégicos institucionales.' },
          { href: '/contacto', title: 'Contacto', desc: 'Cuéntame de tu proyecto.' },
        ]}
      />

      <Footer />
    </>
  );
}
