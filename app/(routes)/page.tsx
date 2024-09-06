"use client"

import BoroughFilter from "@/components/BoroughFilter"
import Card from "@/components/Card"
import Error from "@/components/Error"
import FilterSelector from "@/components/FilterSelector"
import Loading from "@/components/Loading"
import TimeFilter from "@/components/TimeFilter"
import WeekdayFilter from "@/components/WeekdayFilter"
import moment from "moment"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const fetchMics = async () => {
  const response = await fetch("/api/mics")
  return response.json()
}

export default function Page() {
  const { data: mics, isLoading, isError } = useQuery("mics", fetchMics)
  const [filteredMics, setFilteredMics] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [filterOpen, setFilterOpen] = useState<string | null>(null)
  const [weekdayFilters, setWeekdayFilters] = useState<{ [weekday: string]: boolean }>({})
  const [boroughFilters, setBoroughFilters] = useState<{ [borough: string]: boolean }>({})
  const [timeFilters, setTimeFilters] = useState<{ [timeFilter: string]: string | null }>({})
  const filterSelected =
    Object.keys(weekdayFilters).length || Object.keys(boroughFilters).length || Object.keys(timeFilters).length

  const handleFilterButtonClick = () => {
    setIsOpen(!isOpen)
    setFilterOpen(null)
  }

  const setIsFilterOpen = () => {
    setIsOpen(true)
    setFilterOpen(null)
  }

  const handleClick = (filterName: string) => {
    setIsOpen(false)
    setFilterOpen(filterName)
  }

  const handleClearAll = () => {
    setIsOpen(false)
    setWeekdayFilters({})
    setBoroughFilters({})
    setTimeFilters({})
  }
  useEffect(() => {
    if (mics?.length > 0) setFilteredMics(mics)
  }, [mics])

  useEffect(() => {
    let newMics = mics
    if (Object.keys(weekdayFilters).length > 0) {
      newMics = newMics.filter((mic) => mic.mic_times.some((t) => weekdayFilters[t.weekday]))
    }

    if (timeFilters?.after || timeFilters?.before) {
      newMics = newMics.filter((mic) =>
        mic.mic_times.some((t) => {
          const micTime = moment(t.time, "HH:mm:ss")
          const afterTime = timeFilters.after ? moment(timeFilters.after, "HH:mm") : null
          const beforeTime = timeFilters.before ? moment(timeFilters.before, "HH:mm") : null

          return (!afterTime || micTime.isSameOrAfter(afterTime)) && (!beforeTime || micTime.isSameOrBefore(beforeTime))
        }),
      )
    }

    // Filter by borough if any borough filter is selected
    if (Object.keys(boroughFilters).length > 0) {
      newMics = newMics.filter((mic) => boroughFilters[mic.venue.borough])
    }

    setFilteredMics(newMics)
  }, [weekdayFilters, boroughFilters, timeFilters, mics])

  if (isLoading) return <Loading />
  if (isError) return <Error />

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 h-full overflow-auto">
      <div className="grid grid-cols-[1fr_auto] gap-3 items-center px-4 pt-4 md:px-12 md:pt-6">
        <h1 className="text-2xl md:text-4xl font-extrabold ">NYC Open Mics</h1>
        <div className="relative">
          <button
            type="button"
            className="grid grid-flow-col rounded-lg border-2 border-red px-2.5 py-2.5 text-md font-bold text-red shadow-sm hover:bg-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            onClick={() => handleFilterButtonClick()}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              {filterSelected ? (
                <>
                  <path
                    d="M21.63 14.75C21.63 15.64 21.39 16.48 20.95 17.2C20.13 18.57 18.62 19.5 16.88 19.5C15.94 19.5 15.06 19.22 14.32 18.73C13.7 18.35 13.19 17.82 12.82 17.2C12.38 16.48 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C17.24 10 17.59 10.04 17.92 10.12C20.05 10.59 21.63 12.49 21.63 14.75Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.03 14.75L16.2 15.92L18.73 13.58"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.6901 4.01999V6.23999C20.6901 7.04999 20.1801 8.06001 19.6801 8.57001L17.92 10.12C17.59 10.04 17.2401 10 16.8801 10C14.2601 10 12.1301 12.13 12.1301 14.75C12.1301 15.64 12.3801 16.48 12.8201 17.2C13.1901 17.82 13.7001 18.35 14.3201 18.73V19.07C14.3201 19.68 13.92 20.49 13.41 20.79L12.0001 21.7C10.6901 22.51 8.87006 21.6 8.87006 19.98V14.63C8.87006 13.92 8.46006 13.01 8.06006 12.51L4.22003 8.47C3.72003 7.96 3.31006 7.05001 3.31006 6.45001V4.12C3.31006 2.91 4.22008 2 5.33008 2H18.67C19.78 2 20.6901 2.90999 20.6901 4.01999Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <path
                  d="M19 3H5C3.89543 3 3 3.89543 3 5V6.17157C3 6.70201 3.21071 7.21071 3.58579 7.58579L9.41421 13.4142C9.78929 13.7893 10 14.298 10 14.8284V20V20.2857C10 20.9183 10.7649 21.2351 11.2122 20.7878L12 20L13.4142 18.5858C13.7893 18.2107 14 17.702 14 17.1716V14.8284C14 14.298 14.2107 13.7893 14.5858 13.4142L20.4142 7.58579C20.7893 7.21071 21 6.70201 21 6.17157V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="#24292E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
            <span className="hidden">Filter Mics</span>
          </button>

          <FilterSelector isOpen={isOpen} handleClick={handleClick} handleClearAll={handleClearAll} />
          <WeekdayFilter
            setFilterSelectorOpen={setIsFilterOpen}
            isWeekdayOpen={filterOpen === "weekday"}
            filters={weekdayFilters}
            setFilters={setWeekdayFilters}
          />
          <TimeFilter
            setFilterSelectorOpen={setIsFilterOpen}
            isTimeOpen={filterOpen === "time"}
            filters={timeFilters}
            setFilters={setTimeFilters}
          />
          <BoroughFilter
            setFilterSelectorOpen={setIsFilterOpen}
            isBoroughOpen={filterOpen === "borough"}
            filters={boroughFilters}
            setFilters={setBoroughFilters}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-auto h-fit px-6 py-3 md:px-12 md:py-6">
        {filteredMics?.length ? (
          filteredMics?.map((m) => <Card key={m.id} mic={m} />)
        ) : (
          <p className="col-span-full py-24 text-lg font-bold text-red text-center">
            No mics found. You should start one! <br /> Or try adjusting your filters.
          </p>
        )}
      </div>
    </main>
  )
}
