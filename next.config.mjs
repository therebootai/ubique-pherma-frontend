/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  export: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  distDir: "dist",
};

export default nextConfig;
