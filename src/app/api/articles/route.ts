import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Force dynamic for API routes in static export
export const dynamic = 'force-dynamic';

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

interface CreateArticleRequest {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
}

// Helper function to read articles from JSON file
async function readArticles(): Promise<Article[]> {
  try {
    const articlesPath = path.join(process.cwd(), 'src/lib/articles.json');
    const fileContent = await fs.readFile(articlesPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    // If file doesn't exist or is malformed, return empty array
    return [];
  }
}

// Helper function to write articles to JSON file
async function writeArticles(articles: Article[]): Promise<void> {
  try {
    const articlesPath = path.join(process.cwd(), 'src/lib/articles.json');
    const dirPath = path.dirname(articlesPath);
    
    // Ensure directory exists
    await fs.mkdir(dirPath, { recursive: true });
    
    await fs.writeFile(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');
  } catch {
    throw new Error('Failed to write articles file');
  }
}

// Helper function to generate URL-friendly slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper function to generate unique ID
function generateId(existingArticles: Article[]): number {
  if (existingArticles.length === 0) return 1;
  const maxId = Math.max(...existingArticles.map(article => article.id));
  return maxId + 1;
}

// Helper function to ensure unique slug
function ensureUniqueSlug(baseSlug: string, existingArticles: Article[]): string {
  let slug = baseSlug;
  let counter = 1;
  
  while (existingArticles.some(article => article.slug === slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  return slug;
}

// Validation function
function validateArticleData(data: CreateArticleRequest): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.title || typeof data.title !== 'string' || data.title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string');
  }
  
  if (!data.excerpt || typeof data.excerpt !== 'string' || data.excerpt.trim().length === 0) {
    errors.push('Excerpt is required and must be a non-empty string');
  }
  
  if (!data.content || typeof data.content !== 'string' || data.content.trim().length === 0) {
    errors.push('Content is required and must be a non-empty string');
  }
  
  if (!data.category || typeof data.category !== 'string' || data.category.trim().length === 0) {
    errors.push('Category is required and must be a non-empty string');
  }
  
  if (data.image && typeof data.image !== 'string') {
    errors.push('Image must be a string URL');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// GET method - Return all articles
export async function GET() {
  try {
    const articles = await readArticles();
    
    const responseData = {
      success: true,
      data: {
        articles: articles.map(article => ({
          id: article.id,
          title: article.title,
          excerpt: article.excerpt,
          slug: article.slug,
          category: article.category,
          date: article.date,
          url: `/blog/${article.slug}`
        }))
      }
    };
    
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch articles',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST method - Add new article
export async function POST(request: NextRequest) {
  try {
    const body: CreateArticleRequest = await request.json();
    
    // Validate input data
    const validation = validateArticleData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors
        },
        { status: 400 }
      );
    }
    
    // Read existing articles
    const existingArticles = await readArticles();
    
    // Generate new article data
    const baseSlug = generateSlug(body.title);
    const uniqueSlug = ensureUniqueSlug(baseSlug, existingArticles);
    const newId = generateId(existingArticles);
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    const newArticle: Article = {
      id: newId,
      title: body.title.trim(),
      excerpt: body.excerpt.trim(),
      content: body.content.trim(),
      category: body.category.trim(),
      date: currentDate,
      slug: uniqueSlug,
      image: body.image || ''
    };
    
    // Add new article to the beginning of the array (newest first)
    const updatedArticles = [newArticle, ...existingArticles];
    
    // Write updated articles back to file
    await writeArticles(updatedArticles);
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Article created successfully',
        data: {
          id: newArticle.id,
          slug: newArticle.slug,
          url: `/blog/${newArticle.slug}`
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid JSON format in request body'
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create article',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

