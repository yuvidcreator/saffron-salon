/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    skipWaiting: true,
    scope: '/',
    sw: 'sw.js',
  },

  reactStrictMode: true,

  images: {
    domains: ['lh3.googleusercontent.com', 'source.unsplash.com', 'mdbcdn.b-cdn.net'],
  },
})

module.exports = nextConfig
