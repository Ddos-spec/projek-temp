# Update: Migrasi ke Blog Markdown Lokal

Proyek ini telah dimigrasi untuk menggunakan koleksi Markdown lokal di `src/content/blog` dan TIDAK lagi memakai API atau `articles.json`.

Perubahan utama:
- Hapus endpoint `/api/articles` (GET/POST) beserta seluruh referensinya.
- Hapus `src/lib/articles.json`.
- Halaman `/blog` dan `/blog/[slug]` kini membaca langsung file `.md`.

Cara menambah artikel baru:
1. Buat file baru: `src/content/blog/slug-anda.md`
2. Isi frontmatter wajib:
   - `title`: string
   - `date`: YYYY-MM-DD
   - `excerpt`: string
   - `category`: string
   - `image`: string (URL/emoji/path publik)
   - `slug`: string (HARUS sama dengan nama file tanpa `.md`)
3. Commit dan push. Selesai.

Catatan:
- Contoh ada di `src/content/blog/sample-article.md`.