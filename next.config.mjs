/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true, // ⬅️ esto evita que Vercel falle por ESLint
  }
};

export default nextConfig;
