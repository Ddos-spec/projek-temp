import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: '',
  basePath: '',

  images: {
    // Aktifkan optimisasi gambar Next untuk menghasilkan ukuran responsif
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },

  typescript: { ignoreBuildErrors: true },
};

const withExport = {
  ...nextConfig,
  output: 'export',
};

export default withExport;
