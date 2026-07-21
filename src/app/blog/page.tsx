import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPublishedPosts } from '@/lib/notion';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog',
  description: 'Notas del proceso doctoral de Henerys Custodio — emprendimiento institucional y desarrollo de ecosistemas.',
};

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <Header active="/blog" />

      <section className="relative min-h-[320px] flex items-end overflow-hidden bg-navy-deep pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(194,24,32,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-coral">BLOG DOCTORAL</p>
          <h1 className="mt-4 max-w-2xl font-sans font-extrabold text-cream text-[32px] sm:text-[48px] leading-[1.1] tracking-[-0.02em]">
            Notas del doctorado
          </h1>
          <p className="mt-5 max-w-xl text-cream/75 leading-[1.7]">Avances, lecturas y reflexiones sobre emprendimiento institucional y desarrollo de ecosistemas.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-navy/60 leading-[1.7]">Aún no hay publicaciones. Vuelve pronto.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl bg-cream-2 border border-navy/10 p-6 sm:p-8 hover:shadow-[0_12px_30px_-12px_rgba(13,28,56,0.15)] transition-shadow duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                >
                  <p className="text-xs font-semibold tracking-wide text-navy/50">{formatDate(post.date)}</p>
                  <h2 className="mt-2 font-display font-bold text-2xl text-navy leading-snug">{post.title}</h2>
                  {post.excerpt && <p className="mt-3 text-navy/60 leading-[1.7]">{post.excerpt}…</p>}
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral">Leer más →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
