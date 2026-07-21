import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreMore from '@/components/ExploreMore';

export const metadata = {
  title: 'Consultoría',
  description: '[PLACEHOLDER] Asesoría estratégica institucional con Henerys Custodio.',
};

const ofertas = [
  {
    icon: <path d="M12 20l9-16H3z" />,
    title: 'Keynotes Institucionales',
    desc: 'Charlas magistrales de alto impacto para universidades, cámaras y gremios. Duración: 45–60 minutos.',
    items: ['Español', 'Presencial / Virtual / Híbrido', 'Material de apoyo incluido'],
  },
  {
    icon: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" /></>,
    title: 'Workshops Institucionales',
    desc: 'Talleres de alta interacción con ejercicios prácticos y aplicación inmediata. Sesiones de 4 horas a programas de varios días.',
    items: ['Diseño personalizado', 'Dinámicas prácticas', 'Plan de acción concreto'],
  },
  {
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6h5.4c0-.6.3-1.2.8-1.6A6 6 0 0012 3z" />,
    title: 'Asesoría Estratégica',
    desc: 'Acompañamiento personalizado para rediseñar la estrategia de certificación o estructura de gestión institucional.',
    items: ['Diagnóstico de madurez institucional', 'Planes de transformación', 'Sesiones ejecutivas'],
  },
  {
    icon: <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></>,
    title: 'Certificación Institucional',
    desc: 'Implementación y fortalecimiento de procesos de certificación para optimizar recursos y maximizar impacto.',
    items: ['Estructura de gobernanza', 'Metodologías propias', 'KPIs y métricas'],
  },
  {
    icon: <><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" /></>,
    title: 'Formación de Ecosistema',
    desc: 'Análisis de oportunidades, ética y gestión del cambio en procesos de formación emprendedora.',
    items: ['Enfoque humano', 'Casos de uso prácticos', 'Roadmap de implementación'],
  },
  {
    icon: <path d="M20.8 4.6a5 5 0 00-7.1 0L12 6.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 20.4l8.8-8.7a5 5 0 000-7.1z" />,
    title: '[PLACEHOLDER] Programa Adicional',
    desc: '[PLACEHOLDER] Descripción del servicio.',
    items: ['[Punto 1]', '[Punto 2]', '[Punto 3]'],
  },
];

