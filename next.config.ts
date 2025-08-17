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
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  // Clickjacking protection
  { key: 'X-Frame-Options', value: 'DENY' },
  // MIME sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer policy
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // COOP isolation
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  // HSTS (HTTPS only; safe to include, ignored on HTTP)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Permissions-Policy (restrict powerful features)
  { key: 'Permissions-Policy', value: 'accelerometer=(), autoplay=(), camera=(), geolocation=(), microphone=(), payment=(), usb=()' },
];

const nextConfig: NextConfig = {
  // Removed output: 'export' to allow API routes
  // output: 'export',
  
  // Kosongin aja karena kita deploy ke root domain (alamat utama), bukan sub-folder
  assetPrefix: '',
  basePath: '',

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;