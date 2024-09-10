import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="grid grid-flow-col gap-2 justify-start items-center place-self-start pr-3 py-2 text-sm font-medium text-center hover:text-red/90 rounded-lg focus:ring-2 focus:ring-orange focus:outline-none max-h-content"
    >
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      Back
    </button>
  )
}
