import { Prisma, PrismaClient } from "@prisma/client";
import { pages } from "next/dist/build/templates/app-page";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  try {
    const disease = await prisma.plantDisease.findFirst({
      where: {
        disease: requestBody.disease,
      },
    });

    return NextResponse.json({
      success: true,
      data: disease,
    });
  } catch (error) {
    console.log("Error in find solution", error);
    return NextResponse.json({ success: false, error: error });
  }
}
