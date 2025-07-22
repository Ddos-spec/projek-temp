import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- TAMBAHIN INI DOANG
  /* config options here */
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
};

export default nextConfig;