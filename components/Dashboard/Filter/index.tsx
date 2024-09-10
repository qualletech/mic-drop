import BoroughFilter from "./BoroughFilter"
import FilterButton from "./FilterButton"
import FilterSelector from "./FilterSelector"
import TimeFilter from "./TimeFilter"
import WeekdayFilter from "./WeekdayFilter"
import { useEffect, useRef, useState } from "react"

export default function Filter({
  weekdayFilters,
  setWeekdayFilters,
  boroughFilters,
  setBoroughFilters,
  timeFilters,
  setTimeFilters,
}) {
  const filterRef = useRef<HTMLDivElement | null>(null)

  const [filterOpen, setFilterOpen] = useState<string | null>(null)
  const filterSelected: boolean =
    Object.keys(weekdayFilters).length > 0 ||
    Object.keys(boroughFilters).length > 0 ||
    Object.keys(timeFilters).length > 0

  const handleFilterButtonClick = () => {
    if (filterOpen !== null) setFilterOpen(null)
    if (filterOpen === null) setFilterOpen("main")
  }

  const handleClick = (filterName: string) => {
    setFilterOpen(filterName)
  }

  const handleClearAll = () => {
    setFilterOpen(null)
    setWeekdayFilters({})
    setBoroughFilters({})
    setTimeFilters({})
  }

  useEffect(() => {
    if (filterOpen === null) return
    const handleOutsideClick = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(null)
      }
    }

    if (filterOpen !== null) {
      document.addEventListener("mousedown", handleOutsideClick)
    }
  }, [filterOpen])

  return (
    <div className="relative" ref={filterRef}>
      <FilterButton handleClick={handleFilterButtonClick} filterSelected={filterSelected} />
      <FilterSelector isOpen={filterOpen === "main"} handleClick={handleClick} handleClearAll={handleClearAll} />
      <WeekdayFilter
        setFilterSelectorOpen={() => handleClick("main")}
        isWeekdayOpen={filterOpen === "weekday"}
        filters={weekdayFilters}
        setFilters={setWeekdayFilters}
      />
      <TimeFilter
        setFilterSelectorOpen={() => handleClick("main")}
        isTimeOpen={filterOpen === "time"}
        filters={timeFilters}
        setFilters={setTimeFilters}
      />
      <BoroughFilter
        setFilterSelectorOpen={() => handleClick("main")}
        isBoroughOpen={filterOpen === "borough"}
        filters={boroughFilters}
        setFilters={setBoroughFilters}
      />
    </div>
  )
}
