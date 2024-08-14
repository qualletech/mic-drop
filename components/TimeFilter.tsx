export default function TimeFilter({
  isTimeOpen,
  filters,
  setFilters,
}: {
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
      <p className="border-b border-red px-2.5 py-1.5 text-red text-sm">Time is:</p>
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
