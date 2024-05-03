import Card from "@/components/Card"
import prismaClient from "@/prisma/prismaClient"

export default async function Page() {
  const mics = await prismaClient.mic.findMany({ include: { mic_times: true, venue: true } })

  return (
    <>
      <h1>Open Mic Dashboard for NYC</h1>
      {mics.map((m) => (
        <Card mic={m} />
      ))}
    </>
  )
}
