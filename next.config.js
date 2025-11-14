/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/tem1',
        destination: '/tem1.html',
      },
    ];
  },
};

module.exports = nextConfig;