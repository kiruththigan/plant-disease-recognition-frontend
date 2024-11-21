import { PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  try {
    const disease = await prisma.plantDisease.create({
      data: {
        disease: requestBody.disease,
        en: requestBody.en,
        ta: requestBody.ta,
        sh: requestBody.sh,
      },
    });

    return NextResponse.json({ success: true, data: disease });
  } catch (error) {
    console.log("Error in add solution", error);
    return NextResponse.json({ success: false });
  }
}
