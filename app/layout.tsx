import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mic Drop</title>
        <meta name="description" content="Open Mic Dashboard for NYC Comedians" />
        <meta
          name="keywords"
          content="nyc comedians, open mics nyc, open mic, open mics, nyc, nyc comedian, comedy open mic"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Qualle Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="h-full p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
