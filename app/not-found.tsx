"use client"

export default function Error() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-orange">404</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h2>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-lg bg-orange px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Go back home
          </a>
          <a href="/contact" className="text-sm font-semibold">
            Contact us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}
