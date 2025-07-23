import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */

// Ganti 'nama-repo-kamu' dengan nama repository GitHub kamu
const repoName = 'nama-repo-kamu';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Atur assetPrefix dan basePath sesuai dengan nama repo kamu
  assetPrefix = `/${repoName}/`;
  basePath = `/${repoName}`;
}


const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Wajib true untuk static export
  },
};

export default nextConfig;
