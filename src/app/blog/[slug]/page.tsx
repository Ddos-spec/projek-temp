import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '@/lib/markdown';
import type { Metadata } from 'next';

export type PageProps = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Artikel Tidak Ditemukan' };
  }
  return {
    title: `${post.title} - Raja Freeze Dried Food`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Raja Freeze Dried Food'],
      images: post.image && post.image.startsWith('http') ? [post.image] : [],
      url: `/blog/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image && post.image.startsWith('http') ? [post.image] : [],
    },
  };
}

export default async function BlogPostDetail({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rajafreezdriedfood.com/blog/${post.slug}`,
    },
    ...(post.image && post.image.startsWith('http')
      ? { image: [post.image] }
      : {}),
    author: {
      "@type": "Organization",
      name: "Raja Freeze Dried Food",
    },
    publisher: {
      "@type": "Organization",
      name: "Raja Freeze Dried Food",
      logo: {
        "@type": "ImageObject",
        url: "https://rajafreezdriedfood.com/favicon.webp",
      },
    },
    description: post.excerpt,
  };

  return (
    <>
      <Header />
      {/* JSON-LD untuk Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8 text-center border-b pb-8">
              <p className="text-base text-gray-500 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </header>

            {post.image && (
              <div className="mb-8">
                {post.image.startsWith('http') ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    sizes="(min-width: 768px) 800px, 100vw"
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    sizes="(min-width: 768px) 800px, 100vw"
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
            )}
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
              <p className="lead text-xl mb-6 font-medium text-gray-800">{post.excerpt}</p>
              <div 
                className="article-content prose-headings:scroll-mt-24"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </div>

            <footer className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Kategori:</p>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Dipublikasikan:</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </footer>
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
