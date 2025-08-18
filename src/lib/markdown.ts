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
  published?: boolean; // Optional: true if published, false or undefined if draft
};

export type PostMeta = PostFrontmatter & {
  // no extra fields for now
};

export type Post = PostMeta & {
  contentHtml: string;
};

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

async function ensureDir(): Promise<void> {
  await fs.mkdir(BLOG_DIR, { recursive: true });
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await ensureDir();
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  try {
    const file = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(file);

    // Type guard for frontmatter
    const frontmatter = data as Record<string, unknown>;

    // Validate required fields
    const required = ['title', 'date', 'excerpt', 'category', 'image', 'slug'] as const;
    for (const key of required) {
      const value = frontmatter[key];
      if (typeof value !== 'string' || !value.trim()) {
        throw new Error(`Frontmatter '${key}' wajib ada dan berupa string non-kosong pada ${slug}.md`);
      }
    }

    // Pastikan slug di frontmatter konsisten dengan nama file
    if (frontmatter.slug !== slug) {
      throw new Error(`Frontmatter slug ('${frontmatter.slug}') harus sama dengan nama file ('${slug}')`);
    }

    const html = marked.parse(content);

    const meta: PostMeta = {
      title: frontmatter.title as string,
      date: frontmatter.date as string,
      excerpt: frontmatter.excerpt as string,
      category: frontmatter.category as string,
      image: frontmatter.image as string,
      slug: frontmatter.slug as string,
      published: frontmatter.published === true, // Default to false if not present
    };

    return {
      ...meta,
      contentHtml: typeof html === 'string' ? html : String(html),
    };
  } catch (_e) {
    // Jika file tidak ditemukan atau error parsing
    return null;
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  await ensureDir();
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => e.name.replace(/\.md$/, ''));

  const posts: PostMeta[] = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post && post.published) { // Only include published posts
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contentHtml, ...meta } = post;
      posts.push(meta);
    }
  }
  // Urutkan terbaru dulu berdasarkan date (YYYY-MM-DD)
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}