/** @type {import('next').NextConfig} */

// Konfigurasi ini PENTING untuk deploy ke GitHub Pages
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

// Kita hanya set basePath dan assetPrefix jika proses build dijalankan oleh GitHub Actions
if (isGithubActions) {
  // Menambahkan fallback string kosong '' untuk menenangkan TypeScript
  const repo = (process.env.GITHUB_REPOSITORY || '').replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  // Wajib 'export' untuk website statis
  output: 'export',
  
  // Menggunakan variabel yang sudah kita siapkan
  assetPrefix: assetPrefix,
  basePath: basePath,

  // Menonaktifkan optimasi gambar bawaan Next.js yang butuh server
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
