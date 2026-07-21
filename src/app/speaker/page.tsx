import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExploreMore from '@/components/ExploreMore';

export const metadata = {
  title: 'Speaker',
  description: '[PLACEHOLDER] Henerys Custodio, speaker internacional en emprendimiento institucional.',
};

const temas = [
  { title: 'El futuro del emprendimiento en la era de la IA', para: 'Directivos institucionales, líderes de ecosistema', duracion: '45–60 min' },
  { title: 'Cómo certificar tu ecosistema sin caer en el hype', para: 'Rectores, directores de innovación, cámaras', duracion: '45–60 min' },
  { title: 'Formación real vs. discurso motivacional', para: 'Formadores, mentores, incubadoras', duracion: '30–45 min' },
  { title: '[PLACEHOLDER] Nombre del tema 4', para: '[Público objetivo]', duracion: '[XX–XX min]' },
  { title: '[PLACEHOLDER] Nombre del tema 5', para: '[Público objetivo]', duracion: '[XX–XX min]' },
  { title: '[PLACEHOLDER] Nombre del tema 6', para: '[Público objetivo]', duracion: '[XX–XX min]' },
];

export default function SpeakerPage() {
  return (
    <>
      <Header active="/speaker" />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end overflow-hidden bg-navy-deep pt-32">
        <Image src="/images/henerys-stage.png" alt="Henerys Custodio en escenario" fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <h1 className="max-w-2xl font-sans font-extrabold text-cream text-[30px] sm:text-[46px] leading-[1.1] tracking-[-0.02em]">
            Speaker Internacional en Emprendimiento Institucional &amp; Certificación de Ecosistemas
          </h1>
          <p className="mt-5 max-w-xl text-cream/75 leading-[1.7]">Charlas que no son motivacionales. Son accionables. +15 años ejecutando proyectos reales en el ecosistema emprendedor.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-press inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">Solicitar Disponibilidad</Link>
            <a href="#temas" className="btn-press inline-flex items-center gap-2 rounded-xl border border-cream/30 px-6 py-3.5 text-sm font-bold text-cream hover:bg-cream/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream transition-all duration-200">Ver Temas</a>
          </div>
        </div>
      </section>

      {/* Video demo */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <img src="/images/placeholder-video.svg" alt="[PLACEHOLDER] Video demo de keynote" className="w-full rounded-2xl shadow-[0_20px_50px_-15px_rgba(13,28,56,0.25)]" />
          <p className="mt-4 text-center text-sm text-navy/50">[PLACEHOLDER] Países donde ha dado charlas: República Dominicana · [otros países]</p>
        </div>
      </section>

      {/* Temas */}
      <section id="temas" className="py-16 md:py-24 bg-cream-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">MIS CHARLAS</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[28px] sm:text-[40px] leading-[1.15] tracking-[-0.02em] text-navy">Temas que cubro</h2>
          <p className="mt-3 max-w-xl mx-auto text-center text-navy/60">Cada charla se adapta a tu audiencia y objetivos institucionales.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {temas.map((tema, i) => (
              <div key={tema.title} className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_-10px_rgba(13,28,56,0.12)]">
                <span className="font-display text-3xl font-bold text-coral/30">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-bold text-navy leading-snug">{tema.title}</h3>
                <p className="mt-3 text-xs font-semibold text-navy/50">PARA QUIÉN</p>
                <p className="text-sm text-navy/70">{tema.para}</p>
                <p className="mt-2 text-xs font-semibold text-navy/50">DURACIÓN</p>
                <p className="text-sm text-navy/70">{tema.duracion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">FORMATOS</p>
          <h2 className="mt-4 font-sans font-extrabold text-[26px] sm:text-[34px] leading-[1.15] tracking-[-0.02em] text-navy">Formatos disponibles</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-cream-2 border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy">Keynote (45–60 min)</span>
            <span className="rounded-full bg-cream-2 border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy">Workshop (90–120 min)</span>
            <span className="rounded-full bg-cream-2 border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy">Panel / Moderación</span>
            <span className="rounded-full bg-cream-2 border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy">Masterclass (medio día)</span>
            <span className="rounded-full bg-cream-2 border border-navy/10 px-5 py-2.5 text-sm font-medium text-navy">Fireside chat</span>
          </div>
          <p className="mt-5 text-sm text-navy/50">Idioma: Español · Modalidad: Presencial o virtual</p>
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-16 md:py-24 bg-navy text-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.2em] text-coral text-center">CREDENCIALES</p>
          <h2 className="mt-4 text-center font-sans font-extrabold text-[26px] sm:text-[36px] leading-[1.15] tracking-[-0.02em]">Experiencia</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              '+15 años gestionando proyectos de emprendimiento en República Dominicana',
              'Director del Centro de Emprendimiento — CEMPRENDE, UNAPEC',
              'Tesorero del Consejo Directivo de RD Emprende, 2026–2027',
              'Fundador: EMDES Foundation & Sello EMORE',
              'Certificación LEGO® SERIOUS PLAY®',
              '[PLACEHOLDER] Credencial adicional',
            ].map((text) => (
              <p key={text} className="flex items-start gap-3 text-cream/80"><svg className="w-5 h-5 text-coral shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-2">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-navy">¿Listo para confirmar?</h2>
          <p className="mt-3 text-navy/60">Cuéntame de tu evento y conversamos sobre disponibilidad.</p>
          <Link href="/contacto" className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3.5 text-sm font-bold text-cream hover:bg-coral-deep active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200">
            Solicitar Disponibilidad
          </Link>
        </div>
      </section>

      <ExploreMore
        items={[
          { href: '/consultoria', title: 'Consultoría', desc: 'Servicios estratégicos institucionales.' },
          { href: '/sobre', title: 'Sobre Henerys', desc: 'Trayectoria, premios y propósito.' },
          { href: '/contacto', title: 'Contacto', desc: 'Cuéntame de tu proyecto.' },
        ]}
      />

      <Footer />
    </>
  );
}
