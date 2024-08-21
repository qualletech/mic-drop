/* eslint-disable import/prefer-default-export */
import prismaClient from "@/prisma/prismaClient"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() // Parse the incoming JSON request body

    await prismaClient.message.create({
      data,
    })

    return NextResponse.json({ status: 200, message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ status: 500, error: "Error sending message" })
  }
}
