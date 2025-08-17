import type { NextConfig } from 'next';

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob: https:",
  "script-src 'self' https: 'unsafe-inline'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https:",
  "connect-src 'self'",
  "upgrade-insecure-requests",
  "require-trusted-types-for 'script'",
  "trusted-types default nextjs react react-dom;",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'accelerometer=(), autoplay=(), camera=(), geolocation=(), microphone=(), payment=(), usb=()' },
];

const nextConfig: NextConfig = {
  assetPrefix: '',
  basePath: '',

  images: {
    // Aktifkan optimisasi gambar Next untuk menghasilkan ukuran responsif
    formats: ['image/avif', 'image/webp'],
  },

  typescript: { ignoreBuildErrors: true },

  async headers() {
    return [
      // Security headers untuk semua route
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Cache sangat panjang untuk aset build Next (hashed & immutable)
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Optimized images handler dari Next
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // JS & CSS chunks (tambahan guard)
      {
        source: '/(.*\\.(?:js|css))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Gambar statis di /public (tanpa hash) - cache 30 hari + SWR 1 hari
      {
        source: '/(.*\\.(?:webp|png|jpg|jpeg|gif|svg))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // Font
      {
        source: '/(.*\\.(?:woff|woff2|ttf|otf))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;