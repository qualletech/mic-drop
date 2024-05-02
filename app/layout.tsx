import "./globals.css"

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
      <body className="bg-light p-6">
        <header>
          <img src="./logo.png" alt="mic drop logo" className="aspect-auto w-full sm:w-1/5" />
        </header>
        {children}
        <footer>
          <p>Copyright 2024 Qualle Tech</p>
          <p>NYC's Open Mic Dashboard - Open Source Project</p>
          <p>Contact</p>
        </footer>
      </body>
    </html>
  )
}
