"use client"

import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  return (
    <nav className="bg-white/80 shadow h-fit">
      <div className="grid grid-flow-col items-center  justify-between mx-auto px-6 py-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          <img src="./logo.png" alt="mic drop logo" className="aspect-auto w-52" />
        </button>
        <button
          type="button"
          className="rounded-lg border-2 border-red px-3.5 py-2.5 text-md font-bold text-red shadow-sm hover:bg-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          onClick={() => router.push("/contact")}
        >
          Suggestion Box
        </button>
      </div>
    </nav>
  )
}
