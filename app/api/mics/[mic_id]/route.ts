/* eslint-disable import/prefer-default-export */

import prismaClient from "@/prisma/prismaClient"
import { NextRequest, NextResponse } from "next/server"

export interface MicGetRequest {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  sign_up?: string
  instagram?: string
  website?: string
  set_time?: number
  payment?: string
  venueId: string
  venue: {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    entry_accessible?: boolean
    stage_accessible?: boolean
    alcohol_free?: boolean
    street_address: string
    street_address_additional?: string
    city: string
    state: string
    zip_code: string
    borough: "manhattan" | "bronx" | "brooklyn" | "staten_island" | "queens"
  }
  mic_times: {
    id: string
    createdAt: Date
    updatedAt: Date
    weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
    frequency: "weekly" | "first" | "second" | "third" | "fourth"
    time: string
  }[]
}

export async function GET(req: NextRequest, { params }: { params: { mic_id: string } }) {
  try {
    const mic: MicGetRequest = await prismaClient.mic.findUnique({
      where: { id: params.mic_id },
      include: { mic_times: true, venue: true },
    })
    return NextResponse.json(mic, { status: 200 })
  } catch (error) {
    console.error("Error fetching mic data:", error)
    return NextResponse.json({ status: 500, error: "Error fetching mic data" })
  }
}
