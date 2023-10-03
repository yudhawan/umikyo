/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export',
    images: {
      unoptimized:true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: process.env.URL,
            port: '',
            pathname: '/products/img/**',
          },
        ],
    },
    env:{
        BASE_URL: process.env.BASE_URL
    }
}

module.exports = nextConfig
