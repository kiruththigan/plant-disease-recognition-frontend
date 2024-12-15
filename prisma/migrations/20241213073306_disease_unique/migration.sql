/*
  Warnings:

  - A unique constraint covering the columns `[disease]` on the table `PlantDisease` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlantDisease_disease_key" ON "PlantDisease"("disease");
