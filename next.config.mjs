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
              img-src 'self' data: blob:;
              style-src 'self' 'unsafe-inline';
              font-src 'self';
              object-src 'none';
              form-action 'self';
              base-uri 'self';
            `.replace(/\n/g, ""),
          },
        ],
      },
    ]
  },
}

export default nextConfig
