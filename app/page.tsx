import Card from "@/components/Card"
import prismaClient from "@/prisma/prismaClient"

export default async function Page() {
  const mics = await prismaClient.mic.findMany({
    include: { mic_times: true, venue: true },
  })
  const weekdayOrder = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
  }

  mics.sort((a, b) => {
    const earliestA = a.mic_times.reduce((earliest, current) => {
      if (!earliest || weekdayOrder[current.weekday] < weekdayOrder[earliest.weekday]) {
        return current
      }
      return earliest
    }, null)

    const earliestB = b.mic_times.reduce((earliest, current) => {
      if (!earliest || weekdayOrder[current.weekday] < weekdayOrder[earliest.weekday]) {
        return current
      }
      return earliest
    }, null)

    return weekdayOrder[earliestA.weekday] - weekdayOrder[earliestB.weekday]
  })

  return (
    <main className="grid grid-rows-[auto_1fr] gap-3 max-h-full overflow-auto">
      <h1 className="text-4xl font-extrabold">NYC Open Mics</h1>
      <div className="grid grid-cols-4 gap-3 overflow-auto max-h-full px-12 py-6">
        {mics.map((m) => (
          <Card mic={m} />
        ))}
      </div>
    </main>
  )
}
