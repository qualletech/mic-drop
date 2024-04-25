-- CreateTable
CREATE TABLE "Venue" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "entry_accessible" BOOLEAN NOT NULL DEFAULT false,
    "stage_accessible" BOOLEAN NOT NULL DEFAULT false,
    "alcohol_free" BOOLEAN NOT NULL DEFAULT false,
    "street_address" TEXT NOT NULL,
    "street_address_additional" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "borough" TEXT NOT NULL,

    CONSTRAINT "Venue_pkey" PRIMARY KEY ("id")
);
