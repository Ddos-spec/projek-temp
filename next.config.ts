/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

// Otomatis mengambil nama repo dari environment GitHub
const repo = isProd ? process.env.GITHUB_REPOSITORY?.split('/')[1] || 'projek-temp' : '';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
