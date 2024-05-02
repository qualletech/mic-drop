import prismaClient from "./prismaClient"
import MIC_DATA from "./seed/MIC_DATA.json"
import MIC_TIME_DATA from "./seed/MIC_TIME_DATA.json"
import VENUE_DATA from "./seed/VENUE_DATA.json"
import { Mic_Time as micTime, Venue } from "@prisma/client"

export default async function seed() {
  const venues = [...VENUE_DATA]
  await prismaClient.venue.createMany({ data: venues as Venue[] })

  const times = [...MIC_TIME_DATA]
  await prismaClient.mic_Time.createMany({ data: times as micTime[] })

  const mics = [...MIC_DATA]
  await prismaClient.mic.createMany({ data: mics })
}
