"use client"

export default function Error() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-orange">An Error occured</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-lg bg-orange px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm hover:bg-orange/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            Go back home
          </a>
          <a href="/contact" className="text-sm font-semibold">
            Contact us
          </a>
        </div>
      </div>
    </main>
  )
}
