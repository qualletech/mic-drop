"use client"

import Error from "./error"
import Loading from "./loading"
import BoroughFilter from "@/components/BoroughFilter"
import Card from "@/components/Card"
import FilterSelector from "@/components/FilterSelector"
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

  const handleFilterButtonClick = () => {
    setIsOpen(!isOpen)
    setFilterOpen(null)
  }

  const handleClick = (filterName: string) => {
    setIsOpen(false)
    setFilterOpen(filterName)
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
      <div className="grid grid-cols-[1fr_auto] gap-3 px-12 pt-6">
        <h1 className="text-4xl font-extrabold ">NYC Open Mics</h1>
        <div className="relative">
          <button
            type="button"
            className="rounded-lg border-2 border-red px-2.5 py-2.5 text-md font-bold text-red shadow-sm hover:bg-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
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
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
              />
            </svg>
            <span className="hidden">Filter Mics</span>
          </button>
          <FilterSelector isOpen={isOpen} handleClick={handleClick} />
          <WeekdayFilter
            isWeekdayOpen={filterOpen === "weekday"}
            filters={weekdayFilters}
            setFilters={setWeekdayFilters}
          />
          <TimeFilter isTimeOpen={filterOpen === "time"} filters={timeFilters} setFilters={setTimeFilters} />
          <BoroughFilter
            isBoroughOpen={filterOpen === "borough"}
            filters={boroughFilters}
            setFilters={setBoroughFilters}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-auto h-fit px-12 py-6">
        {filteredMics?.length ? (
          filteredMics?.map((m) => <Card key={m.id} mic={m} />)
        ) : (
          <p className="col-span-full py-24 text-lg font-bold text-orange text-center">
            No mics found. You should start one! <br /> Or try adjusting your filters.
          </p>
        )}
      </div>
    </main>
  )
}
