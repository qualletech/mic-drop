"use client"

import Error from "@/components/Error"
import Loading from "@/components/Loading"
import MicDetails from "@/components/MicDetails"
import { useQuery } from "react-query"

const fetchMicData = async (micId: string) => {
  const response = await fetch(`/api/mics/${micId}`)
  return response.json()
}

export default function Page({ params }: { params: { mic_id: string } }) {
  const { data: mic, isLoading, isError } = useQuery(["mic", params.mic_id], () => fetchMicData(params.mic_id))

  if (isLoading) return <Loading />
  if (isError) return <Error />
  return <MicDetails mic={mic} />
}
