export default function BackButton({
  label,
  setFilterSelectorOpen,
}: {
  label: string
  setFilterSelectorOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={setFilterSelectorOpen}
      className="grid grid-flow-col gap-2 justify-start items-center border-b border-red px-2.5 py-1.5 text-red text-sm text-sm font-medium text-center hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange max-h-content"
    >
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      {label}
    </button>
  )
}
