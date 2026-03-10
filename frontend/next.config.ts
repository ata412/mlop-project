import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:7860'}/:path*`,
      },
    ]
  },
  experimental: {
    proxyTimeout: 300_000,   // 300s — รองรับ LLM inference + cold start
  },
}

export default nextConfig
