# Update Documentation - N8N Integration untuk Artikel Otomatis

## Perubahan yang Telah Diimplementasikan

### 1. Struktur File Baru
- `src/lib/articles.json` - Data storage untuk artikel
- `src/app/api/articles/route.ts` - API endpoint untuk CRUD artikel
- `src/app/api/deploy/route.ts` - Webhook endpoint untuk deploy actions

### 2. Modifikasi File Existing
- `src/app/blog/page.tsx` - Updated untuk menggunakan data dari articles.json
- `src/app/blog/[slug]/page.tsx` - Updated untuk dynamic routing dari articles.json
- `next.config.ts` - Removed static export untuk memungkinkan API routes

### 3. Fitur yang Ditambahkan

#### API Endpoints
- **GET /api/articles** - Mengambil semua artikel
- **POST /api/articles** - Menambah artikel baru
- **GET /api/deploy** - Health check deploy endpoint
- **POST /api/deploy** - Webhook untuk deploy actions

#### Helper Functions
- `readArticles()` - Membaca artikel dari JSON file
- `writeArticles()` - Menulis artikel ke JSON file
- `generateSlug()` - Generate URL-friendly slug
- `generateId()` - Generate unique ID
- `ensureUniqueSlug()` - Memastikan slug unik

#### Validasi & Error Handling
- Validasi semua required fields
- Proper HTTP status codes
- Descriptive error messages
- File system error handling

### 4. Testing Scenarios yang Didukung
- First article (articles.json belum exist)
- Add article (articles.json sudah ada)
- Duplicate title (generate unique slug)
- Invalid data (missing required fields)
- Large content (artikel dengan konten panjang)
- Special characters (title dengan karakter khusus)

### 5. N8N Integration Ready

#### POST Request ke /api/articles
```json
{
  "title": "Article Title",
  "excerpt": "Article excerpt...",
  "content": "Full article content...",
  "category": "Category Name",
  "image": "https://image-url.com/image.jpg"
}
```

#### Response dari /api/articles
```json
{
  "success": true,
  "message": "Article created successfully",
  "data": {
    "id": 123,
    "slug": "article-title",
    "url": "/blog/article-title"
  }
}
```

### 6. Deployment Notes
- Project siap untuk deployment dengan API routes
- Tidak menggunakan static export untuk memungkinkan server-side functionality
- Compatible dengan hosting yang mendukung Node.js (Vercel, Netlify Functions, dll)

### 7. Security Features
- Input validation untuk semua fields
- Sanitization untuk slug generation
- Safe file operations dengan error handling
- TypeScript types untuk type safety

## Cara Penggunaan

1. **Deploy project** ke hosting yang mendukung Next.js API routes
2. **Setup N8N workflow** dengan endpoint: `https://domain.com/api/articles`
3. **Test API** menggunakan Postman atau curl
4. **Integrate dengan GitHub** untuk auto-deployment

## Testing Commands

```bash
# Install dependencies
npm install

# Build project
npm run build

# Run development server
npm run dev

# Test API endpoint
curl -X POST https://domain.com/api/articles \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Article","excerpt":"Test excerpt","content":"Test content","category":"Test"}'
```

Project telah siap untuk integrasi dengan N8N dan auto-deployment workflow.

