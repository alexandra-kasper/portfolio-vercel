/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/easystride", destination: "/levara", permanent: true },
    ];
  },
};
module.exports = nextConfig;
