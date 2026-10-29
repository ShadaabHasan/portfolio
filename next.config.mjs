/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old links to the Contact page now go to the contact panel at the bottom of the Home page
  async redirects() {
    return [
      { source: "/Contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;