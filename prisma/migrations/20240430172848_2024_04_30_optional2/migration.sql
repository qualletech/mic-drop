-- AlterTable
ALTER TABLE "Venue" ALTER COLUMN "entry_accessible" DROP NOT NULL,
ALTER COLUMN "stage_accessible" DROP NOT NULL,
ALTER COLUMN "alcohol_free" DROP NOT NULL;
