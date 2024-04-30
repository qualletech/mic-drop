/*
  Warnings:

  - You are about to drop the `_MicToVenue` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `venueId` to the `Mic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MicToVenue" DROP CONSTRAINT "_MicToVenue_A_fkey";

-- DropForeignKey
ALTER TABLE "_MicToVenue" DROP CONSTRAINT "_MicToVenue_B_fkey";

-- AlterTable
ALTER TABLE "Mic" ADD COLUMN     "venueId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_MicToVenue";

-- AddForeignKey
ALTER TABLE "Mic" ADD CONSTRAINT "Mic_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
