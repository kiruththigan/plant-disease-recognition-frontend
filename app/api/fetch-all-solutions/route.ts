import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse, type NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const pageIndex = requestBody.pageIndex;
  const pageSize = requestBody.pageSize;
  const start = pageSize * pageIndex;

  const sortColumn = requestBody.sortColumn;
  const isSortDESC = requestBody.isSortDESC;

  const searchKey = requestBody.searchKey;

  const where = searchKey
    ? {
        OR: [
          {
            disease: {
              contains: searchKey,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            en: {
              contains: searchKey,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            ta: {
              contains: searchKey,
            },
          },
          {
            sh: {
              contains: searchKey,
            },
          },
        ],
      }
    : undefined;

  try {
    const disease = await prisma.plantDisease.findMany({
      skip: start,
      take: pageSize,
      orderBy: { [sortColumn]: isSortDESC ? "desc" : "asc" },
      where,
    });

    const count = await prisma.plantDisease.count({
      where,
    });

    return NextResponse.json({
      success: true,
      data: disease,
      pages: Math.ceil(count / pageSize),
    });
  } catch (error) {
    console.log("Error in fetch all solutions", error);
    return NextResponse.json({ success: false, error: error });
  }
}
