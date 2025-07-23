import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Wajib 'export' untuk website statis
  output: 'export',
  
  // Memberi tahu Next.js nama sub-folder di GitHub Pages
  // Ganti 'projek-temp' jika nama repo kamu berubah
  basePath: isProd ? '/projek-temp' : '',
  assetPrefix: isProd ? '/projek-temp/' : '',

  // Menonaktifkan optimasi gambar bawaan Next.js yang butuh server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
