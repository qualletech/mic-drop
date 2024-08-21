/*
  Warnings:

  - The values [suggestion] on the enum `MESSAGE_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "MESSAGE_TYPE_new" AS ENUM ('change_request', 'new_submission', 'general');
ALTER TABLE "Message" ALTER COLUMN "type" TYPE "MESSAGE_TYPE_new" USING ("type"::text::"MESSAGE_TYPE_new");
ALTER TYPE "MESSAGE_TYPE" RENAME TO "MESSAGE_TYPE_old";
ALTER TYPE "MESSAGE_TYPE_new" RENAME TO "MESSAGE_TYPE";
DROP TYPE "MESSAGE_TYPE_old";
COMMIT;
