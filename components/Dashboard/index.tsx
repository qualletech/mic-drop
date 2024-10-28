"use client"

import Heading1 from "../StylingComponents/Heading1"
import Card from "./Card"
import Filter from "./Filter"
import Search from "./Search"
import { MicType } from "./types"
import moment from "moment"
import { useEffect, useState } from "react"

export default function Dashboard({ mics }: { mics: MicType[] }) {
  const [searchValue, setSearchValue] = useState("")
  const [filteredMics, setFilteredMics] = useState([])
  const [weekdayFilters, setWeekdayFilters] = useState<{ [weekday: string]: boolean }>({})
  const [boroughFilters, setBoroughFilters] = useState<{ [borough: string]: boolean }>({})
  const [timeFilters, setTimeFilters] = useState<{ [timeFilter: string]: string | null }>({})

  useEffect(() => {
    if (mics?.length > 0) setFilteredMics(mics)
  }, [mics])

  useEffect(() => {
    let newMics = mics
    if (Object.keys(weekdayFilters).length > 0) {
      newMics = newMics.filter((mic) => mic.mic_times.some((micTime) => weekdayFilters[micTime.weekday]))
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

    if (Object.keys(boroughFilters).length > 0) {
      newMics = newMics.filter((mic) => boroughFilters[mic.venue.borough])
    }

    if (searchValue.length > 0) {
      newMics = newMics.filter((mic) => mic.name.toLowerCase().includes(searchValue))
    }

    setFilteredMics(newMics)
  }, [weekdayFilters, boroughFilters, timeFilters, mics, searchValue])

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 h-full overflow-auto">
      <div className="grid grid-cols-[1fr_auto] gap-3 items-center px-4 pt-4 md:px-12 md:pt-6">
        <Heading1 text="NYC Open Mics" />
        <div className="grid grid-cols-2 gap-3 items-center">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Filter
            weekdayFilters={weekdayFilters}
            setWeekdayFilters={setWeekdayFilters}
            boroughFilters={boroughFilters}
            setBoroughFilters={setBoroughFilters}
            timeFilters={timeFilters}
            setTimeFilters={setTimeFilters}
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
