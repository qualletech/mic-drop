/* eslint-disable import/prefer-default-export */
import prismaClient from "@/prisma/prismaClient"
import { NextRequest, NextResponse } from "next/server"

interface MessagePostRequest {
  type: "change_request" | "new_submission" | "general"
  message_body: string
  email_address?: string
  name?: string
}

export async function POST(req: NextRequest) {
  try {
    const data: MessagePostRequest = await req.json()

    await prismaClient.message.create({
      data,
    })

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ status: 500, error: "Error sending message" })
  }
}
