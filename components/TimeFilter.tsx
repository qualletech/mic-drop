export default function TimeFilter({
  isTimeOpen,
  filters,
  setFilters,
}: {
  isTimeOpen: boolean
  filters: any
  setFilters: any
}) {
  const handleCheckBoxClick = (weekdayValue) => {}

  return isTimeOpen ? (
    <div className="grid mt-1 absolute top-full right-0 rounded-lg border-2 border-red  bg-white w-60">
      <p className="border-b border-red px-2.5 py-1.5 text-red text-sm">Time is:</p>
      <ul className="w-48 text-sm">
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[1fr_auto] gap-2 items-center w-full p-2.5 text-sm">
            on or after
            <input
              type="time"
              onClick={() => setFilters()}
              className="w-20 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[1fr_auto] gap-2 items-center w-full p-2.5 text-sm">
            on or before
            <input type="time" value="" className="w-20 accent-red focus:ring-orange focus:ring-1 cursor-pointer" />
          </label>
        </li>
      </ul>
      <button
        type="button"
        className="border-t border-red border-b border-red px-2.5 py-1.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start"
        onClick={() => setFilters((prevState) => ({ ...prevState, time: [] }))}
      >
        Clear
      </button>
    </div>
  ) : null
}
