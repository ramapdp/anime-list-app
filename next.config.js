/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'cdn.myanimelist.net',
         },
         {
            hostname: 'images.unsplash.com',
         },
         {
            hostname: 'tailwindui.com',
         }
      ]
   }
}

module.exports = nextConfig
