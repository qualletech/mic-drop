import prismaClient from "./prismaClient"
import MIC_DATA from "./seed/MIC_DATA.json"
import VENUE_DATA from "./seed/VENUE_DATA.json"
import { Venue } from "@prisma/client"

export default async function seed() {
  const venues = [...VENUE_DATA]
  await prismaClient.venue.createMany({ data: venues as Venue[] })
}
