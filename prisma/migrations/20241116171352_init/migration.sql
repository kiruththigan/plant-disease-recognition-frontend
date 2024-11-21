-- CreateTable
CREATE TABLE "PlantDisease" (
    "id" SERIAL NOT NULL,
    "disease" VARCHAR(255) NOT NULL,
    "en" TEXT,
    "ta" TEXT,
    "sh" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlantDisease_pkey" PRIMARY KEY ("id")
);
