import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreMore from '@/components/ExploreMore';

export const metadata = {
  title: 'Contacto',
  description: '[PLACEHOLDER] Contacta a Henerys Custodio para charlas, consultoría o alianzas institucionales.',
};

export default function ContactoPage() {
  return (
    <>
      <Header active="/contacto" />

      {/* Hero */}
      <section className="relative min-h-[360px] flex items-end overflow-hidden bg-navy-deep pt-32">
        <Image src="/images/henerys-portrait.png" alt="Henerys Custodio" fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <h1 className="max-w-2xl font-sans font-extrabold text-cream text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Conversa conmigo: abre la puerta a la certificación
          </h1>
          <p className="mt-5 max-w-xl text-cream/75 leading-[1.7]">Estoy listo para acompañarte en tu proceso de certificación institucional, liderar tu próximo proyecto o formar a tu equipo.</p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="text-cream">
            <p className="text-xs font-bold tracking-[0.2em] text-coral">HABLEMOS</p>
            <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[38px] leading-[1.15] tracking-[-0.02em]">
              Cuéntame sobre tu <span className="italic font-display text-coral">próximo proyecto</span>
            </h2>
            <p className="mt-4 text-cream/70 leading-[1.7]">Respondo personalmente cada mensaje en 2–3 días hábiles. Mientras más contexto, mejor la propuesta.</p>

            <p className="mt-8 text-sm font-bold tracking-wide text-cream/50">CONTACTA CONMIGO SI:</p>
            <div className="mt-4 space-y-4">
              <p className="flex items-start gap-3 text-cream/80 text-sm"><span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-xs font-bold">1</span>Tienes preguntas sobre emprendimiento institucional, certificación o liderazgo.</p>
              <p className="flex items-start gap-3 text-cream/80 text-sm"><span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-xs font-bold">2</span>Eres una institución y buscas una colaboración estratégica donde todos ganen.</p>
              <p className="flex items-start gap-3 text-cream/80 text-sm"><span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-xs font-bold">3</span>Necesitas un speaker o profesor invitado para un evento o programa académico.</p>
              <p className="flex items-start gap-3 text-cream/80 text-sm"><span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-xs font-bold">4</span>Quieres contratarme como consultor en emprendimiento institucional.</p>
            </div>
            <p className="mt-6 text-sm text-cream/50">[PLACEHOLDER] Si tienes una pregunta breve, también puedes escribirme por LinkedIn.</p>
          </div>

          <form className="rounded-2xl bg-cream p-6 sm:p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)]">
            <p className="text-xs font-bold tracking-[0.15em] text-coral">FORMULARIO DIRECTO</p>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-navy mb-1.5">Me llamo</label>
                <input type="text" id="nombre" name="nombre" autoComplete="name" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">Mi correo electrónico es</label>
                <input type="email" id="email" name="email" autoComplete="email" className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow duration-200" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-navy mb-1.5">Y quiero preguntarle a Henerys</label>
                <textarea id="mensaje" name="mensaje" rows={4} maxLength={2000} className="w-full rounded-lg border border-navy/15 px-4 py-2.5 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-shadow duration-200 resize-none" />
              </div>
            </div>
            <button type="submit" className="btn-press mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-6 py-3.5 text-sm font-bold text-cream shadow-[0_10px_24px_-6px_rgba(194,24,32,0.5)] hover:bg-coral-deep active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200">
              Enviar Mensaje
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
            <p className="mt-3 text-center text-xs text-navy/50">¡Espero tus noticias!</p>
          </form>
        </div>
      </section>

      {/* Info de contacto */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="rounded-xl bg-cream-2 p-5">
            <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18v12H3z" /><path d="M3 7l9 6 9-6" /></svg>
            <p className="mt-3 text-xs font-bold tracking-wide text-navy/50">ESCRÍBEME</p>
            <p className="mt-1 text-sm font-medium text-navy">[PLACEHOLDER]@heneryscustodio.com</p>
          </div>
          <div className="rounded-xl bg-cream-2 p-5">
            <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.3a2 2 0 012.1-.5c1 .3 2 .5 3 .7a2 2 0 011.7 2z" /></svg>
            <p className="mt-3 text-xs font-bold tracking-wide text-navy/50">LLAMADA O WHATSAPP</p>
            <p className="mt-1 text-sm font-medium text-navy">[PLACEHOLDER] +1 (___) ___-____</p>
          </div>
          <div className="rounded-xl bg-cream-2 p-5">
            <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" /></svg>
            <p className="mt-3 text-xs font-bold tracking-wide text-navy/50">CONECTÉMONOS EN</p>
            <p className="mt-1 text-sm font-medium text-navy">LinkedIn</p>
          </div>
          <div className="rounded-xl bg-cream-2 p-5">
            <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></svg>
            <p className="mt-3 text-xs font-bold tracking-wide text-navy/50">NEWSLETTER</p>
            <p className="mt-1 text-sm font-medium text-navy">[PLACEHOLDER] Próximamente</p>
          </div>
          <div className="rounded-xl bg-cream-2 p-5">
            <svg className="w-6 h-6 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
            <p className="mt-3 text-xs font-bold tracking-wide text-navy/50">TIEMPO DE RESPUESTA</p>
            <p className="mt-1 text-sm font-medium text-navy">2–3 días hábiles</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream-2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">FAQ</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[36px] leading-[1.15] tracking-[-0.02em] text-navy">Preguntas frecuentes</h2>

          <div className="mt-10 space-y-3">
            {[
              '¿En qué idioma imparte Henerys sus conferencias y talleres?',
              '¿Las charlas están dirigidas solo a perfiles académicos?',
              '¿Las conferencias se personalizan?',
              '¿Con cuánta anticipación se recomienda reservar?',
              '¿Henerys viaja fuera de Santo Domingo?',
            ].map((q) => (
              <details key={q} className="group rounded-xl bg-white border border-navy/10 px-5 py-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                  {q}
                  <svg className="w-5 h-5 text-coral shrink-0 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Media kit CTA */}
      <section className="py-16 bg-navy text-cream text-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-sans font-bold text-xl sm:text-2xl">¿Organizas un evento?</h2>
          <p className="mt-3 text-cream/70">Descarga el media kit con biografía, fotos profesionales y todo lo que necesitas para promover la participación de Henerys.</p>
          <a href="#" className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">
            Descargar Media Kit
          </a>
        </div>
      </section>

      <ExploreMore
        dark={false}
        items={[
          { href: '/speaker', title: 'Charlas & Keynotes', desc: 'Temas, formatos y eventos.' },
          { href: '/consultoria', title: 'Consultoría', desc: 'Servicios estratégicos institucionales.' },
          { href: '/sobre', title: 'Sobre Henerys', desc: 'Trayectoria, premios y propósito.' },
        ]}
      />

      <Footer />
    </>
  );
}
