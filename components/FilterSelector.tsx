export default function FilterSelector({ isOpen, handleClick }: { isOpen: boolean; handleClick: (string) => void }) {
  return isOpen ? (
    <div className="grid mt-1 absolute top-full right-0 rounded-lg border-2 border-red  bg-white w-60">
      <p className="border-b border-red px-2.5 py-1.5 text-red text-sm">Filter by:</p>

      <button
        type="button"
        className="border-b border-red px-2.5 py-2.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start font-bold"
        onClick={() => handleClick("weekday")}
      >
        Weekday
      </button>
      <button
        type="button"
        className="border-b border-red px-2.5 py-2.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start font-bold"
        onClick={() => handleClick("time")}
      >
        Time
      </button>
      <button
        type="button"
        className="px-2.5 py-2.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start font-bold"
        onClick={() => handleClick("borough")}
      >
        Borough
      </button>
    </div>
  ) : null
}
