import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type PostFrontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  category: string;
  image: string; // URL, emoji, or public path
  slug: string; // required and should match file name
};

export type PostMeta = PostFrontmatter & {
  // no extra fields for now
};

export type Post = PostMeta & {
  contentHtml: string;
};

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

async function ensureDir(): Promise&lt;void&gt; {
  await fs.mkdir(BLOG_DIR, { recursive: true });
}

export async function getPostSlugs(): Promise&lt;string[]&gt; {
  await ensureDir();
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((e) =&gt; e.isFile() &amp;&amp; e.name.endsWith('.md'))
    .map((e) =&gt; e.name.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string): Promise&lt;Post | null&gt; {
  await ensureDir();
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  try {
    const file = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(file);

    // Validate required fields
    const required = ['title', 'date', 'excerpt', 'category', 'image', 'slug'] as const;
    for (const key of required) {
      if (!(key in data) || typeof (data as any)[key] !== 'string' || !(data as any)[key].trim()) {
        throw new Error(`Frontmatter '${key}' wajib ada dan berupa string non-kosong pada ${slug}.md`);
      }
    }

    // Pastikan slug di frontmatter konsisten dengan nama file
    if ((data as any).slug !== slug) {
      throw new Error(`Frontmatter slug ('${(data as any).slug}') harus sama dengan nama file ('${slug}')`);
    }

    const html = marked.parse(content);

    const meta: PostMeta = {
      title: (data as any).title,
      date: (data as any).date,
      excerpt: (data as any).excerpt,
      category: (data as any).category,
      image: (data as any).image,
      slug: (data as any).slug,
    };

    return {
      ...meta,
      contentHtml: typeof html === 'string' ? html : String(html),
    };
  } catch (e) {
    // Jika file tidak ditemukan atau error parsing
    return null;
  }
}

export async function getAllPosts(): Promise&lt;PostMeta[]&gt; {
  const slugs = await getPostSlugs();
  const posts: PostMeta[] = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) {
      const { contentHtml, ...meta } = post;
      posts.push(meta);
    }
  }
  // Urutkan terbaru dulu berdasarkan date (YYYY-MM-DD)
  posts.sort((a, b) =&gt; (a.date &lt; b.date ? 1 : a.date &gt; b.date ? -1 : 0));
  return posts;
}