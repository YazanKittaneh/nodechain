/*
  Warnings:

  - You are about to drop the column `customerId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fileName` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_federal_amount` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_federal_percent` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_state_amount` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_state_percent` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax_total` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `method` on the `Receipt` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Receipt` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_receiptId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_vendorId_fkey";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "customerId",
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "itemsId" INTEGER,
ADD COLUMN     "tax_federal_amount" INTEGER NOT NULL,
ADD COLUMN     "tax_federal_percent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tax_state_amount" INTEGER NOT NULL,
ADD COLUMN     "tax_state_percent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tax_total" INTEGER NOT NULL,
ALTER COLUMN "vendorId" DROP NOT NULL,
DROP COLUMN "method",
ADD COLUMN     "method" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "Data" JSONB NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_itemsId_fkey" FOREIGN KEY ("itemsId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
