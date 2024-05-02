const { PrismaClient } = require("@prisma/client")
const MIC_DATA = require("./seed/MIC_DATA.json")
const MIC_TIME_DATA = require("./seed/MIC_TIME_DATA.json")
const VENUE_DATA = require("./seed/VENUE_DATA.json")

const prismaClient = new PrismaClient()

async function seed(): Promise<void> {
  try {
    const venues = [...VENUE_DATA]
    await prismaClient.venue.createMany({ data: venues })

    const times = [...MIC_TIME_DATA]
    await prismaClient.mic_Time.createMany({ data: times })

    const mics = [...MIC_DATA]
    await Promise.all(mics.map(async (m) => await prismaClient.mic.create({ data: m })))
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prismaClient.$disconnect()
  }
}

seed()
