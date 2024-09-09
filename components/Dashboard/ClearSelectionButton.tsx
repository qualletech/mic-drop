export default function ClearSelectionButton({ clearButtonClick }: { clearButtonClick: () => void }) {
  return (
    <button
      type="button"
      className="border-t border-red border-b border-red px-2.5 py-1.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start"
      onClick={clearButtonClick}
    >
      Clear Selection
    </button>
  )
}
