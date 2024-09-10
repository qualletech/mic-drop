/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(); battery=(); microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;
              style-src 'self' 'unsafe-inline';
              frame-src https://maps.google.com https://www.google.com;
              font-src 'self';
              connect-src 'self' ${process.env.DATABASE_URL};
              img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com;
              form-action 'self';
              base-uri 'self';
              object-src 'none';
            `,
          },
        ],
      },
    ]
  },
}

export default nextConfig
