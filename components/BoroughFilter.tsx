export default function BoroughFilter({
  isBoroughOpen,
  filters,
  setFilters,
}: {
  isBoroughOpen: boolean
  filters: any
  setFilters: any
}) {
  const handleCheckBoxClick = (boroughValue) => {
    setFilters((prevFilters) => ({ ...prevFilters, [boroughValue]: !prevFilters[boroughValue] }))
  }

  const clearButtonClick = () => {
    setFilters({
      manhattan: false,
      brooklyn: false,
      queens: false,
      bronx: false,
      staten_island: false,
    })
  }

  return isBoroughOpen ? (
    <div className="grid mt-1 absolute top-full right-0 rounded-lg border-2 border-red  bg-white w-60">
      <p className="border-b border-red px-2.5 py-1.5 text-red text-sm">Borough is:</p>
      <ul className="w-48 text-sm">
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters.manhattan}
              onChange={() => handleCheckBoxClick("manhattan")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Manhattan
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters.brooklyn}
              onChange={() => handleCheckBoxClick("brooklyn")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Brooklyn
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters.queens}
              onChange={() => handleCheckBoxClick("queens")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Queens
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters.bronx}
              onChange={() => handleCheckBoxClick("bronx")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Bronx
          </label>
        </li>
        <li className="w-full">
          <label htmlFor="vue-checkbox" className="grid grid-cols-[auto_1fr] gap-2 items-center w-full p-2.5 text-sm">
            <input
              type="checkbox"
              checked={filters.staten_island}
              onChange={() => handleCheckBoxClick("staten_island")}
              className="w-4 h-4 accent-red focus:ring-orange focus:ring-1 cursor-pointer"
            />
            Staten Island
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
