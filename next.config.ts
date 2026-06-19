import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'standalone',
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
