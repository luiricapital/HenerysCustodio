import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/lib/notion';

export const revalidate = 3600;

function formatDate(iso: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const result = await getPostBySlug(params.slug);
  if (!result) return {};
  return {
    title: result.post.title,
    description: result.post.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const result = await getPostBySlug(params.slug);
  if (!result) notFound();

  const { post, markdown } = result;

  return (
    <>
      <Header active="/blog" />

      <article className="pt-40 pb-20 md:pb-28 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <Link href="/blog" className="text-sm font-semibold text-coral hover:underline">← Volver al blog</Link>
          <p className="mt-6 text-xs font-semibold tracking-wide text-navy/50">{formatDate(post.date)}</p>
          <h1 className="mt-2 font-display font-bold text-[32px] sm:text-[42px] leading-[1.15] tracking-[-0.02em] text-navy">{post.title}</h1>

          <div className="prose-henerys mt-10 text-navy/80 leading-[1.7] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1.5 [&_a]:text-coral [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-coral [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-navy [&_code]:bg-cream-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_img]:rounded-xl [&_img]:my-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
