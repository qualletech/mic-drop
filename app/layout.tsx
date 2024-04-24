export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mic Drop</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
