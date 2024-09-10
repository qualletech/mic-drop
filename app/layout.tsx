"use client"

import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { GoogleAnalytics } from "@next/third-parties/google"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

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
        <meta httpEquiv="Content-Security-Policy" content="default-src https:" />
        <meta httpEquiv="Referrer-Policy" content="same-origin" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className="bg-light h-dvh grid grid-rows-[auto_minmax(0,1fr)_auto]">
          <Header />
          <main>{children}</main>
          <Footer />
          <GoogleAnalytics gaId="G-SYSQP1YNWJ" />
        </body>
      </QueryClientProvider>
    </html>
  )
}
