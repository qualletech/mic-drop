/*
  Warnings:

  - You are about to drop the column `instagram_handle` on the `Mic` table. All the data in the column will be lost.
  - You are about to drop the column `time_on_mic` on the `Mic` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "FREQUENCY" AS ENUM ('weekly', 'first', 'second', 'third', 'fourth');

-- DropIndex
DROP INDEX "Mic_name_key";

-- AlterTable
ALTER TABLE "Mic" DROP COLUMN "instagram_handle",
DROP COLUMN "time_on_mic",
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "set_time" INTEGER,
ALTER COLUMN "sign_up" DROP NOT NULL,
ALTER COLUMN "payment" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mic_Time" ADD COLUMN     "frequency" "FREQUENCY" DEFAULT 'weekly';