export default function ConsultoriaPage() {
  return (
    <>
      <Header active="/consultoria" />

      {/* Hero */}
      <section className="relative min-h-[380px] flex items-end overflow-hidden bg-navy-deep pt-32">
        <Image src="/images/henerys-stage.png" alt="Henerys Custodio" fill className="object-cover opacity-85" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <h1 className="max-w-2xl font-sans font-extrabold text-cream text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Asesoría estratégica para instituciones que evolucionan.
          </h1>
          <p className="mt-5 max-w-xl text-cream/75 leading-[1.7]">Acompañamiento estratégico para líderes y equipos que buscan certificar y transformar su ecosistema de manera sostenible y rigurosa.</p>
          <Link href="/contacto" className="btn-press mt-7 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">
            Solicitar Propuesta
          </Link>
        </div>
      </section>

      {/* Oferta completa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">OFERTA COMPLETA</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Cómo puedo ayudarte</h2>
          <p className="mt-3 max-w-xl mx-auto text-center text-navy/60 leading-[1.7]">Soluciones integrales para los desafíos más complejos de la certificación y transformación institucional.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ofertas.map((o) => (
              <div key={o.title} className="rounded-2xl bg-cream-2 p-6 border border-navy/10">
                <span className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{o.icon}</svg>
                </span>
                <h3 className="mt-4 font-bold text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-navy/60 leading-[1.7]">{o.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-navy/70">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><svg className="w-3.5 h-3.5 text-coral shrink-0" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 md:py-24 bg-cream-2">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">METODOLOGÍA</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Cómo trabajo</h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <span className="mx-auto flex w-12 h-12 rounded-full bg-navy text-cream items-center justify-center font-display font-bold text-lg">1</span>
              <h3 className="mt-4 font-bold text-navy">Diagnóstico institucional</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Cada charla, taller o asesoría se construye a partir de tus objetivos y la realidad de tu institución.</p>
            </div>
            <div>
              <span className="mx-auto flex w-12 h-12 rounded-full bg-navy text-cream items-center justify-center font-display font-bold text-lg">2</span>
              <h3 className="mt-4 font-bold text-navy">Enfoque humano</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">La certificación es un medio; las personas son el centro. Trabajamos primero en la cultura y luego en el sello.</p>
            </div>
            <div>
              <span className="mx-auto flex w-12 h-12 rounded-full bg-navy text-cream items-center justify-center font-display font-bold text-lg">3</span>
              <h3 className="mt-4 font-bold text-navy">Impacto medible</h3>
              <p className="mt-2 text-sm text-navy/60 leading-[1.7]">Definimos métricas y resultados claros para que puedas ver y mostrar el retorno de la inversión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tu evolución */}
      <section className="py-16 md:py-24 bg-navy text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">TRANSFORMACIÓN</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em]">Tu evolución</h2>
          <p className="mt-3 text-cream/60">Lo que cambia cuando trabajamos juntos.</p>

          <div className="mt-10 rounded-2xl bg-cream/5 border border-cream/10 overflow-hidden">
            <div className="grid grid-cols-2 text-xs font-bold tracking-wide text-cream/50 border-b border-cream/10">
              <div className="px-6 py-3 text-left">ESTADO ACTUAL</div>
              <div className="px-6 py-3 text-left text-coral">ESTADO FUTURO</div>
            </div>
            <div className="divide-y divide-cream/10 text-sm text-left">
              {[
                ['Ecosistemas fragmentados', 'Instituciones certificadas'],
                ['Estructuras informales', 'Gobernanza rigurosa'],
                ['Reactivo ante problemas', 'Estratégico y proactivo'],
                ['Formación dispersa', 'Certificación con estándar'],
                ['Impacto no medido', 'KPIs y resultados claros'],
                ['Visibilidad limitada', 'Red iberoamericana de alianzas'],
              ].map(([before, after]) => (
                <div key={before} className="grid grid-cols-2"><div className="px-6 py-4">{before}</div><div className="px-6 py-4 font-medium">{after}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">POR QUÉ HENERYS</p>
          <h2 className="mt-4 font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Por qué trabajar conmigo</h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              'Experiencia real liderando proyectos y ecosistemas de emprendimiento',
              'Enfoque humano, claro y sin tecnicismos innecesarios',
              '[PLACEHOLDER] Reconocido internacionalmente',
              'Fundador de una de las comunidades de emprendimiento más rigurosas de RD',
              'Capacidad de conectar con públicos institucionales diversos',
              'Mensajes que forman y se ejecutan, no solo inspiran',
            ].map((text) => (
              <p key={text} className="flex items-start gap-3 text-navy/75"><svg className="w-5 h-5 text-coral shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-2">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-navy">¿Listo para iniciar la conversación?</h2>
          <p className="mt-3 text-navy/60">Agenda una charla, workshop o sesión estratégica. Cada encuentro se diseña según tus necesidades.</p>
          <Link href="/contacto" className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200">
            Solicitar Propuesta
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">PREGUNTAS FRECUENTES</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[36px] leading-[1.15] tracking-[-0.02em] text-navy">Consultoría — Preguntas Frecuentes</h2>

          <div className="mt-10 space-y-3">
            {[
              '¿Qué tipos de consultoría ofrece Henerys?',
              '¿Trabaja con instituciones fuera de República Dominicana?',
              '¿Cuál es la duración típica de un programa?',
              '¿Cómo arranca un proceso de consultoría?',
            ].map((q) => (
              <details key={q} className="group rounded-xl bg-cream-2 border border-navy/10 px-5 py-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-navy list-none">
                  {q}
                  <span className="shrink-0 w-6 h-6 rounded-full bg-coral text-cream flex items-center justify-center text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-navy/60 leading-[1.7] text-sm">[PLACEHOLDER] Respuesta.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore
        items={[
          { href: '/speaker', title: 'Charlas & Keynotes', desc: 'Temas, formatos y eventos.' },
          { href: '/sobre', title: 'Sobre Henerys', desc: 'Trayectoria, premios y propósito.' },
          { href: '/contacto', title: 'Contacto', desc: 'Cuéntame de tu proyecto.' },
        ]}
      />

      <Footer />
    </>
  );
}
