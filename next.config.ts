/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export' WAJIB ADA buat static export
  output: 'export',
  
  // Kosongin aja karena kita deploy ke root domain (alamat utama), bukan sub-folder
  assetPrefix: '',
  basePath: '',

  // Biarin aja, ini buat optimasi gambar di static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;