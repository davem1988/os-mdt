/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/",
          headers: [
            { key: "X-Frame-Options", value: "SAMEORIGIN" },
            { key: "Content-Security-Policy", value: "frame-ancestors 'self' http://localhost:* http://136.243.60.24:30110" }
          ]
        }
      ];
    }
};
  
module.exports = nextConfig;
  