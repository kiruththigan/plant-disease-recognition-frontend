import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  try {
    const disease = await prisma.plantDisease.delete({
      where: { id: parseInt(requestBody.id) },
    });

    return NextResponse.json({ success: true, data: disease });
  } catch (error) {
    console.log("Error in delete solution", error);
    return NextResponse.json({ success: false });
  }
}
