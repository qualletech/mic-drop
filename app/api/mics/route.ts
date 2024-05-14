/* eslint-disable import/prefer-default-export */
import prismaClient from "@/prisma/prismaClient"

const weekdayOrder = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6,
}

export async function GET() {
  try {
    const mics = await prismaClient.mic.findMany({
      include: { mic_times: true, venue: true },
    })

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
    return Response.json(mics)
  } catch (error) {
    console.error("Error fetching mic data:", error)
    return Response.json({ status: 500, error: "Error fetching mic data" })
  }
}
