"use client"

import Card from "@/components/Card"
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

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 max-h-full overflow-auto">
      <h1 className="text-4xl font-extrabold px-12 pt-6">NYC Open Mics</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-auto max-h-full px-12 py-6">
        {mics?.map((m) => <Card mic={m} />)}
      </div>
    </main>
  )
}
