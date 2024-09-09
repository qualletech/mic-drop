import ClearSelectionButton from "../ClearSelectionButton"
import BackButton from "./BackButton"

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
      <BackButton label="Weekday" setFilterSelectorOpen={setFilterSelectorOpen} />

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
      <ClearSelectionButton clearButtonClick={clearButtonClick} />
    </div>
  ) : null
}
