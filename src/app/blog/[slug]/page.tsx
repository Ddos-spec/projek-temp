import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

// Ini adalah cara standar dan paling benar untuk mendefinisikan props halaman
type PageProps = {
  params: {
    slug: string;
  };
};

async function getArticles(): Promise<Article[]> {
  try {
    const articlesPath = path.join(process.cwd(), 'src/lib/articles.json');
    const fileContent = await fs.readFile(articlesPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}

// Fungsi metadata ini PERLU async karena mengambil data dari file
export async function generateMetadata({ params }: PageProps) {
  const articles = await getArticles();
  const article = articles.find((a: Article) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${article.title} - Raja Freeze Dried Food`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['Raja Freeze Dried Food'],
      images: article.image ? [article.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  };
}

// Ini adalah komponen halaman yang PERLU async untuk mengambil data
export default async function BlogPostDetail({ params }: PageProps) {
  const { slug } = params;
  const articles = await getArticles();
  const article = articles.find((a: Article) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8 text-center border-b pb-8">
              <p className="text-base text-gray-500 mb-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{article.category}</span>
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {article.title}
              </h1>
            </header>

            {article.image && (
              <div className="mb-8">
                {article.image.startsWith('http') ? (
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-8xl mb-4">{article.image}</div>
                  </div>
                )}
              </div>
            )}
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
              <p className="lead text-xl mb-6 font-medium text-gray-800">{article.excerpt}</p>
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(/\n/g, '<br />') 
                }}
              />
            </div>

            <footer className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Kategori:</p>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Dipublikasikan:</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(article.date).toLocaleDateString("id-ID", {
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