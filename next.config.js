const dotenv = require('dotenv')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {},
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'imagedelivery.net',
      'ssl.pstatic.net',
      'k.kakaocdn.net',
      'lh3.googleusercontent.com',
      'picsum.photos',
      'cdn.pixabay.com',
      'nginx-nginx-4uvg2mlecrl7qe.sel3.cloudtype.app',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

const isDev = process.env.NODE_ENV !== 'production'

dotenv.config({
  path: isDev ? './film-doms-env/.env.local' : './film-doms-env/.env',
})

module.exports = nextConfig
