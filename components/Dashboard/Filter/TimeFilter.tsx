import ClearSelectionButton from "../ClearSelectionButton"
import BackButton from "./BackButton"

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
    <div className="grid mt-1 absolute top-full right-0 rounded-lg border-2 border-red  bg-white w-max md:w-60">
      <BackButton label="Time" setFilterSelectorOpen={setFilterSelectorOpen} />
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
      <ClearSelectionButton clearButtonClick={clearButtonClick} />
    </div>
  ) : null
}
