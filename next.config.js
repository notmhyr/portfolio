/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.google.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.toptal.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
