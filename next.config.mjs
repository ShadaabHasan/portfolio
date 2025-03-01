/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      FIREBASE_ADMIN_KEY: process.env.FIREBASE_ADMIN_KEY,
    },
  };
  
  export default nextConfig;
  