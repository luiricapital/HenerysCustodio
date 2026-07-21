import Link from 'next/link';

type Item = { href: string; title: string; desc: string };

export default function ExploreMore({ items, dark = true }: { items: Item[]; dark?: boolean }) {
  if (dark) {
    return (
      <section className="py-16 md:py-20 bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-sans font-bold text-2xl">Sigue explorando</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl bg-cream/5 border border-cream/10 p-5 hover:bg-cream/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-cream/60">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-cream-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-sans font-bold text-2xl text-navy">Sigue explorando</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl bg-white border border-navy/10 p-5 hover:shadow-[0_8px_24px_-10px_rgba(13,28,56,0.15)] transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <p className="font-semibold text-navy">{item.title}</p>
              <p className="mt-1 text-sm text-navy/60">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
