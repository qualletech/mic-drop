"use client"

import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  return (
    <nav className="bg-white/80 shadow h-fit">
      <div className="grid grid-flow-col gap-4 items-center  justify-between px-4 md:px-6 py-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          <img src="./logo.png" alt="mic drop logo" className="aspect-auto w-52" />
        </button>
        <button
          type="button"
          className="rounded-lg border border-red border-2 px-2 py-1 md:border-none md:px-0 md:py-0 text-md font-bold text-red hover:text-red/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          onClick={() => router.push("/contact")}
        >
          Suggestion Box
        </button>
      </div>
    </nav>
  )
}
