export default function WeekdayFilter({
  setFilterSelectorOpen,
  isWeekdayOpen,
  filters,
  setFilters,
}: {
  setFilterSelectorOpen: () => void
  isWeekdayOpen: boolean
  filters: any
  setFilters: any
}) {
  const handleCheckBoxClick = (weekdayValue) => {
    if (filters?.[weekdayValue]) {
      const newFilters = { ...filters }
      delete newFilters[weekdayValue]
      setFilters(newFilters)
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [weekdayValue]: true }))
    }
  }

  const clearButtonClick = () => {
    setFilters({})
  }

  return isWeekdayOpen ? (
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
        Weekday
      </button>

      <ul className="w-48 text-sm">
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.monday || false}
              onChange={() => handleCheckBoxClick("monday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Monday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.tuesday || false}
              onChange={() => handleCheckBoxClick("tuesday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Tuesday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.wednesday || false}
              onChange={() => handleCheckBoxClick("wednesday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Wednesday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.thursday || false}
              onChange={() => handleCheckBoxClick("thursday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Thursday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.friday || false}
              onChange={() => handleCheckBoxClick("friday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Friday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.saturday || false}
              onChange={() => handleCheckBoxClick("saturday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Saturday
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters?.sunday || false}
              onChange={() => handleCheckBoxClick("sunday")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Sunday
          </label>
        </li>
      </ul>
      <button
        type="button"
        className="border-t border-red border-b border-red px-2.5 py-1.5 text-sm hover:bg-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange text-start"
        onClick={clearButtonClick}
      >
        Clear Selection
      </button>
    </div>
  ) : null
}
