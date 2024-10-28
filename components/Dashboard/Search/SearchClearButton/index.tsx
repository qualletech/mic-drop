import ClearIcon from "./ClearIcon"

export default function SearchClearButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="grid grid-flow-col rounded-lg px-0.5 py-0.5 text-md font-bold hover:bg-light/40 focus-visible:outline focus-visible:outline focus-visible:outline-orange"
      onClick={onClick}
    >
      <ClearIcon />
      <span className="hidden">Clear Search</span>
    </button>
  )
}
