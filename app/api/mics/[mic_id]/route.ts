/* eslint-disable import/prefer-default-export */

import prismaClient from "@/prisma/prismaClient"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { mic_id: string } }) {
  try {
    const mic = await prismaClient.mic.findUnique({
      where: { id: params.mic_id },
      include: { mic_times: true, venue: true },
    })
    return Response.json(mic)
  } catch (error) {
    console.error("Error fetching mic data:", error)
    return Response.json({ status: 500, error: "Error fetching mic data" })
  }
}
