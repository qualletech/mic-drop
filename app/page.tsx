"use client"

import BoroughFilter from "@/components/BoroughFilter"
import Card from "@/components/Card"
import FilterSelector from "@/components/FilterSelector"
import TimeFilter from "@/components/TimeFilter"
import WeekdayFilter from "@/components/WeekdayFilter"
import { useState } from "react"
import { useQuery } from "react-query"

const fetchMics = async () => {
  const response = await fetch("/api/mics")
  if (!response.ok) {
    throw new Error("Failed to fetch mic data")
  }
  return response.json()
}

export default function Page() {
  const { data: mics } = useQuery("mics", fetchMics)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [filterOpen, setFilterOpen] = useState<string | null>(null)
  const [filters, setFilters] = useState<{ [filterName: string]: Array<string | null> }>({
    weekday: [],
    time: [],
    borough: [],
  })

  const handleFilterButtonClick = () => {
    setIsOpen(!isOpen)
    setFilterOpen(null)
  }

  const handleClick = (filterName: string) => {
    setIsOpen(false)
    setFilterOpen(filterName)
  }

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 max-h-full overflow-auto">
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
          <WeekdayFilter isWeekdayOpen={filterOpen === "weekday"} filters={filters} setFilters={setFilters} />
          <TimeFilter isTimeOpen={filterOpen === "time"} filters={filters} setFilters={setFilters} />
          <BoroughFilter isBoroughOpen={filterOpen === "borough"} filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-auto max-h-full px-12 py-6">
        {mics?.map((m) => <Card mic={m} />)}
      </div>
    </main>
  )
}
