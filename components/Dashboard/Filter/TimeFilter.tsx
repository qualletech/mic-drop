export default function TimeFilter({
  setFilterSelectorOpen,
  isTimeOpen,
  filters,
  setFilters,
}: {
  setFilterSelectorOpen: () => void
  isTimeOpen: boolean
  filters: any
  setFilters: any
}) {
  const handleTimeChange = (filterValue, time) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterValue]: time }))
  }

  const clearButtonClick = () => {
    setFilters({})
  }

  return isTimeOpen ? (
    <div className="grid mt-1 absolute top-full right-0 rounded-lg border-2 border-red  bg-white w-60">
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
        Time
      </button>
      <ul className="w-full text-sm">
        <li className="w-full">
          <label htmlFor="time" className="grid grid-cols-2 gap-2 items-center w-full p-2.5 text-sm">
            on or after
            <input
              type="time"
              value={filters?.after || ""}
              onChange={(e) => handleTimeChange("after", e.target.value)}
              className="w-full accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="time" className="grid grid-cols-2 gap-2 items-center w-full p-2.5 text-sm">
            on or before
            <input
              type="time"
              value={filters?.before || ""}
              onChange={(e) => handleTimeChange("before", e.target.value)}
              className="accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
          </label>
        </li>
      </ul>
      <button
        type="button"
        className="border-t border-red border-b border-red px-2.5 py-1.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start"
        onClick={clearButtonClick}
      >
        Clear
      </button>
    </div>
  ) : null
}
