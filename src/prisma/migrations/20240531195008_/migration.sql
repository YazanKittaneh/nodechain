/*
  Warnings:

  - You are about to drop the column `contact_name` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `representative` to the `Merchant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "contact_name",
ADD COLUMN     "representative" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";
