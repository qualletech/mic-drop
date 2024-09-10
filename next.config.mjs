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
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com *.google.com *.googleusercontent.com;
              style-src 'self' 'unsafe-inline';
              connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com data: blob:;
              font-src 'self' https://fonts.gstatic.com;
              object-src 'none';
              form-action 'self';
              base-uri 'self';
              frame-src *.google.com;
            `.replace(/\n/g, ""),
          },
        ],
      },
    ]
  },
}

export default nextConfig
