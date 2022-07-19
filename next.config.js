/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   skipWaiting: true,
  //   runtimeCaching,
  //   buildExcludes: [/middleware-manifest.json$/],
  //   // disable: process.env.NODE_ENV === "development",
  // },
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/", destination: "/search", permanent: true }];
  },
  images: {
    domains: ["https://inaturalist-open-data.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
