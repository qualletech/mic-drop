/*
  Warnings:

  - The primary key for the `Venue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Venue` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Venue` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `borough` on the `Venue` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WEEKDAY" AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

-- CreateEnum
CREATE TYPE "BOROUGH" AS ENUM ('manhattan', 'bronx', 'brooklyn', 'staten_island', 'queens');

-- CreateEnum
CREATE TYPE "MESSAGE_TYPE" AS ENUM ('change_request', 'new_submission', 'general', 'suggestion');

-- AlterTable
ALTER TABLE "Venue" DROP CONSTRAINT "Venue_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
DROP COLUMN "borough",
ADD COLUMN     "borough" "BOROUGH" NOT NULL,
ADD CONSTRAINT "Venue_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Venue_id_seq";

-- CreateTable
CREATE TABLE "Mic" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "sign_up" TEXT NOT NULL,
    "instagram_handle" TEXT,
    "website" TEXT,
    "time_on_mic" INTEGER NOT NULL,
    "payment" TEXT NOT NULL,

    CONSTRAINT "Mic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mic_Time" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weekday" "WEEKDAY" NOT NULL,
    "time" TEXT NOT NULL,
    "micId" TEXT,

    CONSTRAINT "Mic_Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "MESSAGE_TYPE" NOT NULL,
    "email_address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "message_body" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MicToVenue" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Mic_id_key" ON "Mic"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Mic_name_key" ON "Mic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mic_Time_id_key" ON "Mic_Time"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_MicToVenue_AB_unique" ON "_MicToVenue"("A", "B");

-- CreateIndex
CREATE INDEX "_MicToVenue_B_index" ON "_MicToVenue"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Venue_id_key" ON "Venue"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Venue_name_key" ON "Venue"("name");

-- AddForeignKey
ALTER TABLE "Mic_Time" ADD CONSTRAINT "Mic_Time_micId_fkey" FOREIGN KEY ("micId") REFERENCES "Mic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MicToVenue" ADD CONSTRAINT "_MicToVenue_A_fkey" FOREIGN KEY ("A") REFERENCES "Mic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MicToVenue" ADD CONSTRAINT "_MicToVenue_B_fkey" FOREIGN KEY ("B") REFERENCES "Venue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
