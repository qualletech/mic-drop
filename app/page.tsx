import Card from "@/components/Card"
import prismaClient from "@/prisma/prismaClient"

export default async function Page() {
  const mics = await prismaClient.mic.findMany({ include: { mic_times: true, venue: true } })

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 max-h-full">
      <h1 className="text-4xl font-extrabold">NYC Open Mics</h1>
      <div className="grid grid-cols-4 gap-3 overflow-auto max-h-full">
        {mics.map((m) => (
          <Card mic={m} />
        ))}
      </div>
    </main>
  )
}
