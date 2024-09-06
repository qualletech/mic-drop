"use client"

import Dashboard from "@/components/Dashboard"
import Error from "@/components/Error"
import Loading from "@/components/Loading"
import { useQuery } from "react-query"

const fetchMics = async () => {
  const response = await fetch("/api/mics")
  return response.json()
}

export default function Page() {
  const { data: mics, isLoading, isError } = useQuery("mics", fetchMics)

  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <Dashboard mics={mics} />
}
