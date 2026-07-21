import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreMore from '@/components/ExploreMore';

export default function HomePage() {
  return (
    <>
      <Header active="/" />

      {/* Hero */}
      <section className="relative min-h-[600px] md:min-h-[820px] flex items-end overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(194,24,32,0.12),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
            <div className="max-w-2xl">
              <h1 className="font-sans font-extrabold text-cream text-[38px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em]">
                ¿Buscas una keynote que mueva a tu institución, o estrategia para tu ecosistema?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-[1.7] text-cream/80">
                Soy Henerys Custodio. Doy charlas sobre emprendimiento institucional, estrategia y desarrollo de ecosistemas — y acompaño a organizaciones a estructurar su siguiente paso con rigor. Elige tu camino.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/speaker" className="btn-press inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream shadow-[0_8px_24px_-4px_rgba(194,24,32,0.5)] hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">
                  Contrátame Para Hablar
                </Link>
                <Link href="/consultoria" className="btn-press inline-flex items-center gap-2 rounded-xl border border-cream/30 px-6 py-3.5 text-sm font-bold text-cream hover:bg-cream/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">
                  Trabaja Conmigo
                </Link>
              </div>

              <p className="mt-14 text-xs sm:text-sm font-semibold tracking-[0.15em] text-cream/60 uppercase">
                Henerys Custodio <span className="text-coral">|</span> Estratega <span className="text-coral">|</span> Consultor Institucional <span className="text-coral">|</span> Emprendimiento &amp; Formación
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 rounded-3xl bg-coral/25 blur-3xl" />
              <Image src="/images/henerys-stage.png" alt="Henerys Custodio en escenario, charla de emprendimiento" width={640} height={520} className="relative w-full h-[520px] object-cover rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65)] ring-1 ring-cream/10" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Dos formas de trabajar */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">DOS FORMAS DE TRABAJAR CONMIGO</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[32px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-navy">
            Charlas para tu <span className="italic font-display text-coral">institución</span>.<br />
            Estrategia para tu <span className="italic font-display text-coral">ecosistema</span>.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-navy/60 leading-[1.7]">
            Elige tu camino. Trabajo con instituciones que quieren moverse en emprendimiento, formación y liderazgo — y con organizaciones que buscan claridad, estructura y certificación para su ecosistema.
          </p>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-navy p-8 sm:p-10 text-cream shadow-[0_20px_50px_-15px_rgba(13,28,56,0.4)]">
              <p className="text-xs font-bold tracking-[0.15em] text-coral">PARA ORGANIZACIONES</p>
              <h3 className="mt-4 font-sans font-bold text-2xl sm:text-3xl leading-tight">Contrátame para hablar.</h3>
              <p className="mt-4 text-cream/70 leading-[1.7]">Keynotes y workshops sobre emprendimiento institucional, estrategia y liderazgo para universidades, cámaras y organizaciones.</p>
              <ul className="mt-6 space-y-2 text-sm text-cream/80">
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>Keynotes (40–90 min)</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>Workshops ejecutivos</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>Paneles y masterclasses</li>
                <li className="flex items-center gap-2"><svg className="w-4 h-4 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>Presencial · RD, LATAM</li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/speaker" className="btn-press inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-2.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">Ver Temas</Link>
                <Link href="/contacto" className="btn-press inline-flex items-center gap-2 rounded-xl border border-cream/30 px-5 py-2.5 text-sm font-bold text-cream hover:bg-cream/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">Solicitar Propuesta</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-cream-2 border border-navy/10 p-8 sm:p-10 text-navy shadow-[0_12px_30px_-12px_rgba(13,28,56,0.15)]">
              <p className="text-xs font-bold tracking-[0.15em] text-coral">PARA INSTITUCIONES</p>
              <h3 className="mt-4 font-sans font-bold text-2xl sm:text-3xl leading-tight">Trabaja conmigo 1 a 1.</h3>
              <p className="mt-4 text-navy/65 leading-[1.7]">Programas para dar estructura, rigor y estrategia a tu institución — desde el diagnóstico hasta un plan de certificación completo.</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 border border-navy/10">
                  <span className="font-medium text-sm">[PLACEHOLDER] Nombre del programa 1</span>
                  <svg className="w-4 h-4 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 border border-navy/10">
                  <span className="font-medium text-sm">[PLACEHOLDER] Nombre del programa 2</span>
                  <svg className="w-4 h-4 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 border border-navy/10">
                  <span className="font-medium text-sm">[PLACEHOLDER] Nombre del programa 3</span>
                  <svg className="w-4 h-4 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/consultoria" className="btn-press inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-cream hover:bg-navy-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral transition-all duration-200">Comparar Programas</Link>
                <Link href="/contacto" className="btn-press inline-flex items-center gap-2 rounded-xl border border-navy/20 px-5 py-2.5 text-sm font-bold text-navy hover:bg-navy/5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200">Guía Gratis</Link>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-navy/50">¿No sabes cuál es para ti? <Link href="/consultoria" className="text-coral font-medium hover:underline">Compara los planes →</Link></p>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-16 bg-cream-2 overflow-hidden">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-navy/50">ALGUNAS INSTITUCIONES QUE HAN CONFIADO EN NOSOTROS</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 px-6 grayscale opacity-60">
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+1&font=roboto" alt="[PLACEHOLDER] Logo institución 1" className="h-8 sm:h-10 w-auto" />
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+2&font=roboto" alt="[PLACEHOLDER] Logo institución 2" className="h-8 sm:h-10 w-auto" />
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+3&font=roboto" alt="[PLACEHOLDER] Logo institución 3" className="h-8 sm:h-10 w-auto" />
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+4&font=roboto" alt="[PLACEHOLDER] Logo institución 4" className="h-8 sm:h-10 w-auto" />
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+5&font=roboto" alt="[PLACEHOLDER] Logo institución 5" className="h-8 sm:h-10 w-auto" />
          <img src="https://placehold.co/140x48/f3efe9/0d1c38?text=Logo+6&font=roboto" alt="[PLACEHOLDER] Logo institución 6" className="h-8 sm:h-10 w-auto" />
        </div>
      </section>

      {/* Impacto */}
      <section className="py-14 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(13,28,56,0.3)]">
            <Image src="/images/henerys-portrait.png" alt="Henerys Custodio" width={420} height={420} className="w-full h-[420px] object-cover" />
            <span className="absolute bottom-4 left-4 text-cream text-xs font-bold tracking-wide bg-navy/60 backdrop-blur px-3 py-1 rounded-full">#NOEMPRENDAS</span>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-coral">IMPACTO</p>
            <h2 className="mt-3 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">+15 años ejecutando, no solo presentando</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <p className="font-display text-4xl sm:text-5xl font-bold text-coral">+15</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-navy/60">AÑOS EN EL ECOSISTEMA</p>
              </div>
              <div>
                <p className="font-display text-4xl sm:text-5xl font-bold text-coral">[N]</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-navy/60">[PLACEHOLDER] MÉTRICA DE IMPACTO</p>
              </div>
              <div>
                <p className="font-display text-4xl sm:text-5xl font-bold text-coral">3</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-navy/60">REGIONES (RD · LATAM)</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-coral">PMP</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-navy/60">[PLACEHOLDER] + CREDENCIALES</p>
              </div>
            </div>
            <Link href="/sobre" className="btn-press mt-8 inline-flex items-center gap-2 rounded-xl border border-navy/20 px-5 py-2.5 text-sm font-bold text-navy hover:bg-navy/5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200">
              Conoce Mi Historia
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream-2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">PREGUNTAS COMUNES</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">¿Hablar o trabajar conmigo?</h2>

          <div className="mt-10 space-y-3">
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4 open:shadow-[0_8px_24px_-10px_rgba(13,28,56,0.15)]">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Debería contratarte para hablar o para un programa 1 a 1?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta sobre cuándo contratar una charla vs. un programa de consultoría.</p>
            </details>
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4 open:shadow-[0_8px_24px_-10px_rgba(13,28,56,0.15)]">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Qué incluye cada programa?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Detalle de qué incluye cada programa de consultoría o certificación.</p>
            </details>
            <details className="group rounded-xl bg-white border border-navy/10 px-5 py-4 open:shadow-[0_8px_24px_-10px_rgba(13,28,56,0.15)]">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                ¿Para quién es cada servicio?
                <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Perfil de instituciones/organizaciones para cada servicio.</p>
            </details>
          </div>
        </div>
      </section>

      <ExploreMore
        items={[
          { href: '/sobre', title: 'Sobre Henerys', desc: 'Trayectoria, hitos y propósito.' },
          { href: '/speaker', title: 'Charlas & Keynotes', desc: 'Temas, formatos y eventos.' },
          { href: '/consultoria', title: 'Consultoría', desc: 'Servicios estratégicos institucionales.' },
        ]}
      />

      <Footer />
    </>
  );
}
